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
  });
}
