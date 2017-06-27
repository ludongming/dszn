//极光推送
function initJPPush() {
	jpush = api.require('ajpush');
	
		addJPPushListen();

	api.addEventListener({
		name : 'appintent'
	}, function(ret, err) {

		if (ret && ret.appParam.ajpush) {
			var ajpush = ret.appParam.ajpush;
			var id = ajpush.id;
			var title = ajpush.title;
			var content = ajpush.content;
			var extra = ajpush.extra;
		
		}

	})
	api.addEventListener({
		name : 'pause'
	}, function(ret, err) {
		onPause();
		//监听应用进入后台，通知jpush暂停事件
	})
	api.addEventListener({
		name : 'resume'
	}, function(ret, err) {
		onResume();
		//监听应用恢复到前台，通知jpush恢复事件
	})
	api.addEventListener({
		name : 'noticeclicked'
	}, function(ret, err) {

		if (ret && ret.value) {
			var ajpush = ret.value;
			var content = ajpush.content;
			var extra = ajpush.extra;
			

		}
	})
}

function cleanJPushBadge() {
	var ajpush = api.require('ajpush');
	ajpush.setBadge({
		badge : 0
	});
}

//统计-app恢复
function onResume() {
	jpush.onResume();
	console.log('JPush onResume');
}

//统计-app暂停
function onPause() {
	jpush.onPause();
	console.log('JPush onPause');
}

//设置推送信息
function addJPPushListen() {
	var ajpush = api.require('ajpush');
	var systemType = api.systemType;
	if (systemType == "android") {
		ajpush.init(function(ret) {
			if (ret && ret.status) {
				//success
				addPushListen();
			}
		});
	} else {
		addPushListen();
	}
}

function addPushListen() {
	var ajpush = api.require('ajpush');
	ajpush.setListener(function(ret) {
		//readMessage(ret);
		if(ret.content=="message"){
			sendBadge();
		}
	});
}

function sendBadge() {
	//清除小红点
	api.execScript({
		name : 'home', //这里root代表index.html
		frameName : 'frame0',
		script : 'setBadgeNum();'
	});
}

//读取消息
function readMessage(message) {
	//异步返回结果：
	api.readFile({
		path : 'fs://message.txt'
	}, function(ret, err) {
		if (ret.status) {
			var data = JSON.parse(ret.data);
		} else {
			var data = new Array();
		}

		var d = new Date();
		var rq = (d.getMonth() + 1) + "/" + d.getDate();
		message.rq = rq;
		data.push(message);
		addMessage(JSON.stringify(data));
	});
}

//写入消息
function addMessage(string) {
	api.writeFile({
		path : 'fs://message.txt',
		data : string
	}, function(ret, err) {
		if (ret.status) {
			//成功
		} else {
			alert(err.msg);
		}
	});
}
