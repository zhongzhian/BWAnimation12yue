// 分屏组句
import Stage = Laya.Stage;
import WebGL   = Laya.WebGL;
import Sprite = Laya.Sprite;
class SplitScreenSentence {
    public static splitScreenSentenceMain: SplitScreenSentenceMain; // 主界面
    public static gameConfig: any; // 游戏配置
    constructor(config: any)
    {
        // 如果没有传入配置，使用默认配置
        if(!config) {
            config = {
                gameModel: false, // 是否游戏模式，游戏模式不显示配置按钮
                sentences: [{ 
                    sentence: "I like play basketball.", // 句子
                    correctOptions: ["I", "like", "play", "basketball"], // 正确选项，顺序必须正确
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
        let resArray: any[] = [
            {url: "res/atlas/common.atlas", type: Laya.Loader.ATLAS},
            {url: "res/atlas/SplitScreenSentence.atlas", type: Laya.Loader.ATLAS},
            {url: "SplitScreenSentence/bg.png", type: Laya.Loader.IMAGE},
            {url: "template/Text/TextBox.png", type: Laya.Loader.IMAGE},
            {url: "template/ButtonTab/btn_LargeTabButton_Middle.png", type: Laya.Loader.IMAGE}
        ];
        
        Laya.loader.load(resArray, Laya.Handler.create(this, this.onload));     
    }

    // 游戏资源加载完成进行游戏初始化设置
    private onload() {
        let text = new Laya.Text();
        text.text = "fffff";
        text.font = "ff";
        // ff字体加载完再加载主页面
        Laya.timer.once(100, this, function() {
            SplitScreenSentence.splitScreenSentenceMain = new SplitScreenSentenceMain();
            Laya.stage.addChild(SplitScreenSentence.splitScreenSentenceMain);
        });
    }
}
