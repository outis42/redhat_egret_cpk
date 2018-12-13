/**
 * Created by Channing on 2014/10/10.
 */
var FightButton = (function (_super) {
    __extends(FightButton, _super);
    function FightButton() {
        _super.call(this);
        this.initView();
    }
    var d = __define,c=FightButton,p=c.prototype;
    p.initView = function () {
        this.button = StarlingSwfFactory.getInstance().makeMc("bazi");
        this.addChild(this.button);
        this.button.gotoAndStop(0);
    };
    p.goPlay = function (num) {
        this.button.gotoAndStop(num);
    };
    return FightButton;
}(egret.Sprite));
egret.registerClass(FightButton,'FightButton');
