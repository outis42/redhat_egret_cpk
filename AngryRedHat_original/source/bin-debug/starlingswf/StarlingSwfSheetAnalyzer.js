/**
 * StarlingSwfSpriteSheet解析器
 */
var starlingswf;
(function (starlingswf) {
    var StarlingSwfSheetAnalyzer = (function (_super) {
        __extends(StarlingSwfSheetAnalyzer, _super);
        function StarlingSwfSheetAnalyzer() {
            _super.apply(this, arguments);
        }
        var d = __define,c=StarlingSwfSheetAnalyzer,p=c.prototype;
        p.parseSpriteSheet = function (texture, data) {
            var frames = data.frames;
            if (!frames) {
                return;
            }
            var spriteSheet = new egret.SpriteSheet(texture);
            for (var name in frames) {
                var config = frames[name];
                spriteSheet.createTexture(name, config.x, config.y, config.w, config.h, -config.offX, -config.offY);
            }
            return spriteSheet;
        };
        return StarlingSwfSheetAnalyzer;
    }(RES.SheetAnalyzer));
    starlingswf.StarlingSwfSheetAnalyzer = StarlingSwfSheetAnalyzer;
    egret.registerClass(StarlingSwfSheetAnalyzer,'starlingswf.StarlingSwfSheetAnalyzer');
})(starlingswf || (starlingswf = {}));
