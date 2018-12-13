/**
 * Created by Channing on 2014/10/9.
 */
var GameSceneView = (function (_super) {
    __extends(GameSceneView, _super);
    function GameSceneView() {
        _super.call(this);
        GameSceneView._gameScene = this;
        this.initView();
    }
    var d = __define,c=GameSceneView,p=c.prototype;
    p.initView = function () {
        this.thisContainer = new egret.Sprite();
        this.addChild(this.thisContainer);
        this.start();
    };
    p.start = function () {
        this.removeAll();
        var gameStart = new GameStartView();
        this.thisContainer.addChild(gameStart);
    };
    p.play = function () {
        this.removeAll();
        var gamePlay = new GamePlayView();
        this.thisContainer.addChild(gamePlay);
        gamePlay.showGame(GameData.curScene);
    };
    p.over = function () {
        this.removeAll();
        var gameOver = new GameOverView();
        this.thisContainer.addChild(gameOver);
    };
    p.removeAll = function () {
        this.thisContainer.removeChildren();
    };
    return GameSceneView;
}(egret.Sprite));
egret.registerClass(GameSceneView,'GameSceneView');
