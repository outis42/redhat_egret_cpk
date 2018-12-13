/**
 * Created by Channing on 2014/9/29.
 */
/// <reference path="SwfAnimationInfo.ts" />
var SwfFrameInfo = (function () {
    function SwfFrameInfo() {
    }
    var d = __define,c=SwfFrameInfo,p=c.prototype;
    SwfFrameInfo.swfNum = SwfAnimationInfo.arr.join("");
    return SwfFrameInfo;
}());
egret.registerClass(SwfFrameInfo,'SwfFrameInfo');
