/**
 * 请在api.js之后引入
 */

function setTopBar() {
	var systemType = api.systemType;

	$(".back").css("top", "13px");
  $(".page__bd").css("top","61px");

	$api.fixStatusBar($api.dom('header'));
	api.setStatusBarStyle({
		style : 'dark',
		color : '#6ab494'
	});
}

function goback(){
	api.closeWin();
}
