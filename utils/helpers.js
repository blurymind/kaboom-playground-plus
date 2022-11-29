import {aceEditorSeed, tilemapEditorSeed} from './seed.js'
// Persist GUI state
const updateStorageIndicator= () => {
    navigator.storage.estimate().then(function(estimate) {
        const percentUsed = ((100 * estimate.usage) / estimate.quota).toFixed(0)
        // console.log(`Storage Used: ${estimate.usage} / ${estimate.quota} - ${(100 * estimate.usage) / estimate.quota} %`);
        document.title = `KB+ ${percentUsed} %`
        document.getElementById("storageProgressBar").style.width = `${percentUsed}%`;
        document.getElementById("storageProgressBar").innerHTML = `${percentUsed}%`;
    });
}

updateStorageIndicator();
export const store = JSON.parse(localStorage.getItem('kaboom-playground')) || {editorValue: 'console.log("Hi :)");'};
export const storeSetValue = (key, value) => {
    localStorage.setItem('kaboom-playground', JSON.stringify({...store, [key]: {value}}));
    updateStorageIndicator();
}

export const getValueFromStore = (storeId, failValue = "",valueKey = "") =>{
    console.log("get store val", store)
    if(!valueKey) return store[storeId]?.value || failValue;
    return store[storeId]?.value[valueKey] || failValue;
}

export const setStorage = (id, key, value) =>{
    localStorage.setItem('kaboom-playground', JSON.stringify({...store, [key]: {id, key, value}}));
    updateStorageIndicator();
}
export const saveStateOnElementWhenEvent = (id, event, key, value, setTo) => {
    document.getElementById(id).addEventListener(event, e=>{
        // setStorage(id, key, value, setTo)
        console.log()
        localStorage.setItem('kaboom-playground', JSON.stringify({...store, [key]: {id, event, key, value, setTo}}));
        console.log("saveStateOnElementWhenEvent",store)
        updateStorageIndicator();
    })
}
export const triggerOnElementWhenEvent = (id, event, cb) => {
    document.getElementById(id).addEventListener(event, e=>{
        cb(id);
    })
}
export const loadFromStoreOnStart = () => {
    console.log("loadFromStoreOnStart", store)
    Object.entries(store).forEach(([storedKey, storedValue])=>{
        //console.log("LOAD -- ", storedKey, storedValue)
        const {id, event, key, value, setTo} = storedValue;
        if(id && setTo && document.getElementById(id)) document.getElementById(id)[setTo] = value;
    })
}

export const getMapFromGist = (gistId, cb) => {
    console.log("Trying to get gist", `https://api.github.com/gists/=${gistId}`)
    fetch(`https://api.github.com/gists/${gistId}`).then(blob => blob.json())
        .then(data => {
            let mapFound
            Object.entries(data.files).forEach(([key,val])=>{
                if(!mapFound && key.endsWith(".json")){
                    fetch(val.raw_url).then(blob => blob.json()).then(jsonData=>{
                        mapFound = jsonData;
                        console.log("Got map!", mapFound)
                        cb(mapFound)
                    })
                }
            })
        });
}

//Get imgur gallery from an id  -- example: SjjsjTm
export const getImgurGallery = (album_id, cb) =>{
    const api_key = "a85ae3a537d345f"
    const request_url = "https://api.imgur.com/3/album/" + album_id;
    const requestAlbum = () => {
        const req = new XMLHttpRequest();
        req.onreadystatechange = function() {
            if (req.readyState == 4 && req.status == 200) {
                processRequest(req.responseText);
            } else {
                console.log("Error with Imgur Request.");
            }
        }
        req.open("GET", request_url, true); // true for asynchronous
        req.setRequestHeader("Authorization", "Client-ID " + api_key);
        req.send(null);
    }
    const processRequest = (response_text) => {
        if (response_text == "Not found") {
            console.log("Imgur album not found.");
        } else {
            const json = JSON.parse(response_text);
            console.log("Got images from imgur", json)
            cb(json.data)
        }
    }
    requestAlbum();
}

// upload to imgur, then return the src
export const uploadImageToImgur = (blob) => {
    const formData = new FormData();
    formData.append('type', 'file');
    formData.append('image', blob);
    return fetch('https://api.imgur.com/3/upload.json', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            Authorization: 'Client-ID 1bddacd2afe5039'// imgur specific
        },
        body: formData
    }).then(response =>{
        if (response.status === 200 || response.status === 0) return Promise.resolve(response);
        return Promise.reject(new Error("Error loading image"))
    }).then(response=>response.json())
};

export const kaboomJsExport = ({flattenedData, maps, tileSets, activeMap, downloadAsTextFile}) =>{

    const getTileData = (tileSet, tileSetIdx) => Array.from({length: tileSet.tileCount}, (x, i) => i).map(tile=>{
        const x = tile % tileSet.gridWidth;
        const y = Math.floor(tile / tileSet.gridWidth);
        const tileKey = `${x}-${y}`;

        const tags = Object.keys(tileSet.tags).filter(tagKey => !!tileSet.tags[tagKey]?.tiles[tileKey]);
        return `"${tileSet.tileData[tileKey]?.tileSymbol}": [
          sprite("tileset-${tileSetIdx}", { frame: ${tile}, }),
          ${tags?.join(",")|| ""}
        ],`
    }).join("\n")

    const getAsciiMap = (flattenedDataLayer) => `\n${flattenedDataLayer.map((row,rowIndex) => "'" + row.map(tile => tile.tileSymbol).join("")).join("',\n") + "'"}`;

    const generateMap = flattenedData.map((map, index)=>`
        LEVELS[${map.map}] = [${getAsciiMap(map.flattenedData[map.flattenedData.length - 1])}];
      `).join("\n")
    //old
    const generateLoadSprites = Object.values(tileSets).map((tileSet, tileSetIdx) => `
            loadSprite("tileset-${tileSetIdx}", "${tileSet.src}", {
            sliceX: ${tileSet.gridWidth},
            sliceY: ${tileSet.gridHeight},
        });
      `).join("\n")
    const generateTileSeltsOld = Object.values(tileSets).map((tileSet, tileSetIdx) => `
            const tileset_${tileSetIdx}_data = {
            width: ${tileSet.tileSize},
            height: ${tileSet.tileSize},
            pos: vec2(0, 0),
             ${getTileData(tileSet, tileSetIdx)}
             };
        `).join("\n")
    console.log("TILESETS:: ", {tileSets, flattenedData})
    const kaboomBoiler = `
      ///// Kaboom data generated from tilemap editor -- START
      // Load assets
        // tilesets new
        ${Object.values(tileSets).map((tileSet, tileSetIdx) => `
            loadSpriteAtlas("${tileSet.src}",
                ${Object.entries(tileSet.frames).map(([key,frame])=>{
                    return `
                    "${key}": {
                      "x": 128,
                      "y": 196,
                      "width": 144,
                      "height": 28,
                      "sliceX": ${frame.frameCount},
                      "anims": {
                        ${Object.entries(frame?.animations ?? {}).map(([animKey,animation])=>{
                            return `
                            "${animKey}": {
                              "from": ${animation.start - 1},
                              "to": ${animation.end - 1},
                              "speed": ${animation.speed ?? 1},
                              "loop": ${animation.loop ?? "true"}
                            }`}).join(",\n")}
                            "hit": 8, //Todo custom values
                      }
                    }`}).join(",\n")
                })
        `).join("\n")}
        //TODO
        
   
        // generateLoadSprites
    
              // tilesets old
    
        // generateTileSeltsOld
    
      // maps
      const LEVELS = {};
      
      // maps
  
        // generateMap

     
      scene("game", ({ mapKey }) => { // get tileset index
        const level = addLevel(LEVELS[mapKey], tileset_0_data); //todo tileset data should come from map too
      })

      ///// Kaboom data generated from tilemap editor -- END

      `;
    console.log(kaboomBoiler)
    // return the transformed data in the end
    return kaboomBoiler
};

let tileSetImages = [
    {
        src:"https://i.imgur.com/ztwPZOI.png",
        name: "demo tileset",
        tileSize: 32,
        link: "https://google.com",
        description: `Demo tileset with a very very very very long description that can't barely fit there.
                Still the author decided he has lots to say about the thing and even include a link`
    },
    {
        src: "https://blurymind.github.io/tilemap-editor/free.png"
    }
];


// function throttle(fn, wait) {
//     var time = Date.now();
//     return function() {
//         if ((time + wait - Date.now()) < 0) {
//             fn();
//             time = Date.now();
//         }
//     }
// }

let tileSize = 32;
let mapWidth = 10;
let mapHeight = 10;
let tileMapData = getValueFromStore('tileMapEditorData', tilemapEditorSeed, 'tileMapData');
let tileMapEditorState = getValueFromStore('tileMapEditorData','', 'appState');
console.log({tileMapData})
export const initTilemapEditor = () => {
    if(!tileMapData) return;
    console.log("INIT with", {tileSetImages, tileSize})
    // TODO move this under after parsing url params and get everything from there
    TilemapEditor.init("tileMapEditor",{ // The id of the element that will become the tilemap-editor (must exist in your dom)
        // loads tilemap data which was saved before. undefined will start you with an empty map.
        // Takes a parsed json object with a data struct that tiled-editor can read (an object with maps and tileSets):
        // { maps : {...}, tileSets: {...}}
        tileMapData,//TODO this needs to work without tilemapData (new file)
        // tileSize is used to slice the tileset and give the tilemap the right sized grid
        tileSize,
        // How many tiles is the initial map wide
        mapWidth,
        // How many tiles is the initial map tall
        mapHeight,
        // tileset images [{src (required), description (optional)}]
        tileSetImages,
        appState: tileMapEditorState,
        // You can write your own custom load image function here and use it for the tileset src. If you dont, the base64 string will be used instead
        tileSetLoaders: {
            fromUrl: {
                name: "Any url", // name is required and used for the loader's title in the select menu
                prompt: (setSrc) => { // Pass prompt ot onSelectImage. Prompt lets you do anything without asking the user to select a file
                    const fileUrl = window.prompt("What is the url of the tileset?", "https://i.imgur.com/ztwPZOI.png");
                    if(fileUrl !== null) setSrc(fileUrl)
                }
            },
            imgur: {
                name: "Imgur (host)",
                onSelectImage: (setSrc, file, base64) => { // In case you want them to give you a file from the fs, you can do this instead of prompt
                    uploadImageToImgur(file).then(result=>{
                        console.log(file, base64);
                        console.log("Uploaded to imgur", result);
                        setSrc(result.data.link);
                    });
                },
            },
        },
        // You can write your own tilemap exporters here. Whatever they return will get added to the export data you get out when you trigger onAppy
        tileMapExporters: {
            kaboomJs: { // the exporter's key is later used by the onApply option
              name: "Download KaboomJs boilerplate code", // name of menu entry
              description: "Exports boilerplate js code for KaboomJs",
              transformer: ({flattenedData, maps, tileSets, activeMap, downloadAsTextFile})=> {
                const text = kaboomJsExport({flattenedData, maps, tileSets, activeMap});
                console.log("Kaboom Exporter", text)
                // downloadAsTextFile(text, "KaboomJsMapData.js");// you can use this util method to get your text as a file
              }
            },
        },
        tileMapImporters: {
            //similar to the exporters, you can write your own data importer, which will then be added to the file menu
            // tiledImport: {
            //   name: "Import Tiled json file (TODO)", // name of menu entry
            //   onSelectFiles: (setData, files) => { // callback that is triggered when file(s) are selected.
            //     const readFile = new FileReader();
            //     readFile.onload = (e) => {
            //       const json = JSON.parse(e.target.result);
            //       // At this point we got the json data from the tiled file. We need to convert it into
            //       // a data struct that tiled-editor can read (an object with maps and tileSets):
            //       // { maps : {...}, tileSets: {...}}
            //       alert("Not implemented yet... pr welcome ;)");
            //       return;// TODO tiled json file parser
            //
            //       setData(json); // Finally pass that to the setData function, which will load it into tiled-editor
            //     };
            //     readFile.readAsText(files[0]);
            //   },
            //   acceptFile: "application/JSON" // You can control what files are accepted
            // }
        },
        // If passed, a new button gets added to the header, upon being clicked, you can get data from the tilemap editor and trigger events
        onApply: {
            onClick: ({flattenedData, maps, tileSets, activeMap}) => {
                console.log("onClick, gets the data too")
                const copyText = document.createElement("input");
                document.body.appendChild(copyText);
                copyText.value = kaboomJsExport({flattenedData, maps, tileSets, activeMap});
                copyText.select();
                copyText.setSelectionRange(0, 99999); /* For mobile devices */
                document.execCommand("copy");

                /* Alert the copied text */
                // alert("Copied the text: " + copyText.value);
                // const kbCode = kaboomJsExport({flattenedData, maps, tileSets, activeMap});
            },
            buttonText: "Copy Kb to clip", // controls the apply button's text
        },
        onMouseUp(data, exporters) {
            // storeSetValue('tileMapEditorData', data);
            // console.log( exporters.kaboomJs.getData())
            storeSetValue('tileMapEditorData', data);
        }
    })
}

export const initTileMapUrl = () => {
    if(window.location.href.includes("?")) {
        const urlParams = new URLSearchParams(window.location.href.split("?")[1]);
        const imgur =  urlParams.get("imgur");
        if(imgur){
            getImgurGallery(imgur, data => {
                console.log("ALBUM", data.images)
                // const images = data.images //description and link
                tileSetImages = data.images.map(image=> {
                    let extractedSourceMatch
                    if(image.description && image.description.includes("tileSize:")){
                        const extractedTileSizeMatch = image.description.match(/tileSize\:\s*([0-9]+)/);
                        if(extractedTileSizeMatch && extractedTileSizeMatch.length > 1){
                            tileSize = parseInt(extractedTileSizeMatch[1],10)
                            console.info("set tileSize from description", tileSize)
                            if(tileSize === 8){
                                mapWidth = 20; // Detect map size for a gameboy room
                                mapHeight = 18;
                            }
                        }
                        extractedSourceMatch = image.description.match(/source\:\s*(.*)/);
                    }
                    let extractedTilesetName
                    if(image.description && image.description.includes("name:")){
                        extractedTilesetName = image.description.match(/name\:\s*(.*)/);
                    }
                    return {
                        src: image.link,
                        tileSize,
                        name: extractedTilesetName.length > 1 ? extractedTilesetName[1]: "",
                        description: image.description,
                        link: extractedSourceMatch && extractedSourceMatch.length > 1 ? `https://${extractedSourceMatch[1]}` : `https://imgur.com/a/${imgur}`
                    }
                })
                initTilemapEditor()
            })
        }
        const gist = urlParams.get("gist")
        if(gist){
            getMapFromGist(gist, mapData => {
                tileMapData = mapData;
                initTilemapEditor();
            })
        }
        const tileSizeParam = urlParams.get("tileSize");
        if (tileSizeParam) {
            tileSize = parseInt(tileSizeParam, 10)
        }
    } else {
        initTilemapEditor()
    }
}

export const initPwaLogic = () => {
    // Pwa stuff
    let newWorker;
    function showUpdateBar() {
        let snackbar = document.getElementById('snackbar');
        snackbar.className = 'show';
    }
    // The click event on the pop up notification
    document.getElementById('reload').addEventListener('click', function(){
        newWorker.postMessage({ action: 'skipWaiting' });
    });

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/tilemap-editor/sw.js').then(reg => {
            console.log('Service Worker Registered');
            reg.addEventListener('updatefound', () => {
                // A wild service worker has appeared in reg.installing!
                newWorker = reg.installing;

                newWorker.addEventListener('statechange', () => {
                    // Has network.state changed?
                    switch (newWorker.state) {
                        case 'installed':
                            if (navigator.serviceWorker.controller) {
                                showUpdateBar();
                            }
                            break;
                    }
                });
            });
        });
    }
    let refreshing;
    navigator.serviceWorker.addEventListener('controllerchange', function () {
        if (refreshing) return;
        window.location.reload();
        refreshing = true;
    });

    let deferredPrompt;
    const addBtn = document.getElementById("addPwaBtn");
    addBtn.style.display = 'none';
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        addBtn.style.display = 'block';
        addBtn.addEventListener('click', () => {
            addBtn.style.display = 'none';
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('User accepted the A2HS prompt');
                }
                deferredPrompt = null;
            });
        });
    });
    window.addEventListener('appinstalled', () => {
        addBtn.style.display = 'none';
        deferredPrompt = null;
        console.log('PWA was installed');
    });
}

/////// KABOOM JS

// Todo export feature
export default function genGame(code) {
    return `
<!DOCTYPE html>

<html>

<head>
	<title>kaboom</title>
	<meta charset="utf-8">
	<style>
		* {
			margin: 0;
			padding: 0;
		}
		html,
		body {
			width: 100%;
			height: 100%;
			overflow: hidden;
		}
	</style>
</head>

<body>
	<script src="/lib/dev/kaboom.js"></script>
	<script>
${code}
	</script>
</body>

</html>
	`;
}

const generateResources = (resources = []) => {
    // console.log(resources);
    const resBoilerplate = resources
        .map((resource, index) => {
            if (!resource.file) return '';
            const resourceName = resource.name || index;
            if (resource.file.startsWith('data:image/') || resource.file.endsWith('.png'))
                return `loadSprite("${resourceName}", "${resource.file}");`;
            if (resource.file.startsWith('data:audio/') || resource.file.endsWith('.wav') )
                return `loadSound("${resourceName}", "${resource.file}");`;
            return '';
        })
        .join('\n');
    // console.log('CODE:', resBoilerplate);
    return resBoilerplate;
};
export const genPreview = (code, resources = []) => {
    return `
<!DOCTYPE html>

<html>

<head>
	<title>kaboom</title>
	<meta charset="utf-8">
	<style>
		* {
			margin: 0;
			padding: 0;
		}
		html,
		body {
			width: 100%;
			height: 100%;
			overflow: hidden;
		}
	</style>
</head>

<body>
	<script src="kaboom/kaboom.js"></script>
	<script>

    ${code}
    ${generateResources(resources)}
    
    // Editor util functions
    function pauseGame(){
        if(!debug.paused) debug.paused = true;
	}
    function unPauseGame(){
        if(debug.paused) debug.paused = false;
	}
    // pauseGame()
	</script>
	<canvas id="kaboomCanvas"></canvas>
</body>

</html>
	`;
};

