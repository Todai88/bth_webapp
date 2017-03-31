"use strict";
var m = require("mithril");

module.exports = {
    view: function() {
        return [
            m("h1", "My hobby"),
            m("p", "I enjoy coding, studying, playing video games and hanging out with my girlfriend. Not necessarily in that order.."),
            m("p", "In addition to that I also help teach and mentor people who are interested in learning to code or who are coding, but looking to learn more.")
        ];
    }
};
