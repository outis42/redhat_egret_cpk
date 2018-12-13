/**
 * Created by Administrator on 2014/10/9.
 */
var BgView = (function (_super) {
    __extends(BgView, _super);
    function BgView() {
        _super.call(this);
        this.bg1Height = 0;
        this.bg2Height = 0;
    }
    var d = __define,c=BgView,p=c.prototype;
    p.initView = function (num) {
        this.bg2 = new BackGroundView(num);
        this.addChild(this.bg2);
        this.bg1 = new BackGroundView(num);
        this.addChild(this.bg1);
        this.bg1Height = this.bg1.height;
        this.bg1.y = -this.bg1Height + Const.SCENT_HEIGHT;
        this.bg2Height = this.bg2.height;
        this.bg2.y = this.bg1.y - this.bg2Height;
    };
    p.updata = function () {
        if (this.bg1.y >= Const.SCENT_HEIGHT) {
            this.bg1.y = this.bg2.y - this.bg1Height;
        }
        if (this.bg2.y >= Const.SCENT_HEIGHT) {
            this.bg2.y = this.bg1.y - this.bg2Height;
        }
        this.bg1.y += GameData.bgSpeed;
        this.bg2.y += GameData.bgSpeed;
    };
    p.dispose = function () {
        this.removeChildren();
        this.bg1 = null;
        this.bg2 = null;
    };
    return BgView;
}(egret.Sprite));
egret.registerClass(BgView,'BgView');
