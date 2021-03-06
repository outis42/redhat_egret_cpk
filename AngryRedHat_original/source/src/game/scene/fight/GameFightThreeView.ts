/**
 * Created by Channing on 2014/10/13.
 */
class GameFightThreeView extends GameFightView
{
    private showXin:number = 0;
    private showXin1:number = 74;
    private shandian:number = 0;
    private shandian1:number = 20;
    private dunpai:number = 0;
    constructor()
    {
        super()
        GameData.bgSpeed = 3;
        this.totalEnemyNum = 100;//
        this.boshu = 1;
        this.oneToTwo = 6;//
        this.curScene = 3;
        GameData.enemySpeed = 8;
        this.timeBoo = 0;
        this.showEnemyTime = 60;
        this.showResizeBtn = 25;
        this.totalEnemy = 0;
        this.freeTime = 3;
        this.showXin = Math.floor(Math.random()*(this.totalEnemyNum-this.oneToTwo)+this.oneToTwo);
        this.shandian = Math.floor(Math.random()*(this.totalEnemyNum-this.oneToTwo)+this.oneToTwo);
        this.dunpai = Math.floor(Math.random()*(this.totalEnemyNum-this.oneToTwo)+this.oneToTwo);

        if(this.showXin == this.shandian)
        {
            this.shandian = 45;
        }
        egret.Ticker.getInstance().register(this.showEnemyFun,this);
    }
    private showEnemyFun():void
    {
        if(this.isShowTwoEnemy)
        {
            this.showEnemyFunNum++;
            if(this.showEnemyFunNum == 10)
            {
                this.showEnemyFunNum = 0;
                this.showEnemyTime = Math.floor(Math.random()*15+25);
            }
        }
    }
    public showTime():void
    {
        this.isShowTwoEnemy = true;
        GameData.enemySpeed = 8;
    }

    public hitOver(e:Enemy,arr:Array<any> = [],index:number = 0):void
    {
        if(e.type == 1) {
            e.gotoDie();
            e.stopMove = true;
            GameData.langNum++;
        }else if(e.type == 2) {
            e.gotoDie();
            e.stopMove = true;
            this.shanBoo = true;
            GameData.blod -- ;
            this.blodBar.scaleBlodX();
        }else if(e.type == 3) {
            if(e.bold == 0)
            {
                e.gotoDie();
                e.stopMove = true;
                GameData.huliNum++;
            }else
            {
                e.onjump = true;
            }
            e.bold =0;
        }else if(e.type == 6) {
            e.alphaToZero();
            e.stopMove = true;
            GameData.blod+=3
            if(GameData.blod>5) GameData.blod = 5;
            this.blodBar.scaleBlodX();
        }else if(e.type == 7) {
            e.alphaToZero();
            GameData.profectNum += 10;
            e.stopMove = true;
        }else if(e.type == 8) {
            e.alphaToZero();
            e.stopMove = true;
            GameData.dubleSorce = true;
        }
    }
    //创建怪
    public createEnemy():void
    {
        if(this.boshu == 1)
        {
            this.initEnemy(3);
        }
        else if(this.boshu == 2)
        {
            this.initEnemy(2);
        }
    }
    public initEnemy(type:number)
    {
        if(type == 3)
        {
            this.typeOne(type);
        }else if(type == 2)
        {
            this.typeTwo(type);
        }

    }
    public isShowDaoJu(enemy2:Enemy = null,enemy1:Enemy = null):void
    {
        var nn:number = enemy1.row;
        var b:number = 0
        if(nn == 1)
        {
            b = Math.floor(Math.random()*3+2);
            enemy2.row = b;
            enemy2.x = this.btnArr[enemy2.row-1].x+this.widthPoint;
        }else if(nn == 2)
        {
            b = Math.floor(Math.random()*2+3);
            enemy2.row = b;
            enemy2.x = this.btnArr[enemy2.row-1].x+this.widthPoint;
        }else if(nn ==3)
        {
            b = Math.floor(Math.random()*2+1);
            enemy2.row = b;
            enemy2.x = this.btnArr[enemy2.row-1].x+this.widthPoint;
        }else if(nn ==4)
        {
            b = Math.floor(Math.random()*3+1);
            enemy2.row = b;
            enemy2.x = this.btnArr[enemy2.row-1].x+this.widthPoint;
        }
        this.pushEnemy(enemy2.row,enemy2);
    }
    public pushEnemy(row:number = 0,enemy:Enemy = null):void
    {
        if(row == 1)
        {
            this.oneEnemyArr.push(enemy);
        }
        else if(row == 2)
        {
            this.twoEnemyArr.push(enemy);
        }
        else if(row == 3)
        {
            this.threeEnemyArr.push(enemy);
        }
        else if(row == 4)
        {
            this.fourEnemyArr.push(enemy);
        }
    }

    public over():void
    {
        egret.Ticker.getInstance().unregister(this.showEnemyFun,this);
        this.isStart = false;
        GameData.curScene = 4;
        egret.Tween.removeAllTweens();
        this.dispose();
        GameSceneView._gameScene.play();
    }

    public initBoShu():void
    {
        this.timeBoo = 0;
        if(this.totalEnemy >= this.totalEnemyNum)
        {
            this.stopGame = true;
            if(GameFightView.allArr[0].length == 0&&GameFightView.allArr[1].length == 0&&
                GameFightView.allArr[2].length == 0&&GameFightView.allArr[3].length == 0)
            {
                //游戏结束
                this.gameWin();
            }
            return;
        }else if(this.totalEnemy == this.oneToTwo)
        {
            //第一波和第二波间隔
            GameData.stopCreateEnemy = 1;
            GameData.count++;
            GameData.redGirlDistance++;
            if(GameData.count>this.freeTime)
            {
                this.boshu = 2;
                GameData.count = 0;
                GameData.stopCreateEnemy = 0;
                this.showTime();
            }
        }
    }

    private typeOne(type:number = 0):void
    {
        var enemy1:Enemy = new Enemy(type);
        this.totalEnemy++;
        GameData.redGirlDistance++;
        this.enemySp.addChild(enemy1);
        var b:number = Math.floor(Math.random()*4+1);
        enemy1.row = b;
        enemy1.x = this.btnArr[enemy1.row-1].x+this.widthPoint;
        enemy1.name="enemy1"+this.totalEnemy;
        this.pushEnemy(enemy1.row,enemy1);
    }

    private typeTwo(type:number = 0):void
    {
        var n:number = Math.floor(Math.random()*7+1);
        if(n == 1)
        {
            var enemy1:Enemy = new Enemy(type);
        }if(n == 2)
        {
            var enemy1:Enemy = new Enemy(3);
        }else
        {
            var enemy1:Enemy = new Enemy(1);
        }

        this.totalEnemy++;
        GameData.redGirlDistance++;
        this.enemySp.addChild(enemy1);
        var b:number = Math.floor(Math.random()*4+1);
        enemy1.row = b;
        enemy1.x = this.btnArr[enemy1.row-1].x+this.widthPoint;
        enemy1.name="enemy1_1"+this.totalEnemy;
        this.pushEnemy(enemy1.row,enemy1);

        if(this.isShowTwoEnemy)
        {
            var enemy2:Enemy;
            if(this.totalEnemy == this.showXin||this.totalEnemy == this.showXin1)
            {
                enemy2 = new Enemy(6);
                this.enemySp.addChild(enemy2);
                enemy2.name="enemy2_d1"+this.totalEnemy;
                this.isShowDaoJu(enemy2,enemy1);
                return;
            }else if(this.totalEnemy == this.shandian||this.totalEnemy == this.shandian1)
            {
                enemy2 = new Enemy(7);
                this.enemySp.addChild(enemy2);
                enemy2.name="enemy2_d2"+this.totalEnemy;
                this.isShowDaoJu(enemy2,enemy1);
                return;
            }else if(this.totalEnemy == this.dunpai)
            {
                enemy2 = new Enemy(8);
                this.enemySp.addChild(enemy2);
                enemy2.name="enemy2_d3"+this.totalEnemy;
                this.isShowDaoJu(enemy2,enemy1);
                return;
            }
            var n:number = Math.floor(Math.random()*6+1);
            if(n == 1)
            {
                var enemy3:Enemy = new Enemy(2);
                this.enemySp.addChild(enemy3);
                enemy3.name="enemy2_2"+this.totalEnemy;
                this.isShowDaoJu(enemy3,enemy1);
            }else if(n == 6)
            {
                var enemy3:Enemy = new Enemy(1);
                this.enemySp.addChild(enemy3);
                enemy3.name="enemy2_1"+this.totalEnemy;
                this.isShowDaoJu(enemy3,enemy1);
            }
        }
    }
}
