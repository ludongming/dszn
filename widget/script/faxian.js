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
    //设置frame组当前可见frame
    api.setFrameGroupIndex({
        name: 'explore',
        index: index,
        scroll: true
    });
}
//加样式
function backSwitchBtn(index) {
    var navArr = $(".nav");
    navArr.each(function() {
        $(this).css({
            "color": "black"
        });
    });

    $(".nav_" + index).css({
        "color": "red"
    });
}


function showQDBox() {
    var dialogBox = api.require('dialogBox');
    var c = dialogBox.raffle({
        texts: {
            mainText: '+5枚豆子',
            subText: '喜欢这种东西，捂住嘴巴\r\n也会从眼睛里跑出来。',
            rightTitle: '点击签到'
        },
        styles: {
            bg: '#fff',
            w: 300,
            corner: 12,
            title: {
                size: 14,
                color: '#000'
            },
            icon: {
                marginT: 10,
                w: 200,
                h: 154,
                iconPath: 'widget://image/zaoan/zaoan2.jpg'
            },
            main: {
                marginT: 10,
                color: '#636363',
                size: 13
            },
            sub: {
                marginT: 0,
                color: '#999999',
                size: 12
            },
            right: {
                marginB: 20,
                marginL: 50,
                w: 200,
                h: 35,
                corner: 6,
                bg: '#ff5555',
                color: '#fff',
                size: 18
            }
        }
    }, function(ret, err) {
console.log(JSON.stringify(ret));
        if (ret.eventType == 'right') {

            api.ajax({
                url: 'http://www.d-shang.com/index.php?appclock/clock/?openid=' + OPENID,
                method: 'post',
                data: {
                    values: {
                        address: ADDRESS
                    }
                }
            }, function(ret, err) {
                daily();
            });

            var dialogBox = api.require('dialogBox');
            dialogBox.close({
                dialogName: 'raffle'
            });
            api.toast({
                msg: '签到成功',
                duration: 2000,
                location: 'middle'
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
        url: '../active/clock.html'
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
        url: '../friends/user.html',
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

function fans(uid,id){
  $("#fans_"+id).html("已关注");
  api.toast({
      msg: '关注成功',
      duration: 2000,
      location: 'middle'
  });

  api.ajax({
      url: 'http://www.d-shang.com/index.php?appfans/addfans',
      method: 'post',
      data: {
          values: {
              openid: OPENID,
              uid:uid
          }
      }
  },function(ret, err){

  });

}


function me() {
    api.openWin({
        name: 'user',
        url: './friends/add.html',
        animation: {
          type: "movein", //动画类型（详见动画类型常量）
          subType: "from_bottom", //动画子类型（详见动画子类型常量）
          duration: 300 //动画过渡时间，默认300毫秒
        }
    });
}

function playVideo(obj) {

    var img = $(obj).children(".videocontroll");

    var source = $(obj).attr("data-source");

    loadPlayer(source, obj);

}
var  player;
function initPlayer(){
  player= new prismplayer({
      id: "J_prismPlayer",
      autoplay: false,
      isLive: false,
      playsinline: true,
      showBuffer:true,
      width: "100%",
      height: "40px",
      controlBarVisibility: "click",
      useH5Prism: true,
      useFlashPrism: false,
      source: "",
      cover: "",
    });
}


function loadPlayer(source, obj) {
  var top = $(obj).offset().top;
  var y = $(obj).height();
  var width = api.winWidth;
    $("#J_prismPlayer").show();
  $("#J_prismPlayer").css({"top":top});
  player.loadByUrl(source);
  player.setPlayerSize(width+"px",y+"px");

player.play();

player.on('ended',function(e) {
  $("#J_prismPlayer").hide();
});

}


function closePlayer() {

}

function daily() {
    api.openWin({
        name: 'daily',
        url: '../active/luck.html',
        pageParam: {
            name: 'test'
        }
    });

}

//加载动画
function circleloading(bfb) {
    //10等分
    var df = Math.floor(bfb / 10) * 0.2;

    var percent = -0.5 + df;
    percent = percent.toFixed(1); //只保留1位
    if (percent > 1.5) {
        return false;
    }
    var canvas = document.createElement("canvas");
    context = canvas.getContext("2d"); //画布

    context.beginPath();
    //定位画布的起点坐标
    context.translate(100, 100);
    //起始连接点 直线链接
    context.moveTo(0, 0);
    //结束点的位置
    context.arc(0, 0, 25, -0.5 * Math.PI, percent * Math.PI);
    //填充颜色
    context.fillStyle = "#ccc"; //填充颜色
    context.fill();

    return canvas.toDataURL("image/png");
}

function saveImage(image) {
    api.confirm({
        title: '提示',
        msg: '保存图片到手机20金豆',
        buttons: ['确定', '取消']
    }, function(ret, err) {
        var index = ret.buttonIndex;
        if (index == 1) {
saveImageMoney(image);
        }
    });

}

function saveImageMoney(image){
  api.ajax({
      url: 'http://www.d-shang.com/index.php?app/downloadpic/?openid='+OPENID,
  },function(ret, err){
      if (ret.status) {

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
        $("#zanimage" + nid).attr("src", "../../image/zan0.png");
    } else {
        flower = parseInt(flower) + 1;
        $("#zanimage" + nid).attr("data", 1);
        $("#zanimage" + nid).attr("src", "../../image/zan1.png");
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


function dropDownRecommend(type) {

  	var	 mescroll= new MeScroll("mescroll", {
  				down: {
            offset:100,
            outOffsetRate:0.1,
            isLock:false,
  					callback: function(mm){
              loadRecommendData(mescroll,type);
            }
        	}
  			});
}

function loadRecommendData(mescroll,type) {

   if(type=="recommend"){
       rq();
   }

    api.ajax({
        url: 'http://www.d-shang.com/index.php?blog/getblogdata/?p=1&openid=' + OPENID,
        timeout: 15,
        report: false
    }, function(ret, err) {
       mescroll.endSuccess();
        if (typeof(err) == "object") {
            weui.alert("网络请求超时，请稍后再试");
            return false;
        }

        if (!ret.status) {
          alert(ret.message);
           return false;
        }

        var d = ret.data;
        var arrText = doT.template($("#interpolationtmpl").text());

        if(type=="recommend"){
          $("#recommendmain").html(arrText(d.recommend));
        }

        if(type=="all"){
          $("#recommendmain").html(arrText(d.all));
        }

        if(type=="rank"){
          $("#recommendmain").html(arrText(d.rank));
        }

        $('.pic').picLazyLoad({
            threshold: 300
        });
        $(".message").bind("click", setCopy);

    });
}



function setCopy() {
    var obj = this;
    var top = $(this).offset().top;
    var arr = $(".message");
    arr.each(function() {
        $(this).removeClass("clipselect");
    })
    $(obj).addClass("clipselect");
    t = top + 30;
    $("#clip").css({
        "top": t
    });
    $("#clip").show();
    $("#clip").on("click", copySelectText);
}

function copySelectText() {
    var text = $(".clipselect").html();
    var clipBoard = api.require('clipBoard');
    clipBoard.set({
        value: text
    }, function(ret, err) {
        if (ret) {
            api.toast({
                msg: '复制成功',
                duration: 2000,
                location: 'middle'
            });
            hideSelectText();
        }
    });

}

function hideSelectText() {
    $("#clip").hide();
    var arr = $(".message");
    arr.each(function() {
        $(this).removeClass("clipselect");
    })
}


function shareWxImg(image, id) {
    var dialogBox = api.require('dialogBox');
    dialogBox.actionMenu({
        rect: {
            h: 150
        },
        texts: {
            cancel: '取消'
        },
        items: [{
                text: '微信朋友圈',
                icon: 'widget://image/timeline.png'
            }, {
                text: '微信好友',
                icon: 'widget://image/friends.png'
            }

        ],
        tapClose: true,
        isCuttingLine: true,
        styles: {
            bg: '#FFF',
            column: 2,
            itemText: {
                color: '#000',
                size: 12,
                marginT: 8
            },
            itemIcon: {
                size: 60
            },
            cancel: {
                bg: 'fs://icon.png',
                color: '#000',
                h: 50,
                size: 14
            }
        }
    }, function(ret) {

        var dialogBox = api.require('dialogBox');
        dialogBox.close({
            dialogName: 'actionMenu'
        });
        if (ret.eventType == "cancel") {
            return false;
        }

        var index = ret.index;
        var type = index == 1 ? "session" : "timeline";
        downloadShareImage(image, type, id);
    });


}

function shareWxVideo(image, video, desc) {
    var dialogBox = api.require('dialogBox');
    dialogBox.actionMenu({
        rect: {
            h: 150
        },
        texts: {
            cancel: '取消'
        },
        items: [{
                text: '微信朋友圈',
                icon: 'widget://image/timeline.png'
            }, {
                text: '微信好友',
                icon: 'widget://image/friends.png'
            }

        ],
        tapClose: true,
        isCuttingLine: true,
        styles: {
            bg: '#FFF',
            column: 2,
            itemText: {
                color: '#000',
                size: 12,
                marginT: 8
            },
            itemIcon: {
                size: 60
            },
            cancel: {
                bg: 'fs://icon.png',
                color: '#000',
                h: 50,
                size: 14
            }
        }
    }, function(ret) {
        var dialogBox = api.require('dialogBox');
        dialogBox.close({
            dialogName: 'actionMenu'
        });
        if (ret.eventType == "cancel") {
            return false;
        }

        var index = ret.index;
        var type = index == 1 ? "session" : "timeline";
        downloadShareVideo(type, image, video, desc);

    });
}

function downloadShareVideo(type, image, video, desc) {

    var url = "http://www.d-shang.com" + image;
    var img = image.match(/\w+\.jpg/g);

    api.download({
        url: url,
        savePath: 'fs://' + img,
        report: true,
        cache: true,
        allowResume: true
    }, function(ret, err) {
        if (ret.state == 1) {
            shareVideo(img, video, type, desc);
        }
    });
}


function downloadShareImage(image, type, id) {
    var url = "http://www.d-shang.com" + image;
    var img = image.match(/\w+\.jpg/g);
    api.download({
        url: url,
        savePath: 'fs://' + img,
        report: true,
        cache: true,
        allowResume: true
    }, function(ret, err) {
        if (ret.state == 1) {
            shareImage(img, type, id);
        }
    });
}

function shareVideo(img, video, type, desc) {
    var videoUrl = "http://www.d-shang.com" + video;
    var wx = api.require('wx');
    wx.shareVideo({
        apiKey: 'wx062395c72d4d0732',
        scene: type,
        title: desc,
        description: '顶上智能,上市公司 股票代码839431,国家高新技术企业,400多项国家专利',
        thumb: 'fs://' + img,
        contentUrl: videoUrl
    }, function(ret, err) {
        if (ret.status) {
            api.toast({
                msg: '分享成功',
                duration: 2000,
                location: 'middle'
            });
        }
    });
}

function addShareRecord(id, type) {
    api.ajax({
        url: 'http://www.d-shang.com/index.php?blog/addsharerecord/?openid=' + OPENID,
        method: 'post',
        data: {
            values: {
                type: type,
                shareid: id
            }
        }
    }, function(ret, err) {
        console.log(JSON.stringify(ret));
    });


}

function shareImage(img, type, id) {
    var wx = api.require('wx');
    wx.shareImage({
        apiKey: 'wx062395c72d4d0732',
        scene: type,
        contentUrl: 'fs://' + img
    }, function(ret, err) {
        if (ret.status) {
            addShareRecord(id, type);
            api.toast({
                msg: '分享成功',
                duration: 2000,
                location: 'middle'
            });

        }
    });

}
