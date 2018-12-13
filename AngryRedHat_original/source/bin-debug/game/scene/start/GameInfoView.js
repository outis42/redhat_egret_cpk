/**
 * Created by Channing on 2014/10/9.
 */
var GameInfoView = (function (_super) {
    __extends(GameInfoView, _super);
    function GameInfoView() {
        _super.call(this);
        this.initView();
    }
    var d = __define,c=GameInfoView,p=c.prototype;
    p.initView = function () {
        var bg = ResourceUtils.createBitmapByName("gameinfoImage");
        this.addChild(bg);
        var startBtn = new MyButtonForGame("startBtnImage", "startBtnImage");
        this.addChild(startBtn);
        startBtn.y = Const.SCENT_HEIGHT - startBtn.height;
        startBtn.x = Const.SCENT_WIDTH / 2 - startBtn.width / 2;
        startBtn.setClick(this.onStartGameHandler.bind(this));
    };
    p.onStartGameHandler = function () {
        GameSceneView._gameScene.play();
        this.removeChildren();
    };
    return GameInfoView;
}(egret.Sprite));
egret.registerClass(GameInfoView,'GameInfoView');
