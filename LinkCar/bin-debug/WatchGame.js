var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var WatchGame = (function (_super) {
    __extends(WatchGame, _super);
    function WatchGame() {
        var _this = _super.call(this) || this;
        _this.once(eui.UIEvent.COMPLETE, _this.onComplete, _this);
        _this.skinName = 'resource/eui_skins/Look.exml';
        return _this;
    }
    WatchGame.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this.item_1.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.keyDown, this);
        this.item_2.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.keyDown, this);
        this.item_3.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.keyDown, this);
        this.item_4.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.keyDown, this);
        this.item_1_rect.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.keyDown, this);
        this.item_2_rect.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.keyDown, this);
        this.item_3_rect.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.keyDown, this);
        this.item_4_rect.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.keyDown, this);
        this.item_1.addEventListener(egret.TouchEvent.TOUCH_END, this.keyUp, this);
        this.item_2.addEventListener(egret.TouchEvent.TOUCH_END, this.keyUp, this);
        this.item_3.addEventListener(egret.TouchEvent.TOUCH_END, this.keyUp, this);
        this.item_4.addEventListener(egret.TouchEvent.TOUCH_END, this.keyUp, this);
        this.item_1_rect.addEventListener(egret.TouchEvent.TOUCH_END, this.keyUp, this);
        this.item_2_rect.addEventListener(egret.TouchEvent.TOUCH_END, this.keyUp, this);
        this.item_3_rect.addEventListener(egret.TouchEvent.TOUCH_END, this.keyUp, this);
        this.item_4_rect.addEventListener(egret.TouchEvent.TOUCH_END, this.keyUp, this);
    };
    WatchGame.prototype.onComplete = function () {
        console.log("onComplete");
    };
    WatchGame.prototype.keyDown = function (e) {
        e.target.fillAlpha = .7;
    };
    WatchGame.prototype.keyUp = function (e) {
        e.target.fillAlpha = 1;
    };
    return WatchGame;
}(eui.Component));
__reflect(WatchGame.prototype, "WatchGame");
//# sourceMappingURL=WatchGame.js.map