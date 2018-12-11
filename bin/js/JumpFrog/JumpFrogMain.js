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
// 泡泡游戏
var Stage = Laya.Stage;
var WebGL = Laya.WebGL;
var Sprite = Laya.Sprite;
var JumpFrogMain = /** @class */ (function (_super) {
    __extends(JumpFrogMain, _super);
    // public is
    function JumpFrogMain() {
        var _this = _super.call(this) || this;
        _this.maxX = 1000; //
        _this.maxY = 478; //
        _this.soundContext = 0; //
        _this.wordContext = ""; //
        _this.configView = new JFConfigView(_this.configBox);
        _this.tip.visible = false;
        _this.setting.on(Laya.Event.CLICK, _this, _this.showConfigView);
        if (JumpFrog.gameConfig.gameModel) {
            _this.setting.visible = false;
        }
        _this.restart();
        _this.replayAble.on(Laya.Event.CLICK, _this, _this.restart);
        return _this;
    }
    // 游戏重新开始
    JumpFrogMain.prototype.restart = function () {
        this.mainpanel.destroyChildren();
        this.init();
    };
    JumpFrogMain.prototype.gameover = function () {
        this.replayAble.visible = true;
        this.wordContext = "";
    };
    //初始化
    JumpFrogMain.prototype.init = function () {
        // 用来计算随机偏移量
        var perx = this.maxX / 20;
        var pery = this.maxX / 10;
        var posRan = this.getRandomArr(10);
        var numRan = this.getRandomArr(9);
        for (var i = 0; i < JumpFrog.gameConfig.words.length; i++) {
            var aa = JumpFrog.gameConfig.words[i];
            var item = new Leaf(aa);
            item.setPos(100 * i, 100 * i);
            item.shake1();
            this.mainpanel.addChild(item);
        }
        this.replayAble.visible = false;
    };
    // 显示提示
    JumpFrogMain.prototype.showTip = function (text) {
        this.tip.text = text;
        this.tip.visible = true;
        this.tip.removeSelf();
        this.addChild(this.tip);
        Laya.timer.once(1500, this, this.hideTip);
    };
    // 隐藏提示
    JumpFrogMain.prototype.hideTip = function () {
        this.tip.visible = false;
    };
    // 显示游戏配置页面 
    JumpFrogMain.prototype.showConfigView = function () {
        this.configView.show();
    };
    // 设置设置按钮是否显示
    JumpFrogMain.prototype.showSetting = function (state) {
        if (!JumpFrog.gameConfig.gameModel) {
            this.setting.visible = state;
        }
    };
    // 返回随机数组
    JumpFrogMain.prototype.getRandomArr = function (length) {
        if (length === void 0) { length = 0; }
        var arr = [];
        for (var i = 0; i < length; i++) {
            arr.push(i + 1);
        }
        return arr.sort(function (a, b) {
            return Math.random() > .5 ? -1 : 1;
        });
    };
    return JumpFrogMain;
}(ui.JumpFrogUI));
//# sourceMappingURL=JumpFrogMain.js.map