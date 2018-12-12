// 配置界面
var SSSConfigView = /** @class */ (function () {
    function SSSConfigView(configBox) {
        this.configBox = configBox;
        this.hide();
        // 初始化配置页面元素
        this.sentences = configBox.getChildByName("sentences");
        this.submitBtn = configBox.getChildByName("submitBtn");
        this.closeBtn = configBox.getChildByName("closeBtn");
        this.submitBtn.on(Laya.Event.CLICK, this, this.submit);
        this.closeBtn.on(Laya.Event.CLICK, this, this.hide);
    }
    // 初始化
    SSSConfigView.prototype.init = function () {
        // 初始化选项内容
        var sentencesText = "";
        for (var _i = 0, _a = SplitScreenSentence.gameConfig.sentences; _i < _a.length; _i++) {
            var sentence = _a[_i];
            var correctOptions = "";
            var wrongOptions = "";
            for (var _b = 0, _c = sentence.correctOptions; _b < _c.length; _b++) {
                var co = _c[_b];
                if (correctOptions == "") {
                    correctOptions = co;
                }
                else {
                    correctOptions += "," + co;
                }
            }
            for (var _d = 0, _e = sentence.wrongOptions; _d < _e.length; _d++) {
                var wo = _e[_d];
                if (wrongOptions == "") {
                    wrongOptions = wo;
                }
                else {
                    wrongOptions += "," + wo;
                }
            }
            if (sentencesText == "") {
                sentencesText = sentence.sentence + "==" + correctOptions + ";" + wrongOptions;
            }
            else {
                sentencesText += "@@" + sentence.sentence + "==" + correctOptions + ";" + wrongOptions;
            }
        }
        this.sentences.text = sentencesText;
    };
    // 显示配置
    SSSConfigView.prototype.show = function () {
        this.init();
        this.configBox.visible = true;
        this.configBox.removeSelf();
        SplitScreenSentence.splitScreenSentenceMain.addChild(this.configBox);
    };
    // 隐藏配置
    SSSConfigView.prototype.hide = function () {
        this.configBox.visible = false;
    };
    // 提交配置
    SSSConfigView.prototype.submit = function () {
        if (!this.sentences.text) {
            SplitScreenSentence.splitScreenSentenceMain.showTip("请输入句子！");
            return;
        }
        var ss = this.sentences.text.split("@@");
        var sentences = new Array();
        for (var _i = 0, ss_1 = ss; _i < ss_1.length; _i++) {
            var s = ss_1[_i];
            var so = s.split("==");
            if (so.length != 2) {
                SplitScreenSentence.splitScreenSentenceMain.showTip("格式错误，请参考示例！");
                return;
            }
            var os = so[1].split(";");
            if (os.length < 1 || os.length > 2) {
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
    };
    return SSSConfigView;
}());
//# sourceMappingURL=SSSConfigView.js.map