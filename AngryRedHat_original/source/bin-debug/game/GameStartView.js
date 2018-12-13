/**
 * Created by Administrator on 2014/10/9.
 */
var GameStartView = (function (_super) {
    __extends(GameStartView, _super);
    function GameStartView() {
        _super.call(this);
        this.initView();
    }
    var d = __define,c=GameStartView,p=c.prototype;
    p.initView = function () {
        var bg = ResourceUtils.createBitmapByName("bgImage");
        bg.width = Const.SCENT_WIDTH;
        bg.height = Const.SCENT_HEIGHT;
        this.addChild(bg);
        var startBtn = new MyButtonForGame("startBtnImage", "startBtnImage");
        this.addChild(startBtn);
        startBtn.y = Const.SCENT_HEIGHT - startBtn.height - 30;
        startBtn.x = Const.SCENT_WIDTH / 2 - startBtn.width / 2;
        startBtn.setClick(this.onStartGameHandler.bind(this));
        var music_btn = new MyButtonForGame("musicBtnImage", "musicBtnImage");
        this.addChild(music_btn);
        music_btn.x = startBtn.x + startBtn.width + 10;
        music_btn.y = startBtn.y + 10;
        music_btn.setClick(this.showGameSoundHandler.bind(this));
        var help_btn = new MyButtonForGame("helpBtnImage", "helpBtnImage");
        this.addChild(help_btn);
        help_btn.x = startBtn.x - 10 - help_btn.width;
        help_btn.y = startBtn.y + 10;
        help_btn.setClick(this.showGameInfoHandler.bind(this));
        this.gameSoundPop = new MusicView();
        this.addChild(this.gameSoundPop);
        this.gameSoundPop.visible = false;
    };
    p.showGameSoundHandler = function (e) {
        this.gameSoundPop.visible = true;
        GameData.isClickBtn = true;
    };
    p.showGameInfoHandler = function (e) {
        this.removeAll();
        var gameInfo = new GameInfoView();
        this.addChild(gameInfo);
    };
    p.onStartGameHandler = function () {
        GameSceneView._gameScene.play();
        this.removeAll();
    };
    p.removeAll = function () {
        this.removeChildren();
        this.gameSoundPop = null;
    };
    return GameStartView;
}(egret.Sprite));
egret.registerClass(GameStartView,'GameStartView');
