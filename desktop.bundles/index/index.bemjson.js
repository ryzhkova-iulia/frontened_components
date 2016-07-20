({
    block: 'page',
    title: 'Frontened',
    styles: [
        {elem: 'css', url: 'index.min.css'}
    ],
    scripts: [
        {tag: 'script', attrs: {src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js'}},
        {tag: 'script', attrs: {src: 'main.js'}}


    ],
    content: [
        {
            block: "block",
            mods: {blue: true},
            content: {
                elem: "inner",
                mix: {block: 'center'},
                mods: {padding_star: true},
                content:  {
                    block: "rate",
                    mods : {edit : true},  //добавлен модификатор для редактирования, если его убрать то поставить оценку будет невозможно
                    content: [
                        {
                            elem: "item",
                            tag: "a",
                            attrs: {href: "#"}
                        },
                        {
                            elem: "item",
                            tag: "a",
                            attrs: {href: "#"}
                        },
                        {
                            elem: "item",
                            tag: "a",
                            attrs: {href: "#"}
                        },
                        {
                            elem: "item",
                            tag: "a",
                            mods: {active: true},
                            attrs: {href: "#"}
                        },
                        {
                            elem: "item",
                            tag: "a",
                            attrs: {href: "#"}
                        }
                    ]
                }

            }
        },
        {
            block: "block",
            content: {
                elem: "inner",
                mix: {block: 'center'},
                content: "postcard"
            }
        },
        {
            block: "block",
            mods: {blue: true},
            content: {
                elem: "inner",
                mods: {padding_parameters: true},
                mix: {block: 'clear'},
                content: [
                    {
                        elem: "title",
                        tag: "h1",
                        content: "Параметры модели"
                    },
                    {
                        block: "parameters",
                        tag: "dl",
                        content: [
                            {
                                elem: "subtitle",
                                tag: "dt",
                                content: "Диагональ экрана"
                            },
                            {
                                elem: "text",
                                tag: "dd",
                                content: "15.6"
                            },
                            {
                                elem: "subtitle",
                                tag: "dt",
                                content: "Тип подсветки экрана"
                            },
                            {
                                elem: "text",
                                tag: "dd",
                                content: "Светодиодная"
                            },
                            {
                                elem: "subtitle",
                                tag: "dt",
                                content: "Поверхность экрана"
                            },
                            {
                                elem: "text",
                                tag: "dd",
                                content: "Матовая"
                            },
                            {
                                elem: "subtitle",
                                tag: "dt",
                                content: "Разрешение экрана"
                            },
                            {
                                elem: "text",
                                tag: "dd",
                                content: "1366x768"
                            }
                        ]
                    },
                    {
                        block: "parameters",
                        tag: "dl",
                        content: [
                            {
                                elem: "subtitle",
                                tag: "dt",
                                content: "Диагональ экрана"
                            },
                            {
                                elem: "text",
                                tag: "dd",
                                content: "15.6"
                            },
                            {
                                elem: "subtitle",
                                tag: "dt",
                                content: "Тип подсветки экрана"
                            },
                            {
                                elem: "text",
                                tag: "dd",
                                content: "Светодиодная"
                            },
                            {
                                elem: "subtitle",
                                tag: "dt",
                                content: "Поверхность экрана"
                            },
                            {
                                elem: "text",
                                tag: "dd",
                                content: "Матовая"
                            },
                            {
                                elem: "subtitle",
                                tag: "dt",
                                content: "Разрешение экрана"
                            },
                            {
                                elem: "text",
                                tag: "dd",
                                content: "1366x768"
                            }
                        ]
                    },
                    {
                        block: "parameters",
                        mods: {last_child: true},
                        tag: "dl",
                        content: [
                            {
                                elem: "subtitle",
                                tag: "dt",
                                content: "Диагональ экрана"
                            },
                            {
                                elem: "text",
                                tag: "dd",
                                content: "15.6"
                            },
                            {
                                elem: "subtitle",
                                tag: "dt",
                                content: "Тип подсветки экрана"
                            },
                            {
                                elem: "text",
                                tag: "dd",
                                content: "Светодиодная"
                            },
                            {
                                elem: "subtitle",
                                tag: "dt",
                                content: "Поверхность экрана"
                            },
                            {
                                elem: "text",
                                tag: "dd",
                                content: "Матовая"
                            },
                            {
                                elem: "subtitle",
                                tag: "dt",
                                content: "Сайт производителя"
                            },
                            {
                                elem: "text",
                                mods: {pink: true},
                                tag: "dd",
                                content: " http://site.com"
                            }
                        ]
                    }
                ]
            }
        },
        {
            block: "block",
            content: {
                elem: "inner",
                mods: {padding_message: true},
                mix: {block: 'center'},
                content: [
                    {
                        block : "min-user",
                        content : [
                            {
                                block: "ic-message",
                                tag: "i",
                                cls : 'js-message',
                                attrs : {"data-content" : 'js-message-desc'},
                                content:
                                    [
                                        {
                                            elem: "count",
                                            tag: "sup",
                                            content: "1"
                                        },
                                        {
                                            block : 'message-popup',
                                            cls : 'js-message-desc',
                                            content : [
                                                {
                                                    elem : "close",
                                                    cls : "js-close",
                                                    tag : "button"
                                                },
                                                {
                                                    content : [
                                                        {
                                                            elem: "item",
                                                            content: [
                                                                "Заявка 13513 <br> переведена в статус ",
                                                                {
                                                                    elem: "status",
                                                                    content: "Решена",
                                                                    mods: {type: "approve"}
                                                                },
                                                                "<br>",
                                                                {
                                                                    elem: "more",
                                                                    tag: "a",
                                                                    attrs: {href: "#"},
                                                                    content: "Просмотреть"
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            elem: "item",
                                                            content: [
                                                                "Заявка 13513 <br> переведена в статус ",
                                                                {
                                                                    elem: "status",
                                                                    content: "Отклонена",
                                                                    mods: {type: "reject"}
                                                                },
                                                                "<br>",
                                                                {
                                                                    elem: "more",
                                                                    tag: "a",
                                                                    attrs: {href: "#"},
                                                                    content: "Просмотреть"
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                            },
                            {
                                elem : "label",
                                content : "Марьяна Васильевна"
                            }
                        ]
                    }
                ]
            }
        },
        {
            block: "block",
            mix: {block: 'clear'},
            mods: {blue: true},
            content: {
                elem: "inner",
                mods: {padding_panel: true},
                mix: {block: 'center'},
                content:
                {
                    block: "panel",
                    mix: {block: 'clear'},
                    content:
                        [
                            {
                                elem: "item",
                                tag: "a",
                                attrs: {href: "#"},
                                content: [
                                    {
                                        elem: "icon",
                                        mods: {icon: "refresh"},
                                        tag: "i"
                                    },
                                    "Refresh"
                                ]

                            },
                            {
                                elem: "item",
                                tag: "a",
                                attrs: {href: "#"},
                                content: [
                                    {
                                        elem: "icon",
                                        mods: {icon: "settings"},
                                        tag: "i"
                                    },
                                    "Settings"
                                ]

                            },
                            {
                                elem: "item",
                                tag: "a",
                                attrs: {href: "#"},
                                content: [
                                    {
                                        elem: "icon",
                                        mods: {icon: "user"},
                                        tag: "i"
                                    },
                                    "User"
                                ]

                            }
                        ]
                }
            }
        }
    ]
});
