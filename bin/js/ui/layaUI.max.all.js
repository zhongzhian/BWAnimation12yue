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
        JumpFrogUI.uiView = { "type": "View", "props": { "width": 1024, "height": 768 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "var": "bg", "skin": "JumpFrog/bg.png" } }, { "type": "Box", "props": { "y": 710, "x": 850, "var": "replay" }, "child": [{ "type": "Image", "props": { "skin": "common/replay-disabled.png" } }, { "type": "Image", "props": { "var": "replayAble", "skin": "common/replay-abled.png" } }] }, { "type": "Image", "props": { "y": 26, "x": 31, "width": 30, "var": "setting", "skin": "common/setting.png", "height": 30 } }, { "type": "Box", "props": { "y": 119, "x": 575, "width": 985, "var": "configBox", "pivotY": 100, "pivotX": 554, "height": 385 }, "child": [{ "type": "Image", "props": { "y": 9, "x": 163, "width": 822, "skin": "common/configBG.png", "sizeGrid": "20,10,20,10", "height": 197, "alpha": 1 } }, { "type": "Button", "props": { "y": 131, "x": 345, "width": 86, "skin": "template/ButtonTab/btn_LargeTabButton_Middle.png", "name": "submitBtn", "labelSize": 20, "labelColors": "#007AFF,#007AFF,#FFFFFF", "label": "提交", "height": 32 } }, { "type": "Text", "props": { "y": 7, "x": 947, "width": 40, "text": "+", "rotation": 45, "pivotY": -1, "pivotX": -10, "name": "closeBtn", "height": 40, "fontSize": 40, "color": "#5d5454", "bold": false, "align": "center" } }, { "type": "Label", "props": { "y": 73, "x": 257, "text": "单词：", "name": "wordlabel", "fontSize": 20, "font": "FF", "color": "#2a2121" } }, { "type": "Image", "props": { "y": 61, "x": 325, "width": 615, "skin": "template/Text/TextBox.png", "height": 39 } }, { "type": "TextInput", "props": { "y": 66, "x": 340, "width": 586, "name": "options", "height": 31, "fontSize": 16, "font": "FF", "color": "#3b3232" } }, { "type": "Text", "props": { "y": 103, "x": 334, "text": "示例：\bblue,green,red,yellow", "name": "wordremark", "fontSize": 17, "font": "FF", "color": "#666666" } }] }, { "type": "Text", "props": { "y": 241, "x": 215, "wordWrap": true, "width": 798, "var": "tip", "text": "操作不正确！", "pivotY": 2, "pivotX": 8, "height": 117, "fontSize": 30, "font": "FF", "color": "#ee1613", "align": "left" } }, { "type": "Box", "props": { "y": 205, "x": 0, "width": 1020, "var": "mainpanel", "height": 478 } }] };
        return JumpFrogUI;
    }(View));
    ui.JumpFrogUI = JumpFrogUI;
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map