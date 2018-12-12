// 程序入口，本工程仅用于切换各个动画进行测试
// 游戏名称，修改这个变量值来切换不同游戏，jumpfrog：青蛙 splitScreenSentence： 分屏组句
var gameName = "splitScreenSentence";
if (gameName == "jumpfrog") {
    // 青蛙
    var config = {
        gameModel: false,
        words: ["blue", "orange", "green", "yellow"],
    };
    new JumpFrog(config);
}
else if (gameName == "splitScreenSentence") {
    // 分屏组句
    var config = {
        gameModel: false,
        sentences: [{
                sentence: "I like playing basketball.",
                correctOptions: ["I", "like", "playing", "basketball"],
                wrongOptions: ["plays", "play"] // 错误选项
            }, {
                sentence: "This dog is so cute.",
                correctOptions: ["This", "dog", "is", "so", "cute"],
                wrongOptions: ["dogs", "are"]
            }]
    };
    new SplitScreenSentence(config);
}
//# sourceMappingURL=Index.js.map