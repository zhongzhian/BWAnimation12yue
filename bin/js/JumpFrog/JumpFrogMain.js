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
    function JumpFrogMain() {
        var _this = _super.call(this) || this;
        _this.maxX = 1000; //
        _this.maxY = 478; //
        _this.posArr = [
            [311, 49],
            [495, 151],
            [481, 327],
            [109, 163],
            [748, 216],
            [735, 67],
            [253, 276],
            [15, 18],
            [453, -88],
            [258, 425],
            [20, 356],
            [737, -88],
        ]; //
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
        _this.crown.on(Laya.Event.CLICK, _this, _this.checkOver);
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
        var rannum = JumpFrog.gameConfig.words.length < 9 ? 8 : 12;
        var posRan = this.getRandomArr(rannum);
        var numRan = this.getRandomArr(9);
        for (var i = 0; i < JumpFrog.gameConfig.words.length; i++) {
            var aa = JumpFrog.gameConfig.words[i];
            var item = new Leaf(aa);
            var pos = this.posArr[posRan[i] - 1];
            item.setPos(pos[0], pos[1]);
            item.shake1();
            this.mainpanel.addChild(item);
        }
        this.replayAble.visible = false;
        this.showCrownIndex(0);
        this.first.visible = true;
        this.last.visible = false;
    };
    JumpFrogMain.prototype.checkOver = function () {
        Laya.timer.once(400, this, function () {
            this.updateLeaf();
            this.last.visible = true;
            this.changeCrown();
        });
    };
    JumpFrogMain.prototype.updateLeaf = function () {
        this.first.visible = false;
        for (var i = 0; i < this.mainpanel.numChildren; i++) {
            var leaf = this.mainpanel.getChildAt(i);
            leaf.hideFrog();
        }
    };
    JumpFrogMain.prototype.changeCrown = function () {
        Laya.timer.once(1000, this, function () {
            this.last.visible = false;
            Laya.SoundManager.playSound("res/audio/JumpFrog/frogchange.mp3", 1);
            this.showCrownIndex(1);
            Laya.timer.once(100, this, function () {
                this.showCrownIndex(2);
                Laya.timer.once(100, this, function () {
                    this.showCrownIndex(3);
                    Laya.timer.once(100, this, function () {
                        this.showCrownIndex(4);
                        this.gameover();
                    });
                });
            });
        });
    };
    JumpFrogMain.prototype.showCrownIndex = function (index) {
        for (var i = 0; i < this.crownpanel.numChildren; i++) {
            var pic = this.crownpanel.getChildAt(i);
            pic.visible = index === i;
        }
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