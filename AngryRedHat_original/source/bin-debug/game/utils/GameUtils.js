/**
 * Created by husong on 14/11/6.
 */
var GameUtils = (function () {
    function GameUtils() {
    }
    var d = __define,c=GameUtils,p=c.prototype;
    GameUtils.createBitmapByName = function (name) {
        var bitmap = new egret.Bitmap();
        bitmap.texture = GameUtils.createTextureByName(name);
        return bitmap;
    };
    GameUtils.createTextureByName = function (name) {
        if (name.indexOf(".") == -1) {
            return RES.getRes(name);
        }
        else {
            var sheetName = name.split(".")[0];
            var textureName = name.split(".")[1];
            return GameUtils.createTexturesFromSheet(textureName, sheetName);
        }
    };
    GameUtils.createTexturesFromSheet = function (name, sheetName) {
        var sheet = RES.getRes(sheetName);
        return sheet.getTexture(name);
    };
    return GameUtils;
}());
egret.registerClass(GameUtils,'GameUtils');
