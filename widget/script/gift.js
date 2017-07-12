
	function send() {
		var id = $(".xz").attr("data-id");
		var con = $("#zfname").html() + " 将收到你的礼物";

		//先计算金额够不够
		var selfmoney = $(".money").html();
		var giftmoney = $(".xz").attr("data-money");
		if (parseInt(selfmoney) < parseInt(giftmoney)) {
			alert("金豆不够，赶紧做任务去吧");
			return false;
		}


		api.confirm({
			title: '确认赠送',
			msg: con,
			buttons: ['取消', '确定']
		}, function(ret, err) {
			if (ret.buttonIndex == 2) {

				api.ajax({
					url: 'http://www.d-shang.com/index.php?appgift/buygift/?openid=' + OPENID,
					method: 'post',
					data: {
						values: {
							giftid: id,
							touid: TOUID
						}
					}
				}, function(ret, err) {
					console.log(JSON.stringify(ret));
					if (ret.status) {
						getUserInfo();
					} else {

					}
				});

				$(".gift").hide();

				api.toast({
					msg: '赠送成功',
					duration: 2000,
					location: 'middle'
				});

			} else {
				alert(JSON.stringify(err));
			}
		});
	}


	function getUserInfo() {

		api.ajax({
			url: 'http://www.d-shang.com/index.php?app/getuserinfo/?openid=' + OPENID
		}, function(ret, err) {
			var user = ret.data;
			var money = Math.round(user.coupons);
			$(".money").html(money);
		});
	}

	function xuanzhong(id) {
		var arr = $(".box");
		arr.each(function() {
			$(this).removeClass("xz");
		})
		$("#box_" + id).addClass("xz");
	}

	function gift(uid, name) {
		TOUID = uid;
		$("#zfname").html(name);
		$(".gift").show();
	}

	function loadGift() {
		api.ajax({
			url: 'http://www.d-shang.com/index.php?appgift/getallgift/?openid=' + OPENID,
		}, function(ret, err) {
			if (ret) {
				var arrText = doT.template($("#giftlist").text());
				var a = arrText(ret.data);
				$("#giftcon").html(a);
				$('.pic').picLazyLoad();
			} else {
				alert(JSON.stringify(err));
			}
		});
	}

	function closeGift() {
		$(".gift").hide();
	}
