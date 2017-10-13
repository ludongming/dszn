function bigImage(image,index) {

  api.setScreenOrientation({
    orientation : 'landscape_left'
  });
  var photoBrowser = api.require('photoBrowser');
  photoBrowser.open({
    images: [image],
    placeholderImg: 'widget://res/img/apicloud.png',
    bgColor: '#000'
  }, function(ret, err) {
    if (ret.eventType == "click") {
      api.setScreenOrientation({
        orientation : 'auto_portrait'
      });


      api.execScript({
          name: 'dszp',
          frameName: '',
          script: 'setMenu('+index+');'
      });


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
        msg: '保存图片到手机 20金豆',
        buttons: ['确定', '取消']
    }, function(ret, err) {
        var index = ret.buttonIndex;
        if (index == 1) {
saveImageGallery(image);
        }
    });

}

function saveImageGallery(image){

  api.ajax({
      url: 'http://www.d-shang.com/index.php?app/downloadpic/?openid='+OPENID,
  },function(ret, err){
    console.log(JSON.stringify(ret));

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
