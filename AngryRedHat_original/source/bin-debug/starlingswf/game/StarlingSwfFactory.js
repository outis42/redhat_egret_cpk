/**
 * Created by Administrator on 2014/6/16.
 */
var StarlingSwfFactory = (function () {
    function StarlingSwfFactory() {
        this.swfAssetsManager = new starlingswf.SwfAssetManager();
        this.swfAssetsNames = new Array();
        this.swfAssets = new Array();
        this.swfData = {};
    }
    var d = __define,c=StarlingSwfFactory,p=c.prototype;
    /**
     * 单例
     * @returns {StarlingSwfFactory}
     */
    StarlingSwfFactory.getInstance = function () {
        if (StarlingSwfFactory._instance == null) {
            StarlingSwfFactory._instance = new StarlingSwfFactory();
        }
        return StarlingSwfFactory._instance;
    };
    p.addSwf = function (name, swfData, spriteSheep) {
        if (this.swfAssetsNames.indexOf(name) != -1)
            return;
        if (swfData == null || spriteSheep == null) {
            console.log("SWF加载失败:" + name);
            return;
        }
        this.swfAssetsManager.addSpriteSheet(name, spriteSheep);
        var swf = new starlingswf.Swf(swfData, this.swfAssetsManager, 24);
        swf.name = name;
        StarlingSwfUtils.addSwf(swf);
        this.swfAssetsNames.push(name);
        this.swfAssets.push(swf);
    };
    p.stopSwfs = function (arr) {
        for (var i = 0, len = arr.length; i < len; i++) {
            var swf = StarlingSwfUtils.getSwf(arr[i]);
            if (swf) {
                swf.swfUpdateManager.stop();
            }
        }
    };
    p.playSwfs = function (arr) {
        for (var i = 0, len = arr.length; i < len; i++) {
            var swf = StarlingSwfUtils.getSwf(arr[i]);
            if (swf) {
                swf.swfUpdateManager.play();
            }
        }
    };
    p.clearSwfs = function () {
        while (this.swfAssets.length) {
            StarlingSwfUtils.removeSwf(this.swfAssets.pop());
        }
        while (this.swfAssetsNames.length) {
            this.swfAssetsNames.pop();
        }
        this.swfAssetsManager = new starlingswf.SwfAssetManager();
    };
    p.clear = function () {
        this.clearSwfs();
    };
    p.makeMc = function (name) {
        var mc = StarlingSwfUtils.createMovie("mc_" + name, null, StarlingSwfMovieClip);
        if (mc == null) {
            console.log("SWF创建失败: " + name);
        }
        return mc;
    };
    p.makeImage = function (name) {
        return StarlingSwfUtils.createImage("img_" + name);
    };
    p.getTexture = function (name) {
        return StarlingSwfUtils.getTexture("img_" + name);
    };
    return StarlingSwfFactory;
}());
egret.registerClass(StarlingSwfFactory,'StarlingSwfFactory');
