/**
 * Created by husong on 14/11/7.
 */
var ReliveView = (function (_super) {
    __extends(ReliveView, _super);
    function ReliveView() {
        _super.call(this);
        this.initUI();
    }
    var d = __define,c=ReliveView,p=c.prototype;
    p.initUI = function () {
        var bg = GameUtils.createBitmapByName("newAssets.blackBg");
        bg.touchEnabled = true;
        bg.alpha = 0.3;
        bg.width = Const.SCENT_WIDTH;
        bg.height = Const.SCENT_HEIGHT;
        this.addChild(bg);
        this.btnRelive = new Button();
        this.btnRelive.setTexture(new ButtonSkin("newAssets.btn01_up", "newAssets.btn01_down"));
        this.btnRelive.setLableTexture("newAssets.fuhuo");
        this.btnRelive.x = Const.SCENT_WIDTH / 2 - this.btnRelive.width - 10;
        this.btnRelive.y = Const.SCENT_HEIGHT / 2 - this.btnRelive.height - 10;
        this.addChild(this.btnRelive);
        this.btnOver = new Button();
        this.btnOver.setTexture(new ButtonSkin("newAssets.btn02_up", "newAssets.btn02_down"));
        this.btnOver.setLableTexture("newAssets.jieshu");
        this.btnOver.x = Const.SCENT_WIDTH / 2 + 10;
        this.btnOver.y = Const.SCENT_HEIGHT / 2 - this.btnRelive.height - 10;
        this.addChild(this.btnOver);
    };
    p.setGameOver = function (func, funcObj) {
        this.btnOver.setClickHandler(func, funcObj);
    };
    p.setRelive = function (func, funcObj) {
        this.btnRelive.setClickHandler(func, funcObj);
    };
    return ReliveView;
}(egret.DisplayObjectContainer));
egret.registerClass(ReliveView,'ReliveView');
