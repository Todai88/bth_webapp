"use strict";
var m = require("mithril");

module.exports = {
    view: function() {
        return [
            m("div", [
                m("h1", "About me"),
                m("img", {src: "http://res.cloudinary.com/todai/image/upload/v1469712578/12976795_10208023281372738_6826518550098825642_o_mgir5b.jpg"})
            ]),
            m("p", "Hi everyone. My name is Joakim Bajoul Kakaei. I'm a Swedish software developer living and working in Tunbridge Wells, UK."),
            m("p", "I enjoy coding, studying, playing video games and hanging out with my girlfriend. Not necessarily in that order.."),
            m("p", "In addition to that I also help teach and mentor people who are interested in learning to code or who are coding, but looking to learn more.")
        ];
    }
};
