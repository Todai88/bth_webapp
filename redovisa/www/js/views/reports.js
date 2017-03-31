"use strict";
var m = require("mithril");

module.exports = {
    view: function() {
        return [
            m("div", [
                m("h1.text-center", "Reporting"),
                m("p", "Bellow you will see all my reports")
            ])
        ];
    }
};
