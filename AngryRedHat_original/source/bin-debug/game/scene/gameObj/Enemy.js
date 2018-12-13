/**
 * Created by Administrator on 2014/10/9.
 */
var Enemy = (function (_super) {
    __extends(Enemy, _super);
    function Enemy(num) {
        _super.call(this);
        this.row = 0; //当前所在行
        this.name = "";
        this.over = false;
        this.stopMove = false; //停止移动
        //是否可以被点击
        this.isStopHasClick = false;
        this.bold = 0;
        this.guo = 0; //是否过关
        //当前怪物类型
        this.type = 0;
        this.onjump = false; //是否可以跳跃
        this.initView(num);
    }
    var d = __define,c=Enemy,p=c.prototype;
    p.initView = function (num) {
        this.type = num;
        switch (num) {
            case 1:
                this.sp = StarlingSwfFactory.getInstance().makeMc("lang");
                this.sp.goToPlay("run");
                this.bold = 1;
                break;
            case 2:
                this.sp = StarlingSwfFactory.getInstance().makeMc("lieren");
                this.sp.goToPlay("run");
                this.bold = 1;
                break;
            case 3:
                this.sp = StarlingSwfFactory.getInstance().makeMc("huli");
                this.sp.goToPlay("run");
                this.bold = 2;
                break;
            case 4:
                this.sp = StarlingSwfFactory.getInstance().makeMc("niao");
                this.sp.goToPlay("run");
                this.bold = 1;
                break;
            case 5:
                this.sp = StarlingSwfFactory.getInstance().makeMc("bianfu");
                this.sp.goToPlay("run");
                this.bold = 3;
                break;
            case 6:
                this.sp = StarlingSwfFactory.getInstance().makeMc("daoju");
                this.sp.goToPlay("1");
                this.bold = 1;
                break;
            case 7:
                this.sp = StarlingSwfFactory.getInstance().makeMc("daoju");
                this.sp.goToPlay("2");
                this.bold = 1;
                break;
            case 8:
                this.sp = StarlingSwfFactory.getInstance().makeMc("daoju");
                this.sp.goToPlay("3");
                this.bold = 1;
                break;
            case 9:
                this.sp = StarlingSwfFactory.getInstance().makeMc("daoju");
                this.sp.goToPlay("4");
                this.bold = 1;
                break;
        }
        this.addChild(this.sp);
    };
    p.alphaToZero = function () {
        this.visible = false;
    };
    //鸟和狐狸
    p.goToJjump = function () {
        this.sp.goToPlay("jump");
    };
    p.goToStop = function () {
        this.sp.gotoAndStop(0);
    };
    p.gotoDie = function () {
        this.sp.goToPlay("die");
    };
    p.move = function () {
        if (this.stopMove) {
            this.goOut();
        }
        if (this.y < 820) {
            if (this.onjump) {
                this.y -= GameData.enemySpeed * 3;
                this.goToJjump();
                this.isStopHasClick = true;
                if (this.y <= 160) {
                    this.sp.goToPlay("run");
                    this.onjump = false;
                    this.isStopHasClick = false;
                    if (this.type == 4 || this.type == 5) {
                        var bb = Math.floor(Math.random() * 4 + 1);
                        if (bb != 1)
                            return;
                        if (this.x == 10) {
                            this.x = 129;
                        }
                        else if (this.x == 129) {
                            this.x == 248;
                        }
                        else if (this.x == 248) {
                            this.x = 129;
                        }
                        else if (this.x == 367) {
                            this.x = 248;
                        }
                    }
                }
                return;
            }
            if (!this.stopMove) {
                this.y += GameData.enemySpeed;
            }
        }
        else {
            this.y = 820;
            this.over = true;
        }
    };
    /**
     * 抛飞效果
     */
    p.goOut = function () {
        if (this.row == 1) {
            this.x -= 15;
            this.y -= 15;
        }
        else if (this.row == 2) {
            this.x -= 15;
            this.y -= 20;
        }
        else if (this.row == 3) {
            this.x += 15;
            this.y -= 20;
        }
        else if (this.row == 4) {
            this.x += 15;
            this.y -= 15;
        }
    };
    p.stopMoveEnemy = function () {
        this.stopMove = true;
    };
    p.dispose = function () {
        this.removeChildren();
    };
    return Enemy;
}(egret.Sprite));
egret.registerClass(Enemy,'Enemy');
