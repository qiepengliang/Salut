define(function(){
	//配置文件
	return {
		//模块跳转规则，在需要跳到下一个模块的默认方法需要配置
		PAGERULES: {
			Home: ['home', 'fillorder'],
			Center: ['center'],
			Nav: ['footer', 'header'],
			MakeFriends: ['makefriends', 'personel', 'publishperson']
		},
		//界面切换动画时长 单位毫秒
		pageTransformDelay: 300,
		//动画弹出时长
		maskTransformDelay: 300,
		//html模板文件加载的路径配置
		loadHtmlPath: 'js/tpl/tpl',
		//模块文件加载的路径配置
		loadJsPath: 'use/',
		//ajax请求超时时间
		ajaxDelay: 7000
	}
});