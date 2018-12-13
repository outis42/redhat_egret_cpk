/**
 * Created by husong on 14/10/22.
 */
var ButtonSkin = (function () {
    function ButtonSkin(upSkinName, downSkinName) {
        this._upSkinName = upSkinName;
        this._downSkinName = downSkinName;
    }
    var d = __define,c=ButtonSkin,p=c.prototype;
    d(p, "upSkinName"
        ,function () {
            return this._upSkinName;
        }
    );
    d(p, "downSkinName"
        ,function () {
            return this._downSkinName;
        }
    );
    return ButtonSkin;
}());
egret.registerClass(ButtonSkin,'ButtonSkin');
