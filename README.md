#顶上智能APP


功能主要包括发现、订购、服务、理客、我

支持交通银行在线网银功能


登录的时候通过获取用户的openid

测试openid=44vpis+4qJhXwj3IXOgY

接口方式采用json格式，请求数据的时候都需要加openid可以是POST也可以是GET


接口返回方式
{"status":true,"message":"SUCCESS","data":{}}

用户信息接口
http://www.d-shang.com/index.php?app/getuserinfo/?openid=OPENID







#礼物系统使用方法
1、先引入gift.css 和 gift.js
2、先把js模板进入到页面
3、引入小图标，并且加上touch事件。
·

<!--礼物JS模板-->
<script id="giftlist" type="text/x-dot-template">
	{{~it:value:index}}
	<div class="box  {{? index==0}}xz{{?}}" id="box_{{=value.id}}" data-id="{{=value.id}}" data-money="{{=value.money}}" ontouchend="xuanzhong({{=value.id}})">
	<img src="../../image/defualt.png" class="pic" data-original="http://www.d-shang.com/{{=value.image}}">
	<span class="boxname">{{=value.name}}</span>
	<span class="boxmoney">{{=value.money}}金豆</span>
	</div>
	{{~}}
</script>

·
<img src="../../image/songli.png" style="width:25px;vertical-align: middle" ontouchend="gift({{=value.uid}},'{{=value.real_name}}')">

·
·