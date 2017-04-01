"use strict";
var m = require("mithril");

module.exports = {
    view: function(vnode) {
        return m("main", [
            m("nav", {class: "navbar navbar-toggleable-xs navbar-light bg-faded"}, [
                m("button", {class: "navbar-toggler navbar-toggler-right",
                             type: "button", 'data-toggle': "collapse",
                             'data-target': "#navbarSupportedContent", 'aria-controls':"navbarSupportedContent",
                             'aria-expanded':"false", 'aria-label':"Toggle navigation"}
                             , [
                                 m("span", {class: "navbar-toggler-icon"})
                             ]),
                m("a", {class: "navbar-brand", href: "/", oncreate: m.route.link}, "Joakim BK"),
                m("div", {class: "collapse navbar-collapse", id: "navbarSupportContent"}, [
                    m("ul", {class: "navbar-nav"}, [
                        m("li", {class: "nav-item"}, [
                            m("a", {class: "nav-link", href: "/", oncreate: m.route.link}, "Me")
                        ]),
                        m("li", {class: "navbar-item"}, [
                            m("a", {class: "nav-link", href: "/hobby", oncreate: m.route.link}, "Hob")
                        ]),
                        m("li", {class: "navbar-item"}, [
                            m("a", {class: "nav-link", href: "/reports", oncreate: m.route.link}, "Reports")
                        ])
                    ])
                ])
            ]),
            m("section.container", vnode.children)
        ]);
    }
};
