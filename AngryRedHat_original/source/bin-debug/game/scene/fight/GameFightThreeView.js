/**
 * Created by Channing on 2014/10/13.
 */
var GameFightThreeView = (function (_super) {
    __extends(GameFightThreeView, _super);
    function GameFightThreeView() {
        _super.call(this);
        this.showXin = 0;
        this.showXin1 = 74;
        this.shandian = 0;
        this.shandian1 = 20;
        this.dunpai = 0;
        GameData.bgSpeed = 3;
        this.totalEnemyNum = 100; //
        this.boshu = 1;
        this.oneToTwo = 6; //
        this.curScene = 3;
        GameData.enemySpeed = 8;
        this.timeBoo = 0;
        this.showEnemyTime = 60;
        this.showResizeBtn = 25;
        this.totalEnemy = 0;
        this.freeTime = 3;
        this.showXin = Math.floor(Math.random() * (this.totalEnemyNum - this.oneToTwo) + this.oneToTwo);
        this.shandian = Math.floor(Math.random() * (this.totalEnemyNum - this.oneToTwo) + this.oneToTwo);
        this.dunpai = Math.floor(Math.random() * (this.totalEnemyNum - this.oneToTwo) + this.oneToTwo);
        if (this.showXin == this.shandian) {
            this.shandian = 45;
        }
        egret.Ticker.getInstance().register(this.showEnemyFun, this);
    }
    var d = __define,c=GameFightThreeView,p=c.prototype;
    p.showEnemyFun = function () {
        if (this.isShowTwoEnemy) {
            this.showEnemyFunNum++;
            if (this.showEnemyFunNum == 10) {
                this.showEnemyFunNum = 0;
                this.showEnemyTime = Math.floor(Math.random() * 15 + 25);
            }
        }
    };
    p.showTime = function () {
        this.isShowTwoEnemy = true;
        GameData.enemySpeed = 8;
    };
    p.hitOver = function (e, arr, index) {
        if (arr === void 0) { arr = []; }
        if (index === void 0) { index = 0; }
        if (e.type == 1) {
            e.gotoDie();
            e.stopMove = true;
            GameData.langNum++;
        }
        else if (e.type == 2) {
            e.gotoDie();
            e.stopMove = true;
            this.shanBoo = true;
            GameData.blod--;
            this.blodBar.scaleBlodX();
        }
        else if (e.type == 3) {
            if (e.bold == 0) {
                e.gotoDie();
                e.stopMove = true;
                GameData.huliNum++;
            }
            else {
                e.onjump = true;
            }
            e.bold = 0;
        }
        else if (e.type == 6) {
            e.alphaToZero();
            e.stopMove = true;
            GameData.blod += 3;
            if (GameData.blod > 5)
                GameData.blod = 5;
            this.blodBar.scaleBlodX();
        }
        else if (e.type == 7) {
            e.alphaToZero();
            GameData.profectNum += 10;
            e.stopMove = true;
        }
        else if (e.type == 8) {
            e.alphaToZero();
            e.stopMove = true;
            GameData.dubleSorce = true;
        }
    };
    //创建怪
    p.createEnemy = function () {
        if (this.boshu == 1) {
            this.initEnemy(3);
        }
        else if (this.boshu == 2) {
            this.initEnemy(2);
        }
    };
    p.initEnemy = function (type) {
        if (type == 3) {
            this.typeOne(type);
        }
        else if (type == 2) {
            this.typeTwo(type);
        }
    };
    p.isShowDaoJu = function (enemy2, enemy1) {
        if (enemy2 === void 0) { enemy2 = null; }
        if (enemy1 === void 0) { enemy1 = null; }
        var nn = enemy1.row;
        var b = 0;
        if (nn == 1) {
            b = Math.floor(Math.random() * 3 + 2);
            enemy2.row = b;
            enemy2.x = this.btnArr[enemy2.row - 1].x + this.widthPoint;
        }
        else if (nn == 2) {
            b = Math.floor(Math.random() * 2 + 3);
            enemy2.row = b;
            enemy2.x = this.btnArr[enemy2.row - 1].x + this.widthPoint;
        }
        else if (nn == 3) {
            b = Math.floor(Math.random() * 2 + 1);
            enemy2.row = b;
            enemy2.x = this.btnArr[enemy2.row - 1].x + this.widthPoint;
        }
        else if (nn == 4) {
            b = Math.floor(Math.random() * 3 + 1);
            enemy2.row = b;
            enemy2.x = this.btnArr[enemy2.row - 1].x + this.widthPoint;
        }
        this.pushEnemy(enemy2.row, enemy2);
    };
    p.pushEnemy = function (row, enemy) {
        if (row === void 0) { row = 0; }
        if (enemy === void 0) { enemy = null; }
        if (row == 1) {
            this.oneEnemyArr.push(enemy);
        }
        else if (row == 2) {
            this.twoEnemyArr.push(enemy);
        }
        else if (row == 3) {
            this.threeEnemyArr.push(enemy);
        }
        else if (row == 4) {
            this.fourEnemyArr.push(enemy);
        }
    };
    p.over = function () {
        egret.Ticker.getInstance().unregister(this.showEnemyFun, this);
        this.isStart = false;
        GameData.curScene = 4;
        egret.Tween.removeAllTweens();
        this.dispose();
        GameSceneView._gameScene.play();
    };
    p.initBoShu = function () {
        this.timeBoo = 0;
        if (this.totalEnemy >= this.totalEnemyNum) {
            this.stopGame = true;
            if (GameFightView.allArr[0].length == 0 && GameFightView.allArr[1].length == 0 &&
                GameFightView.allArr[2].length == 0 && GameFightView.allArr[3].length == 0) {
                //游戏结束
                this.gameWin();
            }
            return;
        }
        else if (this.totalEnemy == this.oneToTwo) {
            //第一波和第二波间隔
            GameData.stopCreateEnemy = 1;
            GameData.count++;
            GameData.redGirlDistance++;
            if (GameData.count > this.freeTime) {
                this.boshu = 2;
                GameData.count = 0;
                GameData.stopCreateEnemy = 0;
                this.showTime();
            }
        }
    };
    p.typeOne = function (type) {
        if (type === void 0) { type = 0; }
        var enemy1 = new Enemy(type);
        this.totalEnemy++;
        GameData.redGirlDistance++;
        this.enemySp.addChild(enemy1);
        var b = Math.floor(Math.random() * 4 + 1);
        enemy1.row = b;
        enemy1.x = this.btnArr[enemy1.row - 1].x + this.widthPoint;
        enemy1.name = "enemy1" + this.totalEnemy;
        this.pushEnemy(enemy1.row, enemy1);
    };
    p.typeTwo = function (type) {
        if (type === void 0) { type = 0; }
        var n = Math.floor(Math.random() * 7 + 1);
        if (n == 1) {
            var enemy1 = new Enemy(type);
        }
        if (n == 2) {
            var enemy1 = new Enemy(3);
        }
        else {
            var enemy1 = new Enemy(1);
        }
        this.totalEnemy++;
        GameData.redGirlDistance++;
        this.enemySp.addChild(enemy1);
        var b = Math.floor(Math.random() * 4 + 1);
        enemy1.row = b;
        enemy1.x = this.btnArr[enemy1.row - 1].x + this.widthPoint;
        enemy1.name = "enemy1_1" + this.totalEnemy;
        this.pushEnemy(enemy1.row, enemy1);
        if (this.isShowTwoEnemy) {
            var enemy2;
            if (this.totalEnemy == this.showXin || this.totalEnemy == this.showXin1) {
                enemy2 = new Enemy(6);
                this.enemySp.addChild(enemy2);
                enemy2.name = "enemy2_d1" + this.totalEnemy;
                this.isShowDaoJu(enemy2, enemy1);
                return;
            }
            else if (this.totalEnemy == this.shandian || this.totalEnemy == this.shandian1) {
                enemy2 = new Enemy(7);
                this.enemySp.addChild(enemy2);
                enemy2.name = "enemy2_d2" + this.totalEnemy;
                this.isShowDaoJu(enemy2, enemy1);
                return;
            }
            else if (this.totalEnemy == this.dunpai) {
                enemy2 = new Enemy(8);
                this.enemySp.addChild(enemy2);
                enemy2.name = "enemy2_d3" + this.totalEnemy;
                this.isShowDaoJu(enemy2, enemy1);
                return;
            }
            var n = Math.floor(Math.random() * 6 + 1);
            if (n == 1) {
                var enemy3 = new Enemy(2);
                this.enemySp.addChild(enemy3);
                enemy3.name = "enemy2_2" + this.totalEnemy;
                this.isShowDaoJu(enemy3, enemy1);
            }
            else if (n == 6) {
                var enemy3 = new Enemy(1);
                this.enemySp.addChild(enemy3);
                enemy3.name = "enemy2_1" + this.totalEnemy;
                this.isShowDaoJu(enemy3, enemy1);
            }
        }
    };
    return GameFightThreeView;
}(GameFightView));
egret.registerClass(GameFightThreeView,'GameFightThreeView');
