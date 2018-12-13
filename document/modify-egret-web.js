 //搜索对应方法，覆盖此方法
 (1)
 WebHttpRequest.prototype.getXHR = function () {
                if(window.jsb) {
                    return {};
                }else {
                    if (window["XMLHttpRequest"]) {
                        return new window["XMLHttpRequest"]();
                    }
                    else {
                        return new ActiveXObject("MSXML2.XMLHTTP");
                    }
                }                
            };
 (2)
WebHttpRequest.prototype.open = function (url, method) {
    if (method === void 0) { method = "GET"; }
    this._url = url;
    this._method = method;
    if (this._xhr) {
        this._xhr.abort();
        this._xhr = null;
    }
    this._xhr = this.getXHR(); //new XMLHttpRequest();
    if (!window.jsb) {
        this._xhr.onreadystatechange = this.onReadyStateChange.bind(this);
        this._xhr.onprogress = this.updateProgress.bind(this);
        this._xhr.open(this._method, this._url, true);
    }
};
(3)
WebHttpRequest.prototype.send = function (data) {
    if (this._responseType != null) {
        this._xhr.responseType = this._responseType;
    }
    if (this._withCredentials != null) {
        this._xhr.withCredentials = this._withCredentials;
    }
    if (this.headerObj) {
        for (var key in this.headerObj) {
            this._xhr.setRequestHeader(key, this.headerObj[key]);
        }
    }
    if (window.jsb) {
        this.onReadyStateChange();
    }
    else {
        this._xhr.send(data);
    }
};
(4)
WebHttpRequest.prototype.onReadyStateChange = function () {
    var xhr = this._xhr;
    if (window.jsb) {
        setTimeout(() => {
            var response;
            if (this.responseType === 'arraybuffer') {
                response = jsb.fileUtils.getDataFromFile(this._url);
                xhr.response = response.buffer;
            }
            else if (this.responseType === 'blob') {
                response = jsb.fileUtils.getDataFromFile(this._url);
                xhr.response = new Blob([response]);
            }
            else {
                response = jsb.fileUtils.getStringFromFile(this._url);
                xhr.responseText = response;
            }

            this.dispatchEventWith(egret.Event.COMPLETE);
        }, 0);
    }
    else {
        if (xhr.readyState == 4) {
            var ioError_1 = (xhr.status >= 400 || xhr.status == 0);
            var url_1 = this._url;
            var self_1 = this;
            window.setTimeout(function () {
                if (ioError_1) {
                    if (true && !self_1.hasEventListener(egret.IOErrorEvent.IO_ERROR)) {
                        egret.$error(1011, url_1);
                    }
                    self_1.dispatchEventWith(egret.IOErrorEvent.IO_ERROR);
                }
                else {
                    self_1.dispatchEventWith(egret.Event.COMPLETE);
                }
            }, 0);
        }
    }
};
(5)
WebPlayer.prototype.init = function (container, options) {
    var option;
    //修改代码开始（注意:scaleMode,contentWidth,contentHeight根据需求修改）
    if (window.jsb) {
        option = JSON.parse(
            `{"entryClassName": "Main", 
                    "scaleMode": "fixedWidth", 
                    "frameRate": 60, 
                    "contentWidth": 480, 
                    "contentHeight": 720, 
                    "orientation": "auto", 
                    "maxTouches": 2, 
                    "textureScaleFactor": 1, 
                    "showPaintRect": false, 
                    "showFPS": true, 
                    "fpsStyles": {
                        "x": "0", 
                        "y": "0", 
                        "size": "12", 
                        "textColor": "0xffffff", 
                        "bgAlpha": "0.9"
                    }, 
                    "showLog": false, 
                    "logFilter": null
                    }`);
    } else {
        option = this.readOption(container, options);
    }
    var stage = new egret.Stage();
    stage.$screen = this;
    stage.$scaleMode = option.scaleMode;
    stage.$orientation = option.orientation;
    stage.$maxTouches = option.maxTouches;
    stage.frameRate = option.frameRate;
    stage.textureScaleFactor = option.textureScaleFactor;
    var buffer = new egret.sys.RenderBuffer(undefined, undefined, true);
    var canvas = buffer.surface;
    this.attachCanvas(container, canvas);
    var webTouch = new web.WebTouchHandler(stage, canvas);
    var player = new egret.sys.Player(buffer, stage, option.entryClassName);
    egret.lifecycle.stage = stage;
    egret.lifecycle.addLifecycleListener(web.WebLifeCycleHandler);
    var webInput = new web.HTMLInput();
    if (option.showFPS || option.showLog) {
        if (!egret.nativeRender) {
            player.displayFPS(option.showFPS, option.showLog, option.logFilter, option.fpsStyles);
        }
    }
    this.playerOption = option;
    this.container = container;
    this.canvas = canvas;
    this.stage = stage;
    this.player = player;
    this.webTouchHandler = webTouch;
    this.webInput = webInput;
    egret.web.$cacheTextAdapter(webInput, stage, container, canvas);
    this.updateScreenSize();
    this.updateMaxTouches();
    player.start();
};
(6)
/**
 * 获取指定区域的像素
 */
 CanvasRenderBuffer.prototype.getPixels = function (x, y, width, height) {
    if (width === void 0) { 
        width = 1; 
    }
    
    if (height === void 0) {
         height = 1; 
    }
    //适配处理（只修改了这里）
    if (window.jsb) {     
        return this.context.getImageData(x, y, width, height);     
    } else {
         return this.context.getImageData(x, y, width, height).data;
    }
};
(7)
/**
 * 如果需要调用文本框再做适配
 * 调用键盘
 */
HTML5StageText.prototype.$show = function () {
    var info = {
        defaultValue: this.$textfield.text,
        multiple: this.$textfield.multiline,
        confirmHold: true,
        confirmType: 'done',
        fail: function (res) {
            console.log(res.errMsg);
        }
    };
    if (this.$textfield.maxChars) {
        info.maxLength = this.$textfield.maxChars;
    }
    loadRuntime().showKeyboard(info);
    loadRuntime().onKeyboardConfirm(this.onKeyboardComplete);
    loadRuntime().onKeyboardComplete(this.onKeyboardComplete);
    loadRuntime().onKeyboardInput(this.onKeyboardInput);
    this.dispatchEvent(new egret.Event("focus"));
};
(8)
/**
 * 如果需要调用文本框再做适配
 * 收起键盘
 */
HTML5StageText.prototype.$hide = function () {
    loadRuntime().offKeyboardComplete();
    loadRuntime().offKeyboardConfirm();
    loadRuntime().offKeyboardInput();
    loadRuntime().hideKeyboard({});
    this.dispatchEvent(new egret.Event("blur"));
};

