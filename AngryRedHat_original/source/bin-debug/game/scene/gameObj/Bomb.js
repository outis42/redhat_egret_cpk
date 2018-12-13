/**
 * Created by Channing on 2014/10/11.
 */
var Bomb = (function (_super) {
    __extends(Bomb, _super);
    function Bomb() {
        _super.call(this);
        this.speed = 0;
        this.angle = 0;
        this.lastX = 0;
        this.lastY = 0;
        this.sp = ResourceUtils.createBitmapByName("bombImage");
        this.addChild(this.sp);
        this.sp.x = this.sp.width / 2;
        this.sp.rotation = 90;
        this.speed = 30;
        egret.Ticker.getInstance().register(this.onFrame, this);
    }
    var d = __define,c=Bomb,p=c.prototype;
    p.move = function () {
        this.rotation = Math.atan2(this.lastY - this.y, this.lastX - this.x) * 180 / Math.PI;
        this.angle = this.rotation;
    };
    p.onFrame = function () {
        if (!this.visible)
            return;
        this.x += this.speed * Math.cos(this.angle / 180 * Math.PI);
        this.y += this.speed * Math.sin(this.angle / 180 * Math.PI);
        var n = Math.sqrt(Math.pow(this.x - this.lastX, 2) + Math.pow(this.y - this.lastY, 2));
        if (n < 15) {
            //播放爆炸动画
            this.visible = false;
        }
    };
    p.dispose = function () {
        egret.Ticker.getInstance().unregister(this.onFrame, this);
        this.removeChildren();
        this.sp = null;
    };
    return Bomb;
}(egret.Sprite));
egret.registerClass(Bomb,'Bomb');
