// 泡泡游戏
import Stage = Laya.Stage;
import WebGL   = Laya.WebGL;
import Sprite = Laya.Sprite;
class JumpFrogMain extends ui.JumpFrogUI {
    private configView: JFConfigView; // 配置页
    public maxX: number = 1000; //
    public maxY: number = 478; //
    private soundArr: Array<any>; //
    public soundContext: number = 0; //
    public wordContext: string = ""; //
    // public is

    constructor() {
        super(); 
        this.configView = new JFConfigView(this.configBox);
        this.tip.visible = false;
        this.setting.on(Laya.Event.CLICK, this, this.showConfigView);
        if(JumpFrog.gameConfig.gameModel) {
            this.setting.visible = false;    
        }
        this.restart();

        this.replayAble.on(Laya.Event.CLICK,this,this.restart);
    }

    // 游戏重新开始
    public restart() {
        this.mainpanel.destroyChildren();
        this.init();
    }

    public gameover(){
        this.replayAble.visible = true;
        this.wordContext = "";
    }

    //初始化
    public init(){

        // 用来计算随机偏移量
        let perx = this.maxX/20;
        let pery = this.maxX/10;
        let posRan = this.getRandomArr(10);
        let numRan = this.getRandomArr(9);

        for(let i = 0;i<JumpFrog.gameConfig.words.length;i++){
            let aa = JumpFrog.gameConfig.words[i];
            let item = new Leaf(aa);
            item.setPos(100*i,100*i);
            item.shake1();
            this.mainpanel.addChild(item);
        }

        this.replayAble.visible = false;
    }

     // 显示提示
    public showTip(text: string) {
        this.tip.text = text;
        this.tip.visible = true;
        this.tip.removeSelf();
        this.addChild(this.tip);
        Laya.timer.once(1500, this, this.hideTip);
    }

    // 隐藏提示
    private hideTip() {
        this.tip.visible = false;
    }

    // 显示游戏配置页面 
    private showConfigView() {
        this.configView.show();
    }

    // 设置设置按钮是否显示
    public showSetting(state: boolean) {
        if(!JumpFrog.gameConfig.gameModel) {
            this.setting.visible = state;
        }
    }


    // 返回随机数组
    public getRandomArr(length:number = 0){
        let arr = [];
        for(var i = 0;i<length;i++){
            arr.push(i+1);
        }
        return arr.sort((a,b)=>{
            return Math.random()>.5 ? -1 : 1
        });
    }
}
