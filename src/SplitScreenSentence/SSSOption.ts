// 选项
class SSSOption extends ui.OptionUI {
    public wd: number = 120; // 宽度
    private answerPosition: Laya.Text; // 左边的答题区还是右边的答题区
    private optionBox: Laya.Sprite; // 左边的选项区还是右边的选项区
    private used: boolean = false; // 选项是否已被使用
    private positonFlag: string; // 左边的选项还是右边的选项
    constructor(text: string, answerPosition: Laya.Text, optionBox: Laya.Sprite, positon: string) {
        super(); 
        this.answerPosition = answerPosition;
        this.optionBox = optionBox;
        this.positonFlag = positon;
        // 初始化
        this.optionBgDisable.visible = false;
        this.flyDisable.visible = false;
        this.fly1.visible = true;
        this.fly2.visible = false;
        let width: number = text.length * 16 + 30;
        this.optionText.text = text;
        this.optionTextDisable.text = text;
        // 设置选项背景长度
        let x: number = (this.width - width) / 2;
        if(width > 104) {
            this.optionBg.width = width;
            this.optionBg.x = x;
            this.optionText.width = width;
            this.optionBgDisable.width = width;
            this.optionBgDisable.x = x;
            this.optionTextDisable.width = width;
        }
        if(width > 120) {
            this.wd = width;
        }
        this.fly();
        this.on(Laya.Event.CLICK, this, this.click);
    }

    // 蝴蝶飞动效果
    private fly() {
        Laya.timer.loop(200, this, function() {
            this.fly1.visible = !this.fly1.visible;
            this.fly2.visible = !this.fly2.visible;
        });
    }

    // 点击选项
    private click() {
        if(SplitScreenSentence.splitScreenSentenceMain.checked) { // 已经检查对错后不能再修改
            return;
        }
        this.off(Laya.Event.CLICK, this, this.click);
        if(this.used) { // 已使用的选项，再点击撤回
            Laya.SoundManager.playSound("res/audio/SplitScreenSentence/huibianliang.mp3", 1);
            this.optionBgDisable.visible = false;
            this.flyDisable.visible = false;
            this.canMove.visible = true;
            this.canMove.pos(8, -1);
            this.used = false;
            let selected = this.positonFlag == "left" ? SplitScreenSentence.splitScreenSentenceMain.leftSelected : SplitScreenSentence.splitScreenSentenceMain.rightSelected;
            selected.splice(selected.indexOf(this.optionText.text), 1);
            SplitScreenSentence.splitScreenSentenceMain.makeSentence(selected, this.answerPosition);
            this.on(Laya.Event.CLICK, this, this.click);
        }
        else {
            this.optionBgDisable.visible = true;
            this.flyDisable.visible = true;
            this.optionBox.removeChild(this);
            this.optionBox.addChild(this);
            Laya.SoundManager.playSound("res/audio/SplitScreenSentence/toanswerarea.mp3", 1);
            Laya.Tween.to(this.canMove, {x: this.canMove.x + 150 - this.x, y: this.canMove.y - 170 - this.y}, 500, null, Laya.Handler.create(this,function() {
                this.canMove.visible = false;
                let selected = this.positonFlag == "left" ? SplitScreenSentence.splitScreenSentenceMain.leftSelected : SplitScreenSentence.splitScreenSentenceMain.rightSelected;
                selected.push(this.optionText.text);
                SplitScreenSentence.splitScreenSentenceMain.makeSentence(selected, this.answerPosition);
                this.used = true;
                this.on(Laya.Event.CLICK, this, this.click);
            }));
        }
    }
}