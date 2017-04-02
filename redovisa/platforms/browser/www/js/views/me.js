"use strict";
var m = require("mithril");

module.exports = {
    view: function() {
        return [
            m("div", [
                m("h1", "Joakim Bajoul Kakaei"),
                m("div", [
                    m("p", {class: "intro-img"}, "My name is Joakim, I'm originally from Sweden, but am now living and working outside of London."),
                    m("img", {src: "http://res.cloudinary.com/todai/image/upload/v1469712578/12976795_10208023281372738_6826518550098825642_o_mgir5b.jpg", class: "img-circle"})
                ]),
                m("div.top-buffer", [
                    m("p", "During daytime I develop maintainable software code and by night I study various courses in computer science subjects; specicifically regarding security.")
                ])
            ])
        ];
    }
};
