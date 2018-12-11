// 配置界面
var JFConfigView = /** @class */ (function () {
    function JFConfigView(configBox) {
        this.configBox = configBox;
        this.hide();
        // 初始化配置页面元素
        this.words = configBox.getChildByName("options");
        this.submitBtn = configBox.getChildByName("submitBtn");
        this.closeBtn = configBox.getChildByName("closeBtn");
        this.submitBtn.on(Laya.Event.CLICK, this, this.submit);
        this.closeBtn.on(Laya.Event.CLICK, this, this.hide);
    }
    // 初始化
    JFConfigView.prototype.init = function () {
        // 初始化选项内容
        var wordsText = "";
        for (var _i = 0, _a = JumpFrog.gameConfig.words; _i < _a.length; _i++) {
            var word = _a[_i];
            if (wordsText == "") {
                wordsText = word;
            }
            else {
                wordsText += "," + word;
            }
        }
        this.words.text = wordsText;
    };
    // 显示配置
    JFConfigView.prototype.show = function () {
        this.init();
        this.configBox.visible = true;
        this.configBox.removeSelf();
        JumpFrog.jumpFrogMain.addChild(this.configBox);
    };
    // 隐藏配置
    JFConfigView.prototype.hide = function () {
        this.configBox.visible = false;
    };
    // 提交配置
    JFConfigView.prototype.submit = function () {
        if (!this.words.text) {
            JumpFrog.jumpFrogMain.showTip("请输入单词！");
            return;
        }
        var words = this.words.text.split(",");
        if (words.length < 1 || words.length > 10) {
            JumpFrog.jumpFrogMain.showTip("单词数量在1-12之间！");
            return;
        }
        var isEmpty = false;
        for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
            var option = words_1[_i];
            if (option == "") {
                isEmpty = true;
                break;
            }
        }
        if (isEmpty) {
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
    };
    return JFConfigView;
}());
//# sourceMappingURL=JFConfigView.js.map