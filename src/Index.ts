// 程序入口，本工程仅用于切换各个动画进行测试

// 游戏名称，修改这个变量值来切换不同游戏，jumpfrog：青蛙 splitScreenSentence： 分屏组句
let gameName = "splitScreenSentence";

if (gameName == "jumpfrog") {
    // 青蛙
    let config: any = {
        gameModel: false, // 是否游戏模式，游戏模式不显示配置按钮
        words: ["blue", "orange", "green", "yellow"], // 单词,
    };
    new JumpFrog(config);
}

else if(gameName == "splitScreenSentence") {
    // 分屏组句
    let config: any = {
        gameModel: false, // 是否游戏模式，游戏模式不显示配置按钮
        sentences: [{ 
            sentence: "I like playing basketball.", // 句子
            correctOptions: ["I", "like", "playing", "basketball"], // 正确选项，顺序必须正确
            wrongOptions: ["plays", "play"] // 错误选项
        }, { 
            sentence: "This dog is so cute.",
            correctOptions: ["This", "dog", "is", "so", "cute"],
            wrongOptions: ["dogs", "are"]
        }]
    };
    new SplitScreenSentence(config);
}
