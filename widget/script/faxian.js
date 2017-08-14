function loadAdv() {
    api.ajax({
        url: 'http://www.d-shang.com/index.php?app/getadv/?id=123&openid=' + OPENID
    }, function(ret, err) {
        if (typeof(err) == "object") {
            weui.alert("推荐图加载失败");
            return false;
        }
        //coding...
        $("#qiandao").attr("src", "http://www.d-shang.com/" + ret.data.image);
    });
}

function switchBtn(index) {
  closePlayer();
    backSwitchBtn(index);
    mySwiper.slideTo(index, 500, false); //切换到第一个slide，速度为1秒

}

function backSwitchBtn(index){
  var navArr = $(".nav");
  navArr.each(function() {
      $(this).css({
          "color": "black"
      });
  })

  $(".nav_" + index).css({
      "color": "red"
  });
}


function showQDBox() {
    var dialogBox = api.require('dialogBox');
    dialogBox.taskPlan({
        rect: {
            w: 300
        },
        texts: {
            mainTitle: '每日签到',
            subTitle: '我跨过山海和大海，只为遇见你',
            content: [{
                text: '奖励+5金豆'
            }, {
                text: '刷礼物，获得跑车'
            }],
            btnTitle: '点击签到'
        },
        styles: {
            bg: '#fff',
            main: {
                marginT: 20,
                color: '#737373',
                size: 18,
                bold: true,
            },
            sub: {
                marginT: 8,
                color: '#999999',
                size: 16,
            },
            content: [{
                bg: '#ffd249',
                marginT: 10,
                w: 280,
                h: 30,
                align: 'center',
                color: '#bd6705',
                size: 16
            }, {
                bg: '#ffeabf',
                marginT: 0,
                w: 280,
                h: 30,
                align: 'center',
                color: '#efbb74',
                size: 16
            }],
            ok: {
                w: 280,
                h: 40,
                marginL: 10,
                bg: '#ed1c43',
                align: 'center',
                color: '#fff',
                size: 16
            }
        }
    }, function(ret) {
        if (ret.eventType == 'ok') {

            api.ajax({
                url: 'http://www.d-shang.com/index.php?appclock/clock/?openid=' + OPENID,
                method: 'post',
                data: {
                    values: {
                        address: ADDRESS
                    }
                }
            }, function(ret, err) {

                clock();
            });


            api.toast({
                msg: '签到成功',
                duration: 2000,
                location: 'middle'
            });


            var dialogBox = api.require('dialogBox');
            dialogBox.close({
                dialogName: 'taskPlan'
            });

        }
    });

}

function addlocation() {
    var aMapLBS = api.require('aMapLBS');
    aMapLBS.configManager({
        accuracy: 'hundredMeters',
        filter: 1
    }, function(ret, err) {
        if (ret.status) {
            //alert('定位管理器初始化成功！');
            locationAddress();
        } else {
            alert(err.msg);
        }
    });
}

function locationAddress() {
    var aMapLBS = api.require('aMapLBS');
    aMapLBS.singleAddress({
        timeout: 10
    }, function(ret, err) {
        if (ret.status) {
            var d = ret.address;
            ADDRESS = d.province + " " + d.city;
        } else {
            alert(err.msg);

        }
    });
}

function isClock() {

    api.ajax({
        url: 'http://www.d-shang.com/index.php?appclock/checkuserclock/?openid=' + OPENID
    }, function(ret, err) {
        if (typeof(err) == "object") {
            weui.alert("推荐图加载失败");
            return false;
        }

        if (ret.data == false) {
            showQDBox();
        }
    });

}

function rq() {
    loadAdv();
    isClock();

    var myDate = new Date();
    var month = myDate.getMonth() + 1;
    var day = myDate.getDate();
    $(".rq").html(day);
}



function cleanBadge() {
    $(".weui-badge").html(0);
    $(".weui-badge").hide();
}

function clock() {
    api.openWin({
        name: 'clock',
        url: './active/clock.html'
    });
}

function setBadgeNum(num) {
    var num = $(".weui-badge").html();
    num = parseInt(num) + 1;
    $(".weui-badge").html(num);
    $(".weui-badge").show();
}

function user(uid) {
    api.openWin({
        name: 'user',
        url: './video.html',
        pageParam: {
            uid: uid
        }
    });
}

function bigImage(image) {
    var photoBrowser = api.require('photoBrowser');
    photoBrowser.open({
        images: [image],
        placeholderImg: 'widget://res/img/apicloud.png',
        bgColor: '#000'
    }, function(ret, err) {
        if (ret.eventType == "click") {
            photoBrowser.close();
        }

        if (ret.eventType == "longPress") {
            photoBrowser.getImage({
                index: 0
            }, function(ret, err) {
                if (ret) {
                    saveImage(ret.path);
                } else {
                    alert(JSON.stringify(err));
                }
            });

        }

    });
}

function saveImage(image) {
    api.confirm({
        title: '提示',
        msg: '保存图片到手机',
        buttons: ['确定', '取消']
    }, function(ret, err) {
        var index = ret.buttonIndex;
        if (index == 1) {
            api.saveMediaToAlbum({
                path: image
            }, function(ret, err) {
                if (ret && ret.status) {
                    api.toast({
                        msg: '保存成功',
                        duration: 1000,
                        location: 'bottom'
                    });
                } else {
                    alert('保存失败');
                }
            });
        }
    });

}


function notice() {
    api.openWin({
        name: 'notice',
        url: './notice.html'
    });
}

function zan(nid) {
    var isZan = $("#zanimage" + nid).attr("data");
    var flower = $(".zan_" + nid).html();
    if (flower == "") {
        flower = 0;
    }
    if (isZan == 1) {
        flower = parseInt(flower) - 1;
        $("#zanimage" + nid).attr("data", 0);
        $("#zanimage" + nid).attr("src", "../image/zan0.png");
    } else {
        flower = parseInt(flower) + 1;
        $("#zanimage" + nid).attr("data", 1);
        $("#zanimage" + nid).attr("src", "../image/zan1.png");
        $("#zanimage" + nid).css({
            height: "30px",
            width: "30px"
        });
        $("#zanimage" + nid).animate({
            height: "25px",
            width: "25px"
        }, 500);
    }
    $(".zan_" + nid).html(flower);
    api.ajax({
        url: 'http://www.d-shang.com/index.php?blog/flower/?openid=' + OPENID + "&nid=" + nid
    }, function(ret, err) {

    });
}

function friend() {
    api.openWin({
        name: 'friend',
        url: './friends/add.html'
    });
}



function refresh() {
    location.reload();
}


function dropDownRecommend() {

    api.setRefreshHeaderInfo({
        loadingImg: 'widget://image/refresh.png',
        bgColor: '#ccc',
        textColor: '#fff',
        textDown: '下拉刷新...',
        textUp: '松开刷新...'
    }, function(ret, err) {
        //在这里从服务器加载数据，加载完成后调用api.refreshHeaderLoadDone()方法恢复组件到默认状态
        loadRecommendData();
        rq();

    });

}




function loadRecommendData() {
    api.ajax({
        url: 'http://www.d-shang.com/index.php?blog/getblogdata/?p=1&openid=' + OPENID,
        timeout: 5,
        report: false
    }, function(ret, err) {
        api.refreshHeaderLoadDone();

        if (typeof(err) == "object") {
            weui.alert("网络请求超时，请稍后再试");
            return false;
        }

        if (ret.status) {
            var d = ret.data;
            var arrText = doT.template($("#interpolationtmpl").text());
            $("#recommendmain").html(arrText(d.recommend));
            $("#allmain").html(arrText(d.all));
            $("#rankmain").html(arrText(d.rank));
            $('.pic').picLazyLoad();
        }



    });
}
