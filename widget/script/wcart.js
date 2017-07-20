var wcart={
  cookieName:'gld',
  addButton:'addwcart',
  mode:'productModel',
  removeButton:'removewcart',
  totalNum:'wcart_num',//数量变动情况
  totalPrice:'wcart_price',//总金额
  cartNum:'wcart_cartnum',
  debug:false,//是否开启调试模式
  expires:604800,//有效期
  init:function(cookieName){
     wcart.cookieName=cookieName;

     $("."+wcart.addButton).bind("click",wcart.addGoods);
     $("."+wcart.removeButton).bind("click",wcart.removeGoods);
     $(".wcart_add").bind("click",wcart.addGoodsNum);
     $(".wcart_reduce").bind('click',wcart.reduceGoodsNum);
     $(".wcart_num").bind('change',wcart.changeNum);
     $(".wcart_empty").bind('click',wcart.emptyGoods);
     wcart.statis();
  },
  parseCookie:function(){
    var cookie=wcart.getCookie();
    if (cookie==''||cookie==undefined) {
      return new Array();
    }else{
    return $.parseJSON(cookie);
    }
  },
  addGoods:function(){
  var sku=$(this).attr("sku");
  var price=$(this).attr("price");
  var packages=$(this).attr("packages");
  var orderNum=$("#num_"+sku).val();
  var obj=wcart.parseCookie();
  var newGoods={sku:sku,price:price,packages:packages,num:orderNum};
  //监测是否已经添加过了
  var isRepeat=false;
  for(var i=0;i<obj.length;i++){
     if(obj[i].sku==sku){
       //增加数量
       obj[i].num=parseInt(obj[i].num)+parseInt(orderNum);
       isRepeat=true;
     }
  }

  if(!isRepeat){
    obj.push(newGoods);
  }

   var str=JSON.stringify(obj);
   wcart.setCookie(wcart.cookieName,str);
   wcart.statis();

   wcart.completeAddGoods();
   //回调方法

  },
  completeAddGoods:function(){

  },
  removeGoods:function(){
    var obj=wcart.parseCookie();
    var sku=$(this).attr("sku");
    for(var i=0;i<obj.length;i++){
      if(obj[i].sku==sku){
          obj.splice(i,1);
          $(".wcart_"+sku).remove();
      }
    }

    var str=JSON.stringify(obj);
    wcart.setCookie(wcart.cookieName,str)
    wcart.statis();
  },
  emptyGoods:function(){

    api.removePrefs({
	    key:wcart.cookieName
    });


    wcart.statis();
  },
  statis:function(){
    var obj=wcart.parseCookie();
    var total=0.00;
    var num=0;
    if(obj.length<1){
      $("."+wcart.cartnum).html('0');
      $("."+wcart.totalPrice).html('0.00');
      return;
    }

    for(var i=0;i<obj.length;i++){
         total+=Math.round(parseInt(obj[i].price*100)*parseInt(obj[i].num)*parseInt(obj[i].packages))/100;
    }
    $("."+wcart.cartNum).html(obj.length);
    $("."+wcart.totalPrice).html(total);
    //显示代码
    if(wcart.debug){
      console.log(JSON.stringify(obj));
    }
  },
  addGoodsNum:function(){
    var sku=$(this).attr('sku');
    wcart.autoNum(sku,1);
  },
  reduceGoodsNum:function(){
    var sku=$(this).attr('sku');
    wcart.autoNum(sku,-1);
  },
  autoNum:function(sku,num){
    var currentNum=$("#num_"+sku).val();
    var nowNum=parseInt(currentNum)+parseInt(num);

      var mini=$("#num_"+sku).attr('mini');

      if(parseInt(nowNum)<1){
         return;
      }

    if(parseInt(nowNum)<parseInt(mini)){
        alert("最少"+mini+"件起订!");
        $("#num_"+sku).val(mini);

        return;
    }
    $("#num_"+sku).val(nowNum);

    if (wcart.mode=='productModel') {
      return;
    }
    var obj=wcart.parseCookie();
    for(var i=0;i<obj.length;i++){
      if(obj[i].sku==sku&&obj[i].num>0){
         obj[i].num=nowNum;
      }
    }
    var str=JSON.stringify(obj);
    wcart.setCookie(wcart.cookieName,str);
    wcart.statis();
  },
  changeNum:function(){
     var num=$(this).val();
     var sku=$(this).attr('sku');


	  var mini=$(this).attr('mini');
      if(parseInt(num)<parseInt(mini)){
          alert("最少"+mini+"件起订!");
          $("#num_"+sku).val(mini);
          return;
      }

     var reg=new RegExp(/^\d+$/i);
     if(!num.match(reg)){
       var lastNum=wcart.getGoodsNum(sku);
       $("#num_"+sku).val(lastNum);
       alert('输入的数量格式不正确!');
       return false;
     }
     if (wcart.mode=='productModel') {
       return;
     }

     var obj=wcart.parseCookie();
     //是否已经添加了
     var isAdd=false;
     for(var i=0;i<obj.length;i++){
       if(obj[i].sku==sku){
          obj[i].num=parseInt(num);
          isAdd=true;
       }
     }

    if (!isAdd) {
      return false;
    }

     var str=JSON.stringify(obj);
     setCookie(wcart.cookieName,str);
     wcart.statis();
  },
  getGoodsNum:function(sku){
    var obj=wcart.parseCookie();
    for(var i=0;i<obj.length;i++){
      if(obj[i].sku==sku){
        return obj[i].num;
      }
    }
    return 0;
  },
  setCookie:function(name,str){
    api.setPrefs({
	    key:name,
	    value:str
    });
  },
  getCookie:function(){
    return api.getPrefs({
	    sync:true,
	    key:wcart.cookieName
    });
  }

}
