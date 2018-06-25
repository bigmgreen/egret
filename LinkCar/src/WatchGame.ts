class WatchGame extends eui.Component {

	public item_1: eui.Label;
	public item_2: eui.Label;
	public item_3: eui.Label;
	public item_4: eui.Label;
	public item_1_rect: eui.Rect;
	public item_2_rect: eui.Rect;
	public item_3_rect: eui.Rect;
	public item_4_rect: eui.Rect;

	constructor() {
		super();
		this.once(eui.UIEvent.COMPLETE, this.onComplete, this);
		this.skinName = 'resource/eui_skins/Look.exml';
	}

	protected createChildren() {
		super.createChildren();
		this.item_1.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.keyDown,this);
		this.item_2.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.keyDown,this);
		this.item_3.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.keyDown,this);
		this.item_4.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.keyDown,this);
		this.item_1_rect.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.keyDown,this);
		this.item_2_rect.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.keyDown,this);
		this.item_3_rect.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.keyDown,this);
		this.item_4_rect.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.keyDown,this);

		this.item_1.addEventListener(egret.TouchEvent.TOUCH_END, this.keyUp,this);
		this.item_2.addEventListener(egret.TouchEvent.TOUCH_END, this.keyUp,this);
		this.item_3.addEventListener(egret.TouchEvent.TOUCH_END, this.keyUp,this);
		this.item_4.addEventListener(egret.TouchEvent.TOUCH_END, this.keyUp,this);
		this.item_1_rect.addEventListener(egret.TouchEvent.TOUCH_END, this.keyUp,this);
		this.item_2_rect.addEventListener(egret.TouchEvent.TOUCH_END, this.keyUp,this);
		this.item_3_rect.addEventListener(egret.TouchEvent.TOUCH_END, this.keyUp,this);
		this.item_4_rect.addEventListener(egret.TouchEvent.TOUCH_END, this.keyUp,this);
	}

	public onComplete() {
		console.log("onComplete");
	}

	public keyDown (e:egret.TouchEvent){
		e.target.fillAlpha = .7;
	}
	public keyUp (e:egret.TouchEvent){
		e.target.fillAlpha = 1;
	}
}