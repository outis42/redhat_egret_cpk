/**
 * Created by husong on 14/10/22.
 */
var Button = (function (_super) {
    __extends(Button, _super);
    function Button(buttonVO) {
        if (buttonVO === void 0) { buttonVO = null; }
        _super.call(this);
        this._buttonSkin = buttonVO;
        this.upBmp = new egret.Bitmap();
        this.upBmp.visible = true;
        this.downBmp = new egret.Bitmap();
        this.downBmp.visible = false;
        this.lable = new egret.Bitmap();
        this.touchEnabled = true;
        this.addChild(this.upBmp);
        this.addChild(this.downBmp);
        this.addChild(this.lable);
        this.setTexture(buttonVO);
        this.addHandlers();
    }
    var d = __define,c=Button,p=c.prototype;
    p.addHandlers = function () {
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchHandler, this);
        egret.MainContext.instance.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.touchHandler, this);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandler, this);
    };
    p.touchHandler = function (event) {
        switch (event.type) {
            case egret.TouchEvent.TOUCH_BEGIN:
                this.upBmp.visible = false;
                this.downBmp.visible = true;
                break;
            case egret.TouchEvent.TOUCH_END:
                this.upBmp.visible = true;
                this.downBmp.visible = false;
                break;
            case egret.TouchEvent.TOUCH_TAP:
                //                this.clickHandler(event);
                this.clickHandler.call(this.clickHandlerObj, event);
                break;
        }
    };
    p.setTexture = function (buttonVO) {
        if (buttonVO) {
            this._buttonSkin = buttonVO;
            this.upBmp.texture = GameUtils.createTextureByName(buttonVO.upSkinName);
            this.downBmp.texture = GameUtils.createTextureByName(buttonVO.downSkinName);
        }
    };
    p.setLableTexture = function (name) {
        this.lable.texture = GameUtils.createTextureByName(name);
        this.lable.x = this.width / 2 - this.lable.width / 2;
        this.lable.y = this.height / 2 - this.lable.height / 2;
    };
    d(p, "buttonSkin"
        ,function () {
            return this._buttonSkin;
        }
    );
    p.setClickHandler = function (func, funcObj) {
        this.clickHandler = func;
        this.clickHandlerObj = funcObj;
    };
    return Button;
}(egret.Sprite));
egret.registerClass(Button,'Button');
