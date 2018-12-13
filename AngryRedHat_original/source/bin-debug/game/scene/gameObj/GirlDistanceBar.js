/**
 * Created by Channing on 2014/10/15.
 */
var GirlDistanceBar = (function (_super) {
    __extends(GirlDistanceBar, _super);
    function GirlDistanceBar() {
        _super.call(this);
        this._heightBar = 0;
        this.initView();
    }
    var d = __define,c=GirlDistanceBar,p=c.prototype;
    p.initView = function () {
        var bar = ResourceUtils.createBitmapByName("distanceBarImage");
        this.addChild(bar);
        this.head = ResourceUtils.createBitmapByName("redGirlHeadImage");
        this.addChild(this.head);
        bar.x = this.head.width / 2;
        this._heightBar = bar.height;
        this.head.y = this._heightBar;
    };
    /**
     *
     * @param totalNum      怪物出怪次数（2个同事出现算一次）
     * @param freeTime      间隔的时间
     */
    p.moveHead = function (totalNum, freeTime) {
        if (totalNum === void 0) { totalNum = 0; }
        if (freeTime === void 0) { freeTime = 0; }
        this.head.y = this._heightBar - this._heightBar * (GameData.redGirlDistance / (totalNum + freeTime));
    };
    return GirlDistanceBar;
}(egret.Sprite));
egret.registerClass(GirlDistanceBar,'GirlDistanceBar');
