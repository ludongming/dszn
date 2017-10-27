/**
*@author
*@email 116311316@qq.com
*@version 1.1
*/
var lottery={
	 index : 1,
	 speed : 400,
	 roll:0,
	 cycle : 1,
	 times : 4,
	 prize : -1,
	 btn:0,
	run : function () {
		var before = lottery.index == 1 ? 10 : lottery.index - 1;
		$(".roll-" + lottery.index).addClass("active");
		$(".roll-" + before).removeClass("active");


		lottery.upSpeed();
		lottery.downSpeed();
		lottery.index += 1;
		lottery.index = lottery.index == 11 ? 1 : lottery.index;
	},

	upSpeed : function () {
		if (lottery.cycle < 2 && lottery.speed > 100) {
			lottery.speed -= lottery.index * 8;
			lottery.stop();
			lottery.start();
		}
	},

	downSpeed:function () {
		if (lottery.index == 10) {
			lottery.cycle += 1;
		}
		if (lottery.cycle > lottery.times - 1 && lottery.speed < 400) {
			lottery.speed += 20;
			lottery.stop();
			lottery.start();
		}

		if (lottery.cycle > lottery.times && lottery.index == lottery.prize) {
			lottery.stop();
		    lottery.showPrize();

		}

	},

	showPrize:function(){

		setTimeout(function(){
						if(lottery.prize==1){
							lottery.prize="狮子靠枕";
						}
						else if(lottery.prize==2){
							lottery.prize="F3取暖器";
						}
						else if(lottery.prize==3){
							lottery.prize="毛巾一条";
						}
						else if(lottery.prize==4){
							lottery.prize="万能拖把一个";
						}
						else if(lottery.prize==5){
							lottery.prize="谢谢惠顾";
						}
						else if(lottery.prize==8){
							lottery.prize="抱枕被一条";
						}
						else if(lottery.prize==9){
							lottery.prize="毛巾一条";
						}
						else if(lottery.prize==10){
							lottery.prize="谢谢惠顾";
						}
						else if(lottery.prize==7){
							lottery.prize="再接再励";
						}
						else if(lottery.prize==6){
							lottery.prize="毛巾一条";
						}
			alert(lottery.prize);
						lottery.btn.show();
		},700);
	},


	reset : function () {
		lottery.speed = 400;
		lottery.cycle = 0;
		lottery.run();
	},
	start : function () {
		lottery.roll = setInterval(lottery.run, lottery.speed);
	},

	stop : function () {
		clearInterval(lottery.roll);
	}
}
