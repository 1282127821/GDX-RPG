eval(""+load('global.js'));

var black = $(Res.get(Setting.UI_BASE_IMG)).setSize(GameUtil.screen_width, GameUtil.screen_height).setColor(Color.BLACK).getItem();
PostUtil.showMenu=false;
playSE("fire.mp3");
pause(230);
playSE("YS070523.wav");


var cg = $(Res.get(Setting.IMAGE_CG+"flash.png")).setColor(1,1,1,0).getItem();
cg.addAction(Actions.sequence(Actions.color(new Color(1,0.7,0,0.8),0.02),Actions.fadeOut(0.1),Actions.run(function(){
	CG.dispose(cg);
})));
CG.push(cg);

pause(79);

var cg = $(Res.get(Setting.IMAGE_CG+"flash.png")).setColor(1,1,1,0).setScale(3.8).setPosition(-800,-300).getItem();
cg.addAction(Actions.sequence(Actions.color(new Color(1,0.7,0,0.8),0.02),Actions.fadeOut(0.1),Actions.run(function(){
	CG.dispose(cg);
})));
CG.push(cg);

pause(83);
pause(130);

playSE("woodwave.wav");

pause(300);

showMenu(false);

showMSG(MsgType.����);
pause(10);
say("��������������Ӯ�ˣ�","������");
say("�����ϣ�","������");
hideMSG();
pause(60);

showMSG(MsgType.����);
say("�úÿ������Լ������������Ӱɣ�","������");
hideMSG();
pause(80);

showMSG(MsgType.��);
say("��仰��","������");
say("����ԭ�ⲻ���ػ��������ǡ���ء�","������");
hideMSG();


removeSelf();
end();