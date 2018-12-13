/**
 * Created by Administrator on 2014/10/16.
 */
var Line = (function (_super) {
    __extends(Line, _super);
    function Line() {
        _super.call(this);
        this.boo = false;
        this.sp = ResourceUtils.createBitmapByName("lineImage");
        this.addChild(this.sp);
        this.sp.x = this.sp.width / 2;
        egret.Ticker.getInstance().register(this.onFrame, this);
    }
    var d = __define,c=Line,p=c.prototype;
    p.move = function () {
        this.visible = true;
        this.boo = true;
    };
    p.onFrame = function (e) {
        if (this.boo) {
            this.y += GameData.enemySpeed * 3;
            if (this.y > Const.SCENT_HEIGHT) {
                this.visible = false;
                this.boo = false;
            }
        }
    };
    return Line;
}(egret.Sprite));
egret.registerClass(Line,'Line');
