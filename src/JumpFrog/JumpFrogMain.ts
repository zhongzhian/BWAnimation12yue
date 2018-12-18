// 泡泡游戏
import Stage = Laya.Stage;
import WebGL = Laya.WebGL;
import Sprite = Laya.Sprite;
class JumpFrogMain extends ui.JumpFrogUI {
    private configView: JFConfigView; // 配置页
    public maxX: number = 1000; //
    public maxY: number = 478; //
    private posArr: Array<any> = [
        [311, 49],
        [495, 151],
        [481, 327],
        [109, 163],
        [748, 216],
        [735, 67],
        [253, 276],
        [15, 18],

        [453, -88],
        [258, 425],
        [20, 356],
        [737, -88],
    ]; //
    public soundContext: number = 0; //
    public wordContext: string = ""; //

    constructor() {
        super();
        this.configView = new JFConfigView(this.configBox);
        this.tip.visible = false;
        this.setting.on(Laya.Event.CLICK, this, this.showConfigView);
        if (JumpFrog.gameConfig.gameModel) {
            this.setting.visible = false;
        }
        this.restart();

        this.replayAble.on(Laya.Event.CLICK, this, this.restart);
        this.crown.on(Laya.Event.CLICK, this, this.checkOver);
    }

    // 游戏重新开始
    public restart() {
        this.mainpanel.destroyChildren();
        this.init();
    }

    public gameover() {
        this.replayAble.visible = true;
        this.wordContext = "";
    }

    //初始化
    public init() {
        let rannum = JumpFrog.gameConfig.words.length < 9 ? 8 : 12;
        let posRan = this.getRandomArr(rannum);
        let numRan = this.getRandomArr(9);

        for (let i = 0; i < JumpFrog.gameConfig.words.length; i++) {
            let aa = JumpFrog.gameConfig.words[i];
            let item = new Leaf(aa);
            let pos = this.posArr[posRan[i]-1];
            item.setPos(pos[0],pos[1]);
            item.shake1();
            this.mainpanel.addChild(item);
        }

        this.replayAble.visible = false;
        this.showCrownIndex(0);
        this.first.visible = true;
        this.last.visible = false;
    }

    private checkOver() {
        Laya.timer.once(100, this, function () {
            this.updateLeaf();
            this.last.visible = true;
            this.changeCrown();
        });
    }

    public updateLeaf() {
        this.first.visible = false;
        for (var i = 0; i < this.mainpanel.numChildren; i++) {
            let leaf = this.mainpanel.getChildAt(i) as Leaf;
            leaf.hideFrog();
        }
    }

    private changeCrown() {
        Laya.timer.once(1000, this, function () {
            this.last.visible = false;
            Laya.SoundManager.playSound("res/audio/JumpFrog/frogchange.mp3",1);
            this.showCrownIndex(1);
            Laya.timer.once(100, this, function () {
                this.showCrownIndex(2);
                Laya.timer.once(100, this, function () {
                    this.showCrownIndex(3);
                    Laya.timer.once(100, this, function () {
                        this.showCrownIndex(4);
                        this.gameover();
                    });
                });
            });
        });
    }

    private showCrownIndex(index: number) {
        for (var i = 0; i < this.crownpanel.numChildren; i++) {
            let pic = this.crownpanel.getChildAt(i) as Laya.Image;
            pic.visible = index === i;
        }
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
        if (!JumpFrog.gameConfig.gameModel) {
            this.setting.visible = state;
        }
    }


    // 返回随机数组
    public getRandomArr(length: number = 0) {
        let arr = [];
        for (var i = 0; i < length; i++) {
            arr.push(i + 1);
        }
        return arr.sort((a, b) => {
            return Math.random() > .5 ? -1 : 1
        });
    }
}
