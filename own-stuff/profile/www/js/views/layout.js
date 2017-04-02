"use strict";
var m = require("mithril");

module.exports = {
    view: function(vnode) {
        return m("main", [
            m("nav", {class: "navbar navbar-toggleable"}, [
                m("a", {class: "navbar-brand", href: "/", oncreate: m.route.link}, "Joakim BK"),
                m("div", {class: "navbar-collapse"}, [
                    m("ul", {class: "navbar-nav navbar-right"}, [
                        m("li", {class: "nav-item"}, [
                            m("a", {class: "nav-link", href: "/", oncreate: m.route.link}, "Me")
                        ]),
                        m("li", {class: "navbar-item"}, [
                            m("a", {class: "nav-link", href: "/hobby", oncreate: m.route.link}, "Hobbies")
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
