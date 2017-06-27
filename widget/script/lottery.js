/**
 *@author �����
 *@email 116311316@qq.com
 *@version 1.1
 */
var lottery = {
    index : 1, //���
    speed : 400, //��ʼ�ٶ�
    roll : 0, //��ʱ��id
    cycle : 1, //���ܵ�Ȧ��
    times : 4, //�����ܼ�Ȧ
    prize : -1, //�н�����
    fruit : ['苹果', '猕猴桃', '芒果', '荔枝', '草莓', '椰子', '菠萝', '番茄', '香蕉', '西瓜'],
    money : ['5', '5', '5', '10', '15', '5', '0', '-10', '-5', '10'],
    btn : 0,
    integral : 0,
    openid : "",
    run : function() {
        var integral = $(".score").html();
        if(integral<5){
            alert("最少要5积分才可以游戏哦");
            return;
        }
        var before = lottery.index == 1 ? 10 : lottery.index - 1;
        $(".roll-" + lottery.index).addClass("active");
        $(".roll-" + before).removeClass("active");

        //�����ӿ�Ĺ��
        lottery.upSpeed();
        lottery.downSpeed();
        lottery.index += 1;
        lottery.index = lottery.index == 11 ? 1 : lottery.index;
    },
    //����
    upSpeed : function() {
        if (lottery.cycle < 2 && lottery.speed > 100) {
            lottery.speed -= lottery.index * 8;
            lottery.stop();
            lottery.start();
        }
    },
    //����
    downSpeed : function() {
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
    //��ֹͣ����ʾ��� ��ť��ʾ����
    showPrize : function() {
        setTimeout(function() {
            var money = $(".score").html();
            money = parseInt(money) + parseInt(lottery.money[lottery.prize - 1]) - 5;//抽奖一次需要5积分
            if(money <=0 ){
                money = 0;
            }
            lottery.integral = money;
            lottery.updateMoney();
        }, 700);
    },

    //���¿�ʼ
    reset : function() {
        lottery.btn = $(this);
        lottery.btn.hide();
        lottery.speed = 400;
        lottery.cycle = 0;
        lottery.getPrice();
    },
    start : function() {
        lottery.roll = setInterval(lottery.run, lottery.speed);
    },

    stop : function() {
        clearInterval(lottery.roll);
    },
    
    getPrice : function() {
        api.ajax({
            url : 'http://www.d-shang.com/index.php?appclock/getrollprice/?openid=' + lottery.openid
        }, function(ret, err) {
            if(ret.data.status){
                lottery.prize = ret.data.price;
                //console.log(lottery.prize);
                lottery.run();                
            }else{
                alert(ret.data.message);
            }
        });
    },
    
    updateMoney : function () {
        api.ajax({
            url : 'http://www.d-shang.com/index.php?appclock/updateintegral/?openid=' + lottery.openid,
            method : 'post',
            data : {
                values : {
                    coupons : lottery.integral
                }
            }
        }, function(ret, err) {
        //console.log(JSON.stringify(ret));
            if(ret.data.status){
                $(".score").html(lottery.integral);
                lottery.btn.show();
            }else{
                alert(ret.data.message);
            }
        });    
    }    
}
