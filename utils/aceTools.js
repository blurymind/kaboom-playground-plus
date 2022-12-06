import {typeData} from "./typeData.js";

const autoCompleteWords = Object.values(typeData.types)
    .flatMap(type => type.type.members)
    .map(mem => {
        if (!mem) return '';
        if (mem.kind === 'MethodSignature') {
            return {
                word: `${mem.name}()`,
                title: `${mem.name}(${mem.parameters
                    .map(p => `${p.name}${p.questionToken ? '?' : ''}`)
                    .join(',')})`,
                about: `
                \nkind:${mem.kind}
                \nparameter: ${mem.parameters
                    .map(p => `${p.name} ${p.questionToken ? '(optional)' : ''}`)
                    .join('\nparameter:')}
                `,
            };
        }

        return { name: mem.name, about: mem.kind };
    });
console.log(autoCompleteWords);

function createAutocompleter(
    allowedTokens,
    wordList,
    meta,
    prefixLength = 1
) {
    return {
        getCompletions: function(editor, session, pos, prefix, callback) {
            var token = editor.session.getTokenAt(pos.row, pos.column);
            if (
                prefix.length < prefixLength ||
                (allowedTokens && !allowedTokens.includes(token.type))
            ) {
                callback(null, []);
                return;
            }
            callback(
                null,
                wordList.map(function(word) {
                    if (typeof word === 'object') {
                        return {
                            caption: word.word,
                            value: word.word,
                            meta: meta,
                            title: word.title,
                            about: word.about,
                            titleStyle: word.titleStyle,
                        };
                    }
                    return {
                        caption: word,
                        value: word,
                        meta: meta,
                    };
                })
            );
        },
        getDocTooltip: function(item) {
            if (!item.title && !item.about) return '';
            item.docHTML = [
                `<div class='${item.titleStyle || 'title-style-1'}' style='
            display: flex;
            flex-direction: column; 
            font-size: 0.8rem;
            padding: 3px;'>`,
                '<p>',
                item.title,
                '</p>',
                `<div class='node' style='
            position:relative;
            min-width: 100%;
            overflow: hidden;'>`,
                `<div class='body' style='
             font-size: 0.7rem;
             line-height: 1rem;
             top: 0;
             padding: 3px'>`,
                item.about,
                '</div>',
                '</div>',
                '</div>',
            ].join('');
        },
    };
}
const langTools = ace.require('ace/ext/language_tools');
const kaboomAutoCompleter = createAutocompleter(
    false,
    autoCompleteWords,
    'Kaboomjs'
);

export const setEditorAutoCompleter = (editor) => {
    langTools.setCompleters([
        kaboomAutoCompleter,
        ...editor.completers,
        langTools.keyWordCompleter,
        langTools.textCompleter,
        langTools.snippetCompleter,
    ]);
    editor.completers = [
        // nodeAutocompleter,
        kaboomAutoCompleter,
        ...editor.completers,
    ];
}

var filterHistory = function(deltas) {
    return deltas.filter(function (d) {
        return d.group != "fold";
    });
};

export const sessionToJson = (editor) => {
    return {
        content: editor.getSession().getValue(),
        selection: editor.getSelection().toJSON(),
        options: editor.getOptions(),
        mode: editor.session.getMode().$id,
        scrollTop: editor.session.getScrollTop(),
        scrollLeft: editor.session.getScrollLeft(),
        cursor: editor.getCursorPosition(),
        history: {
            undo: editor.session.getUndoManager().$undoStack.map(filterHistory),
            redo: editor.session.getUndoManager().$undoStack.map(filterHistory)
        },
        folds: editor.session.getAllFolds().map(function(fold) {
            return {
                start       : fold.start,
                end         : fold.end,
                placeholder : fold.placeholder
            };
        })
    }
}

// Thank you stackoverflow :)
const Range = ace.require('ace/range').Range;
export const jsonToSession = (editor, state) => {
    editor.session.setValue(state.content);
    editor.selection.fromJSON(state.selection);
    // editor.session.setOptions(state.options);
    // editor.session.setMode(state.mode);
    editor.session.setScrollTop(state.scrollTop);
    editor.session.setScrollLeft(state.scrollLeft);
    editor.session.$undoManager.$undoStack = state.history.undo;
    editor.session.$undoManager.$redoStack = state.history.redo;
    editor.moveCursorTo(state.cursor.row, state.cursor.column);
    try {
        state.folds.forEach(function(fold) {
            console.log("folds --", fold)
            editor.session.addFold(fold.placeholder, Range.fromPoints(fold.start, fold.end));
        });
    } catch(e) {console.log('Fold exception: ' + e)}

}

export function bufferFunctionCall (func, wait, scope) {
    var timer = null;
    return function() {
        if(timer) clearTimeout(timer);
        var args = arguments;
        timer = setTimeout(function() {
            timer = null;
            func.apply(scope, args);
        }, wait);
    };
}

export function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function() {
        const context = this;
        const args = arguments;
        if (!lastRan) {
            func.apply(context, args)
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function() {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    }
}