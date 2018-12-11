// 程序入口，本工程仅用于切换各个动画进行测试

// 游戏名称，修改这个变量值来切换不同游戏，jumpfrog：青蛙
let gameName = "jumpfrog";

if (gameName == "jumpfrog") {
    // 青蛙
    let config: any = {
        gameModel: false, // 是否游戏模式，游戏模式不显示配置按钮
        words: ["blue", "orange", "green","blue", "orange", "green","blue", "orange", "green", "yellow"], // 单词,
    };
    new JumpFrog(config);
}
