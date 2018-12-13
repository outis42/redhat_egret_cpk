/**
 * Created by Channing on 2014/10/13.
 */
var StreakNum = (function (_super) {
    __extends(StreakNum, _super);
    function StreakNum() {
        _super.call(this);
        this.conboW = 0;
        this.initView();
    }
    var d = __define,c=StreakNum,p=c.prototype;
    p.initView = function () {
        var combo = ResourceUtils.createBitmapByName("comboImage");
        this.addChild(combo);
        this.conboW = combo.width;
        this.showSorce = new SpecialNumber("number-0");
        this.showSorce.x = this.conboW / 2 - this.showSorce.width / 2;
        this.showSorce.y = combo.height + 5;
        this.addChild(this.showSorce);
    };
    p.setValue = function (sorce) {
        if (sorce === void 0) { sorce = 0; }
        this.showSorce.x = this.conboW / 2 - this.showSorce.width / 2;
        this.showSorce.setValue(sorce + "");
    };
    return StreakNum;
}(egret.Sprite));
egret.registerClass(StreakNum,'StreakNum');
