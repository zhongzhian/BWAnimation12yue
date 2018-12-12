var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 分屏组句主界面
var SplitScreenSentenceMain = /** @class */ (function (_super) {
    __extends(SplitScreenSentenceMain, _super);
    function SplitScreenSentenceMain() {
        var _this = _super.call(this) || this;
        _this.currentSentenceIndex = -1; // 当前句子序号
        _this.checked = false; // 是否已检查对错
        _this.configView = new SSSConfigView(_this.configBox);
        _this.tip.visible = false;
        _this.setting.on(Laya.Event.CLICK, _this, _this.showConfigView);
        if (SplitScreenSentence.gameConfig.gameModel) {
            _this.setting.visible = false;
        }
        _this.sentences = SplitScreenSentence.gameConfig.sentences;
        _this.init();
        _this.replay.on(Laya.Event.CLICK, _this, _this.restart);
        _this.checkStart.on(Laya.Event.CLICK, _this, function () {
            this.checked = true;
            this.correctAnswer.visible = true;
            if (this.answerLeft.text == this.correctOptions) {
                this.leftCorret.visible = true;
            }
            else {
                this.leftWrong.visible = true;
            }
            if (this.answerRight.text == this.correctOptions) {
                this.rightCorret.visible = true;
            }
            else {
                this.rightWrong.visible = true;
            }
            this.checkDown.visible = true;
            if (this.currentSentenceIndex + 1 >= this.sentences.length) {
                this.replay.visible = true;
            }
            else {
                this.next.visible = true;
            }
        });
        _this.next.on(Laya.Event.CLICK, _this, _this.nextSentence);
        return _this;
    }
    // 重新开始游戏
    SplitScreenSentenceMain.prototype.restart = function () {
        this.initSentence();
        this.init();
    };
    //初始化
    SplitScreenSentenceMain.prototype.init = function () {
        this.currentSentenceIndex = -1;
        this.next.visible = false;
        this.replay.visible = false;
        this.leftCorret.visible = false;
        this.leftWrong.visible = false;
        this.rightCorret.visible = false;
        this.rightWrong.visible = false;
        this.checkDown.visible = false;
        this.nextSentence();
    };
    // 初始化句子
    SplitScreenSentenceMain.prototype.initSentence = function () {
        this.sentences = new Array();
        var indexes = new Array();
        for (var i = 0; i < SplitScreenSentence.gameConfig.sentences.length; i++) {
            indexes.push(i);
        }
        for (var j = 0; j < SplitScreenSentence.gameConfig.sentences.length; j++) {
            var i = Math.floor(Math.random() * indexes.length); // 随机一个句子
            var index = indexes[i];
            indexes.splice(i, 1);
            this.sentences.push(SplitScreenSentence.gameConfig.sentences[index]);
        }
    };
    // 下一个句子
    SplitScreenSentenceMain.prototype.nextSentence = function () {
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
        var sentence = this.sentences[this.currentSentenceIndex];
        for (var i = 0; i < sentence.correctOptions.length; i++) {
            this.correctOptions += " " + sentence.correctOptions[i];
        }
        this.initOptions(this.leftOptions, this.answerLeft);
        this.initOptions(this.rightOptions, this.answerRight);
    };
    // 初始化选项
    SplitScreenSentenceMain.prototype.initOptions = function (optionBox, answerPosition) {
        var sentence = this.sentences[this.currentSentenceIndex];
        var options = {
            longOptions: [],
            shortOptions: [],
            middleOptions: []
        };
        for (var i = 0; i < sentence.correctOptions.length; i++) {
            var option = new SSSOption(sentence.correctOptions[i], answerPosition, optionBox);
            if (option.wd <= 140) {
                options.shortOptions.push(option);
            }
            else if (option.wd <= 210) {
                options.middleOptions.push(option);
            }
            else {
                options.longOptions.push(option);
            }
        }
        for (var i = 0; i < sentence.wrongOptions.length; i++) {
            var option = new SSSOption(sentence.wrongOptions[i], answerPosition, optionBox);
            if (option.wd <= 140) {
                options.shortOptions.push(option);
            }
            else if (option.wd <= 210) {
                options.middleOptions.push(option);
            }
            else {
                options.longOptions.push(option);
            }
        }
        var indexes = [0, 1, 2];
        if (options.longOptions.length > 0) {
            for (var i = 0; i < options.longOptions.length; i++) {
                if (i >= 3) {
                    break;
                }
                var j = Math.floor(Math.random() * indexes.length); // 随机一个选项
                var index = indexes[j];
                indexes.splice(j, 1);
                optionBox.addChild(options.longOptions[i]);
                options.longOptions[i].x = (420 - options.longOptions[i].width) / 2;
                options.longOptions[i].y = 110 * index;
            }
        }
        if (indexes.length > 0) {
            var indexes2 = [];
            for (var i = 0; i < indexes.length; i++) {
                indexes2.push(indexes[i] * 2);
                indexes2.push(indexes[i] * 2 + 1);
            }
            var l = indexes2.length;
            if (options.middleOptions.length > 0) {
                for (var i = 0; i < options.middleOptions.length; i++) {
                    if (i >= l) {
                        break;
                    }
                    var j = Math.floor(Math.random() * indexes2.length); // 随机一个选项
                    var index = indexes2[j];
                    indexes2.splice(j, 1);
                    optionBox.addChild(options.middleOptions[i]);
                    options.middleOptions[i].x = 210 * (index % 2) + (210 - options.middleOptions[i].width) / 2;
                    options.middleOptions[i].y = 110 * Math.floor(index / 2);
                }
            }
            if (indexes2.length > 0) {
                var indexes3 = [];
                for (var i = 0; i < indexes2.length; i++) {
                    if (indexes2[i] % 2 == 0) {
                        indexes3.push(Math.floor(indexes2[i] / 2) * 3);
                        if (indexes2[i] + 1 == indexes2[i + 1]) {
                            indexes3.push(Math.floor(indexes2[i] / 2) * 3 + 1);
                            indexes3.push(Math.floor(indexes2[i] / 2) * 3 + 2);
                            i++;
                        }
                    }
                    else {
                        indexes3.push(Math.floor(indexes2[i] / 2) * 3 + 2);
                    }
                }
                l = indexes3.length;
                if (options.shortOptions.length > 0) {
                    for (var i = 0; i < options.shortOptions.length; i++) {
                        if (i >= l) {
                            break;
                        }
                        var j = Math.floor(Math.random() * indexes3.length); // 随机一个选项
                        var index = indexes3[j];
                        indexes3.splice(j, 1);
                        optionBox.addChild(options.shortOptions[i]);
                        options.shortOptions[i].x = 140 * (index % 3) + (140 - options.shortOptions[i].width) / 2;
                        options.shortOptions[i].y = 110 * (Math.floor(index / 3));
                    }
                }
            }
        }
    };
    // 显示提示
    SplitScreenSentenceMain.prototype.showTip = function (text) {
        this.tip.text = text;
        this.tip.visible = true;
        this.tip.removeSelf();
        this.addChild(this.tip);
        Laya.timer.once(1500, this, this.hideTip);
    };
    // 隐藏提示
    SplitScreenSentenceMain.prototype.hideTip = function () {
        this.tip.visible = false;
    };
    // 显示游戏配置页面 
    SplitScreenSentenceMain.prototype.showConfigView = function () {
        this.configView.show();
    };
    SplitScreenSentenceMain.prototype.showSetting = function (state) {
        if (!SplitScreenSentence.gameConfig.gameModel) {
            this.setting.visible = state;
        }
    };
    // 返回随机数组
    SplitScreenSentenceMain.prototype.getRandomArr = function (length) {
        if (length === void 0) { length = 0; }
        var arr = [];
        for (var i = 0; i < length; i++) {
            arr.push(i + 1);
        }
        return arr.sort(function (a, b) {
            return Math.random() > .5 ? -1 : 1;
        });
    };
    return SplitScreenSentenceMain;
}(ui.SplitScreenSentenceUI));
//# sourceMappingURL=SplitScreenSentenceMain.js.map