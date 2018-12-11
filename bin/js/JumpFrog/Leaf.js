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
// 泡泡游戏泡泡类
var Leaf = /** @class */ (function (_super) {
    __extends(Leaf, _super);
    function Leaf(word) {
        if (word === void 0) { word = ""; }
        var _this = _super.call(this) || this;
        _this.isJump = false;
        // this.bg.skin = "JumpFrog/leaf2.png";
        _this.word.text = word;
        _this.frog.visible = false;
        _this.on(Laya.Event.CLICK, _this, _this.click);
        return _this;
    }
    // 被点击
    Leaf.prototype.click = function () {
        if (JumpFrog.jumpFrogMain.replayAble.visible)
            return;
        if (this.bg.skin == "JumpFrog/leaf2.png") {
            if (!this.isJump) {
                this.bg.skin = "JumpFrog/leaf1.png";
                this.isJump = true;
                Laya.timer.once(1000, this, this.showFrog);
            }
        }
        else {
            this.bg.skin = "JumpFrog/leaf2.png";
            Laya.SoundManager.playSound("res/audio/JumpFrog/leaf.mp3", 1);
        }
    };
    Leaf.prototype.showFrog = function () {
        JumpFrog.jumpFrogMain.updateLeaf();
        Laya.SoundManager.playSound("res/audio/JumpFrog/frogjump.mp3", 1);
        this.frog.visible = true;
    };
    Leaf.prototype.hideFrog = function () {
        this.frog.visible = false;
    };
    Leaf.prototype.setPos = function (x, y) {
        this.pos(x, y);
        this.initX = x;
        this.initY = y;
        // 让延迟0-1秒随机时间开始晃动
        Laya.timer.once(Math.random() * 1000, this, this.shake1);
    };
    // 飘动
    Leaf.prototype.shake1 = function () {
        // if (this.isLeaving) return;
        Laya.Tween.to(this, { y: this.initY - 5 }, Math.random() * 2000 + 1000, null, Laya.Handler.create(this, this.shake2));
        // Laya.Tween.to(this, { y: this.initY - 10 }, 3000, null, Laya.Handler.create(this, this.shake2));
    };
    Leaf.prototype.shake2 = function () {
        // if (this.isLeaving) return;
        Laya.Tween.to(this, { y: this.initY }, Math.random() * 2000 + 1000, null, Laya.Handler.create(this, this.shake1));
        // Laya.Tween.to(this, { y: this.initY }, 3000, null, Laya.Handler.create(this, this.shake1));
    };
    // 图片晃动
    Leaf.prototype.shake = function () {
        // Laya.SoundManager.playSound("res/audio/HotAirBalloon/hab-wrong.mp3", 1);
        var _x = this.x;
        Laya.Tween.to(this, { x: _x - 15 }, 50, Laya.Ease.elasticInOut, Laya.Handler.create(this, function () {
            Laya.Tween.to(this, { x: _x + 15 }, 50, Laya.Ease.elasticInOut, Laya.Handler.create(this, function () {
                Laya.Tween.to(this, { x: _x - 15 }, 50, Laya.Ease.elasticInOut, Laya.Handler.create(this, function () {
                    Laya.Tween.to(this, { x: _x + 15 }, 50, Laya.Ease.elasticInOut, Laya.Handler.create(this, function () {
                        Laya.Tween.to(this, { x: _x - 15 }, 50, Laya.Ease.elasticInOut, Laya.Handler.create(this, function () {
                            Laya.Tween.to(this, { x: _x }, 50, Laya.Ease.elasticInOut);
                        }));
                    }));
                }));
            }));
        }));
    };
    return Leaf;
}(ui.LeafUI));
//# sourceMappingURL=Leaf.js.map