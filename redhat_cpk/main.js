// window.optConfig.disableBatchGLCommandsToNative();
var oldCreateElement = document.createElement;
document.createElement = function (name) {
    console.log(name);
    if (name === "canvas") {
        console.log(window.__canvas);
        return window.__canvas;
    }
    return oldCreateElement(name);
}

CanvasRenderingContext2D.prototype.drawImage = function(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight) {

}

jsb.fileUtils = {};
jsb.fileUtils.getStringFromFile = function (url) {
    var str = loadRuntime().getFileSystemManager().readFileSync(url, "utf8");
    return str;
}
jsb.fileUtils.getDataFromFile = function (url) {
    var tmp = loadRuntime().getFileSystemManager().readFileSync(url);
    return tmp; 
}

require("js/egret.min.js");
require("js/egret.web.min.js");
require("js/game.min.js");
require("js/game.web.min.js");
require("js/tween.min.js");
require("js/res.min.js");

require("js/main.min.js");


setTimeout(() => {
    /**
     * {
     * "renderMode":, //Engine rendering mode, "canvas" or "webgl"
     * "audioType": 0 //Use the audio type, 0: default, 2: web audio, 3: audio
     * "antialias": //Whether the anti-aliasing is enabled in WebGL mode, true: on, false: off, defaults to false
     * "calculateCanvasScaleFactor": //a function return canvas scale factor
     * }
     **/
    egret.runEgret({
        renderMode: "webgl", audioType: 0, calculateCanvasScaleFactor: function (context) {
            var backingStore = context.backingStorePixelRatio ||
                context.webkitBackingStorePixelRatio ||
                context.mozBackingStorePixelRatio ||
                context.msBackingStorePixelRatio ||
                context.oBackingStorePixelRatio ||
                context.backingStorePixelRatio || 1;
            return (window.devicePixelRatio || 1) / backingStore;
        }
    });
}, 0);
