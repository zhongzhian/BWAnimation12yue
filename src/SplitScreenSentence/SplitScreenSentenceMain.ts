// 分屏组句主界面
class SplitScreenSentenceMain extends ui.SplitScreenSentenceUI {
    private configView: SSSConfigView; // 配置页
    private sentences: any[]; // 所有句子
    private currentSentenceIndex: number = -1; // 当前句子序号
    private correctOptions: string; // 当前句子正确选项拼成的字符串
    public leftSelected: string[]; // 当前句子左边选择的
    public rightSelected: string[]; // 当前句子右边选择的
    public checked: boolean = false; // 是否已检查对错

    constructor() {
        super(); 
        this.configView = new SSSConfigView(this.configBox);
        this.tip.visible = false;
        this.setting.on(Laya.Event.CLICK, this, this.showConfigView);
        if(SplitScreenSentence.gameConfig.gameModel) {
            this.setting.visible = false;    
        }
        this.sentences = SplitScreenSentence.gameConfig.sentences;
        this.init();
        this.replay.on(Laya.Event.CLICK, this, this.restart);
        this.checkStart.on(Laya.Event.CLICK, this, function() {
            this.checked = true;
            this.correctAnswer.visible = true;
            if(this.answerLeft.text == this.correctOptions) {
                this.leftCorret.visible = true;
            }
            else {
                this.leftWrong.visible = true;
            }
            if(this.answerRight.text == this.correctOptions) {
                this.rightCorret.visible = true;
            }
            else {
                this.rightWrong.visible = true;
            }
            this.checkDown.visible = true;
            if(this.currentSentenceIndex + 1 >= this.sentences.length) {
                this.replay.visible = true;
            }
            else {
                this.next.visible = true;
            }

        });
        this.next.on(Laya.Event.CLICK, this, this.nextSentence);
    }

    // 重新开始游戏
    public restart() {
        this.initSentence();
        this.init();
    }

    //初始化
    private init() {
        this.currentSentenceIndex = -1;
        this.next.visible = false;
        this.replay.visible = false;
        this.leftCorret.visible = false;
        this.leftWrong.visible = false;
        this.rightCorret.visible = false;
        this.rightWrong.visible = false;
        this.checkDown.visible = false;
        this.nextSentence();
    }

    // 初始化句子
    private initSentence() { 
        this.sentences = new Array<string>();
        let indexes: number[] = new Array<number>();
        for(let i = 0; i < SplitScreenSentence.gameConfig.sentences.length; i++) {
            indexes.push(i);
        }
        for(let j = 0; j < SplitScreenSentence.gameConfig.sentences.length; j++) { // 打乱句子顺序
            let i: number = Math.floor(Math.random() * indexes.length); // 随机一个句子
            let index = indexes[i];
            indexes.splice(i, 1);
            this.sentences.push(SplitScreenSentence.gameConfig.sentences[index]);
        }
    }

    // 下一个句子
    private nextSentence() {
        this.checked = false;
        this.currentSentenceIndex += 1;
        this.checkDown.visible = false;
        this.leftCorret.visible = false;
        this.leftWrong.visible = false;
        this.rightCorret.visible = false;
        this.rightWrong.visible = false;
        this.next.visible = false;
        this.leftOptions.destroyChildren();
        this.rightOptions.destroyChildren();
        this.answerLeft.text = '';
        this.answerRight.text = '';
        this.correctAnswer.visible = false;
        this.correctAnswer.text = this.sentences[this.currentSentenceIndex].sentence;
        this.correctOptions = "";
        this.leftSelected = new Array<string>();
        this.rightSelected = new Array<string>();
        let sentence = this.sentences[this.currentSentenceIndex];
        for(let i: number = 0; i < sentence.correctOptions.length; i++) {
            if(this.correctOptions == "") {
                this.correctOptions = sentence.correctOptions[i];
            }
            else {
                this.correctOptions += " " + sentence.correctOptions[i];
            }
        }
        this.initOptions(this.leftOptions, this.answerLeft, "left");
        this.initOptions(this.rightOptions, this.answerRight, "right");
    }

    // 根据已选择的选项生成句子
    public makeSentence(selected: string[], answerPosition: Laya.Text) {
        let sentence: string = "";
        selected.forEach(s => {
            if(sentence == "") {
                sentence = s;
            }
            else {
                sentence += " " + s;
            }
        });
        answerPosition.text = sentence;
    }

    // 初始化选项
    private initOptions(optionBox: Sprite, answerPosition: Laya.Text, positon: string) {
        let sentence = this.sentences[this.currentSentenceIndex];
        let options = { 
            longOptions: [],
            shortOptions: [],
            middleOptions: []
        }
        for(let i: number = 0; i < sentence.correctOptions.length; i++) {
            let option: SSSOption = new SSSOption(sentence.correctOptions[i], answerPosition, optionBox, positon);
            if(option.wd <= 140) {
                options.shortOptions.push(option);
            }
            else if(option.wd <= 210) {
                options.middleOptions.push(option);
            }
            else {
                options.longOptions.push(option);
            }
        }

        for(let i: number = 0; i < sentence.wrongOptions.length; i++) {
            let option: SSSOption = new SSSOption(sentence.wrongOptions[i], answerPosition, optionBox, positon);
            if(option.wd <= 140) {
                options.shortOptions.push(option);
            }
            else if(option.wd <= 210) {
                options.middleOptions.push(option);
            }
            else {
                options.longOptions.push(option);
            }
        }
        let indexes = [0 , 1, 2, 3]
        if(options.longOptions.length > 0) {
            for(let i: number = 0; i < options.longOptions.length; i++) {
                if(i >= 4) {
                    break;
                }
                let j: number = Math.floor(Math.random() * indexes.length); // 随机一个选项
                let index = indexes[j];
                indexes.splice(j, 1);
                optionBox.addChild(options.longOptions[i]);
                options.longOptions[i].x = (420 - options.longOptions[i].width) / 2;
                options.longOptions[i].y = 110 * index;
            }
        }
        if(indexes.length > 0) {
            let indexes2 = [];
            for(let i: number = 0; i < indexes.length; i++) {
                indexes2.push(indexes[i] * 2);
                indexes2.push(indexes[i] * 2 + 1);
            }
            let l: number = indexes2.length;
            if(options.middleOptions.length > 0) {
                for(let i: number = 0; i < options.middleOptions.length; i++) {
                    if(i >= l) {
                        break;
                    }
                    let j: number = Math.floor(Math.random() * indexes2.length); // 随机一个选项
                    let index = indexes2[j];
                    indexes2.splice(j, 1);
                    optionBox.addChild(options.middleOptions[i]);
                    options.middleOptions[i].x = 210 * (index % 2) + (210 - options.middleOptions[i].width) / 2;
                    options.middleOptions[i].y = 110 * Math.floor(index / 2);
                }
            }  
            if(indexes2.length > 0) {
                let indexes3 = [];
                for(let i: number = 0; i < indexes2.length; i++) {
                    if(indexes2[i] % 2 == 0) {
                        indexes3.push(Math.floor(indexes2[i] / 2) * 3);
                        if(indexes2[i] + 1 == indexes2[i + 1]) {   
                            indexes3.push(Math.floor(indexes2[i] / 2) * 3 + 1);
                            indexes3.push(Math.floor(indexes2[i] / 2) * 3 + 2);
                            i++;
                        }
                    }
                    else {
                        indexes3.push(Math.floor(indexes2[i] / 2) * 3 + 2);
                    }
                } 
                l = indexes3.length
                if(options.shortOptions.length > 0) {
                    for(let i: number = 0; i < options.shortOptions.length; i++) {
                        if(i >= l) {
                            break;
                        }
                        let j: number = Math.floor(Math.random() * indexes3.length); // 随机一个选项
                        let index = indexes3[j];
                        indexes3.splice(j, 1);
                        optionBox.addChild(options.shortOptions[i]);
                        options.shortOptions[i].x = 140 * (index % 3) + (140 - options.shortOptions[i].width) / 2;
                        options.shortOptions[i].y = 110 * (Math.floor(index / 3));
                    }
                }  
            }
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

    设置设置按钮是否显示
    public showSetting(state: boolean) {
        if(!SplitScreenSentence.gameConfig.gameModel) {
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
