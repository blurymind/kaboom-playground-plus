export const typeData = {
    "types": {
        "KaboomCtx": {
            "kind": "TypeAliasDeclaration",
            "name": "KaboomCtx",
            "type": {
                "kind": "TypeLiteral",
                "members": [
                    {
                        "kind": "MethodSignature",
                        "name": "loadRoot",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "path",
                                "type": {
                                    "kind": "StringKeyword"
                                },
                                "questionToken": true
                            }
                        ],
                        "type": {
                            "kind": "StringKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "loadSprite",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "id",
                                "type": {
                                    "kind": "StringKeyword"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "src",
                                "type": {
                                    "kind": "TypeReference",
                                    "typeName": "SpriteLoadSrc"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "conf",
                                "type": {
                                    "kind": "TypeReference",
                                    "typeName": "SpriteLoadConf"
                                },
                                "questionToken": true
                            }
                        ],
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Promise",
                            "typeArguments": [
                                {
                                    "kind": "TypeReference",
                                    "typeName": "SpriteData"
                                }
                            ]
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "loadSound",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "id",
                                "type": {
                                    "kind": "StringKeyword"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "src",
                                "type": {
                                    "kind": "StringKeyword"
                                }
                            }
                        ],
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Promise",
                            "typeArguments": [
                                {
                                    "kind": "TypeReference",
                                    "typeName": "SoundData"
                                }
                            ]
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "loadFont",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "id",
                                "type": {
                                    "kind": "StringKeyword"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "src",
                                "type": {
                                    "kind": "StringKeyword"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "gw",
                                "type": {
                                    "kind": "NumberKeyword"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "gh",
                                "type": {
                                    "kind": "NumberKeyword"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "chars",
                                "type": {
                                    "kind": "StringKeyword"
                                },
                                "questionToken": true
                            }
                        ],
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Promise",
                            "typeArguments": [
                                {
                                    "kind": "TypeReference",
                                    "typeName": "FontData"
                                }
                            ]
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "loadShader",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "name",
                                "type": {
                                    "kind": "StringKeyword"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "vert",
                                "type": {
                                    "kind": "StringKeyword"
                                },
                                "questionToken": true
                            },
                            {
                                "kind": "Parameter",
                                "name": "frag",
                                "type": {
                                    "kind": "StringKeyword"
                                },
                                "questionToken": true
                            },
                            {
                                "kind": "Parameter",
                                "name": "isUrl",
                                "type": {
                                    "kind": "BooleanKeyword"
                                },
                                "questionToken": true
                            }
                        ],
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Promise",
                            "typeArguments": [
                                {
                                    "kind": "TypeReference",
                                    "typeName": "ShaderData"
                                }
                            ]
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "addLoader",
                        "typeParameters": [
                            {
                                "kind": "TypeParameter",
                                "name": "T"
                            }
                        ],
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "l",
                                "type": {
                                    "kind": "TypeReference",
                                    "typeName": "Promise",
                                    "typeArguments": [
                                        {
                                            "kind": "TypeReference",
                                            "typeName": "T"
                                        }
                                    ]
                                }
                            }
                        ],
                        "type": {
                            "kind": "VoidKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "start",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "scene",
                                "type": {
                                    "kind": "StringKeyword"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "args",
                                "dotDotDotToken": {
                                    "kind": "DotDotDotToken"
                                }
                            }
                        ],
                        "type": {
                            "kind": "VoidKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "scene",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "name",
                                "type": {
                                    "kind": "StringKeyword"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "cb",
                                "type": {
                                    "kind": "FunctionType",
                                    "parameters": [
                                        {
                                            "kind": "Parameter",
                                            "name": "args",
                                            "dotDotDotToken": {
                                                "kind": "DotDotDotToken"
                                            }
                                        }
                                    ],
                                    "type": {
                                        "kind": "VoidKeyword"
                                    }
                                }
                            }
                        ],
                        "type": {
                            "kind": "VoidKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "go",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "name",
                                "type": {
                                    "kind": "StringKeyword"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "args",
                                "dotDotDotToken": {
                                    "kind": "DotDotDotToken"
                                }
                            }
                        ],
                        "type": {
                            "kind": "VoidKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "width",
                        "parameters": [],
                        "type": {
                            "kind": "NumberKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "height",
                        "parameters": [],
                        "type": {
                            "kind": "NumberKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "dt",
                        "parameters": [],
                        "type": {
                            "kind": "NumberKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "time",
                        "parameters": [],
                        "type": {
                            "kind": "NumberKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "screenshot",
                        "parameters": [],
                        "type": {
                            "kind": "StringKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "add",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "comps",
                                "type": {
                                    "kind": "ArrayType",
                                    "elementType": {
                                        "kind": "TypeReference",
                                        "typeName": "Comp"
                                    }
                                }
                            }
                        ],
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "GameObj"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "readd",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "obj",
                                "type": {
                                    "kind": "TypeReference",
                                    "typeName": "GameObj"
                                }
                            }
                        ],
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "GameObj"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "destroy",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "obj",
                                "type": {
                                    "kind": "TypeReference",
                                    "typeName": "GameObj"
                                }
                            }
                        ],
                        "type": {
                            "kind": "VoidKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "destroyAll",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "tag",
                                "type": {
                                    "kind": "StringKeyword"
                                }
                            }
                        ],
                        "type": {
                            "kind": "VoidKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "get",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "tag",
                                "type": {
                                    "kind": "StringKeyword"
                                },
                                "questionToken": true
                            }
                        ],
                        "type": {
                            "kind": "ArrayType",
                            "elementType": {
                                "kind": "TypeReference",
                                "typeName": "GameObj"
                            }
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "every",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "t",
                                "type": {
                                    "kind": "StringKeyword"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "f",
                                "type": {
                                    "kind": "FunctionType",
                                    "parameters": [
                                        {
                                            "kind": "Parameter",
                                            "name": "obj",
                                            "type": {
                                                "kind": "TypeReference",
                                                "typeName": "GameObj"
                                            }
                                        }
                                    ],
                                    "type": {
                                        "kind": "VoidKeyword"
                                    }
                                }
                            }
                        ],
                        "type": {
                            "kind": "VoidKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "every",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "f",
                                "type": {
                                    "kind": "FunctionType",
                                    "parameters": [
                                        {
                                            "kind": "Parameter",
                                            "name": "obj",
                                            "type": {
                                                "kind": "TypeReference",
                                                "typeName": "GameObj"
                                            }
                                        }
                                    ],
                                    "type": {
                                        "kind": "VoidKeyword"
                                    }
                                }
                            }
                        ],
                        "type": {
                            "kind": "VoidKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "revery",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "t",
                                "type": {
                                    "kind": "StringKeyword"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "f",
                                "type": {
                                    "kind": "FunctionType",
                                    "parameters": [
                                        {
                                            "kind": "Parameter",
                                            "name": "obj",
                                            "type": {
                                                "kind": "TypeReference",
                                                "typeName": "GameObj"
                                            }
                                        }
                                    ],
                                    "type": {
                                        "kind": "VoidKeyword"
                                    }
                                }
                            }
                        ],
                        "type": {
                            "kind": "VoidKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "revery",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "f",
                                "type": {
                                    "kind": "FunctionType",
                                    "parameters": [
                                        {
                                            "kind": "Parameter",
                                            "name": "obj",
                                            "type": {
                                                "kind": "TypeReference",
                                                "typeName": "GameObj"
                                            }
                                        }
                                    ],
                                    "type": {
                                        "kind": "VoidKeyword"
                                    }
                                }
                            }
                        ],
                        "type": {
                            "kind": "VoidKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "layers",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "list",
                                "type": {
                                    "kind": "ArrayType",
                                    "elementType": {
                                        "kind": "StringKeyword"
                                    }
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "def",
                                "type": {
                                    "kind": "StringKeyword"
                                },
                                "questionToken": true
                            }
                        ],
                        "type": {
                            "kind": "VoidKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "on",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "event",
                                "type": {
                                    "kind": "StringKeyword"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "tag",
                                "type": {
                                    "kind": "StringKeyword"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "cb",
                                "type": {
                                    "kind": "FunctionType",
                                    "parameters": [
                                        {
                                            "kind": "Parameter",
                                            "name": "obj",
                                            "type": {
                                                "kind": "TypeReference",
                                                "typeName": "GameObj"
                                            }
                                        }
                                    ],
                                    "type": {
                                        "kind": "VoidKeyword"
                                    }
                                }
                            }
                        ],
                        "type": {
                            "kind": "VoidKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "action",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "tag",
                                "type": {
                                    "kind": "StringKeyword"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "cb",
                                "type": {
                                    "kind": "FunctionType",
                                    "parameters": [
                                        {
                                            "kind": "Parameter",
                                            "name": "obj",
                                            "type": {
                                                "kind": "TypeReference",
                                                "typeName": "GameObj"
                                            }
                                        }
                                    ],
                                    "type": {
                                        "kind": "VoidKeyword"
                                    }
                                }
                            }
                        ],
                        "type": {
                            "kind": "VoidKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "action",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "cb",
                                "type": {
                                    "kind": "FunctionType",
                                    "parameters": [],
                                    "type": {
                                        "kind": "VoidKeyword"
                                    }
                                }
                            }
                        ],
                        "type": {
                            "kind": "VoidKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "render",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "tag",
                                "type": {
                                    "kind": "StringKeyword"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "cb",
                                "type": {
                                    "kind": "FunctionType",
                                    "parameters": [
                                        {
                                            "kind": "Parameter",
                                            "name": "obj",
                                            "type": {
                                                "kind": "TypeReference",
                                                "typeName": "GameObj"
                                            }
                                        }
                                    ],
                                    "type": {
                                        "kind": "VoidKeyword"
                                    }
                                }
                            }
                        ],
                        "type": {
                            "kind": "VoidKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "render",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "cb",
                                "type": {
                                    "kind": "FunctionType",
                                    "parameters": [],
                                    "type": {
                                        "kind": "VoidKeyword"
                                    }
                                }
                            }
                        ],
                        "type": {
                            "kind": "VoidKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "collides",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "t1",
                                "type": {
                                    "kind": "StringKeyword"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "t2",
                                "type": {
                                    "kind": "StringKeyword"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "f",
                                "type": {
                                    "kind": "FunctionType",
                                    "parameters": [
                                        {
                                            "kind": "Parameter",
                                            "name": "a",
                                            "type": {
                                                "kind": "TypeReference",
                                                "typeName": "GameObj"
                                            }
                                        },
                                        {
                                            "kind": "Parameter",
                                            "name": "b",
                                            "type": {
                                                "kind": "TypeReference",
                                                "typeName": "GameObj"
                                            }
                                        }
                                    ],
                                    "type": {
                                        "kind": "VoidKeyword"
                                    }
                                }
                            }
                        ],
                        "type": {
                            "kind": "VoidKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "overlaps",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "t1",
                                "type": {
                                    "kind": "StringKeyword"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "t2",
                                "type": {
                                    "kind": "StringKeyword"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "f",
                                "type": {
                                    "kind": "FunctionType",
                                    "parameters": [
                                        {
                                            "kind": "Parameter",
                                            "name": "a",
                                            "type": {
                                                "kind": "TypeReference",
                                                "typeName": "GameObj"
                                            }
                                        },
                                        {
                                            "kind": "Parameter",
                                            "name": "b",
                                            "type": {
                                                "kind": "TypeReference",
                                                "typeName": "GameObj"
                                            }
                                        }
                                    ],
                                    "type": {
                                        "kind": "VoidKeyword"
                                    }
                                }
                            }
                        ],
                        "type": {
                            "kind": "VoidKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "clicks",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "tag",
                                "type": {
                                    "kind": "StringKeyword"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "f",
                                "type": {
                                    "kind": "FunctionType",
                                    "parameters": [
                                        {
                                            "kind": "Parameter",
                                            "name": "a",
                                            "type": {
                                                "kind": "TypeReference",
                                                "typeName": "GameObj"
                                            }
                                        }
                                    ],
                                    "type": {
                                        "kind": "VoidKeyword"
                                    }
                                }
                            }
                        ],
                        "type": {
                            "kind": "VoidKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "camPos",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "p",
                                "type": {
                                    "kind": "TypeReference",
                                    "typeName": "Vec2"
                                }
                            }
                        ],
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Vec2"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "camScale",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "p",
                                "type": {
                                    "kind": "TypeReference",
                                    "typeName": "Vec2"
                                }
                            }
                        ],
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Vec2"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "camRot",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "a",
                                "type": {
                                    "kind": "NumberKeyword"
                                }
                            }
                        ],
                        "type": {
                            "kind": "NumberKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "camShake",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "n",
                                "type": {
                                    "kind": "NumberKeyword"
                                }
                            }
                        ],
                        "type": {
                            "kind": "VoidKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "camIgnore",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "layers",
                                "type": {
                                    "kind": "ArrayType",
                                    "elementType": {
                                        "kind": "StringKeyword"
                                    }
                                }
                            }
                        ],
                        "type": {
                            "kind": "VoidKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "gravity",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "g",
                                "type": {
                                    "kind": "NumberKeyword"
                                }
                            }
                        ],
                        "type": {
                            "kind": "NumberKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "defComp",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "id",
                                "type": {
                                    "kind": "TypeReference",
                                    "typeName": "CompID"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "requires",
                                "type": {
                                    "kind": "ArrayType",
                                    "elementType": {
                                        "kind": "TypeReference",
                                        "typeName": "CompID"
                                    }
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "cb",
                                "type": {
                                    "kind": "TypeReference",
                                    "typeName": "CompBuilder"
                                }
                            }
                        ],
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "CompBuilder"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "sceneData",
                        "parameters": [],
                        "type": {
                            "kind": "AnyKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "recv",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "ty",
                                "type": {
                                    "kind": "StringKeyword"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "handler",
                                "type": {
                                    "kind": "TypeReference",
                                    "typeName": "MsgHandler"
                                }
                            }
                        ],
                        "type": {
                            "kind": "VoidKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "send",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "ty",
                                "type": {
                                    "kind": "StringKeyword"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "data",
                                "type": {
                                    "kind": "AnyKeyword"
                                }
                            }
                        ],
                        "type": {
                            "kind": "VoidKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "pos",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "x",
                                "type": {
                                    "kind": "NumberKeyword"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "y",
                                "type": {
                                    "kind": "NumberKeyword"
                                }
                            }
                        ],
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "PosComp"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "pos",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "xy",
                                "type": {
                                    "kind": "NumberKeyword"
                                }
                            }
                        ],
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "PosComp"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "pos",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "p",
                                "type": {
                                    "kind": "TypeReference",
                                    "typeName": "Vec2"
                                }
                            }
                        ],
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "PosComp"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "pos",
                        "parameters": [],
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "PosComp"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "scale",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "x",
                                "type": {
                                    "kind": "NumberKeyword"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "y",
                                "type": {
                                    "kind": "NumberKeyword"
                                }
                            }
                        ],
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "ScaleComp"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "scale",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "xy",
                                "type": {
                                    "kind": "NumberKeyword"
                                }
                            }
                        ],
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "ScaleComp"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "scale",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "p",
                                "type": {
                                    "kind": "TypeReference",
                                    "typeName": "Vec2"
                                }
                            }
                        ],
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "ScaleComp"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "scale",
                        "parameters": [],
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "ScaleComp"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "rotate",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "a",
                                "type": {
                                    "kind": "NumberKeyword"
                                }
                            }
                        ],
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "RotateComp"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "color",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "r",
                                "type": {
                                    "kind": "NumberKeyword"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "g",
                                "type": {
                                    "kind": "NumberKeyword"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "b",
                                "type": {
                                    "kind": "NumberKeyword"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "a",
                                "type": {
                                    "kind": "NumberKeyword"
                                },
                                "questionToken": true
                            }
                        ],
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "ColorComp"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "color",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "c",
                                "type": {
                                    "kind": "TypeReference",
                                    "typeName": "Color"
                                }
                            }
                        ],
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "ColorComp"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "color",
                        "parameters": [],
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "ColorComp"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "origin",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "o",
                                "type": {
                                    "kind": "UnionType",
                                    "types": [
                                        {
                                            "kind": "TypeReference",
                                            "typeName": "Origin"
                                        },
                                        {
                                            "kind": "TypeReference",
                                            "typeName": "Vec2"
                                        }
                                    ]
                                }
                            }
                        ],
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "OriginComp"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "layer",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "l",
                                "type": {
                                    "kind": "StringKeyword"
                                }
                            }
                        ],
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "LayerComp"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "area",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "p1",
                                "type": {
                                    "kind": "TypeReference",
                                    "typeName": "Vec2"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "p2",
                                "type": {
                                    "kind": "TypeReference",
                                    "typeName": "Vec2"
                                }
                            }
                        ],
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "AreaComp"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "sprite",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "id",
                                "type": {
                                    "kind": "StringKeyword"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "conf",
                                "type": {
                                    "kind": "TypeReference",
                                    "typeName": "SpriteCompConf"
                                },
                                "questionToken": true
                            }
                        ],
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "SpriteComp"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "text",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "t",
                                "type": {
                                    "kind": "StringKeyword"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "size",
                                "type": {
                                    "kind": "NumberKeyword"
                                },
                                "questionToken": true
                            },
                            {
                                "kind": "Parameter",
                                "name": "conf",
                                "type": {
                                    "kind": "TypeReference",
                                    "typeName": "TextCompConf"
                                },
                                "questionToken": true
                            }
                        ],
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "TextComp"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "rect",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "w",
                                "type": {
                                    "kind": "NumberKeyword"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "h",
                                "type": {
                                    "kind": "NumberKeyword"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "conf",
                                "type": {
                                    "kind": "TypeReference",
                                    "typeName": "RectCompConf"
                                },
                                "questionToken": true
                            }
                        ],
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "RectComp"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "solid",
                        "parameters": [],
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "SolidComp"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "body",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "conf",
                                "type": {
                                    "kind": "TypeReference",
                                    "typeName": "BodyCompConf"
                                },
                                "questionToken": true
                            }
                        ],
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "BodyComp"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "shader",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "id",
                                "type": {
                                    "kind": "StringKeyword"
                                }
                            }
                        ],
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "ShaderComp"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "cursor",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "c",
                                "type": {
                                    "kind": "StringKeyword"
                                },
                                "questionToken": true
                            }
                        ],
                        "type": {
                            "kind": "VoidKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "mousePos",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "layer",
                                "type": {
                                    "kind": "StringKeyword"
                                },
                                "questionToken": true
                            }
                        ],
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Vec2"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "keyDown",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "k",
                                "type": {
                                    "kind": "StringKeyword"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "f",
                                "type": {
                                    "kind": "FunctionType",
                                    "parameters": [],
                                    "type": {
                                        "kind": "VoidKeyword"
                                    }
                                }
                            }
                        ],
                        "type": {
                            "kind": "VoidKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "keyPress",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "k",
                                "type": {
                                    "kind": "StringKeyword"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "f",
                                "type": {
                                    "kind": "FunctionType",
                                    "parameters": [],
                                    "type": {
                                        "kind": "VoidKeyword"
                                    }
                                }
                            }
                        ],
                        "type": {
                            "kind": "VoidKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "keyPressRep",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "k",
                                "type": {
                                    "kind": "StringKeyword"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "f",
                                "type": {
                                    "kind": "FunctionType",
                                    "parameters": [],
                                    "type": {
                                        "kind": "VoidKeyword"
                                    }
                                }
                            }
                        ],
                        "type": {
                            "kind": "VoidKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "keyRelease",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "k",
                                "type": {
                                    "kind": "StringKeyword"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "f",
                                "type": {
                                    "kind": "FunctionType",
                                    "parameters": [],
                                    "type": {
                                        "kind": "VoidKeyword"
                                    }
                                }
                            }
                        ],
                        "type": {
                            "kind": "VoidKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "charInput",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "f",
                                "type": {
                                    "kind": "FunctionType",
                                    "parameters": [
                                        {
                                            "kind": "Parameter",
                                            "name": "ch",
                                            "type": {
                                                "kind": "StringKeyword"
                                            }
                                        }
                                    ],
                                    "type": {
                                        "kind": "VoidKeyword"
                                    }
                                }
                            }
                        ],
                        "type": {
                            "kind": "VoidKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "mouseDown",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "f",
                                "type": {
                                    "kind": "FunctionType",
                                    "parameters": [],
                                    "type": {
                                        "kind": "VoidKeyword"
                                    }
                                }
                            }
                        ],
                        "type": {
                            "kind": "VoidKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "mouseClick",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "f",
                                "type": {
                                    "kind": "FunctionType",
                                    "parameters": [],
                                    "type": {
                                        "kind": "VoidKeyword"
                                    }
                                }
                            }
                        ],
                        "type": {
                            "kind": "VoidKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "mouseRelease",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "f",
                                "type": {
                                    "kind": "FunctionType",
                                    "parameters": [],
                                    "type": {
                                        "kind": "VoidKeyword"
                                    }
                                }
                            }
                        ],
                        "type": {
                            "kind": "VoidKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "keyIsDown",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "k",
                                "type": {
                                    "kind": "StringKeyword"
                                }
                            }
                        ],
                        "type": {
                            "kind": "BooleanKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "keyIsPressed",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "k",
                                "type": {
                                    "kind": "StringKeyword"
                                }
                            }
                        ],
                        "type": {
                            "kind": "BooleanKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "keyIsPressedRep",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "k",
                                "type": {
                                    "kind": "StringKeyword"
                                }
                            }
                        ],
                        "type": {
                            "kind": "BooleanKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "keyIsReleased",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "k",
                                "type": {
                                    "kind": "StringKeyword"
                                }
                            }
                        ],
                        "type": {
                            "kind": "BooleanKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "mouseIsDown",
                        "parameters": [],
                        "type": {
                            "kind": "BooleanKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "mouseIsClicked",
                        "parameters": [],
                        "type": {
                            "kind": "BooleanKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "mouseIsReleased",
                        "parameters": [],
                        "type": {
                            "kind": "BooleanKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "loop",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "t",
                                "type": {
                                    "kind": "NumberKeyword"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "f",
                                "type": {
                                    "kind": "FunctionType",
                                    "parameters": [],
                                    "type": {
                                        "kind": "VoidKeyword"
                                    }
                                }
                            }
                        ],
                        "type": {
                            "kind": "VoidKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "wait",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "t",
                                "type": {
                                    "kind": "NumberKeyword"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "f",
                                "type": {
                                    "kind": "FunctionType",
                                    "parameters": [],
                                    "type": {
                                        "kind": "VoidKeyword"
                                    }
                                },
                                "questionToken": true
                            }
                        ],
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Promise",
                            "typeArguments": [
                                {
                                    "kind": "VoidKeyword"
                                }
                            ]
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "play",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "id",
                                "type": {
                                    "kind": "StringKeyword"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "conf",
                                "type": {
                                    "kind": "TypeReference",
                                    "typeName": "AudioPlayConf"
                                },
                                "questionToken": true
                            }
                        ],
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "AudioPlay"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "volume",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "v",
                                "type": {
                                    "kind": "NumberKeyword"
                                },
                                "questionToken": true
                            }
                        ],
                        "type": {
                            "kind": "NumberKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "makeRng",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "seed",
                                "type": {
                                    "kind": "NumberKeyword"
                                }
                            }
                        ],
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "RNG"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "rand",
                        "parameters": [],
                        "type": {
                            "kind": "NumberKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "rand",
                        "typeParameters": [
                            {
                                "kind": "TypeParameter",
                                "name": "T",
                                "constraint": {
                                    "kind": "TypeReference",
                                    "typeName": "RNGValue"
                                }
                            }
                        ],
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "n",
                                "type": {
                                    "kind": "TypeReference",
                                    "typeName": "T"
                                }
                            }
                        ],
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "T"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "rand",
                        "typeParameters": [
                            {
                                "kind": "TypeParameter",
                                "name": "T",
                                "constraint": {
                                    "kind": "TypeReference",
                                    "typeName": "RNGValue"
                                }
                            }
                        ],
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "a",
                                "type": {
                                    "kind": "TypeReference",
                                    "typeName": "T"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "b",
                                "type": {
                                    "kind": "TypeReference",
                                    "typeName": "T"
                                }
                            }
                        ],
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "T"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "randSeed",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "seed",
                                "type": {
                                    "kind": "NumberKeyword"
                                }
                            }
                        ],
                        "type": {
                            "kind": "VoidKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "vec2",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "x",
                                "type": {
                                    "kind": "NumberKeyword"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "y",
                                "type": {
                                    "kind": "NumberKeyword"
                                }
                            }
                        ],
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Vec2"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "vec2",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "p",
                                "type": {
                                    "kind": "TypeReference",
                                    "typeName": "Vec2"
                                }
                            }
                        ],
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Vec2"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "vec2",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "xy",
                                "type": {
                                    "kind": "NumberKeyword"
                                }
                            }
                        ],
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Vec2"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "vec2",
                        "parameters": [],
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Vec2"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "rgb",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "r",
                                "type": {
                                    "kind": "NumberKeyword"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "g",
                                "type": {
                                    "kind": "NumberKeyword"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "b",
                                "type": {
                                    "kind": "NumberKeyword"
                                }
                            }
                        ],
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Color"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "rgba",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "r",
                                "type": {
                                    "kind": "NumberKeyword"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "g",
                                "type": {
                                    "kind": "NumberKeyword"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "b",
                                "type": {
                                    "kind": "NumberKeyword"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "a",
                                "type": {
                                    "kind": "NumberKeyword"
                                }
                            }
                        ],
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Color"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "quad",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "x",
                                "type": {
                                    "kind": "NumberKeyword"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "y",
                                "type": {
                                    "kind": "NumberKeyword"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "w",
                                "type": {
                                    "kind": "NumberKeyword"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "h",
                                "type": {
                                    "kind": "NumberKeyword"
                                }
                            }
                        ],
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Quad"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "choose",
                        "typeParameters": [
                            {
                                "kind": "TypeParameter",
                                "name": "T"
                            }
                        ],
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "lst",
                                "type": {
                                    "kind": "ArrayType",
                                    "elementType": {
                                        "kind": "TypeReference",
                                        "typeName": "T"
                                    }
                                }
                            }
                        ],
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "T"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "chance",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "p",
                                "type": {
                                    "kind": "NumberKeyword"
                                }
                            }
                        ],
                        "type": {
                            "kind": "BooleanKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "lerp",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "from",
                                "type": {
                                    "kind": "NumberKeyword"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "to",
                                "type": {
                                    "kind": "NumberKeyword"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "t",
                                "type": {
                                    "kind": "NumberKeyword"
                                }
                            }
                        ],
                        "type": {
                            "kind": "NumberKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "map",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "v",
                                "type": {
                                    "kind": "NumberKeyword"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "l1",
                                "type": {
                                    "kind": "NumberKeyword"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "h1",
                                "type": {
                                    "kind": "NumberKeyword"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "l2",
                                "type": {
                                    "kind": "NumberKeyword"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "h2",
                                "type": {
                                    "kind": "NumberKeyword"
                                }
                            }
                        ],
                        "type": {
                            "kind": "NumberKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "mapc",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "v",
                                "type": {
                                    "kind": "NumberKeyword"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "l1",
                                "type": {
                                    "kind": "NumberKeyword"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "h1",
                                "type": {
                                    "kind": "NumberKeyword"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "l2",
                                "type": {
                                    "kind": "NumberKeyword"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "h2",
                                "type": {
                                    "kind": "NumberKeyword"
                                }
                            }
                        ],
                        "type": {
                            "kind": "NumberKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "wave",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "lo",
                                "type": {
                                    "kind": "NumberKeyword"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "hi",
                                "type": {
                                    "kind": "NumberKeyword"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "t",
                                "type": {
                                    "kind": "NumberKeyword"
                                }
                            }
                        ],
                        "type": {
                            "kind": "NumberKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "deg2rad",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "deg",
                                "type": {
                                    "kind": "NumberKeyword"
                                }
                            }
                        ],
                        "type": {
                            "kind": "NumberKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "rad2deg",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "rad",
                                "type": {
                                    "kind": "NumberKeyword"
                                }
                            }
                        ],
                        "type": {
                            "kind": "NumberKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "drawSprite",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "id",
                                "type": {
                                    "kind": "UnionType",
                                    "types": [
                                        {
                                            "kind": "StringKeyword"
                                        },
                                        {
                                            "kind": "TypeReference",
                                            "typeName": "SpriteData"
                                        }
                                    ]
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "conf",
                                "type": {
                                    "kind": "TypeReference",
                                    "typeName": "DrawSpriteConf"
                                },
                                "questionToken": true
                            }
                        ],
                        "type": {
                            "kind": "VoidKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "drawText",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "txt",
                                "type": {
                                    "kind": "StringKeyword"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "conf",
                                "type": {
                                    "kind": "TypeLiteral",
                                    "members": []
                                },
                                "questionToken": true
                            }
                        ],
                        "type": {
                            "kind": "VoidKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "drawRect",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "pos",
                                "type": {
                                    "kind": "TypeReference",
                                    "typeName": "Vec2"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "w",
                                "type": {
                                    "kind": "NumberKeyword"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "h",
                                "type": {
                                    "kind": "NumberKeyword"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "conf",
                                "type": {
                                    "kind": "TypeReference",
                                    "typeName": "DrawRectConf"
                                },
                                "questionToken": true
                            }
                        ],
                        "type": {
                            "kind": "VoidKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "drawRectStroke",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "pos",
                                "type": {
                                    "kind": "TypeReference",
                                    "typeName": "Vec2"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "w",
                                "type": {
                                    "kind": "NumberKeyword"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "h",
                                "type": {
                                    "kind": "NumberKeyword"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "conf",
                                "type": {
                                    "kind": "TypeReference",
                                    "typeName": "DrawRectStrokeConf"
                                },
                                "questionToken": true
                            }
                        ],
                        "type": {
                            "kind": "VoidKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "drawLine",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "p1",
                                "type": {
                                    "kind": "TypeReference",
                                    "typeName": "Vec2"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "p2",
                                "type": {
                                    "kind": "TypeReference",
                                    "typeName": "Vec2"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "conf",
                                "type": {
                                    "kind": "TypeReference",
                                    "typeName": "DrawLineConf"
                                },
                                "questionToken": true
                            }
                        ],
                        "type": {
                            "kind": "VoidKeyword"
                        }
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "debug",
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Debug"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "addLevel",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "map",
                                "type": {
                                    "kind": "ArrayType",
                                    "elementType": {
                                        "kind": "StringKeyword"
                                    }
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "conf",
                                "type": {
                                    "kind": "TypeReference",
                                    "typeName": "LevelConf"
                                }
                            }
                        ],
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Level"
                        }
                    }
                ]
            }
        },
        "KaboomConf": {
            "kind": "TypeAliasDeclaration",
            "name": "KaboomConf",
            "type": {
                "kind": "TypeLiteral",
                "members": [
                    {
                        "kind": "PropertySignature",
                        "name": "width",
                        "type": {
                            "kind": "NumberKeyword"
                        },
                        "questionToken": true
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "height",
                        "type": {
                            "kind": "NumberKeyword"
                        },
                        "questionToken": true
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "scale",
                        "type": {
                            "kind": "NumberKeyword"
                        },
                        "questionToken": true
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "fullscreen",
                        "type": {
                            "kind": "BooleanKeyword"
                        },
                        "questionToken": true
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "debug",
                        "type": {
                            "kind": "BooleanKeyword"
                        },
                        "questionToken": true
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "crisp",
                        "type": {
                            "kind": "BooleanKeyword"
                        },
                        "questionToken": true
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "canvas",
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "HTMLCanvasElement"
                        },
                        "questionToken": true
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "root",
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "HTMLElement"
                        },
                        "questionToken": true
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "clearColor",
                        "type": {
                            "kind": "ArrayType",
                            "elementType": {
                                "kind": "NumberKeyword"
                            }
                        },
                        "questionToken": true
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "inspectColor",
                        "type": {
                            "kind": "ArrayType",
                            "elementType": {
                                "kind": "NumberKeyword"
                            }
                        },
                        "questionToken": true
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "texFilter",
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "TexFilter"
                        },
                        "questionToken": true
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "logMax",
                        "type": {
                            "kind": "NumberKeyword"
                        },
                        "questionToken": true
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "connect",
                        "type": {
                            "kind": "StringKeyword"
                        },
                        "questionToken": true
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "global",
                        "type": {
                            "kind": "BooleanKeyword"
                        },
                        "questionToken": true
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "plugins",
                        "type": {
                            "kind": "ArrayType",
                            "elementType": {
                                "kind": "TypeReference",
                                "typeName": "KaboomPlugin"
                            }
                        },
                        "questionToken": true
                    }
                ]
            }
        },
        "GameObj": {
            "kind": "TypeAliasDeclaration",
            "name": "GameObj",
            "type": {
                "kind": "TypeLiteral",
                "members": [
                    {
                        "kind": "PropertySignature",
                        "name": "hidden",
                        "type": {
                            "kind": "BooleanKeyword"
                        }
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "paused",
                        "type": {
                            "kind": "BooleanKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "exists",
                        "parameters": [],
                        "type": {
                            "kind": "BooleanKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "is",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "tag",
                                "type": {
                                    "kind": "UnionType",
                                    "types": [
                                        {
                                            "kind": "StringKeyword"
                                        },
                                        {
                                            "kind": "ArrayType",
                                            "elementType": {
                                                "kind": "StringKeyword"
                                            }
                                        }
                                    ]
                                }
                            }
                        ],
                        "type": {
                            "kind": "BooleanKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "use",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "comp",
                                "type": {
                                    "kind": "TypeReference",
                                    "typeName": "Comp"
                                }
                            }
                        ],
                        "type": {
                            "kind": "VoidKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "action",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "cb",
                                "type": {
                                    "kind": "FunctionType",
                                    "parameters": [],
                                    "type": {
                                        "kind": "VoidKeyword"
                                    }
                                }
                            }
                        ],
                        "type": {
                            "kind": "VoidKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "on",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "ev",
                                "type": {
                                    "kind": "StringKeyword"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "cb",
                                "type": {
                                    "kind": "FunctionType",
                                    "parameters": [],
                                    "type": {
                                        "kind": "VoidKeyword"
                                    }
                                }
                            }
                        ],
                        "type": {
                            "kind": "VoidKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "trigger",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "ev",
                                "type": {
                                    "kind": "StringKeyword"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "args",
                                "dotDotDotToken": {
                                    "kind": "DotDotDotToken"
                                }
                            }
                        ],
                        "type": {
                            "kind": "VoidKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "rmTag",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "t",
                                "type": {
                                    "kind": "StringKeyword"
                                }
                            }
                        ],
                        "type": {
                            "kind": "VoidKeyword"
                        }
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "_id",
                        "type": {
                            "kind": "UnionType",
                            "types": [
                                {
                                    "kind": "TypeReference",
                                    "typeName": "GameObjID"
                                },
                                {
                                    "kind": "LiteralType",
                                    "literal": {
                                        "kind": "NullKeyword"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "_tags",
                        "type": {
                            "kind": "ArrayType",
                            "elementType": {
                                "kind": "StringKeyword"
                            }
                        }
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "_events",
                        "type": {
                            "kind": "TypeLiteral",
                            "members": [
                                {
                                    "kind": "PropertySignature",
                                    "name": "add",
                                    "type": {
                                        "kind": "ArrayType",
                                        "elementType": {
                                            "kind": "ParenthesizedType",
                                            "type": {
                                                "kind": "FunctionType",
                                                "parameters": [],
                                                "type": {
                                                    "kind": "VoidKeyword"
                                                }
                                            }
                                        }
                                    }
                                },
                                {
                                    "kind": "PropertySignature",
                                    "name": "update",
                                    "type": {
                                        "kind": "ArrayType",
                                        "elementType": {
                                            "kind": "ParenthesizedType",
                                            "type": {
                                                "kind": "FunctionType",
                                                "parameters": [],
                                                "type": {
                                                    "kind": "VoidKeyword"
                                                }
                                            }
                                        }
                                    }
                                },
                                {
                                    "kind": "PropertySignature",
                                    "name": "draw",
                                    "type": {
                                        "kind": "ArrayType",
                                        "elementType": {
                                            "kind": "ParenthesizedType",
                                            "type": {
                                                "kind": "FunctionType",
                                                "parameters": [],
                                                "type": {
                                                    "kind": "VoidKeyword"
                                                }
                                            }
                                        }
                                    }
                                },
                                {
                                    "kind": "PropertySignature",
                                    "name": "destroy",
                                    "type": {
                                        "kind": "ArrayType",
                                        "elementType": {
                                            "kind": "ParenthesizedType",
                                            "type": {
                                                "kind": "FunctionType",
                                                "parameters": [],
                                                "type": {
                                                    "kind": "VoidKeyword"
                                                }
                                            }
                                        }
                                    }
                                },
                                {
                                    "kind": "PropertySignature",
                                    "name": "inspect",
                                    "type": {
                                        "kind": "ArrayType",
                                        "elementType": {
                                            "kind": "ParenthesizedType",
                                            "type": {
                                                "kind": "FunctionType",
                                                "parameters": [],
                                                "type": {
                                                    "kind": "TypeLiteral",
                                                    "members": []
                                                }
                                            }
                                        }
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "IndexSignature",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "custom",
                                "type": {
                                    "kind": "StringKeyword"
                                }
                            }
                        ],
                        "type": {
                            "kind": "AnyKeyword"
                        }
                    }
                ]
            }
        },
        "SpriteAnim": {
            "kind": "TypeAliasDeclaration",
            "name": "SpriteAnim",
            "type": {
                "kind": "TypeLiteral",
                "members": [
                    {
                        "kind": "PropertySignature",
                        "name": "from",
                        "type": {
                            "kind": "NumberKeyword"
                        }
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "to",
                        "type": {
                            "kind": "NumberKeyword"
                        }
                    }
                ]
            }
        },
        "KaboomPlugin": {
            "kind": "TypeAliasDeclaration",
            "name": "KaboomPlugin",
            "type": {
                "kind": "FunctionType",
                "parameters": [
                    {
                        "kind": "Parameter",
                        "name": "k",
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "KaboomCtx"
                        }
                    }
                ],
                "type": {
                    "kind": "TypeReference",
                    "typeName": "Record",
                    "typeArguments": [
                        {
                            "kind": "StringKeyword"
                        },
                        {
                            "kind": "AnyKeyword"
                        }
                    ]
                }
            }
        },
        "SpriteLoadConf": {
            "kind": "TypeAliasDeclaration",
            "name": "SpriteLoadConf",
            "type": {
                "kind": "TypeLiteral",
                "members": [
                    {
                        "kind": "PropertySignature",
                        "name": "sliceX",
                        "type": {
                            "kind": "NumberKeyword"
                        },
                        "questionToken": true
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "sliceY",
                        "type": {
                            "kind": "NumberKeyword"
                        },
                        "questionToken": true
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "gridWidth",
                        "type": {
                            "kind": "NumberKeyword"
                        },
                        "questionToken": true
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "gridHeight",
                        "type": {
                            "kind": "NumberKeyword"
                        },
                        "questionToken": true
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "anims",
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Record",
                            "typeArguments": [
                                {
                                    "kind": "StringKeyword"
                                },
                                {
                                    "kind": "TypeReference",
                                    "typeName": "SpriteAnim"
                                }
                            ]
                        },
                        "questionToken": true
                    }
                ]
            }
        },
        "SpriteLoadSrc": {
            "kind": "TypeAliasDeclaration",
            "name": "SpriteLoadSrc",
            "type": {
                "kind": "UnionType",
                "types": [
                    {
                        "kind": "StringKeyword"
                    },
                    {
                        "kind": "TypeReference",
                        "typeName": "GfxTextureData"
                    }
                ]
            }
        },
        "SpriteData": {
            "kind": "TypeAliasDeclaration",
            "name": "SpriteData",
            "type": {
                "kind": "TypeLiteral",
                "members": [
                    {
                        "kind": "PropertySignature",
                        "name": "tex",
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "GfxTexture"
                        }
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "frames",
                        "type": {
                            "kind": "ArrayType",
                            "elementType": {
                                "kind": "TypeReference",
                                "typeName": "Quad"
                            }
                        }
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "anims",
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Record",
                            "typeArguments": [
                                {
                                    "kind": "StringKeyword"
                                },
                                {
                                    "kind": "TypeReference",
                                    "typeName": "SpriteAnim"
                                }
                            ]
                        }
                    }
                ]
            }
        },
        "SoundData": {
            "kind": "TypeAliasDeclaration",
            "name": "SoundData",
            "type": {
                "kind": "TypeReference",
                "typeName": "AudioBuffer"
            }
        },
        "FontData": {
            "kind": "TypeAliasDeclaration",
            "name": "FontData",
            "type": {
                "kind": "TypeReference",
                "typeName": "GfxFont"
            }
        },
        "ShaderData": {
            "kind": "TypeAliasDeclaration",
            "name": "ShaderData",
            "type": {
                "kind": "TypeReference",
                "typeName": "GfxProgram"
            }
        },
        "AudioPlayConf": {
            "kind": "TypeAliasDeclaration",
            "name": "AudioPlayConf",
            "type": {
                "kind": "TypeLiteral",
                "members": [
                    {
                        "kind": "PropertySignature",
                        "name": "loop",
                        "type": {
                            "kind": "BooleanKeyword"
                        },
                        "questionToken": true
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "volume",
                        "type": {
                            "kind": "NumberKeyword"
                        },
                        "questionToken": true
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "speed",
                        "type": {
                            "kind": "NumberKeyword"
                        },
                        "questionToken": true
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "detune",
                        "type": {
                            "kind": "NumberKeyword"
                        },
                        "questionToken": true
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "seek",
                        "type": {
                            "kind": "NumberKeyword"
                        },
                        "questionToken": true
                    }
                ]
            }
        },
        "AudioPlay": {
            "kind": "TypeAliasDeclaration",
            "name": "AudioPlay",
            "type": {
                "kind": "TypeLiteral",
                "members": [
                    {
                        "kind": "MethodSignature",
                        "name": "play",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "seek",
                                "type": {
                                    "kind": "NumberKeyword"
                                },
                                "questionToken": true
                            }
                        ],
                        "type": {
                            "kind": "VoidKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "stop",
                        "parameters": [],
                        "type": {
                            "kind": "VoidKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "pause",
                        "parameters": [],
                        "type": {
                            "kind": "VoidKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "paused",
                        "parameters": [],
                        "type": {
                            "kind": "BooleanKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "stopped",
                        "parameters": [],
                        "type": {
                            "kind": "BooleanKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "speed",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "s",
                                "type": {
                                    "kind": "NumberKeyword"
                                },
                                "questionToken": true
                            }
                        ],
                        "type": {
                            "kind": "NumberKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "detune",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "d",
                                "type": {
                                    "kind": "NumberKeyword"
                                },
                                "questionToken": true
                            }
                        ],
                        "type": {
                            "kind": "NumberKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "volume",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "v",
                                "type": {
                                    "kind": "NumberKeyword"
                                },
                                "questionToken": true
                            }
                        ],
                        "type": {
                            "kind": "NumberKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "time",
                        "parameters": [],
                        "type": {
                            "kind": "NumberKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "duration",
                        "parameters": [],
                        "type": {
                            "kind": "NumberKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "loop",
                        "parameters": [],
                        "type": {
                            "kind": "VoidKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "unloop",
                        "parameters": [],
                        "type": {
                            "kind": "VoidKeyword"
                        }
                    }
                ]
            }
        },
        "GfxProgram": {
            "kind": "TypeAliasDeclaration",
            "name": "GfxProgram",
            "type": {
                "kind": "TypeLiteral",
                "members": [
                    {
                        "kind": "MethodSignature",
                        "name": "bind",
                        "parameters": [],
                        "type": {
                            "kind": "VoidKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "unbind",
                        "parameters": [],
                        "type": {
                            "kind": "VoidKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "bindAttribs",
                        "parameters": [],
                        "type": {
                            "kind": "VoidKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "send",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "uniform",
                                "type": {
                                    "kind": "TypeReference",
                                    "typeName": "Uniform"
                                }
                            }
                        ],
                        "type": {
                            "kind": "VoidKeyword"
                        }
                    }
                ]
            }
        },
        "GfxTexture": {
            "kind": "TypeAliasDeclaration",
            "name": "GfxTexture",
            "type": {
                "kind": "TypeLiteral",
                "members": [
                    {
                        "kind": "PropertySignature",
                        "name": "width",
                        "type": {
                            "kind": "NumberKeyword"
                        }
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "height",
                        "type": {
                            "kind": "NumberKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "bind",
                        "parameters": [],
                        "type": {
                            "kind": "VoidKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "unbind",
                        "parameters": [],
                        "type": {
                            "kind": "VoidKeyword"
                        }
                    }
                ]
            }
        },
        "GfxTextureData": {
            "kind": "TypeAliasDeclaration",
            "name": "GfxTextureData",
            "type": {
                "kind": "UnionType",
                "types": [
                    {
                        "kind": "TypeReference",
                        "typeName": "HTMLImageElement"
                    },
                    {
                        "kind": "TypeReference",
                        "typeName": "HTMLCanvasElement"
                    },
                    {
                        "kind": "TypeReference",
                        "typeName": "ImageData"
                    },
                    {
                        "kind": "TypeReference",
                        "typeName": "ImageBitmap"
                    }
                ]
            }
        },
        "GfxFont": {
            "kind": "TypeAliasDeclaration",
            "name": "GfxFont",
            "type": {
                "kind": "TypeLiteral",
                "members": [
                    {
                        "kind": "PropertySignature",
                        "name": "tex",
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "GfxTexture"
                        }
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "map",
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Record",
                            "typeArguments": [
                                {
                                    "kind": "StringKeyword"
                                },
                                {
                                    "kind": "TypeReference",
                                    "typeName": "Vec2"
                                }
                            ]
                        }
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "qw",
                        "type": {
                            "kind": "NumberKeyword"
                        }
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "qh",
                        "type": {
                            "kind": "NumberKeyword"
                        }
                    }
                ]
            }
        },
        "Vertex": {
            "kind": "TypeAliasDeclaration",
            "name": "Vertex",
            "type": {
                "kind": "TypeLiteral",
                "members": [
                    {
                        "kind": "PropertySignature",
                        "name": "pos",
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Vec3"
                        }
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "uv",
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Vec2"
                        }
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "color",
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Color"
                        }
                    }
                ]
            }
        },
        "TexFilter": {
            "kind": "TypeAliasDeclaration",
            "name": "TexFilter",
            "type": {
                "kind": "UnionType",
                "types": [
                    {
                        "kind": "LiteralType",
                        "literal": {
                            "kind": "StringLiteral",
                            "text": "nearest",
                            "hasExtendedUnicodeEscape": false
                        }
                    },
                    {
                        "kind": "LiteralType",
                        "literal": {
                            "kind": "StringLiteral",
                            "text": "linear",
                            "hasExtendedUnicodeEscape": false
                        }
                    }
                ]
            }
        },
        "DrawQuadConf": {
            "kind": "TypeAliasDeclaration",
            "name": "DrawQuadConf",
            "type": {
                "kind": "TypeLiteral",
                "members": [
                    {
                        "kind": "PropertySignature",
                        "name": "pos",
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Vec2"
                        },
                        "questionToken": true
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "width",
                        "type": {
                            "kind": "NumberKeyword"
                        },
                        "questionToken": true
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "height",
                        "type": {
                            "kind": "NumberKeyword"
                        },
                        "questionToken": true
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "scale",
                        "type": {
                            "kind": "UnionType",
                            "types": [
                                {
                                    "kind": "TypeReference",
                                    "typeName": "Vec2"
                                },
                                {
                                    "kind": "NumberKeyword"
                                }
                            ]
                        },
                        "questionToken": true
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "rot",
                        "type": {
                            "kind": "NumberKeyword"
                        },
                        "questionToken": true
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "color",
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Color"
                        },
                        "questionToken": true
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "origin",
                        "type": {
                            "kind": "UnionType",
                            "types": [
                                {
                                    "kind": "TypeReference",
                                    "typeName": "Origin"
                                },
                                {
                                    "kind": "TypeReference",
                                    "typeName": "Vec2"
                                }
                            ]
                        },
                        "questionToken": true
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "z",
                        "type": {
                            "kind": "NumberKeyword"
                        },
                        "questionToken": true
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "tex",
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "GfxTexture"
                        },
                        "questionToken": true
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "quad",
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Quad"
                        },
                        "questionToken": true
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "prog",
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "GfxProgram"
                        },
                        "questionToken": true
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "uniform",
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Uniform"
                        },
                        "questionToken": true
                    }
                ]
            }
        },
        "DrawTextureConf": {
            "kind": "TypeAliasDeclaration",
            "name": "DrawTextureConf",
            "type": {
                "kind": "TypeLiteral",
                "members": [
                    {
                        "kind": "PropertySignature",
                        "name": "pos",
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Vec2"
                        },
                        "questionToken": true
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "scale",
                        "type": {
                            "kind": "UnionType",
                            "types": [
                                {
                                    "kind": "TypeReference",
                                    "typeName": "Vec2"
                                },
                                {
                                    "kind": "NumberKeyword"
                                }
                            ]
                        },
                        "questionToken": true
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "rot",
                        "type": {
                            "kind": "NumberKeyword"
                        },
                        "questionToken": true
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "color",
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Color"
                        },
                        "questionToken": true
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "origin",
                        "type": {
                            "kind": "UnionType",
                            "types": [
                                {
                                    "kind": "TypeReference",
                                    "typeName": "Origin"
                                },
                                {
                                    "kind": "TypeReference",
                                    "typeName": "Vec2"
                                }
                            ]
                        },
                        "questionToken": true
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "quad",
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Quad"
                        },
                        "questionToken": true
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "z",
                        "type": {
                            "kind": "NumberKeyword"
                        },
                        "questionToken": true
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "prog",
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "GfxProgram"
                        },
                        "questionToken": true
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "uniform",
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Uniform"
                        },
                        "questionToken": true
                    }
                ]
            }
        },
        "DrawRectStrokeConf": {
            "kind": "TypeAliasDeclaration",
            "name": "DrawRectStrokeConf",
            "type": {
                "kind": "TypeLiteral",
                "members": [
                    {
                        "kind": "PropertySignature",
                        "name": "width",
                        "type": {
                            "kind": "NumberKeyword"
                        },
                        "questionToken": true
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "scale",
                        "type": {
                            "kind": "UnionType",
                            "types": [
                                {
                                    "kind": "TypeReference",
                                    "typeName": "Vec2"
                                },
                                {
                                    "kind": "NumberKeyword"
                                }
                            ]
                        },
                        "questionToken": true
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "rot",
                        "type": {
                            "kind": "NumberKeyword"
                        },
                        "questionToken": true
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "color",
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Color"
                        },
                        "questionToken": true
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "origin",
                        "type": {
                            "kind": "UnionType",
                            "types": [
                                {
                                    "kind": "TypeReference",
                                    "typeName": "Origin"
                                },
                                {
                                    "kind": "TypeReference",
                                    "typeName": "Vec2"
                                }
                            ]
                        },
                        "questionToken": true
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "z",
                        "type": {
                            "kind": "NumberKeyword"
                        },
                        "questionToken": true
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "prog",
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "GfxProgram"
                        },
                        "questionToken": true
                    }
                ]
            }
        },
        "DrawRectConf": {
            "kind": "TypeAliasDeclaration",
            "name": "DrawRectConf",
            "type": {
                "kind": "TypeLiteral",
                "members": [
                    {
                        "kind": "PropertySignature",
                        "name": "scale",
                        "type": {
                            "kind": "UnionType",
                            "types": [
                                {
                                    "kind": "TypeReference",
                                    "typeName": "Vec2"
                                },
                                {
                                    "kind": "NumberKeyword"
                                }
                            ]
                        },
                        "questionToken": true
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "rot",
                        "type": {
                            "kind": "NumberKeyword"
                        },
                        "questionToken": true
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "color",
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Color"
                        },
                        "questionToken": true
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "origin",
                        "type": {
                            "kind": "UnionType",
                            "types": [
                                {
                                    "kind": "TypeReference",
                                    "typeName": "Origin"
                                },
                                {
                                    "kind": "TypeReference",
                                    "typeName": "Vec2"
                                }
                            ]
                        },
                        "questionToken": true
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "z",
                        "type": {
                            "kind": "NumberKeyword"
                        },
                        "questionToken": true
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "prog",
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "GfxProgram"
                        },
                        "questionToken": true
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "uniform",
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Uniform"
                        },
                        "questionToken": true
                    }
                ]
            }
        },
        "DrawLineConf": {
            "kind": "TypeAliasDeclaration",
            "name": "DrawLineConf",
            "type": {
                "kind": "TypeLiteral",
                "members": [
                    {
                        "kind": "PropertySignature",
                        "name": "width",
                        "type": {
                            "kind": "NumberKeyword"
                        },
                        "questionToken": true
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "color",
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Color"
                        },
                        "questionToken": true
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "z",
                        "type": {
                            "kind": "NumberKeyword"
                        },
                        "questionToken": true
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "prog",
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "GfxProgram"
                        },
                        "questionToken": true
                    }
                ]
            }
        },
        "DrawTextConf": {
            "kind": "TypeAliasDeclaration",
            "name": "DrawTextConf",
            "type": {
                "kind": "TypeLiteral",
                "members": [
                    {
                        "kind": "PropertySignature",
                        "name": "size",
                        "type": {
                            "kind": "NumberKeyword"
                        },
                        "questionToken": true
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "pos",
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Vec2"
                        },
                        "questionToken": true
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "scale",
                        "type": {
                            "kind": "UnionType",
                            "types": [
                                {
                                    "kind": "TypeReference",
                                    "typeName": "Vec2"
                                },
                                {
                                    "kind": "NumberKeyword"
                                }
                            ]
                        },
                        "questionToken": true
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "rot",
                        "type": {
                            "kind": "NumberKeyword"
                        },
                        "questionToken": true
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "color",
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Color"
                        },
                        "questionToken": true
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "origin",
                        "type": {
                            "kind": "UnionType",
                            "types": [
                                {
                                    "kind": "TypeReference",
                                    "typeName": "Origin"
                                },
                                {
                                    "kind": "TypeReference",
                                    "typeName": "Vec2"
                                }
                            ]
                        },
                        "questionToken": true
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "width",
                        "type": {
                            "kind": "NumberKeyword"
                        },
                        "questionToken": true
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "z",
                        "type": {
                            "kind": "NumberKeyword"
                        },
                        "questionToken": true
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "prog",
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "GfxProgram"
                        },
                        "questionToken": true
                    }
                ]
            }
        },
        "FormattedChar": {
            "kind": "TypeAliasDeclaration",
            "name": "FormattedChar",
            "type": {
                "kind": "TypeLiteral",
                "members": [
                    {
                        "kind": "PropertySignature",
                        "name": "tex",
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "GfxTexture"
                        }
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "quad",
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Quad"
                        }
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "ch",
                        "type": {
                            "kind": "StringKeyword"
                        }
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "pos",
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Vec2"
                        }
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "scale",
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Vec2"
                        }
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "color",
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Color"
                        }
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "origin",
                        "type": {
                            "kind": "StringKeyword"
                        }
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "z",
                        "type": {
                            "kind": "NumberKeyword"
                        }
                    }
                ]
            }
        },
        "FormattedText": {
            "kind": "TypeAliasDeclaration",
            "name": "FormattedText",
            "type": {
                "kind": "TypeLiteral",
                "members": [
                    {
                        "kind": "PropertySignature",
                        "name": "width",
                        "type": {
                            "kind": "NumberKeyword"
                        }
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "height",
                        "type": {
                            "kind": "NumberKeyword"
                        }
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "chars",
                        "type": {
                            "kind": "ArrayType",
                            "elementType": {
                                "kind": "TypeReference",
                                "typeName": "FormattedChar"
                            }
                        }
                    }
                ]
            }
        },
        "Origin": {
            "kind": "TypeAliasDeclaration",
            "name": "Origin",
            "type": {
                "kind": "UnionType",
                "types": [
                    {
                        "kind": "LiteralType",
                        "literal": {
                            "kind": "StringLiteral",
                            "text": "topleft",
                            "hasExtendedUnicodeEscape": false
                        }
                    },
                    {
                        "kind": "LiteralType",
                        "literal": {
                            "kind": "StringLiteral",
                            "text": "top",
                            "hasExtendedUnicodeEscape": false
                        }
                    },
                    {
                        "kind": "LiteralType",
                        "literal": {
                            "kind": "StringLiteral",
                            "text": "topright",
                            "hasExtendedUnicodeEscape": false
                        }
                    },
                    {
                        "kind": "LiteralType",
                        "literal": {
                            "kind": "StringLiteral",
                            "text": "left",
                            "hasExtendedUnicodeEscape": false
                        }
                    },
                    {
                        "kind": "LiteralType",
                        "literal": {
                            "kind": "StringLiteral",
                            "text": "center",
                            "hasExtendedUnicodeEscape": false
                        }
                    },
                    {
                        "kind": "LiteralType",
                        "literal": {
                            "kind": "StringLiteral",
                            "text": "right",
                            "hasExtendedUnicodeEscape": false
                        }
                    },
                    {
                        "kind": "LiteralType",
                        "literal": {
                            "kind": "StringLiteral",
                            "text": "botleft",
                            "hasExtendedUnicodeEscape": false
                        }
                    },
                    {
                        "kind": "LiteralType",
                        "literal": {
                            "kind": "StringLiteral",
                            "text": "bot",
                            "hasExtendedUnicodeEscape": false
                        }
                    },
                    {
                        "kind": "LiteralType",
                        "literal": {
                            "kind": "StringLiteral",
                            "text": "botright",
                            "hasExtendedUnicodeEscape": false
                        }
                    }
                ]
            }
        },
        "DrawSpriteConf": {
            "kind": "TypeAliasDeclaration",
            "name": "DrawSpriteConf",
            "type": {
                "kind": "TypeLiteral",
                "members": [
                    {
                        "kind": "PropertySignature",
                        "name": "frame",
                        "type": {
                            "kind": "NumberKeyword"
                        },
                        "questionToken": true
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "pos",
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Vec2"
                        },
                        "questionToken": true
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "scale",
                        "type": {
                            "kind": "UnionType",
                            "types": [
                                {
                                    "kind": "TypeReference",
                                    "typeName": "Vec2"
                                },
                                {
                                    "kind": "NumberKeyword"
                                }
                            ]
                        },
                        "questionToken": true
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "rot",
                        "type": {
                            "kind": "NumberKeyword"
                        },
                        "questionToken": true
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "color",
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Color"
                        },
                        "questionToken": true
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "origin",
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Origin"
                        },
                        "questionToken": true
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "quad",
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Quad"
                        },
                        "questionToken": true
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "prog",
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "ShaderData"
                        },
                        "questionToken": true
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "uniform",
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Uniform"
                        },
                        "questionToken": true
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "z",
                        "type": {
                            "kind": "NumberKeyword"
                        },
                        "questionToken": true
                    }
                ]
            }
        },
        "Vec2": {
            "kind": "TypeAliasDeclaration",
            "name": "Vec2",
            "type": {
                "kind": "TypeLiteral",
                "members": [
                    {
                        "kind": "PropertySignature",
                        "name": "x",
                        "type": {
                            "kind": "NumberKeyword"
                        }
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "y",
                        "type": {
                            "kind": "NumberKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "clone",
                        "parameters": [],
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Vec2"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "add",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "p",
                                "type": {
                                    "kind": "TypeReference",
                                    "typeName": "Vec2"
                                }
                            }
                        ],
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Vec2"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "sub",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "p",
                                "type": {
                                    "kind": "TypeReference",
                                    "typeName": "Vec2"
                                }
                            }
                        ],
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Vec2"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "scale",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "s",
                                "type": {
                                    "kind": "NumberKeyword"
                                }
                            }
                        ],
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Vec2"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "dot",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "p",
                                "type": {
                                    "kind": "TypeReference",
                                    "typeName": "Vec2"
                                }
                            }
                        ],
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Vec2"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "dist",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "p",
                                "type": {
                                    "kind": "TypeReference",
                                    "typeName": "Vec2"
                                }
                            }
                        ],
                        "type": {
                            "kind": "NumberKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "len",
                        "parameters": [],
                        "type": {
                            "kind": "NumberKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "unit",
                        "parameters": [],
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Vec2"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "normal",
                        "parameters": [],
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Vec2"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "angle",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "p",
                                "type": {
                                    "kind": "TypeReference",
                                    "typeName": "Vec2"
                                }
                            }
                        ],
                        "type": {
                            "kind": "NumberKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "lerp",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "p",
                                "type": {
                                    "kind": "TypeReference",
                                    "typeName": "Vec2"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "t",
                                "type": {
                                    "kind": "NumberKeyword"
                                }
                            }
                        ],
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Vec2"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "eq",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "p",
                                "type": {
                                    "kind": "TypeReference",
                                    "typeName": "Vec2"
                                }
                            }
                        ],
                        "type": {
                            "kind": "BooleanKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "str",
                        "parameters": [],
                        "type": {
                            "kind": "StringKeyword"
                        }
                    }
                ]
            }
        },
        "Vec3": {
            "kind": "TypeAliasDeclaration",
            "name": "Vec3",
            "type": {
                "kind": "TypeLiteral",
                "members": [
                    {
                        "kind": "PropertySignature",
                        "name": "x",
                        "type": {
                            "kind": "NumberKeyword"
                        }
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "y",
                        "type": {
                            "kind": "NumberKeyword"
                        }
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "z",
                        "type": {
                            "kind": "NumberKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "xy",
                        "parameters": [],
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Vec2"
                        }
                    }
                ]
            }
        },
        "Vec4": {
            "kind": "TypeAliasDeclaration",
            "name": "Vec4",
            "type": {
                "kind": "TypeLiteral",
                "members": [
                    {
                        "kind": "PropertySignature",
                        "name": "x",
                        "type": {
                            "kind": "NumberKeyword"
                        }
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "y",
                        "type": {
                            "kind": "NumberKeyword"
                        }
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "z",
                        "type": {
                            "kind": "NumberKeyword"
                        }
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "w",
                        "type": {
                            "kind": "NumberKeyword"
                        }
                    }
                ]
            }
        },
        "Mat4": {
            "kind": "TypeAliasDeclaration",
            "name": "Mat4",
            "type": {
                "kind": "TypeLiteral",
                "members": [
                    {
                        "kind": "PropertySignature",
                        "name": "m",
                        "type": {
                            "kind": "ArrayType",
                            "elementType": {
                                "kind": "NumberKeyword"
                            }
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "clone",
                        "parameters": [],
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Mat4"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "mult",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "m",
                                "type": {
                                    "kind": "TypeReference",
                                    "typeName": "Mat4"
                                }
                            }
                        ],
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Mat4"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "multVec4",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "m",
                                "type": {
                                    "kind": "TypeReference",
                                    "typeName": "Vec4"
                                }
                            }
                        ],
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Vec4"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "multVec3",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "m",
                                "type": {
                                    "kind": "TypeReference",
                                    "typeName": "Vec3"
                                }
                            }
                        ],
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Vec3"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "multVec2",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "m",
                                "type": {
                                    "kind": "TypeReference",
                                    "typeName": "Vec2"
                                }
                            }
                        ],
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Vec2"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "scale",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "s",
                                "type": {
                                    "kind": "TypeReference",
                                    "typeName": "Vec2"
                                }
                            }
                        ],
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Mat4"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "translate",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "p",
                                "type": {
                                    "kind": "TypeReference",
                                    "typeName": "Vec2"
                                }
                            }
                        ],
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Mat4"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "rotateX",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "a",
                                "type": {
                                    "kind": "NumberKeyword"
                                }
                            }
                        ],
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Mat4"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "rotateY",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "a",
                                "type": {
                                    "kind": "NumberKeyword"
                                }
                            }
                        ],
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Mat4"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "rotateZ",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "a",
                                "type": {
                                    "kind": "NumberKeyword"
                                }
                            }
                        ],
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Mat4"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "invert",
                        "parameters": [],
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Mat4"
                        }
                    }
                ]
            }
        },
        "Color": {
            "kind": "TypeAliasDeclaration",
            "name": "Color",
            "type": {
                "kind": "TypeLiteral",
                "members": [
                    {
                        "kind": "PropertySignature",
                        "name": "r",
                        "type": {
                            "kind": "NumberKeyword"
                        }
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "g",
                        "type": {
                            "kind": "NumberKeyword"
                        }
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "b",
                        "type": {
                            "kind": "NumberKeyword"
                        }
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "a",
                        "type": {
                            "kind": "NumberKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "clone",
                        "parameters": [],
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Color"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "lighten",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "n",
                                "type": {
                                    "kind": "NumberKeyword"
                                }
                            }
                        ],
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Color"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "darken",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "n",
                                "type": {
                                    "kind": "NumberKeyword"
                                }
                            }
                        ],
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Color"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "invert",
                        "parameters": [],
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Color"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "isDark",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "p",
                                "type": {
                                    "kind": "NumberKeyword"
                                },
                                "questionToken": true
                            }
                        ],
                        "type": {
                            "kind": "BooleanKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "isLight",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "p",
                                "type": {
                                    "kind": "NumberKeyword"
                                },
                                "questionToken": true
                            }
                        ],
                        "type": {
                            "kind": "BooleanKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "eq",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "c",
                                "type": {
                                    "kind": "TypeReference",
                                    "typeName": "Color"
                                }
                            }
                        ],
                        "type": {
                            "kind": "BooleanKeyword"
                        }
                    }
                ]
            }
        },
        "Quad": {
            "kind": "TypeAliasDeclaration",
            "name": "Quad",
            "type": {
                "kind": "TypeLiteral",
                "members": [
                    {
                        "kind": "PropertySignature",
                        "name": "x",
                        "type": {
                            "kind": "NumberKeyword"
                        }
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "y",
                        "type": {
                            "kind": "NumberKeyword"
                        }
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "w",
                        "type": {
                            "kind": "NumberKeyword"
                        }
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "h",
                        "type": {
                            "kind": "NumberKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "clone",
                        "parameters": [],
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Quad"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "eq",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "q",
                                "type": {
                                    "kind": "TypeReference",
                                    "typeName": "Quad"
                                }
                            }
                        ],
                        "type": {
                            "kind": "BooleanKeyword"
                        }
                    }
                ]
            }
        },
        "RNGValue": {
            "kind": "TypeAliasDeclaration",
            "name": "RNGValue",
            "type": {
                "kind": "UnionType",
                "types": [
                    {
                        "kind": "NumberKeyword"
                    },
                    {
                        "kind": "TypeReference",
                        "typeName": "Vec2"
                    },
                    {
                        "kind": "TypeReference",
                        "typeName": "Color"
                    }
                ]
            }
        },
        "RNG": {
            "kind": "TypeAliasDeclaration",
            "name": "RNG",
            "type": {
                "kind": "TypeLiteral",
                "members": [
                    {
                        "kind": "PropertySignature",
                        "name": "seed",
                        "type": {
                            "kind": "NumberKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "gen",
                        "parameters": [],
                        "type": {
                            "kind": "NumberKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "gen",
                        "typeParameters": [
                            {
                                "kind": "TypeParameter",
                                "name": "T",
                                "constraint": {
                                    "kind": "TypeReference",
                                    "typeName": "RNGValue"
                                }
                            }
                        ],
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "n",
                                "type": {
                                    "kind": "TypeReference",
                                    "typeName": "T"
                                }
                            }
                        ],
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "T"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "gen",
                        "typeParameters": [
                            {
                                "kind": "TypeParameter",
                                "name": "T",
                                "constraint": {
                                    "kind": "TypeReference",
                                    "typeName": "RNGValue"
                                }
                            }
                        ],
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "a",
                                "type": {
                                    "kind": "TypeReference",
                                    "typeName": "T"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "b",
                                "type": {
                                    "kind": "TypeReference",
                                    "typeName": "T"
                                }
                            }
                        ],
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "T"
                        }
                    }
                ]
            }
        },
        "Rect": {
            "kind": "TypeAliasDeclaration",
            "name": "Rect",
            "type": {
                "kind": "TypeLiteral",
                "members": [
                    {
                        "kind": "PropertySignature",
                        "name": "p1",
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Vec2"
                        }
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "p2",
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Vec2"
                        }
                    }
                ]
            }
        },
        "Line": {
            "kind": "TypeAliasDeclaration",
            "name": "Line",
            "type": {
                "kind": "TypeLiteral",
                "members": [
                    {
                        "kind": "PropertySignature",
                        "name": "p1",
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Vec2"
                        }
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "p2",
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Vec2"
                        }
                    }
                ]
            }
        },
        "MsgHandler": {
            "kind": "TypeAliasDeclaration",
            "name": "MsgHandler",
            "type": {
                "kind": "FunctionType",
                "parameters": [
                    {
                        "kind": "Parameter",
                        "name": "data",
                        "type": {
                            "kind": "AnyKeyword"
                        }
                    },
                    {
                        "kind": "Parameter",
                        "name": "id",
                        "type": {
                            "kind": "NumberKeyword"
                        }
                    }
                ],
                "type": {
                    "kind": "VoidKeyword"
                }
            }
        },
        "Comp": {
            "kind": "TypeAliasDeclaration",
            "name": "Comp",
            "type": {
                "kind": "AnyKeyword"
            }
        },
        "CompBuilder": {
            "kind": "TypeAliasDeclaration",
            "name": "CompBuilder",
            "type": {
                "kind": "FunctionType",
                "parameters": [
                    {
                        "kind": "Parameter",
                        "name": "args",
                        "dotDotDotToken": {
                            "kind": "DotDotDotToken"
                        }
                    }
                ],
                "type": {
                    "kind": "TypeReference",
                    "typeName": "Comp"
                }
            }
        },
        "GameObjID": {
            "kind": "TypeAliasDeclaration",
            "name": "GameObjID",
            "type": {
                "kind": "NumberKeyword"
            }
        },
        "CompID": {
            "kind": "TypeAliasDeclaration",
            "name": "CompID",
            "type": {
                "kind": "StringKeyword"
            }
        },
        "AddEvent": {
            "kind": "TypeAliasDeclaration",
            "name": "AddEvent",
            "type": {
                "kind": "FunctionType",
                "parameters": [],
                "type": {
                    "kind": "VoidKeyword"
                }
            }
        },
        "DrawEvent": {
            "kind": "TypeAliasDeclaration",
            "name": "DrawEvent",
            "type": {
                "kind": "FunctionType",
                "parameters": [],
                "type": {
                    "kind": "VoidKeyword"
                }
            }
        },
        "UpdateEvent": {
            "kind": "TypeAliasDeclaration",
            "name": "UpdateEvent",
            "type": {
                "kind": "FunctionType",
                "parameters": [],
                "type": {
                    "kind": "VoidKeyword"
                }
            }
        },
        "DestroyEvent": {
            "kind": "TypeAliasDeclaration",
            "name": "DestroyEvent",
            "type": {
                "kind": "FunctionType",
                "parameters": [],
                "type": {
                    "kind": "VoidKeyword"
                }
            }
        },
        "PosCompInspect": {
            "kind": "TypeAliasDeclaration",
            "name": "PosCompInspect",
            "type": {
                "kind": "TypeLiteral",
                "members": [
                    {
                        "kind": "PropertySignature",
                        "name": "pos",
                        "type": {
                            "kind": "StringKeyword"
                        }
                    }
                ]
            }
        },
        "PosComp": {
            "kind": "TypeAliasDeclaration",
            "name": "PosComp",
            "type": {
                "kind": "TypeLiteral",
                "members": [
                    {
                        "kind": "PropertySignature",
                        "name": "pos",
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Vec2"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "move",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "x",
                                "type": {
                                    "kind": "NumberKeyword"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "y",
                                "type": {
                                    "kind": "NumberKeyword"
                                }
                            }
                        ],
                        "type": {
                            "kind": "VoidKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "move",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "p",
                                "type": {
                                    "kind": "TypeReference",
                                    "typeName": "Vec2"
                                }
                            }
                        ],
                        "type": {
                            "kind": "VoidKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "screenPos",
                        "parameters": [],
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Vec2"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "inspect",
                        "parameters": [],
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "PosCompInspect"
                        }
                    }
                ]
            }
        },
        "ScaleComp": {
            "kind": "TypeAliasDeclaration",
            "name": "ScaleComp",
            "type": {
                "kind": "TypeLiteral",
                "members": [
                    {
                        "kind": "PropertySignature",
                        "name": "scale",
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Vec2"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "flipX",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "s",
                                "type": {
                                    "kind": "NumberKeyword"
                                }
                            }
                        ],
                        "type": {
                            "kind": "VoidKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "flipY",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "s",
                                "type": {
                                    "kind": "NumberKeyword"
                                }
                            }
                        ],
                        "type": {
                            "kind": "VoidKeyword"
                        }
                    }
                ]
            }
        },
        "RotateComp": {
            "kind": "TypeAliasDeclaration",
            "name": "RotateComp",
            "type": {
                "kind": "TypeLiteral",
                "members": [
                    {
                        "kind": "PropertySignature",
                        "name": "angle",
                        "type": {
                            "kind": "NumberKeyword"
                        }
                    }
                ]
            }
        },
        "ColorComp": {
            "kind": "TypeAliasDeclaration",
            "name": "ColorComp",
            "type": {
                "kind": "TypeLiteral",
                "members": [
                    {
                        "kind": "PropertySignature",
                        "name": "color",
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Color"
                        }
                    }
                ]
            }
        },
        "OriginComp": {
            "kind": "TypeAliasDeclaration",
            "name": "OriginComp",
            "type": {
                "kind": "TypeLiteral",
                "members": [
                    {
                        "kind": "PropertySignature",
                        "name": "origin",
                        "type": {
                            "kind": "UnionType",
                            "types": [
                                {
                                    "kind": "TypeReference",
                                    "typeName": "Origin"
                                },
                                {
                                    "kind": "TypeReference",
                                    "typeName": "Vec2"
                                }
                            ]
                        }
                    }
                ]
            }
        },
        "LayerCompInspect": {
            "kind": "TypeAliasDeclaration",
            "name": "LayerCompInspect",
            "type": {
                "kind": "TypeLiteral",
                "members": [
                    {
                        "kind": "PropertySignature",
                        "name": "layer",
                        "type": {
                            "kind": "StringKeyword"
                        }
                    }
                ]
            }
        },
        "LayerComp": {
            "kind": "TypeAliasDeclaration",
            "name": "LayerComp",
            "type": {
                "kind": "TypeLiteral",
                "members": [
                    {
                        "kind": "PropertySignature",
                        "name": "layer",
                        "type": {
                            "kind": "StringKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "inspect",
                        "parameters": [],
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "LayerCompInspect"
                        }
                    }
                ]
            }
        },
        "RectSide": {
            "kind": "TypeAliasDeclaration",
            "name": "RectSide",
            "type": {
                "kind": "UnionType",
                "types": [
                    {
                        "kind": "LiteralType",
                        "literal": {
                            "kind": "StringLiteral",
                            "text": "top",
                            "hasExtendedUnicodeEscape": false
                        }
                    },
                    {
                        "kind": "LiteralType",
                        "literal": {
                            "kind": "StringLiteral",
                            "text": "bottom",
                            "hasExtendedUnicodeEscape": false
                        }
                    },
                    {
                        "kind": "LiteralType",
                        "literal": {
                            "kind": "StringLiteral",
                            "text": "left",
                            "hasExtendedUnicodeEscape": false
                        }
                    },
                    {
                        "kind": "LiteralType",
                        "literal": {
                            "kind": "StringLiteral",
                            "text": "right",
                            "hasExtendedUnicodeEscape": false
                        }
                    }
                ]
            }
        },
        "CollisionResolve": {
            "kind": "TypeAliasDeclaration",
            "name": "CollisionResolve",
            "type": {
                "kind": "TypeLiteral",
                "members": [
                    {
                        "kind": "PropertySignature",
                        "name": "obj",
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "GameObj"
                        }
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "side",
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "RectSide"
                        }
                    }
                ]
            }
        },
        "AreaComp": {
            "kind": "TypeAliasDeclaration",
            "name": "AreaComp",
            "type": {
                "kind": "TypeLiteral",
                "members": [
                    {
                        "kind": "PropertySignature",
                        "name": "area",
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Rect"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "areaWidth",
                        "parameters": [],
                        "type": {
                            "kind": "NumberKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "areaHeight",
                        "parameters": [],
                        "type": {
                            "kind": "NumberKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "isClicked",
                        "parameters": [],
                        "type": {
                            "kind": "BooleanKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "isHovered",
                        "parameters": [],
                        "type": {
                            "kind": "BooleanKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "isCollided",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "o",
                                "type": {
                                    "kind": "TypeReference",
                                    "typeName": "GameObj"
                                }
                            }
                        ],
                        "type": {
                            "kind": "BooleanKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "isOverlapped",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "o",
                                "type": {
                                    "kind": "TypeReference",
                                    "typeName": "GameObj"
                                }
                            }
                        ],
                        "type": {
                            "kind": "BooleanKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "clicks",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "f",
                                "type": {
                                    "kind": "FunctionType",
                                    "parameters": [],
                                    "type": {
                                        "kind": "VoidKeyword"
                                    }
                                }
                            }
                        ],
                        "type": {
                            "kind": "VoidKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "hovers",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "f",
                                "type": {
                                    "kind": "FunctionType",
                                    "parameters": [],
                                    "type": {
                                        "kind": "VoidKeyword"
                                    }
                                }
                            }
                        ],
                        "type": {
                            "kind": "VoidKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "collides",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "tag",
                                "type": {
                                    "kind": "StringKeyword"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "f",
                                "type": {
                                    "kind": "FunctionType",
                                    "parameters": [
                                        {
                                            "kind": "Parameter",
                                            "name": "o",
                                            "type": {
                                                "kind": "TypeReference",
                                                "typeName": "GameObj"
                                            }
                                        }
                                    ],
                                    "type": {
                                        "kind": "VoidKeyword"
                                    }
                                }
                            }
                        ],
                        "type": {
                            "kind": "VoidKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "overlaps",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "tag",
                                "type": {
                                    "kind": "StringKeyword"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "f",
                                "type": {
                                    "kind": "FunctionType",
                                    "parameters": [
                                        {
                                            "kind": "Parameter",
                                            "name": "o",
                                            "type": {
                                                "kind": "TypeReference",
                                                "typeName": "GameObj"
                                            }
                                        }
                                    ],
                                    "type": {
                                        "kind": "VoidKeyword"
                                    }
                                }
                            }
                        ],
                        "type": {
                            "kind": "VoidKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "hasPt",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "p",
                                "type": {
                                    "kind": "TypeReference",
                                    "typeName": "Vec2"
                                }
                            }
                        ],
                        "type": {
                            "kind": "BooleanKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "resolve",
                        "parameters": [],
                        "type": {
                            "kind": "VoidKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "_worldArea",
                        "parameters": [],
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Rect"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "_checkCollisions",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "tag",
                                "type": {
                                    "kind": "StringKeyword"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "f",
                                "type": {
                                    "kind": "FunctionType",
                                    "parameters": [
                                        {
                                            "kind": "Parameter",
                                            "name": "obj",
                                            "type": {
                                                "kind": "TypeReference",
                                                "typeName": "GameObj"
                                            }
                                        }
                                    ],
                                    "type": {
                                        "kind": "VoidKeyword"
                                    }
                                }
                            }
                        ],
                        "type": {
                            "kind": "VoidKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "_checkOverlaps",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "tag",
                                "type": {
                                    "kind": "StringKeyword"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "f",
                                "type": {
                                    "kind": "FunctionType",
                                    "parameters": [
                                        {
                                            "kind": "Parameter",
                                            "name": "obj",
                                            "type": {
                                                "kind": "TypeReference",
                                                "typeName": "GameObj"
                                            }
                                        }
                                    ],
                                    "type": {
                                        "kind": "VoidKeyword"
                                    }
                                }
                            }
                        ],
                        "type": {
                            "kind": "VoidKeyword"
                        }
                    }
                ]
            }
        },
        "SpriteCompConf": {
            "kind": "TypeAliasDeclaration",
            "name": "SpriteCompConf",
            "type": {
                "kind": "TypeLiteral",
                "members": [
                    {
                        "kind": "PropertySignature",
                        "name": "noArea",
                        "type": {
                            "kind": "BooleanKeyword"
                        },
                        "questionToken": true
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "quad",
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Quad"
                        },
                        "questionToken": true
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "frame",
                        "type": {
                            "kind": "NumberKeyword"
                        },
                        "questionToken": true
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "animSpeed",
                        "type": {
                            "kind": "NumberKeyword"
                        },
                        "questionToken": true
                    }
                ]
            }
        },
        "SpriteCompCurAnim": {
            "kind": "TypeAliasDeclaration",
            "name": "SpriteCompCurAnim",
            "type": {
                "kind": "TypeLiteral",
                "members": [
                    {
                        "kind": "PropertySignature",
                        "name": "name",
                        "type": {
                            "kind": "StringKeyword"
                        }
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "loop",
                        "type": {
                            "kind": "BooleanKeyword"
                        }
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "timer",
                        "type": {
                            "kind": "NumberKeyword"
                        }
                    }
                ]
            }
        },
        "SpriteComp": {
            "kind": "TypeAliasDeclaration",
            "name": "SpriteComp",
            "type": {
                "kind": "TypeLiteral",
                "members": [
                    {
                        "kind": "PropertySignature",
                        "name": "add",
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "AddEvent"
                        }
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "draw",
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "DrawEvent"
                        }
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "update",
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "UpdateEvent"
                        }
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "width",
                        "type": {
                            "kind": "NumberKeyword"
                        }
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "height",
                        "type": {
                            "kind": "NumberKeyword"
                        }
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "animSpeed",
                        "type": {
                            "kind": "NumberKeyword"
                        }
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "frame",
                        "type": {
                            "kind": "NumberKeyword"
                        }
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "quad",
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Quad"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "play",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "anim",
                                "type": {
                                    "kind": "StringKeyword"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "loop",
                                "type": {
                                    "kind": "BooleanKeyword"
                                },
                                "questionToken": true
                            }
                        ],
                        "type": {
                            "kind": "VoidKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "stop",
                        "parameters": [],
                        "type": {
                            "kind": "VoidKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "changeSprite",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "id",
                                "type": {
                                    "kind": "StringKeyword"
                                }
                            }
                        ],
                        "type": {
                            "kind": "VoidKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "numFrames",
                        "parameters": [],
                        "type": {
                            "kind": "NumberKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "curAnim",
                        "parameters": [],
                        "type": {
                            "kind": "StringKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "inspect",
                        "parameters": [],
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "SpriteCompInspect"
                        }
                    }
                ]
            }
        },
        "SpriteCompInspect": {
            "kind": "TypeAliasDeclaration",
            "name": "SpriteCompInspect",
            "type": {
                "kind": "TypeLiteral",
                "members": [
                    {
                        "kind": "PropertySignature",
                        "name": "curAnim",
                        "type": {
                            "kind": "StringKeyword"
                        },
                        "questionToken": true
                    }
                ]
            }
        },
        "TextComp": {
            "kind": "TypeAliasDeclaration",
            "name": "TextComp",
            "type": {
                "kind": "TypeLiteral",
                "members": [
                    {
                        "kind": "PropertySignature",
                        "name": "add",
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "AddEvent"
                        }
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "draw",
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "DrawEvent"
                        }
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "text",
                        "type": {
                            "kind": "StringKeyword"
                        }
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "textSize",
                        "type": {
                            "kind": "NumberKeyword"
                        }
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "font",
                        "type": {
                            "kind": "StringKeyword"
                        }
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "width",
                        "type": {
                            "kind": "NumberKeyword"
                        }
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "height",
                        "type": {
                            "kind": "NumberKeyword"
                        }
                    }
                ]
            }
        },
        "TextCompConf": {
            "kind": "TypeAliasDeclaration",
            "name": "TextCompConf",
            "type": {
                "kind": "TypeLiteral",
                "members": [
                    {
                        "kind": "PropertySignature",
                        "name": "noArea",
                        "type": {
                            "kind": "BooleanKeyword"
                        },
                        "questionToken": true
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "font",
                        "type": {
                            "kind": "StringKeyword"
                        },
                        "questionToken": true
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "width",
                        "type": {
                            "kind": "NumberKeyword"
                        },
                        "questionToken": true
                    }
                ]
            }
        },
        "RectComp": {
            "kind": "TypeAliasDeclaration",
            "name": "RectComp",
            "type": {
                "kind": "TypeLiteral",
                "members": [
                    {
                        "kind": "PropertySignature",
                        "name": "add",
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "AddEvent"
                        }
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "draw",
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "DrawEvent"
                        }
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "width",
                        "type": {
                            "kind": "NumberKeyword"
                        }
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "height",
                        "type": {
                            "kind": "NumberKeyword"
                        }
                    }
                ]
            }
        },
        "RectCompConf": {
            "kind": "TypeAliasDeclaration",
            "name": "RectCompConf",
            "type": {
                "kind": "TypeLiteral",
                "members": [
                    {
                        "kind": "PropertySignature",
                        "name": "noArea",
                        "type": {
                            "kind": "BooleanKeyword"
                        },
                        "questionToken": true
                    }
                ]
            }
        },
        "LevelConf": {
            "kind": "TypeAliasDeclaration",
            "name": "LevelConf",
            "type": {
                "kind": "TypeLiteral",
                "members": [
                    {
                        "kind": "PropertySignature",
                        "name": "width",
                        "type": {
                            "kind": "NumberKeyword"
                        }
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "height",
                        "type": {
                            "kind": "NumberKeyword"
                        }
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "pos",
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Vec2"
                        },
                        "questionToken": true
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "any",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "s",
                                "type": {
                                    "kind": "StringKeyword"
                                }
                            }
                        ],
                        "type": {
                            "kind": "UnionType",
                            "types": [
                                {
                                    "kind": "ArrayType",
                                    "elementType": {
                                        "kind": "TypeReference",
                                        "typeName": "Comp"
                                    }
                                },
                                {
                                    "kind": "UndefinedKeyword"
                                }
                            ]
                        }
                    },
                    {
                        "kind": "IndexSignature",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "sym",
                                "type": {
                                    "kind": "StringKeyword"
                                }
                            }
                        ],
                        "type": {
                            "kind": "AnyKeyword"
                        }
                    }
                ]
            }
        },
        "Level": {
            "kind": "TypeAliasDeclaration",
            "name": "Level",
            "type": {
                "kind": "TypeLiteral",
                "members": [
                    {
                        "kind": "MethodSignature",
                        "name": "getPos",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "p",
                                "type": {
                                    "kind": "TypeReference",
                                    "typeName": "Vec2"
                                }
                            }
                        ],
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Vec2"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "spawn",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "sym",
                                "type": {
                                    "kind": "StringKeyword"
                                }
                            },
                            {
                                "kind": "Parameter",
                                "name": "p",
                                "type": {
                                    "kind": "TypeReference",
                                    "typeName": "Vec2"
                                }
                            }
                        ],
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "GameObj"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "width",
                        "parameters": [],
                        "type": {
                            "kind": "NumberKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "height",
                        "parameters": [],
                        "type": {
                            "kind": "NumberKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "gridWidth",
                        "parameters": [],
                        "type": {
                            "kind": "NumberKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "gridHeight",
                        "parameters": [],
                        "type": {
                            "kind": "NumberKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "offset",
                        "parameters": [],
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Vec2"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "destroy",
                        "parameters": [],
                        "type": {
                            "kind": "VoidKeyword"
                        }
                    }
                ]
            }
        },
        "Debug": {
            "kind": "TypeAliasDeclaration",
            "name": "Debug",
            "type": {
                "kind": "TypeLiteral",
                "members": [
                    {
                        "kind": "PropertySignature",
                        "name": "paused",
                        "type": {
                            "kind": "BooleanKeyword"
                        }
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "inspect",
                        "type": {
                            "kind": "BooleanKeyword"
                        }
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "timeScale",
                        "type": {
                            "kind": "NumberKeyword"
                        }
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "showLog",
                        "type": {
                            "kind": "BooleanKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "fps",
                        "parameters": [],
                        "type": {
                            "kind": "NumberKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "objCount",
                        "parameters": [],
                        "type": {
                            "kind": "NumberKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "drawCalls",
                        "parameters": [],
                        "type": {
                            "kind": "NumberKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "stepFrame",
                        "parameters": [],
                        "type": {
                            "kind": "VoidKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "clearLog",
                        "parameters": [],
                        "type": {
                            "kind": "VoidKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "log",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "msg",
                                "type": {
                                    "kind": "StringKeyword"
                                }
                            }
                        ],
                        "type": {
                            "kind": "VoidKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "error",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "msg",
                                "type": {
                                    "kind": "StringKeyword"
                                }
                            }
                        ],
                        "type": {
                            "kind": "VoidKeyword"
                        }
                    }
                ]
            }
        },
        "UniformValue": {
            "kind": "TypeAliasDeclaration",
            "name": "UniformValue",
            "type": {
                "kind": "UnionType",
                "types": [
                    {
                        "kind": "TypeReference",
                        "typeName": "Vec2"
                    },
                    {
                        "kind": "TypeReference",
                        "typeName": "Vec3"
                    },
                    {
                        "kind": "TypeReference",
                        "typeName": "Color"
                    },
                    {
                        "kind": "TypeReference",
                        "typeName": "Mat4"
                    }
                ]
            }
        },
        "Uniform": {
            "kind": "TypeAliasDeclaration",
            "name": "Uniform",
            "type": {
                "kind": "TypeReference",
                "typeName": "Record",
                "typeArguments": [
                    {
                        "kind": "StringKeyword"
                    },
                    {
                        "kind": "TypeReference",
                        "typeName": "UniformValue"
                    }
                ]
            }
        },
        "ShaderComp": {
            "kind": "TypeAliasDeclaration",
            "name": "ShaderComp",
            "type": {
                "kind": "TypeLiteral",
                "members": [
                    {
                        "kind": "PropertySignature",
                        "name": "uniform",
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "Uniform"
                        }
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "shader",
                        "type": {
                            "kind": "StringKeyword"
                        }
                    }
                ]
            }
        },
        "BodyComp": {
            "kind": "TypeAliasDeclaration",
            "name": "BodyComp",
            "type": {
                "kind": "TypeLiteral",
                "members": [
                    {
                        "kind": "PropertySignature",
                        "name": "update",
                        "type": {
                            "kind": "TypeReference",
                            "typeName": "UpdateEvent"
                        }
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "jumpForce",
                        "type": {
                            "kind": "NumberKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "curPlatform",
                        "parameters": [],
                        "type": {
                            "kind": "UnionType",
                            "types": [
                                {
                                    "kind": "TypeReference",
                                    "typeName": "GameObj"
                                },
                                {
                                    "kind": "LiteralType",
                                    "literal": {
                                        "kind": "NullKeyword"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "grounded",
                        "parameters": [],
                        "type": {
                            "kind": "BooleanKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "falling",
                        "parameters": [],
                        "type": {
                            "kind": "BooleanKeyword"
                        }
                    },
                    {
                        "kind": "MethodSignature",
                        "name": "jump",
                        "parameters": [
                            {
                                "kind": "Parameter",
                                "name": "f",
                                "type": {
                                    "kind": "NumberKeyword"
                                }
                            }
                        ],
                        "type": {
                            "kind": "VoidKeyword"
                        }
                    }
                ]
            }
        },
        "BodyCompConf": {
            "kind": "TypeAliasDeclaration",
            "name": "BodyCompConf",
            "type": {
                "kind": "TypeLiteral",
                "members": [
                    {
                        "kind": "PropertySignature",
                        "name": "jumpForce",
                        "type": {
                            "kind": "NumberKeyword"
                        },
                        "questionToken": true
                    },
                    {
                        "kind": "PropertySignature",
                        "name": "maxVel",
                        "type": {
                            "kind": "NumberKeyword"
                        },
                        "questionToken": true
                    }
                ]
            }
        },
        "SolidComp": {
            "kind": "TypeAliasDeclaration",
            "name": "SolidComp",
            "type": {
                "kind": "TypeLiteral",
                "members": [
                    {
                        "kind": "PropertySignature",
                        "name": "solid",
                        "type": {
                            "kind": "BooleanKeyword"
                        }
                    }
                ]
            }
        },
        "LoopHandle": {
            "kind": "TypeAliasDeclaration",
            "name": "LoopHandle",
            "type": {
                "kind": "TypeLiteral",
                "members": [
                    {
                        "kind": "MethodSignature",
                        "name": "stop",
                        "parameters": [],
                        "type": {
                            "kind": "VoidKeyword"
                        }
                    }
                ]
            }
        }
    },
    "funcs": {
        "kaboom": {
            "kind": "FunctionDeclaration",
            "modifiers": [
                {
                    "kind": "DeclareKeyword"
                }
            ],
            "name": "kaboom",
            "parameters": [
                {
                    "kind": "Parameter",
                    "name": "conf",
                    "type": {
                        "kind": "TypeReference",
                        "typeName": "KaboomConf"
                    },
                    "questionToken": true
                }
            ],
            "type": {
                "kind": "TypeReference",
                "typeName": "KaboomCtx"
            }
        }
    },
    "interfaces": {}
}