/**
 * Created by Channing on 2014/10/14.
 */
var House = (function (_super) {
    __extends(House, _super);
    function House() {
        _super.call(this);
        this.initView();
    }
    var d = __define,c=House,p=c.prototype;
    p.initView = function () {
        var house = ResourceUtils.createBitmapByName("houseImage");
        this.addChild(house);
    };
    return House;
}(egret.Sprite));
egret.registerClass(House,'House');
