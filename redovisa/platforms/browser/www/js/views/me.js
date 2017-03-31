"use strict";
var m = require("mithril");

module.exports = {
    view: function() {
        return [
            m("div", [
                m("h1", "Joakim Bajoul Kakaei"),
                m("p", "My name is Joakim, I'm originally from Sweden, but am now living and working outside of London."),
                m("p", "During daytime I develop maintainable software code and by night I study various courses in computer science subjects; specicifically regarding security.")
            ])
        ];
    }
};
