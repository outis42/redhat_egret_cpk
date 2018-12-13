/**
 * 主角血量
 * Created by Channing on 2014/10/15.
 */
var BoldBar = (function (_super) {
    __extends(BoldBar, _super);
    function BoldBar() {
        _super.call(this);
        this.w = 0;
        this.initView();
    }
    var d = __define,c=BoldBar,p=c.prototype;
    p.initView = function () {
        var barBg = ResourceUtils.createBitmapByName("blodBarBgImage");
        this.addChild(barBg);
        var blodBar = ResourceUtils.createBitmapByName("blodBarImage");
        this.addChild(blodBar);
        blodBar.x = 38;
        blodBar.y = 8;
        this.w = blodBar.width;
        this.r = new egret.Rectangle();
        this.r.x = 0;
        this.r.y = 0;
        this.r.width = blodBar.width;
        this.r.height = blodBar.height;
        blodBar.mask = this.r;
    };
    p.scaleBlodX = function () {
        this.r.x = -(this.w - this.w * (GameData.blod / 5));
    };
    return BoldBar;
}(egret.Sprite));
egret.registerClass(BoldBar,'BoldBar');
