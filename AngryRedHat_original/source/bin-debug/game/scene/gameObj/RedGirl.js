/**
 * 小红帽
 * Created by Channing on 2014/10/11.
 */
var RedGirl = (function (_super) {
    __extends(RedGirl, _super);
    function RedGirl() {
        _super.call(this);
        this.initView();
    }
    var d = __define,c=RedGirl,p=c.prototype;
    p.initView = function () {
        this.girl = StarlingSwfFactory.getInstance().makeMc("xiaohongmao");
        this.addChild(this.girl);
        this.girl.gotoAndStop(0);
    };
    p.run = function () {
        this.girl.goToPlay("1");
    };
    p.gotoDie = function () {
        this.girl.goToPlay("2");
    };
    p.gotoWin = function () {
        this.girl.goToPlay("3");
    };
    p.dispose = function () {
        this.removeChildren();
    };
    return RedGirl;
}(egret.Sprite));
egret.registerClass(RedGirl,'RedGirl');
