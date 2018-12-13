/**
 * Created by Channing on 2014/10/16.
 */
var DaZhaoBar = (function (_super) {
    __extends(DaZhaoBar, _super);
    function DaZhaoBar() {
        _super.call(this);
        this.w = 0;
        //固定遮罩的最小X
        this.b = 0;
        this.rx = 1;
        this.boo = false;
    }
    var d = __define,c=DaZhaoBar,p=c.prototype;
    p.initView = function () {
        var bg = ResourceUtils.createBitmapByName("dazhaoBarBg");
        this.addChild(bg);
        var bar = ResourceUtils.createBitmapByName("dazhaoImage");
        this.addChild(bar);
        bg.x = -2;
        bg.y = 2;
        bar.y = bg.y + 2;
        this.w = bar.width;
        this.r = new egret.Rectangle();
        this.b = bar.x - bar.width;
        this.r.x = this.b;
        this.r.y = 0;
        this.r.width = bar.width;
        this.r.height = bar.height;
        bar.mask = this.r;
        egret.Ticker.getInstance().register(this.onFrameHandler, this);
    };
    p.onFrameHandler = function () {
        if (!this.boo)
            return;
        this.r.x = this.rx;
    };
    p.setValue = function () {
        if (this.boo)
            return;
        if (GameData.profectNum > GameData.dazhaoTime) {
            GameData.profectNum = GameData.dazhaoTime;
        }
        this.r.x = -(this.w - this.w * (GameData.profectNum / GameData.dazhaoTime));
    };
    return DaZhaoBar;
}(egret.Sprite));
egret.registerClass(DaZhaoBar,'DaZhaoBar');
