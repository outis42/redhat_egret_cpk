/**
 * Created by Channing on 2014/10/14.
 */
var Daoju = (function (_super) {
    __extends(Daoju, _super);
    function Daoju(num) {
        if (num === void 0) { num = 0; }
        _super.call(this);
        this.initView(num);
    }
    var d = __define,c=Daoju,p=c.prototype;
    p.initView = function (num) {
        if (num === void 0) { num = 0; }
    };
    return Daoju;
}(egret.Sprite));
egret.registerClass(Daoju,'Daoju');
