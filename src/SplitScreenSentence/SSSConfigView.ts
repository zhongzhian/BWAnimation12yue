// 配置界面
class SSSConfigView {
    private configBox: Laya.Box; // 配置页面容器
    private sentences: Laya.TextInput; // 句子输入框 
    private submitBtn: Laya.Image; // 提交按钮
    private closeBtn: Laya.Text; // 关闭按钮

    constructor(configBox: Laya.Box) {
        this.configBox = configBox;
        this.hide();
        // 初始化配置页面元素
        this.sentences = configBox.getChildByName("sentences") as Laya.TextInput;
        this.submitBtn = configBox.getChildByName("submitBtn") as Laya.Image;
        this.closeBtn = configBox.getChildByName("closeBtn") as Laya.Text;
        
        this.submitBtn.on(Laya.Event.CLICK, this, this.submit);
        this.closeBtn.on(Laya.Event.CLICK, this, this.hide);
    }

    // 初始化
    private init() {
        // 初始化选项内容
        let sentencesText = "";
        for(let sentence of SplitScreenSentence.gameConfig.sentences) {
            let correctOptions = "";
            let wrongOptions = "";
            for(let co of sentence.correctOptions) {
                if(correctOptions == "") {
                    correctOptions = co;
                }
                else {
                    correctOptions += "," + co;
                }
            }
            for(let wo of sentence.wrongOptions) {
                if(wrongOptions == "") {
                    wrongOptions = wo;
                }
                else {
                    wrongOptions += "," + wo;
                }
            }
            if(sentencesText == "") {
                sentencesText = sentence.sentence + "==" + correctOptions + ";" + wrongOptions;
            }
            else {
                sentencesText += "@@" + sentence.sentence + "==" + correctOptions + ";" + wrongOptions;
            }
        }
        this.sentences.text = sentencesText;
    }

    // 显示配置
    public show() {
        this.init();
        this.configBox.visible = true;
        this.configBox.removeSelf()
        SplitScreenSentence.splitScreenSentenceMain.addChild(this.configBox);
    }

    // 隐藏配置
    public hide() {
        this.configBox.visible = false;
    }

    // 提交配置
    private submit() {
        if(!this.sentences.text) {
            SplitScreenSentence.splitScreenSentenceMain.showTip("请输入句子！");
            return;
        }
        let ss: string[] = this.sentences.text.split("@@");
        let sentences: any[] = new Array();
        for(let s of ss) {
            let so: string[] = s.split("==");
            if(so.length != 2) {
                SplitScreenSentence.splitScreenSentenceMain.showTip("格式错误，请参考示例！");
                return;
            }
            let os: string[] = so[1].split(";");
            if(os.length < 1 || os.length > 2) {
                SplitScreenSentence.splitScreenSentenceMain.showTip("格式错误，请参考示例！");
                return;
            }
            sentences.push({
                sentence: so[0],
                correctOptions: os[0].split(","),
                wrongOptions: os[1].split(",")
            });
        }

        SplitScreenSentence.gameConfig = {
            gameModel: false,
            sentences: sentences
        };
        SplitScreenSentence.splitScreenSentenceMain.showTip("提交成功！");
        this.hide();
        SplitScreenSentence.splitScreenSentenceMain.restart();
    }
}