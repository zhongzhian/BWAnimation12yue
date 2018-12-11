
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class JumpFrogUI extends View {
		public bg:Laya.Image;
		public replay:Laya.Box;
		public replayAble:Laya.Image;
		public setting:Laya.Image;
		public configBox:Laya.Box;
		public tip:laya.display.Text;
		public mainpanel:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"width":1024,"height":768},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"bg","skin":"JumpFrog/bg.png"}},{"type":"Box","props":{"y":710,"x":850,"var":"replay"},"child":[{"type":"Image","props":{"skin":"common/replay-disabled.png"}},{"type":"Image","props":{"var":"replayAble","skin":"common/replay-abled.png"}}]},{"type":"Image","props":{"y":26,"x":31,"width":30,"var":"setting","skin":"common/setting.png","height":30}},{"type":"Box","props":{"y":119,"x":575,"width":985,"var":"configBox","pivotY":100,"pivotX":554,"height":385},"child":[{"type":"Image","props":{"y":9,"x":163,"width":822,"skin":"common/configBG.png","sizeGrid":"20,10,20,10","height":197,"alpha":1}},{"type":"Button","props":{"y":131,"x":345,"width":86,"skin":"template/ButtonTab/btn_LargeTabButton_Middle.png","name":"submitBtn","labelSize":20,"labelColors":"#007AFF,#007AFF,#FFFFFF","label":"提交","height":32}},{"type":"Text","props":{"y":7,"x":947,"width":40,"text":"+","rotation":45,"pivotY":-1,"pivotX":-10,"name":"closeBtn","height":40,"fontSize":40,"color":"#5d5454","bold":false,"align":"center"}},{"type":"Label","props":{"y":73,"x":257,"text":"单词：","name":"wordlabel","fontSize":20,"font":"FF","color":"#2a2121"}},{"type":"Image","props":{"y":61,"x":325,"width":615,"skin":"template/Text/TextBox.png","height":39}},{"type":"TextInput","props":{"y":66,"x":340,"width":586,"name":"options","height":31,"fontSize":16,"font":"FF","color":"#3b3232"}},{"type":"Text","props":{"y":103,"x":334,"text":"示例：\bblue,green,red,yellow","name":"wordremark","fontSize":17,"font":"FF","color":"#666666"}}]},{"type":"Text","props":{"y":241,"x":215,"wordWrap":true,"width":798,"var":"tip","text":"操作不正确！","pivotY":2,"pivotX":8,"height":117,"fontSize":30,"font":"FF","color":"#ee1613","align":"left"}},{"type":"Box","props":{"y":205,"x":0,"width":1020,"var":"mainpanel","height":478}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.JumpFrogUI.uiView);

        }

    }
}
