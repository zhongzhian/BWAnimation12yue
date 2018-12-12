// 分屏组句
var Stage = Laya.Stage;
var WebGL = Laya.WebGL;
var Sprite = Laya.Sprite;
var SplitScreenSentence = /** @class */ (function () {
    function SplitScreenSentence(config) {
        // 如果没有传入配置，使用默认配置
        if (!config) {
            config = {
                gameModel: false,
                sentences: [{
                        sentence: "I like play basketball.",
                        correctOptions: ["I", "like", "play", "basketball"],
                        wrongOptions: ["plays"] // 错误选项
                    }, {
                        sentence: "This puppy is so cute.",
                        correctOptions: ["This", "puppy", "is", "so", "cute"],
                        wrongOptions: ["puppies"]
                    }]
            };
        }
        SplitScreenSentence.gameConfig = config;
        // 初始化舞台设置
        Laya.init(1024, 768, WebGL);
        Laya.stage.alignV = Stage.ALIGN_MIDDLE;
        Laya.stage.alignH = Stage.ALIGN_CENTER;
        Laya.stage.scaleMode = "showall";
        Laya.stage.bgColor = "#000000";
        // 加载游戏资源
        var resArray = [
            { url: "res/atlas/common.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/SplitScreenSentence.atlas", type: Laya.Loader.ATLAS },
            { url: "SplitScreenSentence/bg.png", type: Laya.Loader.IMAGE },
            { url: "template/Text/TextBox.png", type: Laya.Loader.IMAGE },
            { url: "template/ButtonTab/btn_LargeTabButton_Middle.png", type: Laya.Loader.IMAGE }
        ];
        Laya.loader.load(resArray, Laya.Handler.create(this, this.onload));
    }
    // 游戏资源加载完成进行游戏初始化设置
    SplitScreenSentence.prototype.onload = function () {
        var text = new Laya.Text();
        text.text = "fffff";
        text.font = "ff";
        // ff字体加载完再加载主页面
        Laya.timer.once(100, this, function () {
            SplitScreenSentence.splitScreenSentenceMain = new SplitScreenSentenceMain();
            Laya.stage.addChild(SplitScreenSentence.splitScreenSentenceMain);
        });
    };
    return SplitScreenSentence;
}());
//# sourceMappingURL=SplitScreenSentence.js.map