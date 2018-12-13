/**
 * Created by Channing on 2014/10/9.
 */
var BackGroundView = (function (_super) {
    __extends(BackGroundView, _super);
    function BackGroundView(num) {
        _super.call(this);
        this.initView(num);
    }
    var d = __define,c=BackGroundView,p=c.prototype;
    p.initView = function (num) {
        var bg;
        var leftWall = new Hinder;
        var rightWall = new Hinder;
        switch (num) {
            case 1:
                bg = ResourceUtils.createBitmapByName("fight1BgImage");
                this.addChild(bg);
                leftWall.initView(1, 1);
                rightWall.initView(1, 2);
                break;
            case 2:
                bg = ResourceUtils.createBitmapByName("fight2BgImage");
                this.addChild(bg);
                leftWall.initView(2, 1);
                rightWall.initView(2, 2);
                break;
            case 3:
                bg = ResourceUtils.createBitmapByName("fight3BgImage");
                this.addChild(bg);
                leftWall.initView(3, 1);
                rightWall.initView(3, 2);
                break;
            case 4:
                bg = ResourceUtils.createBitmapByName("fight4BgImage");
                this.addChild(bg);
                leftWall.initView(4, 1);
                rightWall.initView(4, 2);
                break;
            case 5:
                bg = ResourceUtils.createBitmapByName("fight5BgImage");
                this.addChild(bg);
                leftWall.initView(5, 1);
                rightWall.initView(5, 2);
                break;
        }
        this.addChild(rightWall);
        this.addChild(leftWall);
        rightWall.x = Const.SCENT_WIDTH - rightWall.width;
    };
    return BackGroundView;
}(egret.Sprite));
egret.registerClass(BackGroundView,'BackGroundView');
