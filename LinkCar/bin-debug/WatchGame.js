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
        // 元数据
        _this.data = [
            {
                name: 'asdmd_jpg',
                data: [
                    '阿斯顿马丁',
                    '阿斯炖马丁',
                    '阿斯顿吗丁',
                    '啊斯顿马丁',
                ],
                answer: '阿斯顿马丁',
            },
            {
                name: 'bc_jpg',
                data: [
                    '奔池',
                    '奔奔',
                    '奔驰',
                    '夲驰',
                ],
                answer: '奔驰',
            },
            {
                name: 'bj_jpg',
                data: [
                    '骏宝',
                    '宝骏',
                    '宝俊',
                    '宝竣'
                ],
                answer: '宝骏',
            },
            {
                name: 'bl_jpg',
                data: [
                    '斌利',
                    '宾利',
                    '宾里',
                    '宾莉',
                ],
                answer: '宾利',
            },
            {
                name: 'bm_jpg',
                data: [
                    '宝马',
                    '宝吗',
                    '宝妈',
                    '宝、马',
                ],
                answer: '宝马',
            },
            {
                name: 'bsj_jpg',
                data: [
                    '宝时截',
                    '保势捷',
                    '保时捷',
                    '鸨时捷',
                ],
                answer: '保时捷',
            },
            {
                name: 'byd_jpg',
                data: [
                    '比压迪',
                    '比亚笛',
                    '比亚迪',
                    '吡亚迪',
                ],
                answer: '比亚迪',
            },
            {
                name: 'ft_jpg',
                data: [
                    '福德',
                    '福特',
                    '福得',
                    '福忒',
                ],
                answer: '福特',
            },
            {
                name: 'jb_jpg',
                data: [
                    '金盃',
                    '金杯',
                    '金鈈',
                    '金不',
                ],
                answer: '金杯',
            },
            {
                name: 'knsk_jpg',
                data: [
                    '科尼塞苛',
                    '科尼赛克',
                    '柯尼塞克',
                    '科呢塞克',
                ],
                answer: '科尼赛克',
            },
            {
                name: 'ste_jpg',
                data: [
                    '斯太尔',
                    '斯泰尔',
                    '斯态尔',
                    '斯太你',
                ],
                answer: '斯太尔',
            },
            {
                name: 'xl_jpg',
                data: [
                    '厦利',
                    '夏利',
                    '夏莉',
                    '夏力',
                ],
                answer: '夏利',
            },
            {
                name: 'ym_jpg',
                data: [
                    '野吗',
                    '野玛',
                    '嘢马',
                    '野马',
                ],
                answer: '野马',
            },
            {
                name: 'zt_jpg',
                data: [
                    '众泰',
                    '重泰',
                    '中泰',
                    '众㤗',
                ],
                answer: '众泰',
            },
        ];
        _this.currentData = null;
        _this.time = 0;
        _this.dur = 5000;
        _this.isOver = false;
        _this.once(eui.UIEvent.COMPLETE, _this.onComplete, _this);
        _this.skinName = 'resource/eui_skins/Look.exml';
        return _this;
    }
    WatchGame.prototype.onComplete = function () {
        this.addEvent();
        this.render();
    };
    // 事件绑定
    WatchGame.prototype.addEvent = function () {
        this.item_1_rect.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.keyDown, this);
        this.item_2_rect.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.keyDown, this);
        this.item_3_rect.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.keyDown, this);
        this.item_4_rect.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.keyDown, this);
        this.item_1_rect.addEventListener(egret.TouchEvent.TOUCH_END, this.keyUp, this);
        this.item_2_rect.addEventListener(egret.TouchEvent.TOUCH_END, this.keyUp, this);
        this.item_3_rect.addEventListener(egret.TouchEvent.TOUCH_END, this.keyUp, this);
        this.item_4_rect.addEventListener(egret.TouchEvent.TOUCH_END, this.keyUp, this);
        this.item_1_rect.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tap, this);
        this.item_2_rect.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tap, this);
        this.item_3_rect.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tap, this);
        this.item_4_rect.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tap, this);
    };
    // 绘制界面
    WatchGame.prototype.render = function () {
        var _this = this;
        var index = this.random(1, 0, this.data.length - 2);
        if (index === -1) {
            this.over();
        }
        var data = this.data.splice(index, 1)[0];
        this.currentData = data;
        // 绘制 logo
        var texture = RES.getRes(data.name);
        this.mark.texture = texture;
        // 绘制按钮文字
        this.item_1_rect.name = this.item_1.text = data.data[0];
        this.item_2_rect.name = this.item_2.text = data.data[1];
        this.item_3_rect.name = this.item_3.text = data.data[2];
        this.item_4_rect.name = this.item_4.text = data.data[3];
        this.timer = setTimeout(function (params) {
            _this.over();
        }, this.dur, this);
        this.time = this.dur;
        egret.startTick(this.move, this);
    };
    WatchGame.prototype.move = function (timeStamp) {
        if (this.time > 0) {
            this.time -= 60;
        }
        else {
            this.time = 0;
        }
        return false;
    };
    /**
     * 生成随机数
     *
     * @ count: 返回个数
     * @ min: 最小值
     * @ max: 最大值
     *
     * return Array
     */
    WatchGame.prototype.random = function (count, min, max) {
        while (true) {
            var range = max - min;
            var rand = Math.random();
            var num = min + Math.round(rand * range); //四舍五入
            if (num > max) {
                continue;
            }
            return num;
        }
    };
    WatchGame.prototype.keyDown = function (e) {
        e.target.fillAlpha = .7;
    };
    WatchGame.prototype.keyUp = function (e) {
        e.target.fillAlpha = 1;
    };
    // 点击事件处理
    WatchGame.prototype.tap = function (e) {
        if (this.isOver) {
            return;
        }
        var _rect = e.target;
        if (_rect.name === this.currentData.answer) {
            this.next();
        }
        else {
            this.over();
        }
    };
    WatchGame.prototype.next = function () {
        this.setScore();
        this.render();
    };
    WatchGame.prototype.setScore = function () {
        var oldScore = parseInt(this.score.text) || 0;
        var score = Math.ceil(this.time / this.dur * 10 + oldScore);
        this.score.text = score.toString();
        clearTimeout(this.timer);
        return score;
    };
    WatchGame.prototype.over = function () {
        var score = this.setScore();
        if (confirm("\u5F97\u5206\uFF1A" + score + " \n\u6E38\u620F\u7ED3\u675F\uFF0C\u662F\u5426\u7EE7\u7EED")) {
            location.reload();
        }
        else {
            this.isOver = true;
        }
    };
    return WatchGame;
}(eui.Component));
__reflect(WatchGame.prototype, "WatchGame");
var Data = (function () {
    function Data() {
    }
    return Data;
}());
__reflect(Data.prototype, "Data");
//# sourceMappingURL=WatchGame.js.map