// 泡泡游戏泡泡类
class Leaf extends ui.LeafUI {
    public name: string; //
    public initX: number; //原来的x轴坐标
    public initY: number; //原来的y轴坐标
    public isJump: boolean = false;

    constructor(word: string = "") {
        super();
        // this.bg.skin = "JumpFrog/leaf2.png";
        this.word.text = word;

        this.on(Laya.Event.CLICK, this, this.click);
    }

    // 被点击
    public click() {
        if (this.bg.skin == "JumpFrog/leaf2.png") {
            if (!this.isJump) {
                this.bg.skin = "JumpFrog/leaf1.png";
                this.isJump = true;
            }
        } else {
            this.bg.skin = "JumpFrog/leaf2.png";
        }
    }

    public setPos(x: number, y: number) {
        this.pos(x, y);
        this.initX = x
        this.initY = y
        // 让延迟0-1秒随机时间开始晃动
        Laya.timer.once(Math.random() * 1000, this, this.shake1);
    }

    // 飘动
    public shake1() {
        // if (this.isLeaving) return;
        Laya.Tween.to(this, { y: this.initY - 10 }, Math.random() * 2000 + 1000, null, Laya.Handler.create(this, this.shake2));
    }

    private shake2() {
        // if (this.isLeaving) return;
        Laya.Tween.to(this, { y: this.initY }, Math.random() * 2000 + 1000, null, Laya.Handler.create(this, this.shake1));
    }

    // 图片晃动
    private shake() {
        // Laya.SoundManager.playSound("res/audio/HotAirBalloon/hab-wrong.mp3", 1);
        let _x = this.x;
        Laya.Tween.to(this, { x: _x - 15 }, 50, Laya.Ease.elasticInOut, Laya.Handler.create(this, function () {
            Laya.Tween.to(this, { x: _x + 15 }, 50, Laya.Ease.elasticInOut, Laya.Handler.create(this, function () {
                Laya.Tween.to(this, { x: _x - 15 }, 50, Laya.Ease.elasticInOut, Laya.Handler.create(this, function () {
                    Laya.Tween.to(this, { x: _x + 15 }, 50, Laya.Ease.elasticInOut, Laya.Handler.create(this, function () {
                        Laya.Tween.to(this, { x: _x - 15 }, 50, Laya.Ease.elasticInOut, Laya.Handler.create(this, function () {
                            Laya.Tween.to(this, { x: _x }, 50, Laya.Ease.elasticInOut)
                        }))
                    }))
                }))
            }))
        }));
    }
}
