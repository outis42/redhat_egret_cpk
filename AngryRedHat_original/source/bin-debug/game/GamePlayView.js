/**
 * Created by Channing on 2014/10/9.
 */
var GamePlayView = (function (_super) {
    __extends(GamePlayView, _super);
    function GamePlayView() {
        _super.call(this);
        this.sp = new egret.Sprite();
        this.sp.touchEnabled = true;
        this.addChild(this.sp);
    }
    var d = __define,c=GamePlayView,p=c.prototype;
    p.showGame = function (index) {
        GameData.isStartClickOption = true;
        GameData.isStart = false;
        var optionBtn = new egret.Sprite();
        var optionBmp = ResourceUtils.createBitmapByName("optionBtnImage");
        optionBtn.addChild(optionBmp);
        optionBtn.touchEnabled = true;
        optionBtn.x = Const.SCENT_WIDTH - optionBtn.width;
        optionBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showOptionView, this);
        this.sp.removeChildren();
        switch (index) {
            case 1:
                var game1 = new GameFightOneView();
                this.sp.addChild(game1);
                this.target = game1;
                this.thisContainer = ResourceUtils.createBitmapByName("gameinfo_1_Image");
                this.sp.addChild(this.thisContainer);
                break;
            case 2:
                var game2 = new GameFightTwoView();
                this.sp.addChild(game2);
                this.target = game2;
                this.thisContainer = ResourceUtils.createBitmapByName("gameinfo_2_Image");
                this.sp.addChild(this.thisContainer);
                break;
            case 3:
                var game3 = new GameFightThreeView();
                this.sp.addChild(game3);
                this.target = game3;
                this.thisContainer = ResourceUtils.createBitmapByName("gameinfo_3_Image");
                this.sp.addChild(this.thisContainer);
                break;
            case 4:
                var game4 = new GameFightFourView();
                this.sp.addChild(game4);
                this.target = game4;
                this.thisContainer = ResourceUtils.createBitmapByName("gameinfo_4_Image");
                this.sp.addChild(this.thisContainer);
                break;
            case 5:
                var game5 = new GameFightFiveView();
                this.sp.addChild(game5);
                this.target = game5;
                this.thisContainer = ResourceUtils.createBitmapByName("gameinfo_5_Image");
                this.sp.addChild(this.thisContainer);
                break;
        }
        this.addChild(optionBtn);
        this.optionView = new OptionView();
        this.addChild(this.optionView);
        this.optionView.visible = false;
        this.sp.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startHandler, this);
    };
    p.startHandler = function (e) {
        if (this.optionView.visible == true)
            return;
        if (GameData.isClickBtn)
            return;
        GameData.isStart = true;
        this.sp.removeChild(this.thisContainer);
        this.sp.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.startHandler, this);
        this.thisContainer = null;
        this.sp.touchEnabled = false;
        this.ready = StarlingSwfFactory.getInstance().makeMc("go");
        this.ready.x = Const.SCENT_WIDTH / 2;
        this.ready.y = Const.SCENT_HEIGHT / 2;
        this.addChild(this.ready);
        this.ready.goToPlay("1");
        SoundUtils.instance().playNum();
        GameData.isStartClickOption = false;
        this.ready.setCompleteAction(this.complete1, this);
    };
    p.showOptionView = function () {
        if (GameData.isStartClickOption) {
            this.optionView.visible = true;
            GameData.isPause = true;
        }
    };
    p.complete1 = function () {
        this.ready.goToPlay("2");
        SoundUtils.instance().playGo();
        egret.setTimeout(this.complete2.bind(this), this, 300);
    };
    p.complete2 = function () {
        GameData.isStartClickOption = true;
        GameData.isStart = true;
        GameData.isPause = false;
        SoundUtils.instance().playBg();
        this.target.redGirl.run();
        this.removeChild(this.ready);
    };
    return GamePlayView;
}(egret.Sprite));
egret.registerClass(GamePlayView,'GamePlayView');
