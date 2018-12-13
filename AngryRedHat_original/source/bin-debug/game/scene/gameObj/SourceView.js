/**
 * Created by Channing on 2014/10/15.
 */
var SourceView = (function (_super) {
    __extends(SourceView, _super);
    function SourceView() {
        _super.call(this);
        this.initView();
    }
    var d = __define,c=SourceView,p=c.prototype;
    p.initView = function () {
        var sorceMc = ResourceUtils.createBitmapByName("sorceMcImage");
        this.addChild(sorceMc);
        this.showSorce = new SpecialNumber("number-");
        this.showSorce.x = sorceMc.width + 10;
        this.addChild(this.showSorce);
    };
    p.setValue = function (sorce) {
        if (sorce === void 0) { sorce = 0; }
        this.showSorce.setValue(sorce + "");
    };
    return SourceView;
}(egret.Sprite));
egret.registerClass(SourceView,'SourceView');
