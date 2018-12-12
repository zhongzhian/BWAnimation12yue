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
// 选项
var SSSOption = /** @class */ (function (_super) {
    __extends(SSSOption, _super);
    function SSSOption(text, answerPosition, optionBox) {
        var _this = _super.call(this) || this;
        _this.wd = 120; // 宽度
        _this.used = false; // 选项是否已被使用
        _this.answerPosition = answerPosition;
        _this.optionBox = optionBox;
        // 初始化
        _this.optionBgDisable.visible = false;
        _this.flyDisable.visible = false;
        _this.fly1.visible = true;
        _this.fly2.visible = false;
        var width = text.length * 16 + 30;
        _this.optionText.text = text;
        _this.optionTextDisable.text = text;
        // 设置选项背景长度
        var x = (_this.width - width) / 2;
        if (width > 104) {
            _this.optionBg.width = width;
            _this.optionBg.x = x;
            _this.optionText.width = width;
            _this.optionBgDisable.width = width;
            _this.optionBgDisable.x = x;
            _this.optionTextDisable.width = width;
        }
        if (width > 120) {
            _this.wd = width;
        }
        _this.fly();
        _this.on(Laya.Event.CLICK, _this, _this.click);
        return _this;
    }
    // 蝴蝶飞动效果
    SSSOption.prototype.fly = function () {
        Laya.timer.loop(200, this, function () {
            this.fly1.visible = !this.fly1.visible;
            this.fly2.visible = !this.fly2.visible;
        });
    };
    // 点击选项
    SSSOption.prototype.click = function () {
        if (SplitScreenSentence.splitScreenSentenceMain.checked) {
            return;
        }
        if (this.used) {
            Laya.SoundManager.playSound("res/audio/SplitScreenSentence/huibianliang.mp3", 1);
            this.optionBgDisable.visible = false;
            this.flyDisable.visible = false;
            this.canMove.visible = true;
            this.canMove.pos(8, -1);
            this.used = false;
            this.answerPosition.text = this.answerPosition.text.replace(" " + this.optionText.text, "");
        }
        else {
            this.optionBgDisable.visible = true;
            this.flyDisable.visible = true;
            this.optionBox.removeChild(this);
            this.optionBox.addChild(this);
            Laya.SoundManager.playSound("res/audio/SplitScreenSentence/toanswerarea.mp3", 1);
            Laya.Tween.to(this.canMove, { x: this.canMove.x + 150 - this.x, y: this.canMove.y - 170 - this.y }, 500, null, Laya.Handler.create(this, function () {
                this.canMove.visible = false;
                this.answerPosition.text += " " + this.optionText.text;
                this.used = true;
            }));
        }
    };
    return SSSOption;
}(ui.OptionUI));
//# sourceMappingURL=SSSOption.js.map