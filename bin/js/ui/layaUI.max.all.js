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
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var ui;
(function (ui) {
    var JumpFrogUI = /** @class */ (function (_super) {
        __extends(JumpFrogUI, _super);
        function JumpFrogUI() {
            return _super.call(this) || this;
        }
        JumpFrogUI.prototype.createChildren = function () {
            View.regComponent("Text", laya.display.Text);
            _super.prototype.createChildren.call(this);
            this.createView(ui.JumpFrogUI.uiView);
        };
        JumpFrogUI.uiView = { "type": "View", "props": { "width": 1024, "height": 768 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "var": "bg", "skin": "JumpFrog/bg.png" } }, { "type": "Box", "props": { "y": 710, "x": 850, "var": "replay" }, "child": [{ "type": "Image", "props": { "skin": "common/replay-disabled.png" } }, { "type": "Image", "props": { "var": "replayAble", "skin": "common/replay-abled.png" } }] }, { "type": "Image", "props": { "y": 26, "x": 31, "width": 30, "var": "setting", "skin": "common/setting-gray.png", "height": 30 } }, { "type": "Box", "props": { "y": 119, "x": 575, "width": 985, "var": "configBox", "pivotY": 100, "pivotX": 554, "height": 385 }, "child": [{ "type": "Image", "props": { "y": 9, "x": 163, "width": 822, "skin": "common/configBG.png", "sizeGrid": "20,10,20,10", "height": 197, "alpha": 1 } }, { "type": "Button", "props": { "y": 131, "x": 345, "width": 86, "skin": "template/ButtonTab/btn_LargeTabButton_Middle.png", "name": "submitBtn", "labelSize": 20, "labelColors": "#007AFF,#007AFF,#FFFFFF", "label": "提交", "height": 32 } }, { "type": "Text", "props": { "y": 7, "x": 947, "width": 40, "text": "+", "rotation": 45, "pivotY": -1, "pivotX": -10, "name": "closeBtn", "height": 40, "fontSize": 40, "color": "#5d5454", "bold": false, "align": "center" } }, { "type": "Label", "props": { "y": 73, "x": 257, "text": "单词：", "name": "wordlabel", "fontSize": 20, "font": "FF", "color": "#2a2121" } }, { "type": "Image", "props": { "y": 61, "x": 325, "width": 615, "skin": "template/Text/TextBox.png", "height": 39 } }, { "type": "TextInput", "props": { "y": 66, "x": 340, "width": 586, "name": "options", "height": 31, "fontSize": 16, "font": "FF", "color": "#3b3232" } }, { "type": "Text", "props": { "y": 103, "x": 334, "text": "示例：\bblue,green,red,yellow", "name": "wordremark", "fontSize": 17, "font": "FF", "color": "#666666" } }] }, { "type": "Text", "props": { "y": 241, "x": 215, "wordWrap": true, "width": 798, "var": "tip", "text": "操作不正确！", "pivotY": 2, "pivotX": 8, "height": 117, "fontSize": 30, "font": "FF", "color": "#ee1613", "align": "left" } }, { "type": "Image", "props": { "y": 52, "x": 132, "var": "first", "skin": "JumpFrog/frog.png" } }, { "type": "Image", "props": { "y": 594, "x": 788, "var": "last", "skin": "JumpFrog/frog.png" } }, { "type": "Box", "props": { "y": 225, "x": 0, "width": 1020, "var": "mainpanel", "height": 386 } }, { "type": "Box", "props": { "y": 637, "x": 760, "width": 256, "var": "crownpanel", "height": 78 }, "child": [{ "type": "Image", "props": { "y": -21, "x": 48, "var": "crown", "skin": "JumpFrog/crown.png" } }, { "type": "Image", "props": { "y": -45, "x": 30, "var": "yun1", "skin": "JumpFrog/yun1.png" } }, { "type": "Image", "props": { "y": -103, "x": -24, "var": "yun2", "skin": "JumpFrog/yun2.png" } }, { "type": "Image", "props": { "y": -147, "x": -24, "var": "yun3", "skin": "JumpFrog/yun3.png" } }, { "type": "Image", "props": { "y": -313, "x": 0, "var": "prince", "skin": "JumpFrog/prince.png" } }] }] };
        return JumpFrogUI;
    }(View));
    ui.JumpFrogUI = JumpFrogUI;
})(ui || (ui = {}));
(function (ui) {
    var LeafUI = /** @class */ (function (_super) {
        __extends(LeafUI, _super);
        function LeafUI() {
            return _super.call(this) || this;
        }
        LeafUI.prototype.createChildren = function () {
            View.regComponent("Text", laya.display.Text);
            _super.prototype.createChildren.call(this);
            this.createView(ui.LeafUI.uiView);
        };
        LeafUI.uiView = { "type": "View", "props": { "width": 271, "height": 111 }, "child": [{ "type": "Image", "props": { "width": 271, "var": "bg", "skin": "JumpFrog/leaf2.png", "height": 111 } }, { "type": "Text", "props": { "y": 24, "x": 1, "width": 269, "var": "word", "text": "text", "height": 58, "fontSize": 45, "font": "ff", "color": "#333", "bold": true, "align": "center" } }, { "type": "Image", "props": { "y": -39, "x": 66, "var": "frog", "skin": "JumpFrog/frog.png" } }] };
        return LeafUI;
    }(View));
    ui.LeafUI = LeafUI;
})(ui || (ui = {}));
(function (ui) {
    var OptionUI = /** @class */ (function (_super) {
        __extends(OptionUI, _super);
        function OptionUI() {
            return _super.call(this) || this;
        }
        OptionUI.prototype.createChildren = function () {
            View.regComponent("Text", laya.display.Text);
            _super.prototype.createChildren.call(this);
            this.createView(ui.OptionUI.uiView);
        };
        OptionUI.uiView = { "type": "View", "props": { "width": 120, "height": 110 }, "child": [{ "type": "Image", "props": { "y": 60, "x": 48, "width": 32, "skin": "SplitScreenSentence/rope.png", "height": 10 } }, { "type": "Image", "props": { "y": 69, "x": 8, "var": "optionBgDisable", "skin": "SplitScreenSentence/option-disable.png" }, "child": [{ "type": "Text", "props": { "y": 1, "x": 0, "width": 104, "var": "optionTextDisable", "height": 35, "fontSize": 35, "font": "FF", "color": "#ffffff", "align": "center" } }] }, { "type": "Image", "props": { "y": -2, "x": 26, "var": "flyDisable", "skin": "SplitScreenSentence/fly-disable.png" } }, { "type": "Box", "props": { "y": -1, "x": 8, "var": "canMove" }, "child": [{ "type": "Image", "props": { "y": 70, "var": "optionBg", "skin": "SplitScreenSentence/option.png" }, "child": [{ "type": "Text", "props": { "y": 1, "x": 0, "width": 104, "var": "optionText", "height": 35, "fontSize": 35, "font": "FF", "color": "#000000", "align": "center" } }] }, { "type": "Image", "props": { "x": 18, "var": "fly1", "skin": "SplitScreenSentence/fly-1.png" } }, { "type": "Image", "props": { "y": 7, "x": 17, "var": "fly2", "skin": "SplitScreenSentence/fly-2.png" } }, { "type": "Image", "props": { "y": 61, "x": 40, "width": 32, "skin": "SplitScreenSentence/rope.png", "height": 10 } }] }] };
        return OptionUI;
    }(View));
    ui.OptionUI = OptionUI;
})(ui || (ui = {}));
(function (ui) {
    var SplitScreenSentenceUI = /** @class */ (function (_super) {
        __extends(SplitScreenSentenceUI, _super);
        function SplitScreenSentenceUI() {
            return _super.call(this) || this;
        }
        SplitScreenSentenceUI.prototype.createChildren = function () {
            View.regComponent("Text", laya.display.Text);
            _super.prototype.createChildren.call(this);
            this.createView(ui.SplitScreenSentenceUI.uiView);
        };
        SplitScreenSentenceUI.uiView = { "type": "View", "props": { "width": 1024, "height": 768 }, "child": [{ "type": "Image", "props": { "y": -1, "x": 0, "skin": "SplitScreenSentence/bg.png" } }, { "type": "Image", "props": { "y": 739, "x": 508, "skin": "SplitScreenSentence/left.png", "rotation": 180 } }, { "type": "Image", "props": { "y": 110, "x": 516, "skin": "SplitScreenSentence/right.png" } }, { "type": "Image", "props": { "y": 10, "x": 292, "skin": "SplitScreenSentence/answer.png" } }, { "type": "Image", "props": { "y": 7, "x": 123, "var": "checkStart", "skin": "SplitScreenSentence/check-start.png" } }, { "type": "Image", "props": { "y": 121, "x": 27, "skin": "SplitScreenSentence/answer-area-1.png" } }, { "type": "Image", "props": { "y": 121, "x": 534, "skin": "SplitScreenSentence/answer-area-2.png" } }, { "type": "Image", "props": { "y": 7, "x": 123, "var": "checkDown", "skin": "SplitScreenSentence/check-down.png" } }, { "type": "Text", "props": { "y": 37, "x": 292, "width": 619, "var": "correctAnswer", "height": 36, "fontSize": 36, "font": "FF", "color": "#0D7234", "align": "center" } }, { "type": "Text", "props": { "y": 168, "x": 79, "wordWrap": true, "width": 353, "var": "answerLeft", "height": 161, "fontSize": 35, "font": "FF", "color": "#000000", "align": "left" } }, { "type": "Text", "props": { "y": 168, "x": 596, "wordWrap": true, "width": 353, "var": "answerRight", "height": 161, "fontSize": 35, "font": "FF", "color": "#000000", "align": "left" } }, { "type": "Box", "props": { "y": 364, "x": 49, "width": 420, "var": "leftOptions", "height": 330 } }, { "type": "Box", "props": { "y": 364, "x": 555, "width": 420, "var": "rightOptions", "height": 330 } }, { "type": "Image", "props": { "y": 292, "x": 893, "width": 50, "var": "rightWrong", "skin": "SplitScreenSentence/wrong.png", "height": 50 } }, { "type": "Image", "props": { "y": 292, "x": 380, "width": 50, "var": "leftWrong", "skin": "SplitScreenSentence/wrong.png", "height": 50 } }, { "type": "Image", "props": { "y": 292, "x": 380, "width": 50, "var": "leftCorret", "skin": "SplitScreenSentence/correct.png", "height": 50 } }, { "type": "Image", "props": { "y": 292, "x": 893, "width": 50, "var": "rightCorret", "skin": "SplitScreenSentence/correct.png", "height": 50 } }, { "type": "Image", "props": { "y": 399, "x": 404, "var": "next", "skin": "SplitScreenSentence/next.png" } }, { "type": "Image", "props": { "y": 163, "x": 225, "var": "replay", "skin": "SplitScreenSentence/replay.png" } }, { "type": "Image", "props": { "y": 25, "x": 25, "width": 30, "var": "setting", "skin": "common/setting.png", "height": 30 } }, { "type": "Box", "props": { "y": 20, "x": 20, "width": 985, "var": "configBox", "height": 696 }, "child": [{ "type": "Image", "props": { "y": 9, "x": 229, "width": 756, "skin": "common/configBG.png", "sizeGrid": "20,20,20,20", "height": 243, "alpha": 1 } }, { "type": "Button", "props": { "y": 167, "x": 570, "width": 86, "skin": "template/ButtonTab/btn_LargeTabButton_Middle.png", "name": "submitBtn", "labelSize": 20, "labelColors": "#007AFF,#007AFF,#FFFFFF", "label": "提交", "height": 32 } }, { "type": "Text", "props": { "y": 7, "x": 947, "width": 40, "text": "+", "rotation": 45, "pivotY": -1, "pivotX": -10, "name": "closeBtn", "height": 40, "fontSize": 40, "color": "#5d5454", "bold": false, "align": "center" } }, { "type": "Text", "props": { "y": 112, "x": 363, "wordWrap": true, "width": 543, "text": "示例：I like playing basketball.==I,like,playing,basketball;plays,likes@@This dog is so cute.==This,dog,is,so,cute;dogs,are", "height": 39, "fontSize": 17, "font": "FF", "color": "#666666" } }, { "type": "Label", "props": { "y": 82, "x": 282, "text": "句子：", "fontSize": 20, "font": "FF", "color": "#2a2121" } }, { "type": "Image", "props": { "y": 70, "x": 347, "width": 572, "skin": "template/Text/TextBox.png", "height": 39 } }, { "type": "TextInput", "props": { "y": 75, "x": 362, "width": 540, "name": "sentences", "height": 31, "fontSize": 16, "font": "FF", "color": "#3b3232" } }] }, { "type": "Text", "props": { "y": 123, "x": 152, "width": 300, "var": "tip", "text": "操作不正确！", "pivotY": 2, "pivotX": 8, "height": 30, "fontSize": 30, "font": "FF", "color": "#ee1613", "align": "center" } }] };
        return SplitScreenSentenceUI;
    }(View));
    ui.SplitScreenSentenceUI = SplitScreenSentenceUI;
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map