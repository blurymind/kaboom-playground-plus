// function fireKey(el)
// {
//     var key;
//     switch(el.id)
//     {
//         case "left":
//             key = 37;
//             break;
//         case "right":
//             key = 39;
//             break;
//     }
//     if(document.createEventObject)
//     {
//         var eventObj = document.createEventObject();
//         eventObj.keyCode = key;
//         el.fireEvent("onkeydown", eventObj);
//     }else if(document.createEvent)
//     {
//         var eventObj = document.createEvent("Events");
//         eventObj.initEvent("keydown", true, true);
//         eventObj.which = key;
//         el.dispatchEvent(eventObj);
//     }
// }
//
// function clicked(evt) {
//     var el;
//     if(!evt)
//     {
//         evt = window.event;
//         el = evt.srcElement;
//     }else  if(evt)
//     {
//         el = evt.target;
//     }
//     switch(el.id)
//     {
//         case "left":
//             fireKey(el);
//             break;
//         case "right":
//             fireKey(el);
//             break;
//     }
// }

export class JoyStick {
    constructor({element, style, sensitivity, onInput, onRelease, onDir}) {
        // create canvas
        this.canvas = document.createElement("canvas")
        this.canvas.id = 'joystick'
        element.append(this.canvas)
        this.style = style;
        this.addStyle()

        // joystick parameters
        this.diameter = 300;
        this.stickDiameter = this.diameter / 6
        this.canvas.width = this.diameter
        this.canvas.height = this.diameter
        this.radius = this.diameter / 2
        this.maxRadius = this.radius - this.stickDiameter
        this.maxRadiusSquared = this.maxRadius * this.maxRadius
        this.offset = {
            x: this.canvas.offsetLeft,
            y: this.canvas.offsetTop
        }
        this.sensitivity = sensitivity ?? 0.8;
        this.onInput = onInput;
        this.onRelease = onRelease;
        this.onDir = onDir;

        this.context = this.canvas.getContext('2d')

        function stickShape(x, y, color) {
            var canvas = document.getElementById('joystick')
            this.x = x
            this.y = y
            this.color = color
            var ctx = canvas.getContext('2d')
            this.update = () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height)
                ctx.fillStyle = '#333333'
                ctx.globalAlpha = 0.5
                ctx.beginPath()
                ctx.arc(this.x, this.y, 50, 0, 2 * Math.PI)
                ctx.fill()
            }
        }

        this.onMove = (e) => this.move(e)
        this.onUp = (e) => this.up(e)

        this.stick = new stickShape(this.radius, this.radius, '#333333')
        this.stick.update()
        this.start()
    }

    addStyle() {
        const styleSheet = document.createElement('style')
        styleSheet.type = 'text/css'
        styleSheet.innerText = `
      #joystick {
          --radius: 200px;
          
          height: var(--radius);
          width: var(--radius);
          border-radius: 50%;
          background-color: #80d5ff;
          cursor: all-scroll;
          position: absolute;
          top: calc(100vh - 140px);
          right: calc(100vw - 300px);
          transform: translate(-50%, -50%);
        ${this.style}
      }
    `
        document.body.appendChild(styleSheet)
        document.body.style.touchAction = 'none';
    }

    start() {
        this.canvas.addEventListener('pointerdown', (event) => {
            this.pointer(event)
        })
    }

    pointer() {
        this.canvas.addEventListener('pointermove',this.onMove)
        this.canvas.addEventListener('pointerup', this.onUp)
        this.canvas.addEventListener('pointerOut', this.onUp)
    }

    /**
     * Check if given vector is in circle area
     * @param {number} x pointer x
     * @param {number} y pointer y
     * @param {number} cx circle center point x
     * @param {number} cy circle center point y
     * @param {number} radius radius of circle
     */
    pointInCircle(x, y, cx, cy, radius) {
        var distancesquared = (x - cx) * (x - cx) + (y - cy) * (y - cy)
        return distancesquared <= radius * radius
    }

    fireEvent(x,y){
        const xNorm = x * 0.01;
        const yNorm = y * 0.01;
        const sensitivity = this.sensitivity;

        console.log({x,y,xNorm,yNorm})
        let direction = undefined;
        if(xNorm > sensitivity){ // deadzone
            console.log("MOVING RIGHT")
            direction = "RIGHT";
        }
        if(xNorm < -sensitivity){
            console.log("MOVING LEFT")
            direction = "LEFT";
        }
        if(yNorm > sensitivity){
            console.log("MOVING DOWN")
            direction = "DOWN";
        }
        if(yNorm < -sensitivity){
            console.log("MOVING UP")
            direction = "UP";
        }
        if(direction && this.onDir){
            this.onDir(direction)
        }
        if(this.onInput) {
            this.onInput({x,y,xNorm,yNorm, direction})
        }
    }
    move(event) {
        var angle = this.getAngle(
            {x: this.offset.x, y: this.offset.y},
            {x: event.pageX, y: event.pageY}
        )
        var distance = this.getDistance(
            {x: this.offset.x, y: this.offset.y},
            {x: event.pageX, y: event.pageY}
        )
        let coords = this.calculateCoords(angle, distance)

        this.fireEvent(coords.x, coords.y);
        console.log(coords.x * -0.01, coords.y * -0.01)

        var x = coords.x + this.radius
        var y = coords.y + this.radius

        this.stick.x = x
        this.stick.y = y

        this.stick.update()
    }

    up(event) {
        event.preventDefault()
        this.canvas.removeEventListener('pointermove', this.onMove)
        this.canvas.removeEventListener('pointerup', this.onUp)

        this.stick.globalAlpha = 0.25
        this.stick.x = this.radius
        this.stick.y = this.radius
        this.stick.update()
        if(this.onRelease){
            this.onRelease();
        }
    }

    destroy() {
        this.canvas.remove()
    }

    getDistance(p1, p2) {
        let x = p2.x - p1.x
        let y = p2.y - p1.y
        return Math.sqrt((x * x) + (y * y))
    }

    getAngle(p1, p2) {
        let x = p2.x - p1.x
        let y = p2.y - p1.y
        return Math.atan2(y, x) * 180 / Math.PI
    }

    calculateCoords(angle, distance) {
        var coords = {}
        distance = Math.min(distance, 100)
        var rads = (angle * Math.PI) / 180.0

        coords.x = distance * Math.cos(rads)
        coords.y = distance * Math.sin(rads)

        return coords
    }
}
