class WatchGame extends eui.Component {

	public item_1: eui.Label;
	public item_2: eui.Label;
	public item_3: eui.Label;
	public item_4: eui.Label;
	public score: eui.Label;
	public item_1_rect: eui.Rect;
	public item_2_rect: eui.Rect;
	public item_3_rect: eui.Rect;
	public item_4_rect: eui.Rect;
	public mark: eui.Image;

	// 元数据
	public data: [any] = [
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

	public currentData: Data = null;

	public timer: number;
	public time: number = 0;
	public dur: number = 5000;
	public isOver: boolean = false;

	constructor() {
		super();
		this.once(eui.UIEvent.COMPLETE, this.onComplete, this);
		this.skinName = 'resource/eui_skins/Look.exml';
	}

	public onComplete() {
		this.addEvent();
		this.render();
	}

	// 事件绑定
	private addEvent() {
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
	}

	// 绘制界面
	private render() {
		let index = this.random(1, 0, this.data.length - 2);

		if (index === -1) {
			this.over();
		}

		let data: Data = this.data.splice(index, 1)[0];
		this.currentData = data;

		// 绘制 logo
		let texture: egret.Texture = RES.getRes(data.name);
		this.mark.texture = texture;

		// 绘制按钮文字
		this.item_1_rect.name = this.item_1.text = data.data[0];
		this.item_2_rect.name = this.item_2.text = data.data[1];
		this.item_3_rect.name = this.item_3.text = data.data[2];
		this.item_4_rect.name = this.item_4.text = data.data[3];

		this.timer = setTimeout(params => {
			this.over();
		}, this.dur, this);

		this.time = this.dur;

		egret.startTick(this.move, this);
	}

	private move(timeStamp: number): boolean {
		if (this.time > 0) {
			this.time -= 60;
		} else {
			this.time = 0;
		}
		return false;
	}

	/**
	 * 生成随机数
	 * 
	 * @ count: 返回个数
	 * @ min: 最小值
	 * @ max: 最大值
	 * 
	 * return Array
	 */
	private random(count, min, max): number {
		while (true) {
			let range = max - min;
			let rand = Math.random();
			let num = min + Math.round(rand * range); //四舍五入

			if (num > max) {
				continue;
			}

			return num;
		}

	}
	public keyDown(e: egret.TouchEvent) {
		e.target.fillAlpha = .7;
	}
	public keyUp(e: egret.TouchEvent) {
		e.target.fillAlpha = 1;
	}

	// 点击事件处理
	public tap(e: egret.TouchEvent) {

		if (this.isOver) { return; }

		let _rect: eui.Rect = e.target;

		if (_rect.name === this.currentData.answer) {
			this.next();
		} else {
			this.over();
		}
	}

	private next() {
		this.setScore();
		this.render();
	}

	private setScore():number {
		let oldScore = parseInt(this.score.text) || 0;
		let score = Math.ceil(this.time / this.dur * 10 + oldScore);
		this.score.text = score.toString();
		clearTimeout(this.timer);
		return score;
	}

	private over() {
		let score = this.setScore();
		if (confirm(`得分：${score} \n游戏结束，是否继续`)) {
			location.reload();
		} else {
			this.isOver = true;
		}
	}
}

class Data {
	name: string;
	data: any[];
	answer: string;
}