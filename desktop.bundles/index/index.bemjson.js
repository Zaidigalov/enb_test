module.exports = {
    block: "page",
    title: "TEST BEM",
    favicon: "/favicon.ico",
    head: [
        { elem: "meta", attrs: { name: "description", content: "" } },
        {
            elem: "meta",
            attrs: {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
        },
        { elem: "css", url: "index.min.css" },
    ],
    scripts: [{ elem: "js", url: "index.min.js" }],
    mods: { theme: "islands" },
    content: [
        {
            elem: "container",
            content: [
                {
                    tag: "header",
                    block: "header",
                    content: [
                        {
                            elem: "top",
                            content: [
                                {
                                    elem: "logo",
                                    content: "Лого",
                                },
                                {
                                    elem: "search",
                                    content: "Строка поиска",
                                },
                                {
                                    elem: "phone",
                                    content: "Телефон",
                                },
                            ],
                        },
                        {
                            elem: "menu",
                            content: "Меню",
                        },
                        {
                            elem: "bottom",
                            content: "Шапка",
                        },
                    ],
                },

                {
                    tag: "aside",
                    block: "aside",
                    content: "Категории + новости",
                },

                {
                    tag: "main",
                    block: "main",
                    content: "Содержимое страницы",
                },

                {
                    tag: "footer",
                    block: "footer",
                    content: "Подвал",
                },
            ],
        },
    ],
};
