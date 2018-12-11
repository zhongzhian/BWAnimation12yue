// 配置界面
class JFConfigView {
    private configBox: Laya.Box; // 配置页面容器
    private words: Laya.TextInput; // 单词输入框 
    private submitBtn: Laya.Image; // 提交按钮
    private closeBtn: Laya.Text; // 关闭按钮

    constructor(configBox: Laya.Box) {
        this.configBox = configBox;
        this.hide();
        // 初始化配置页面元素
        this.words = configBox.getChildByName("options") as Laya.TextInput;
        this.submitBtn = configBox.getChildByName("submitBtn") as Laya.Image;
        this.closeBtn = configBox.getChildByName("closeBtn") as Laya.Text;
        
        this.submitBtn.on(Laya.Event.CLICK, this, this.submit);
        this.closeBtn.on(Laya.Event.CLICK, this, this.hide);
    }

    // 初始化
    private init() {
        // 初始化选项内容
        let wordsText = "";
        for(let word of JumpFrog.gameConfig.words) {
            if(wordsText == "") {
                wordsText = word;
            }
            else {
                wordsText += "," + word;
            }
        }
        this.words.text = wordsText;
    }

    // 显示配置
    public show() {
        this.init();
        this.configBox.visible = true;
        this.configBox.removeSelf()
        JumpFrog.jumpFrogMain.addChild(this.configBox);
    }

    // 隐藏配置
    public hide() {
        this.configBox.visible = false;
    }

    // 提交配置
    private submit() {
        if(!this.words.text) {
            JumpFrog.jumpFrogMain.showTip("请输入单词！");
            return;
        }
        let words: string[] = this.words.text.split(",");
        if(words.length < 1 || words.length > 10) {
            JumpFrog.jumpFrogMain.showTip("单词数量在1-12之间！");
            return;
        }

        let isEmpty = false;
        for(let option of words) {
            if(option == "") {
                isEmpty = true;
                break;
            }
        }
        if(isEmpty) {
            JumpFrog.jumpFrogMain.showTip("单词不能存在空字符串！");
            return;
        }

        JumpFrog.gameConfig = {
            gameModel: false,
            words: words
        };
        JumpFrog.jumpFrogMain.showTip("提交成功！");
        this.hide();
        JumpFrog.jumpFrogMain.restart();
    }
}