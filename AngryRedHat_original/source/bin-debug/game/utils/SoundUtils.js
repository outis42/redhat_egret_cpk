/**
 * Created by Administrator on 2014/10/16.
 */
var SoundUtils = (function () {
    function SoundUtils() {
        if (SoundUtils._instance != null)
            throw new Error("singleton");
    }
    var d = __define,c=SoundUtils,p=c.prototype;
    SoundUtils.instance = function () {
        return this._instance == null ? this._instance = new SoundUtils() : this._instance;
    };
    p.initSound = function () {
        this.bgSound = new SoundBase("bgSound");
        this.winSound = new SoundBase("winSound");
        this.missSound = new SoundBase("missSound");
        this.hitSound = new SoundBase("hitSound");
        this.goSound = new SoundBase("hitSound");
        this.overSound = new SoundBase("overSound");
        this.beHitSound = new SoundBase("beHitSound");
        this.numSound = new SoundBase("numSound");
    };
    p.playNum = function () {
        if (GameData.closeMusic)
            return;
        this.numSound.play();
    };
    p.playBeHit = function () {
        if (GameData.closeMusic)
            return;
        this.beHitSound.play();
    };
    p.playOver = function () {
        if (GameData.closeMusic)
            return;
        this.overSound.play();
    };
    p.playGo = function () {
        if (GameData.closeMusic)
            return;
        this.goSound.play();
    };
    p.playHit = function () {
        if (GameData.closeMusic)
            return;
        this.hitSound.play();
    };
    p.playMiss = function () {
        if (GameData.closeMusic)
            return;
        this.missSound.play();
    };
    p.playWin = function () {
        if (GameData.closeMusic)
            return;
        this.winSound.play();
    };
    p.playBg = function () {
        if (GameData.closeBgMusic) {
            this.bgSound.pause();
            return;
        }
        this.bgSound.play();
        this.beHitSound.setLoop(1);
    };
    p.stopBg = function () {
        this.bgSound.pause();
    };
    return SoundUtils;
}());
egret.registerClass(SoundUtils,'SoundUtils');
