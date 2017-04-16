"use strict";
var m = require("mithril");

module.exports = {
    view: function(vnode) {
        return m("main", [
            m("navbar", [
                m("div.container", [
                    m("h2.brand", "Joakim Bajoul Kakaei"),
                    m("ul.nav", [
                        m("li", [m("a", {href: "/", oncreate: m.route.link}, "Me")]),
                        m("li", [m("a", {href: "/hobby", oncreate: m.route.link}, "About")]),
                        m("li", [m("a", {href: "/reports", oncreate: m.route.link}, "Reports")])
                    ])
                ])
            ]),
            m("section.container", vnode.children)
        ]);
    }
};
