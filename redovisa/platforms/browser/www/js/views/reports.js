"use strict";
var m = require("mithril");

module.exports = {
    view: function() {
        return [
            m("div", [
                m("h1.text-center", "Reports"),
                m("p", "Bellow you will see all my reports"),
                m("navbar" [
                    m("ul.nav", [
                        m("li", [m("p", "kmom01")])
                    ])
                ])
            ])
        ];
    }
};
