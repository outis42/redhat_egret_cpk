/**
 * Created by Channing on 2014/9/17.
 */
var MyButtonForGame = (function (_super) {
    __extends(MyButtonForGame, _super);
    function MyButtonForGame(bgName, titleName) {
        _super.call(this);
        this.sp = new egret.Sprite();
        this.addChild(this.sp);
        this.bg = ResourceUtils.createBitmapByName(bgName);
        this.sp.addChild(this.bg);
        this.title = ResourceUtils.createBitmapByName(titleName);
        if (this.title.texture == null) {
            this.title.texture = RES.getRes(titleName);
        }
        this.title.x = (this.bg.width - this.title.width) >> 1;
        this.title.y = (this.bg.height - this.title.height) >> 1;
        this.sp.addChild(this.title);
        this.noScaleX = this.sp.x;
        this.noScaleY = this.sp.y;
    }
    var d = __define,c=MyButtonForGame,p=c.prototype;
    p.setClick = function (func) {
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickEvent, this);
        this.onClick = func;
    };
    p.onClickEvent = function () {
        if (GameData.isClickBtn)
            return;
        var scaleX = (this.sp.width - this.sp.width * 0.8) / 2;
        var scaleY = (this.sp.height - this.sp.height * 0.8) / 2;
        this.tw = egret.Tween.get(this.sp);
        this.tw.to({ "scaleX": 0.7, "scaleY": 0.7, "x": scaleX, "y": scaleY }, 40).to({ "scaleX": 1, "scaleY": 1, "x": this.noScaleX, "y": this.noScaleY }, 40).call(this.onClickHandler, this);
    };
    p.onClickHandler = function () {
        this.onClick();
    };
    return MyButtonForGame;
}(egret.Sprite));
egret.registerClass(MyButtonForGame,'MyButtonForGame');
