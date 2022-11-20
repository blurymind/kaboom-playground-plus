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
