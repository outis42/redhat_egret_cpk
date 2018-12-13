/**
 * Created by Administrator on 2014/6/16.
 */
var StarlingSwfMovieClip = (function (_super) {
    __extends(StarlingSwfMovieClip, _super);
    function StarlingSwfMovieClip(frames, labels, displayObjects, ownerSwf) {
        _super.call(this, frames, labels, displayObjects, ownerSwf);
        this.frameActions = {};
        this.preFrame = -1;
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemove, this);
    }
    var d = __define,c=StarlingSwfMovieClip,p=c.prototype;
    p.onRemove = function () {
        this.stop();
    };
    p.setFrameAction = function ($frame, $action, $actionObj, $param) {
        if ($param === void 0) { $param = null; }
        this.frameActions[$frame] = [$action, $actionObj, $param];
    };
    p.setCompleteAction = function ($action, $actionObj) {
        this.complateFunc = $action;
        this.complateObj = $actionObj;
        this.addEventListener(egret.Event.COMPLETE, this.onPlayend, this);
    };
    p.onPlayend = function () {
        if (this.complateFunc) {
            this.complateFunc.call(this.complateObj);
        }
    };
    p.goToPlay = function (frame) {
        this.preFrame = -1;
        this.currFrameName = frame;
        this.gotoAndPlay(frame);
    };
    p.update = function () {
        _super.prototype.update.call(this);
        var currFrame = this.getCurrentFrame();
        if (this.preFrame != currFrame) {
            this.preFrame = currFrame;
            if (this.frameActions && this.frameActions[currFrame]) {
                var arr = this.frameActions[currFrame];
                if (arr[2])
                    arr[0].call(arr[1], arr[2]);
                else
                    arr[0].call(arr[1]);
            }
        }
    };
    p.dispose = function () {
        this.stop();
        this.removeEventListener(egret.Event.COMPLETE, this.onPlayend, this);
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemove, this);
        if (this.parent) {
            this.parent.removeChild(this);
        }
        this.complateFunc = null;
        this.complateObj = null;
        this.frameActions = null;
    };
    return StarlingSwfMovieClip;
}(starlingswf.SwfMovieClip));
egret.registerClass(StarlingSwfMovieClip,'StarlingSwfMovieClip');
