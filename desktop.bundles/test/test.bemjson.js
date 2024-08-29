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
        { elem: "css", url: "test.min.css" },
    ],
    scripts: [{ elem: "js", url: "test.min.js" }],
    content: [
        {
            elem: "container",
            mix: { block: "test" },
            content: [
                {
                    tag: "header",
                    block: "header",
                    content: [
                        {
                            elem: "top",
                            content: [
                                {
                                    elem: "logo bordered centered-text",
                                    content: "Лого",
                                },
                                {
                                    elem: "search bordered centered-text",
                                    content: "Строка поиска",
                                },
                                {
                                    elem: "phone bordered centered-text",
                                    content: "Телефон",
                                },
                            ],
                        },
                        {
                            elem: "menu bordered centered-text",
                            content: "Меню",
                        },
                        {
                            elem: "bottom bordered centered-text",
                            content: "Шапка",
                        },
                    ],
                },

                {
                    tag: "aside",
                    block: "aside bordered centered-text",
                    content: "Категории + новости",
                },

                {
                    tag: "main",
                    block: "main bordered centered-text",
                    content: "Содержимое страницы",
                },

                {
                    tag: "footer",
                    block: "footer bordered centered-text",
                    content: "Подвал",
                },
            ],
        },
    ],
};
