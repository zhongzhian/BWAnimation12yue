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
// 骰子类
var Crown = /** @class */ (function (_super) {
    __extends(Crown, _super);
    function Crown() {
        var _this = _super.call(this) || this;
        //当前动作
        _this.action = "";
        _this.init();
        return _this;
    }
    Crown.prototype.init = function () {
        if (!Crown.cached) {
            Crown.cached = true;
            //缓存摇动画
            Laya.Animation.createFrames(["JumpFrog/yun1.png", "JumpFrog/yun2.png", "JumpFrog/yun3.png"], "change");
            //缓存选中动画
            Laya.Animation.createFrames(["JumpFrog/crown.png"], "crown");
            Laya.Animation.createFrames(["JumpFrog/prince.png"], "prince");
        }
        if (!this.body) {
            this.body = new Laya.Animation();
            this.body.interval = 100;
            this.body.width = 246;
            this.body.height = 381;
            this.addChild(this.body);
            //添加动画播放完成事件
            this.body.on(Laya.Event.COMPLETE, this, this.onPlayComplete);
        }
        //默认循环移动动画
        this.playAction("crown");
    };
    // 动画完毕回调
    Crown.prototype.onPlayComplete = function () {
        // if(this.action == "change"){
        //     this.playAction("prince");
        // }
    };
    // 执行指定动画
    Crown.prototype.playAction = function (action) {
        //记录当前的播放动画类型
        this.action = action;
        //根据不同的动画类型播放动画;
        this.body.play(0, true, action);
        //获取动画大小的区域
        // var bound:Laya.Rectangle = this.body.getBounds();
        // //设置居中
        // this.body.pos(-bound.width/2,-bound.height/2);
    };
    return Crown;
}(Laya.Sprite));
//# sourceMappingURL=Crown.js.map