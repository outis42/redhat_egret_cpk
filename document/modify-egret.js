 //搜索对应方法，覆盖此方法
 (1)
Graphics.prototype.$hitTest = function (stageX, stageY) {
    var target = this.$targetDisplay;
    var m = target.$getInvertedConcatenatedMatrix();
    var localX = m.a * stageX + m.c * stageY + m.tx;
    var localY = m.b * stageX + m.d * stageY + m.ty;
    var buffer = egret.sys.canvasHitTestBuffer;
    buffer.resize(3, 3);
    var node = this.$renderNode;
    var matrix = egret.Matrix.create();
    matrix.identity();
    matrix.translate(1 - localX, 1 - localY);
    egret.sys.canvasRenderer.drawNodeToBuffer(node, buffer, matrix, true);
    egret.Matrix.release(matrix);
    try {
        var data = buffer.getPixels(1, 1);
        if (window.jsb) {
            //适配处理，data做判断空值，避免报错，（只修改了这里）
            if (!data || data[3] === 0) {
                return null;
            }
        } else {
            if (data[3] === 0) {
                return null;
            }
        }

    }
    catch (e) {
        throw new Error(egret.sys.tr(1039));
    }

    return target;
};