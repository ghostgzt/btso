var ajax_ed2k_url = 'http://gentle.cdn.duapp.com/ajax.php';
var ajax_magnet_url = 'http://xdpx.sturgeon.mopaas.com/ajax.php';
var ajax_orzx_url = 'http://xdpx.sturgeon.mopaas.com/ajax.php';
var ajax_ktxp_url = 'http://gentle.cdn.duapp.com/ajax.php';
var ajax_btdigg_url = 'http://xdpx.sturgeon.mopaas.com/ajax.php';
var ajax_trtp_url = 'http://xdpx.sturgeon.mopaas.com/ajax.php';
var page = 1;
var scontent = '';
if (window.location.hash) {
	scontent = decodeURIComponent(window.location.hash.substring(1).split('|-|')[1]);
}
document.write("<script src='http://gentle.cdn.duapp.com/gentle_libs.js'><\/script>");
function setstart() {
	document.writeln('<span style="float:right;"><form method="post" style="height: 12px;"><span id="loading"></span>关键词<input value="' + scontent + '" id="search"/><input type="submit" value="搜索" onclick="page=1;scontent=document.getElementById(\'search\').value;getcode(window.location.hash.substring(1).split(\'|-|\')[0],0);"/></form></span>');
	getcode('0', 1);
}
function getcode(type, ff) {
	if (!scontent) {
		alert('请输入关键词！');
		return false;
	}
	if (type == '') {
		type = '0';
	}
	if (!ff) {
		window.location.hash = type + '|-|' + encodeURIComponent(scontent);
	}
	try {
		var stype = window.location.hash.substring(1).split('|-|')[0];
		if (stype) {
			type = stype;
		}
	} catch(e) {}
	switch (type) {
	case '0':
		getcode_ed2k(scontent, page);
		break;
	case '1':
		getcode_magnet(scontent, page);
		break;
	case '2':
		getcode_orzx(scontent, page);
		break;
	case '3':
		getcode_ktxp(scontent, page);
		break;
	case '4':
		getcode_btdigg(scontent, page);
		break;
	case '5':
		getcode_trtp(scontent, page);
		break;

	}
}
function setbox() {
	document.writeln('<div id="setx"style="display: none; width: 100%; height: 100%; position: fixed; top: 0px; left: 0px; background-color: rgba(0, 0, 0, 0.8); background-position: initial initial; background-repeat: initial initial;"><div class="section-main"style="font-family: \'Microsoft Yahei\', \'微软雅黑\';width: 50%;height: 50%;padding: 0% 25%;margin: 12.5% 0%;background: rgba(36, 31, 31, 1);"><svg width="60"height="60"style="margin-top:3%;"><a href="javascript:void();"onclick="document.getElementById(\'setx\').style.display=\'none\';"><circle r="28.5"cx="30"cy="30"fill="rgba(255, 255, 255, 1)"fill-opacity="0"stroke-width="3"stroke="rgba(255, 255, 255, 1)"></circle><path fill="rgba(255, 255, 255, 1)"transform="rotate(180 28.7798 29.65)"d="m27.07182,39.32462l5.95567,-5.97537l-11.51375,0l-11.51374,0l0,-3.69902l0,-3.69901l11.38121,0c6.26014,0 11.3824,-0.18806 11.3824,-0.41671c0,-0.22925 -2.49307,-2.91813 -5.53897,-5.97602l-5.53777,-5.5585l5.11869,0l5.11867,0l7.81832,7.83249l7.81712,7.83267l-7.83264,7.81712l-7.83265,7.81771l-5.38852,0l-5.38853,0l5.95448,-5.97537l0,0z"></path></a></svg>&nbsp;<h1 style="font-family: \'Microsoft Yahei\', \'微软雅黑\';display: inline-block;height: 60px;margin: 0px 0px 0px 10px;font-size: 35px;line-height: 60px;color: rgba(255, 255, 255, 1);text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.5);">Settings</h1>&nbsp;<a style="float:right;margin-top:10px;color:white;text-decoration:none;"href="javascript:void();"title="Back"onclick="document.getElementById(\'setx\').style.display=\'none\';">x</a><div id="divLoginpanelVer"style="margin-top:10px">播放器:&nbsp;<select style="width:80%;border:0;"id="player"value="http://www.okdvd.com/api.html?url="><option value="http://rs.huoyan.tv/#!u=">火焰云点播</option><option value="http://www.okdvd.com/api.html?url=">OK云点播</option><option value="http://www.happyfuns.com/happyvod/api.html?url=">快乐云点播</option><option value="http://www.ruyiba.cn/yun/index.php#!r=">如意云点播</option><option value="http://vod.yundianbo.info/?u=">靖飒云点播</option><option value="http://www.yundianbo.tv/?u=">陈老湿云点播</option><option value="http://www.997m.com/?u=">997M云点播</option></select><input type="button"onclick="setCookie(\'vodplayer\',document.getElementById(\'player\').value,3600*24*365);alert(\'已经保存！\');"value="修改"></div><div style="overflow: auto;height:55%">汝身听吾号令，吾命与汝剑同在<br>应命运之召，若愿顺此意志、此义理的话就回应吧<br>在此起誓<br>吾愿成就世间一切之善行<br>吾愿诛尽世间一切之恶行<br>吾即手握其锁链之人<br>汝为身缠三大言灵之七天，来自于抑止之轮、天秤之守护者<br>愿与吾结成契约者，召唤企鹅<a target="_blank"href="http://wp.qq.com/wpa/qunwpa?idkey=f42667e4135061aa52e75f9ecc29ed5c11d21de109b85ba4726b70261e3e7b10"><img border="0"src="http://pub.idqqimg.com/wpa/images/group.png"alt="广州大学城同学会"title="广州大学城同学会"style="height:18px;"></a></div></div></div>');
}

function showsetbox() {
	getCookie('vodplayer') ? (document.getElementById('player').value = getCookie('vodplayer')) : (document.getElementById('player').value = 'http://www.okdvd.com/api.html?url=');
	document.getElementById('setx').style.display = 'block';
}

function getplayer() {
	if (getCookie('vodplayer')) {
		return getCookie('vodplayer');
	} else {
		return 'http://www.okdvd.com/api.html?url=';
	}
}

//-------------------ed2k---------------------//
function getcode_ed2k(str, p) {
	document.getElementById('loading').innerHTML = '获取中... ';
	scontent = str;
	window.location.hash = '0' + '|-|' + encodeURIComponent(scontent);
	var ms = new Array();
	ms[0] = "get"; //method
	ms[1] = 0; //postdata
	ms[2] = 0; //cookie
	ms[3] = "http://www.baidu.com/"; //referer
	ms[4] = 0; //proxy
	ms[5] = "Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.31 (KHTML, like Gecko) Chrome/26.0.1410.64 Safari/537.31"; //agent
	var mshead = new Array();
	mshead[0] = 'X-Requested-With:XMLHttpRequest';
	ms[6] = mshead; //head
	var xx = CrossScript(ajax_ed2k_url, 'http://donkey4u.com//search/' + encodeURIComponent(str) + '?page=' + p + '&mode=thumb', ms, 'ajax_ds', 'ajax_ds?getxjson_ed2k(ajax_ds):alert("获取失败！");');
}

//getcode_ed2k(scontent, page);
function getxjson_ed2k(content) {
	document.writeln('<body></body>');
	document.body.innerHTML = '';
	document.body.innerHTML = '<div><span style="float:right;"><form method="post" style="height: 12px;">关键词<input value="' + scontent + '" id="search"/><input type="submit" value="搜索" onclick="page=1;scontent=document.getElementById(\'search\').value;getcode_ed2k(scontent,page);"/></form></span></div><iframe id="ifm" src="about:blank" style="display:none;"></iframe>';
	document.getElementById("ifm").contentDocument.body.innerHTML = content;
	var lis = new Array();
	lis[0] = 0;
	try {
		var rootnod = document.getElementById("ifm").contentDocument.body.getElementsByTagName('div')[1];
		var linod = rootnod.getElementsByTagName('li');
		lis[0] = rootnod.getElementsByTagName('table')[2].getElementsByTagName('td')[0].innerHTML.replace(/结果总数 /ig, '').trim();
	} catch(e) {
		var linod = '';
	}
	var o = {
		oText: function(obj) {
			var text;
			switch (typeof obj.innerText) {
			case 'string':
				text = obj.innerText;
				break;
			case 'undefined':
				text = obj.textContent;
				break;
			default:
				break;
			}
			return text;
		},
		sText: function(obj, s) {
			switch (typeof obj.innerText) {
			case 'string':
				obj.innerText = s;
				break;
			case 'undefined':
				obj.textContent = s;
				break;
			}
		},
		oHtml: function(obj) {
			return obj.innerHTML;
		},
		sHtml: function(obj, s) {
			obj.innerHTML = s;
		}
	};
	for (var $i0 = 0; $i0 < linod.length; $i0++) {

		var lix = linod[$i0];
		var lit = '';
		try {
			lit = o.oText(lix).replace(/下载链接: /ig, '').replace(/ED2K/ig, '').replace(/种子数: /ig, '').replace(/大小: /ig, '|').split('|');
		} catch(e) {}
		var lihash = lix.getAttribute('hash'); //hash
		var lied2k = lix.getElementsByTagName('a')[lix.getElementsByTagName('a').length - 1].getAttribute('href'); //ed2k
		var lisize = lit[1]; //size
		var linum = lit[2]; //seednum
		var liname = lied2k.split('|')[2]; //name
		var lihexie = '2';
		try {
			lihexie = lix.getElementsByTagName('img')[0].getAttribute('src') == '/static/hexie.jpg' ? '1': '0'; //hexie
		} catch(e) {}
		var lia = '';
		try {
			lia = [(liname.trim()), lihash.trim(), (lied2k.trim()), lisize.trim(), linum.trim(), lihexie.trim()];
		} catch(e) {}
		lis.push(lia);
	}

	var tbnod = rootnod.getElementsByTagName('table');
	var tdnod = tbnod[tbnod.length - 1].getElementsByTagName('td');
	var tba = new Array();
	for (var $t0 = 1; $t0 < tdnod.length; $t0++) {
		var ss = '';
		try {
			ss = tdnod[$t0].getElementsByTagName('a')[0].innerHTML; //search
		} catch(e) {}
		tba.push(ss);
	}
	runjson_ed2k(lis, tba);
}
function getpages_ed2k(num) {
	var ppn = num / 20;
	ppn = (ppn * 20 < num ? ppn += 1 : ppn = ppn);
	var jl = '';
	for (var i = 1; i < ppn + 1; i++) {
		jl += '<option value="' + i + '"' + (i == page ? 'selected': '') + '>第' + i + '页</option>';
	}
	return jl;
}
function getkey_ed2k(tba) {
	var jl = '';
	for (var i = 0; i < tba.length; i++) {
		jl += '&nbsp;<a href="javascript:void();" onclick="page=1;scontent=\'' + tba[i] + '\';getcode_ed2k(scontent,page);" style="color:white;text-decoration:underline;">' + tba[i] + '</a>';
	}
	return jl;
}

function runjson_ed2k(lis, tba) {
	document.body.innerHTML = '';
	document.writeln('<div style="margin-top:-8px;position:fixed;background:black;width:98%"><span id="loading"></span><span id="ym">' + (page > 1 ? '<a href="javascript:void();" onclick="page-=1;getcode_ed2k(scontent,page);" style="color:white;text-decoration:underline;">上一页</a>': '') + '&nbsp;<select onchange="page=this.value;getcode_ed2k(scontent,page);" style="width:100px;border:0;" id="spages" value="' + page + '">' + getpages_ed2k(lis[0]) + '</select>&nbsp;结果:' + lis[0] + '个');
	document.writeln((document.getElementById('spages').length > page ? ('<a href="javascript:void;" onclick="page+=1;getcode_ed2k(scontent,page);" style="color:white;text-decoration:underline;">下一页</a>') : '') + '</span><span style="float:right;"><form method="post" style="height: 12px;"><a href="javascript:void();" onclick="getcode(\'5\',0);" style="color:white;text-decoration:underline;">种子计划</a>&nbsp;<a href="javascript:void();" onclick="getcode(\'4\',0);" style="color:white;text-decoration:underline;">掘种资源</a>&nbsp;<a href="javascript:void();" onclick="getcode(\'3\',0);" style="color:white;text-decoration:underline;">种子资源</a>&nbsp;<a href="javascript:void();" onclick="getcode(\'2\',0);" style="color:white;text-decoration:underline;">磁力资源</a>&nbsp;<a href="javascript:void();" onclick="getcode(\'1\',0);" style="color:white;text-decoration:underline;">磁力影音</a>&nbsp;<a href="javascript:void;" onclick="showsetbox();" style="color:white;text-decoration:underline;">设置</a>&nbsp;<a href="javascript:void;" onclick="getcode_ed2k(scontent,page);" style="color:white;text-decoration:underline;">刷新</a>&nbsp;<a href="javascript:void;" onclick="scroll(0,0);" style="color:white;text-decoration:underline;">顶部</a>&nbsp;关键词<input value="' + scontent + '" id="search"/><input type="submit" value="搜索" onclick="page=1;scontent=document.getElementById(\'search\').value;getcode_ed2k(scontent,page);"/></form></span></div><br><div style="background:black;width:100%">' + getkey_ed2k(tba) + '</div>');
	setbox();
	var gn = Math.floor(document.body.scrollWidth / 300);
	var isji = 'top,';
	var stop = 0;
	document.body.style.color = 'white';
	document.body.style.background = 'black';
	document.body.style.backgroundImage = "url(http://img14.poco.cn/mypoco/myphoto/20130321/12/17338767320130321124216067.jpg)";
	for (var x = 0; x < gn; x++) {
		if (!isji) {
			break;
		}
		var iq = Math.floor(x * (lis.length / gn));

		var ih = Math.floor((x + 1) * (lis.length / gn));
		iq += 1;
		ih += 1;

		if (ih > lis.length) {
			ih = lis.length;
		}
		if (gn > lis.length || gn == lis.length) {
			iq = 1;
			ih = lis.length;
			isji = '';
		}
		document.writeln('<span style="float:left">');
		for (var i = iq; i < ih; i++) {
			document.writeln('<div style="overflow: hidden; float: ' + isji + 'left; width: 300px; height: 250px; padding: 10px; margin: 5px; border: 1px solid black;color:black; background-color: black; top: -50px; background-position: initial initial; background-repeat: initial initial;" onmouseover="this.style.background=\'white\';this.style.height=\'527\';scroll(0,getAbsPoint(this,\'y\')-((document.body.offsetHeight-parseInt(this.style.height))/2));" onmouseout="this.style.background=\'black\';this.style.height=\'250\';"><p><a target="_blank" title="' + lis[i][0] + '" href="javascript:void();" onclick="window.open(getplayer() + encodeURIComponent(\'' + lis[i][2] + '\'),\'_blank\');"><img src="' + (lis[i][5] != 2 ? getfile(ajax_ed2k_url, 'http://thumb.donkey4u.com/' + lis[i][1] + '/thumb.jpg', 'http://donkey4u.com/', 'image/png') : 'http://donkey4u.com/static/hexie.jpg') + '" width="300px"/></a></p><br><p><textarea style="resize:none;background:transparent;width:300px;height:50px;border:0;" readonly>' + lis[i][0] + '</textarea></p><p><b>Hash</b>&nbsp;' + lis[i][1] + '</p><p><b>操作</b>&nbsp;<a style="color:black;text-decoration:underline;" href="javascript:void();" onclick="window.open(getplayer() + encodeURIComponent(\'' + lis[i][2] + '\'),\'_blank\');">播放</a>&nbsp;<a style="color:black;text-decoration:underline;" target="_blank" href="' + lis[i][2] + '">下载</a>&nbsp;<a style="color:black;text-decoration:underline;" target="_blank" href="javascript:void();" onclick="prompt(\'请复制以下路径:\',\'' + lis[i][2] + '\');">复制</a></p><p><b>大小</b>&nbsp;' + lis[i][3] + '</p><p><b>种子数</b>&nbsp;' + lis[i][4] + '</p><span style="float:right;margin-right:0;">' + i + '</span><p><b>H评价</b>&nbsp;' + (lis[i][5] == '2' ? '很黄很暴力': (lis[i][5] == '1' ? '动作爱情文艺片': '无节操视频')) + '</p></div>');
		}
		document.writeln('</span>');
	}
	document.writeln('<title>' + scontent + ' - 电驴影音</title><style>#emotion{margin:5px 0;}input:focus::-webkit-input-placeholder,textarea:focus::-webkit-input-placeholder{color:transparent;}::-webkit-scrollbar-track-piece{background:#FFF;}::-webkit-scrollbar{width:3px;height:8px;}::-webkit-scrollbar-thumb{height:50px;background-color:#999;border:none;}::-webkit-scrollbar-thumb:hover{background-color:#666;}.readmore{display:none}</style>');

}

//-------------------ed2k---------------------//
//-------------------magnet---------------------//
function getcode_magnet(str, p) {
	document.getElementById('loading').innerHTML = '获取中... ';
	scontent = str;
	window.location.hash = '1' + '|-|' + encodeURIComponent(scontent);
	var ms = new Array();
	ms[0] = "get"; //method
	ms[1] = 0; //postdata
	ms[2] = 0; //cookie
	ms[3] = "http://www.baidu.com/"; //referer
	ms[4] = 0; //proxy
	ms[5] = "Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.31 (KHTML, like Gecko) Chrome/26.0.1410.64 Safari/537.31"; //agent
	var mshead = new Array();
	mshead[0] = 'X-Requested-With:XMLHttpRequest';
	ms[6] = mshead; //head
	var xx = CrossScript(ajax_magnet_url, 'http://www.torrentkitty.com/search/' + encodeURIComponent(str) + '/' + p, ms, 'ajax_ds', 'ajax_ds?getxjson_magnet(ajax_ds):alert("获取失败！");');
}

//getcode_magnet(scontent,page);
function getxjson_magnet(content) {
	document.writeln('<body></body>');
	document.body.innerHTML = '';
	document.body.innerHTML = '<div><span style="float:right;"><form method="post" style="height: 12px;">关键词<input value="' + scontent + '" id="search"/><input type="submit" value="搜索" onclick="page=1;scontent=document.getElementById(\'search\').value;getcode_magnet(scontent,page);"/></form></span></div><iframe id="ifm" src="about:blank" style="display:none;"></iframe>';
	document.getElementById("ifm").contentDocument.body.innerHTML = content;
	var lis = new Array();
	lis[0] = 1;
	try {
		lis[0] = document.getElementById("ifm").contentDocument.body.getElementsByClassName('pagination')[0].getElementsByTagName('a')[document.getElementById("ifm").contentDocument.body.getElementsByClassName('pagination')[0].getElementsByTagName('a').length - 2].innerHTML;
		var lisx = document.getElementById("ifm").contentDocument.body.getElementsByClassName('pagination')[0].getElementsByClassName('current')[0];

		if (parseInt(lisx.innerHTML) > parseInt(lis[0])) {
			lis[0] = parseInt(lisx.innerHTML);
		}

		var rootnod = document.getElementById("ifm").contentDocument.body.getElementsByTagName('table')[1];
		var linamenod = rootnod.getElementsByClassName('name');
		var lihrefnod = rootnod.getElementsByClassName('action');
		var lisizenod = rootnod.getElementsByClassName('size');
		var lidatenod = rootnod.getElementsByClassName('date');
	} catch(e) {
		var linamenod = '';
	}

	for (var $i0 = 1; $i0 < linamenod.length; $i0++) {

		var lihash = lihrefnod[$i0].getElementsByTagName('a')[0].getAttribute('href').replace(/\/information\//ig, ''); //ed2k
		var lihref = lihrefnod[$i0].getElementsByTagName('a')[1].getAttribute('href'); //ed2k
		var liname = linamenod[$i0].innerHTML; //name
		var lisize = lisizenod[$i0].innerHTML; //name
		var lidate = lidatenod[$i0].innerHTML; //name
		var lia = [(liname.trim()), lihash.trim(), (lihref.trim()), lisize.trim(), lidate.trim()];

		lis.push(lia);
	}

	var tbnod = document.getElementById("ifm").contentDocument.body.getElementsByClassName('wrapper');
	var tdnod = tbnod[1].getElementsByTagName('a');
	var tba = new Array();

	for (var $t0 = 0; $t0 < 80; $t0++) {
		var ss = tdnod[$t0].innerHTML; //search
		tba.push(ss);

	}

	runjson_magnet(lis, tba);
}
function getpages_magnet(num) {

	var jl = '';
	for (var i = 1; i < parseInt(num) + 1; i++) {

		jl += '<option value="' + i + '"' + (i == page ? 'selected': '') + '>第' + i + '页</option>';
	}
	return jl;
}
function getkey_magnet(tba) {
	var jl = '';
	for (var i = 0; i < tba.length; i++) {
		jl += '&nbsp;<a href="javascript:void();" onclick="page=1;scontent=\'' + tba[i].trim() + '\';getcode_magnet(scontent,page);" style="color:white;text-decoration:underline;">' + tba[i].trim() + '</a>';
	}
	return jl;
}
function runjson_magnet(lis, tba) {
	document.body.innerHTML = '';
	document.writeln('<div style="margin-top:-8px;position:fixed;background:black;width:98%"><span id="loading"></span><span id="ym">' + (page > 1 ? '<a href="javascript:void();" onclick="page-=1;getcode_magnet(scontent,page);" style="color:white;text-decoration:underline;">上一页</a>': '') + '&nbsp;<select onchange="page=parseInt(this.value);getcode_magnet(scontent,page);" style="width:100px;border:0;" id="spages" value="' + page + '">' + getpages_magnet(lis[0]) + '</select>&nbsp;结果:' + (lis.length - 1) + '个');
	document.writeln((document.getElementById('spages').length > page ? ('<a href="javascript:void;" onclick="page+=1;getcode_magnet(scontent,page);" style="color:white;text-decoration:underline;">下一页</a>') : '') + '</span><span style="float:right;"><form method="post" style="height: 12px;"><a href="javascript:void();" onclick="getcode(\'5\',0);" style="color:white;text-decoration:underline;">种子计划</a>&nbsp;<a href="javascript:void();" onclick="getcode(\'4\',0);" style="color:white;text-decoration:underline;">掘种资源</a>&nbsp;<a href="javascript:void();" onclick="getcode(\'3\',0);" style="color:white;text-decoration:underline;">种子资源</a>&nbsp;<a href="javascript:void();" onclick="getcode(\'2\',0);" style="color:white;text-decoration:underline;">磁力资源</a>&nbsp;<a href="javascript:void();" onclick="getcode(\'0\',0);" style="color:white;text-decoration:underline;">电驴影音</a>&nbsp;<a href="javascript:void;" onclick="showsetbox();" style="color:white;text-decoration:underline;">设置</a>&nbsp;<a href="javascript:void;" onclick="getcode_magnet(scontent,page);" style="color:white;text-decoration:underline;">刷新</a>&nbsp;<a href="javascript:void;" onclick="scroll(0,0);" style="color:white;text-decoration:underline;">顶部</a>&nbsp;关键词<input value="' + scontent + '" id="search"/><input type="submit" value="搜索" onclick="page=1;scontent=document.getElementById(\'search\').value;getcode_magnet(scontent,page);"/></form></span></div><br><div style="background:black;width:100%">' + getkey_magnet(tba) + '</div><br>');
	setbox();
	var gn = Math.floor(document.body.scrollWidth / 300);
	var isji = 'top,';

	document.body.style.color = 'white';
	document.body.style.background = 'black';
	document.body.style.backgroundImage = "url(http://img14.poco.cn/mypoco/myphoto/20130321/12/17338767320130321124216067.jpg)";
	for (var x = 0; x < gn; x++) {
		if (!isji) {
			break;
		}
		var iq = Math.floor(x * (lis.length / gn));

		var ih = Math.floor((x + 1) * (lis.length / gn));
		iq += 1;
		ih += 1;

		if (ih > lis.length) {
			ih = lis.length;
		}
		if (gn > lis.length || gn == lis.length) {
			iq = 1;
			ih = lis.length;
			isji = '';
		}
		document.writeln('<span style="float:left">');
		for (var i = iq; i < ih; i++) {
			document.writeln('<div style="overflow: hidden; float: ' + isji + 'left; width: 300px; height: 250px; padding: 10px; margin: 5px; border: 1px solid black;color:black; background-color: black; top: -50px; background-position: initial initial; background-repeat: initial initial;color:white;" onmouseover="this.getElementsByTagName(\'textarea\')[0].style.color=\'black\';this.getElementsByTagName(\'textarea\')[1].style.color=\'black\';this.style.color=\'black\';this.style.background=\'white\';this.style.height=\'527\';scroll(0,getAbsPoint(this,\'y\')-((document.body.offsetHeight-parseInt(this.style.height))/2));" onmouseout="this.getElementsByTagName(\'textarea\')[0].style.color=\'white\';this.getElementsByTagName(\'textarea\')[1].style.color=\'white\';this.style.color=\'white\';this.style.background=\'black\';this.style.height=\'250\';"><font face="arial"><p><textarea style="color:white;resize:none;background:transparent;width:300px;height:50px;border:0;font-family:arial;font-size:16px;" readonly>' + lis[i][0] + '</textarea></p><p><b>Hash</b>&nbsp;<textarea style="color:white;resize:none;background:transparent;width:250px;height:17px;border:0;font-family:arial;font-size:16px;" readonly>' + lis[i][1] + '</textarea></p><p><b>操作</b>&nbsp;<a style="color:black;text-decoration:underline;" target="_blank" href="javascript:void();" onclick="window.open(getplayer() + encodeURIComponent(\'' + lis[i][2] + '\'),\'_blank\');">播放</a>&nbsp;<a style="color:black;text-decoration:underline;" target="_blank" href="' + lis[i][2] + '">下载</a>&nbsp;<a style="color:black;text-decoration:underline;" target="_blank" href="javascript:void();" onclick="prompt(\'请复制以下路径:\',\'' + lis[i][2] + '\');">复制</a></p><p><b>大小</b>&nbsp;' + lis[i][3] + '</p><p><b>日期</b>&nbsp;' + lis[i][4] + '</p><span style="float:right;margin-right:0;">' + i + '</span><p><b>H评价</b>&nbsp;' + (lis[i][5] == '2' ? '很黄很暴力': (lis[i][5] == '1' ? '爱情动作文艺片': '无节操视频')) + '</p><br><p><a target="_blank" title="' + lis[i][0] + '" href="javascript:void();" onclick="window.open(getplayer() + encodeURIComponent(\'' + lis[i][2] + '\'),\'_blank\');"><img src="http://donkey4u.com/static/hexie.jpg" width="300px"/></a></p></font></div>');
		}
		document.writeln('</span>');
	}
	document.writeln('<title>' + scontent + ' - 磁力影音</title><style>#emotion{margin:5px 0;}input:focus::-webkit-input-placeholder,textarea:focus::-webkit-input-placeholder{color:transparent;}::-webkit-scrollbar-track-piece{background:#FFF;}::-webkit-scrollbar{width:3px;height:8px;}::-webkit-scrollbar-thumb{height:50px;background-color:#999;border:none;}::-webkit-scrollbar-thumb:hover{background-color:#666;}.readmore{display:none}</style>');

}

//-------------------magnet---------------------//
//-------------------orzx---------------------//
function getcode_orzx(str, p) {
	document.getElementById('loading').innerHTML = '获取中... ';
	scontent = str;
	window.location.hash = '2' + '|-|' + encodeURIComponent(scontent);
	var ms = new Array();
	ms[0] = "get"; //method
	ms[1] = 0; //postdata
	ms[2] = 0; //cookie
	ms[3] = "http://www.baidu.com/"; //referer
	ms[4] = 0; //proxy
	ms[5] = "Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.31 (KHTML, like Gecko) Chrome/26.0.1410.64 Safari/537.31"; //agent
	var mshead = new Array();
	mshead[0] = 'X-Requested-With:XMLHttpRequest';
	ms[6] = mshead; //head
	var xx = CrossScript(ajax_orzx_url, 'http://vips.3hoo.info/xbt.php?https://www.googleapis.com/customsearch/v1element?key=AIzaSyCVAXiUzRYsML1Pv6RwSG1gunmMikTzQqY&rsz=filtered_cse&num=20&hl=zh_CN&prettyPrint=false&source=gcsc&gss=.co&sig=cf717ce13f86fb2ebeed8f0046aba6ef&start=' + ((p - 1) * 20) + '&cx=000629500190816974387:rk6fohwmvyo&q=' + str + '&googlehost=www.google.com&callback=google.search.Search.apiary7195&nocache=1375376193054', ms, 'ajax_ds', 'ajax_ds?getxjson_orzx(ajax_ds):alert("获取失败！");');
}
//getcode_orzx(scontent,1);
function gethash_orzx(str) {
	var res = /hash\=(.*)\"/.exec(str);
	return res[1];
}
function getview_orzx(id, type) {
	if (id.indexOf("list") > 0) {
		alert('此为列表资源,请点击详细！');
	} else {

		var ms = new Array();
		ms[0] = "get"; //method
		ms[1] = 0; //postdata
		ms[2] = 0; //cookie
		ms[3] = "http://www.baidu.com/"; //referer
		ms[4] = 0; //proxy
		ms[5] = "Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.31 (KHTML, like Gecko) Chrome/26.0.1410.64 Safari/537.31"; //agent
		var mshead = new Array();
		mshead[0] = 'X-Requested-With:XMLHttpRequest';
		ms[6] = mshead; //head
		var xx = CrossScript(ajax_orzx_url, 'http://bt.orzx.co/view.php?id=' + id, ms, 'ajax_ds', 'ajax_ds?runhash_orzx(gethash_orzx(ajax_ds),' + type + '):alert("获取失败！");');
	}
}
function runhash_orzx(hash, type) {
	if (!hash) {
		alert('获取失败！');
	} else {
		switch (type) {
		case 0:
			alert(hash);
			break;
		case 1:
			prompt('复制链接', 'magnet:?xt=urn:btih:' + hash.toUpperCase());
			break;
		case 2:
			window.open('magnet:?xt=urn:btih:' + hash.toUpperCase(), '_blank');
			break;
		case 3:
			window.open(getplayer() + encodeURIComponent('magnet:?xt=urn:btih:' + hash.toUpperCase()), '_blank');
			break;
		}
	}
}

function getpages_orzx(num) {
	var jn = 0;
	var jl = '';
	for (var i = 1; i < parseInt(num) + 1; i++) {
		jn = i;
		jl += '<option value="' + i + '"' + (i == page ? 'selected': '') + '>第' + i + '页</option>';
	}
	if (page > jn) {
		jl += '<option value="' + page + '" selected>第' + page + '页</option>';
	}
	return jl;
}

function getxjson_orzx(content) {
	try {
		var cx = JSON.parse(ajax_ds.replace("// API callback", "").replace("google.search.Search.apiary7195(", "").replace(");", "").trim());
	} catch(e) {}
	runjson_orzx(cx);
}

function runjson_orzx(lis) {
	var rp = 0;
	var cp = 0;
	try {
		rp = lis.results.length;
		cp = lis.cursor.pages.length;
	} catch(e) {}
	document.body.innerHTML = '';
	document.writeln('<div style="margin-top:-8px;position:fixed;background:black;width:98%"><span id="loading"></span><span id="ym">' + (page > 1 ? '<a href="javascript:void();" onclick="page-=1;getcode_orzx(scontent,page);" style="color:white;text-decoration:underline;">上一页</a>': '') + '&nbsp;<select onchange="page=parseInt(this.value);getcode_orzx(scontent,page);" style="width:100px;border:0;" id="spages" value="' + page + '">' + getpages_orzx(cp) + '</select>&nbsp;结果:' + (rp ? (rp - 1) : (0)) + '个');
	document.writeln((document.getElementById('spages').length > page ? ('<a href="javascript:void;" onclick="page+=1;getcode_orzx(scontent,page);" style="color:white;text-decoration:underline;">下一页</a>') : '') + '</span><span style="float:right;"><form method="post" style="height: 12px;"><a href="javascript:void();" onclick="getcode(\'5\',0);" style="color:white;text-decoration:underline;">种子计划</a>&nbsp;<a href="javascript:void();" onclick="getcode(\'4\',0);" style="color:white;text-decoration:underline;">掘种资源</a>&nbsp;<a href="javascript:void();" onclick="getcode(\'3\',0);" style="color:white;text-decoration:underline;">种子资源</a>&nbsp;<a href="javascript:void();" onclick="getcode(\'1\',0);" style="color:white;text-decoration:underline;">磁力影音</a>&nbsp;<a href="javascript:void();" onclick="getcode(\'0\',0);" style="color:white;text-decoration:underline;">电驴影音</a>&nbsp;<a href="javascript:void;" onclick="showsetbox();" style="color:white;text-decoration:underline;">设置</a>&nbsp;<a href="javascript:void;" onclick="getcode_orzx(scontent,page);" style="color:white;text-decoration:underline;">刷新</a>&nbsp;<a href="javascript:void;" onclick="scroll(0,0);" style="color:white;text-decoration:underline;">顶部</a>&nbsp;关键词<input value="' + scontent + '" id="search"/><input type="submit" value="搜索" onclick="page=1;scontent=document.getElementById(\'search\').value;getcode_orzx(scontent,page);"/></form></span></div><br><div style="background:black;width:100%">' + '</div><br>');

	setbox();
	var gn = Math.floor(document.body.scrollWidth / 300);
	var isji = 'top,';

	document.body.style.color = 'white';
	document.body.style.background = 'black';
	document.body.style.backgroundImage = "url(http://img14.poco.cn/mypoco/myphoto/20130321/12/17338767320130321124216067.jpg)";
	for (var x = 0; x < gn; x++) {
		if (!isji) {
			break;
		}
		var iq = Math.floor(x * (lis.results.length / gn));

		var ih = Math.floor((x + 1) * (lis.results.length / gn));
		iq += 1;
		ih += 1;

		if (ih > lis.results.length) {
			ih = lis.results.length;
		}
		if (gn > lis.results.length || gn == lis.results.length) {
			iq = 1;
			ih = lis.results.length;
			isji = '';
		}
		document.writeln('<span style="float:left">');
		for (var i = iq; i < ih; i++) {
			document.writeln('<div style="overflow: hidden; float: ' + isji + 'left; width: 300px; height: 250px; padding: 10px; margin: 5px; border: 1px solid black;color:black; background-color: black; top: -50px; background-position: initial initial; background-repeat: initial initial;color:white;" onmouseover="this.getElementsByTagName(\'textarea\')[0].style.color=\'black\';this.getElementsByTagName(\'div\')[0].style.color=\'black\';this.style.color=\'black\';this.style.background=\'white\';this.style.height=\'527\';scroll(0,getAbsPoint(this,\'y\')-((document.body.offsetHeight-parseInt(this.style.height))/2));" onmouseout="this.getElementsByTagName(\'textarea\')[0].style.color=\'white\';this.getElementsByTagName(\'div\')[0].style.color=\'white\';this.style.color=\'white\';this.style.background=\'black\';this.style.height=\'250\';"><font face="arial"><p><textarea style="color:white;resize:none;background:transparent;width:300px;height:50px;border:0;font-family:arial;font-size:16px;" readonly>' + lis.results[i]['titleNoFormatting'] + '</textarea></p><p><b>Detail</b>&nbsp;<div style="overflow: auto; color: white; width: 300px; height: 60px; border: 0px; font-family: arial; font-size: 16px; background-position: initial initial; background-repeat: initial initial;">' + lis.results[i]['content'] + '</div></p><p><b>操作</b>&nbsp;<a style="color:black;text-decoration:underline;" href="javascript:void();" onclick="getview_orzx(\'' + lis.results[i]['unescapedUrl'].replace('http://bt.orzx.co/display.php?id=', '').replace('http://bt.orzx.co/view.php?id=', '') + '\',3);">播放</a>&nbsp;<a style="color:black;text-decoration:underline;" target="_blank" href="javascript:void();" onclick="getview_orzx(\'' + lis.results[i]['unescapedUrl'].replace('http://bt.orzx.co/display.php?id=', '').replace('http://bt.orzx.co/view.php?id=', '') + '\',2);">下载</a>&nbsp;<a style="color:black;text-decoration:underline;" href="javascript:void();" onclick="getview_orzx(\'' + lis.results[i]['unescapedUrl'].replace('http://bt.orzx.co/display.php?id=', '').replace('http://bt.orzx.co/view.php?id=', '') + '\',1);">复制</a>&nbsp;<a style="color:black;text-decoration:underline;" target="_blank" href="' + lis.results[i]['unescapedUrl'] + '">详细</a></p><span style="float:right;margin-right:0;">' + i + '</span><p><b>H评价</b>&nbsp;' + (lis.results[i][5] == '2' ? '很黄很暴力': (lis.results[i][5] == '1' ? '爱情动作文艺片': '无节操视频')) + '</p><br><p><a title="' + lis.results[i]['titleNoFormatting'] + '" href="javascript:void();" onclick="getview_orzx(\'' + lis.results[i]['unescapedUrl'].replace('http://bt.orzx.co/display.php?id=', '').replace('http://bt.orzx.co/view.php?id=', '') + '\',3);"><img src="http://donkey4u.com/static/hexie.jpg" width="300px"/></a></p></font></div>');
		}
		document.writeln('</span>');
	}
	document.writeln('<title>' + scontent + ' - 磁力资源</title><style>#emotion{margin:5px 0;}input:focus::-webkit-input-placeholder,textarea:focus::-webkit-input-placeholder{color:transparent;}::-webkit-scrollbar-track-piece{background:#FFF;}::-webkit-scrollbar{width:3px;height:3px;}::-webkit-scrollbar-thumb{height:50px;background-color:#999;border:none;}::-webkit-scrollbar-thumb:hover{background-color:#666;}.readmore{display:none}</style>');

}

//-------------------orzx---------------------//
//-------------------ktxp---------------------//
function getcode_ktxp(str, p) {
	document.getElementById('loading').innerHTML = '获取中... ';
	scontent = str;
	window.location.hash = '3' + '|-|' + encodeURIComponent(scontent);
	var ms = new Array();
	ms[0] = "get"; //method
	ms[1] = 0; //postdata
	ms[2] = 0; //cookie
	ms[3] = "http://www.baidu.com/"; //referer
	ms[4] = 0; //proxy
	ms[5] = "Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.31 (KHTML, like Gecko) Chrome/26.0.1410.64 Safari/537.31"; //agent
	var mshead = new Array();
	mshead[0] = 'X-Requested-With:XMLHttpRequest';
	ms[6] = mshead; //head
	var xx = CrossScript(ajax_ktxp_url, 'http://bt.ktxp.com/search.php?keyword=' + encodeURIComponent(str) + '&page=' + p, ms, 'ajax_ds', 'ajax_ds?getxjson_ktxp(ajax_ds):alert("获取失败！");');
}
//getcode_ktxp(scontent,1);
function gethash_ktxp(str) {
	var res = /FileHash\:(.*)\]/.exec(str);
	return res[1];
}
function getview_ktxp(id, type) {
	runhash_ktxp(id, type)
}
function runhash_ktxp(hash, type) {
	if (!hash) {
		alert('获取失败！');
	} else {
		switch (type) {
		case 0:
			alert(hash);
			break;
		case 1:
			prompt('复制链接', 'magnet:?xt=urn:btih:' + hash);
			break;
		case 2:
			window.open('http://bt.ktxp.com/down/' + hash + '.torrent', '_blank');
			break;
		case 3:
			window.open(getplayer() + encodeURIComponent('magnet:?xt=urn:btih:' + hash), '_blank');
			break;
		}
	}
}

function getpages_ktxp(num) {
	var jn = 0;
	var jl = '';
	for (var i = 1; i < parseInt(num) + 1; i++) {
		jn = i;
		jl += '<option value="' + i + '"' + (i == page ? 'selected': '') + '>第' + i + '页</option>';
	}
	if (page > jn) {
		jl += '<option value="' + page + '" selected>第' + page + '页</option>';
	}
	return jl;
}
function getxjson_ktxp(content) {
	var pages = 0;
	try {
		pages = (/\<div\ class\=\"pages\ clear\ space\-top\"\>(.*?)\<\/div\>/.exec(content))[0];
		pages = (/class\=\"pager\-last\ active\"\ target\=\"\_self\"\>(.*?)\<\/a\>/.exec(pages))[1];
	} catch(e) {}
	var res = content.replace(/<tr>/ig, '|*|').replace(/<\/tr>/ig, '|*|').replace(/\|\*\|\ \|\*\|/ig, '').split('|*|');
	var lis = new Array();
	lis[0] = 1;
	try {
		lis[0] = pages;
	} catch(e) {}
	for (var i = 3; i < res.length; i++) {
		var rname = '';
		try {
			rname = (/target\=\"\_blank\"\>(.*?)\<\/a\>/.exec(res[i]))[1];
			if (rname) {
				var rhash = (/\/down\/(.*)\.torrent/.exec(res[i]))[1];
				var rurl = (/\/html\/(.*?)\"/.exec(res[i]))[1];

				var rsize = (res[i].replace(/<td>/ig, '|*|').replace(/<\/td>/ig, '|*|').replace(/\|\*\|\ \|\*\|/ig, '').split('|*|'))[5];
				var rdate = (res[i].replace(/<td title="/ig, '|*|').replace(/">/ig, '|*|').replace(/\|\*\|\ \|\*\|/ig, '').split('|*|'))[1];
				var lia = '';
				try {
					lia = [(rname.trim()), rhash.trim(), (rurl.trim()), rsize.trim(), rdate.trim()];
				} catch(e) {}
				lis.push(lia);
			}
		} catch(e) {}
	}
	runjson_ktxp(lis);
}
function runjson_ktxp(lis, tba) {
	document.body.innerHTML = '';
	document.writeln('<div style="margin-top:-8px;position:fixed;background:black;width:98%"><span id="loading"></span><span id="ym">' + (page > 1 ? '<a href="javascript:void();" onclick="page-=1;getcode_ktxp(scontent,page);" style="color:white;text-decoration:underline;">上一页</a>': '') + '&nbsp;<select onchange="page=parseInt(this.value);getcode_ktxp(scontent,page);" style="width:100px;border:0;" id="spages" value="' + page + '">' + getpages_ktxp(lis[0]) + '</select>&nbsp;结果:' + (lis.length - 1) + '个');
	document.writeln((document.getElementById('spages').length > page ? ('<a href="javascript:void;" onclick="page+=1;getcode_ktxp(scontent,page);" style="color:white;text-decoration:underline;">下一页</a>') : '') + '</span><span style="float:right;"><form method="post" style="height: 12px;"><a href="javascript:void();" onclick="getcode(\'5\',0);" style="color:white;text-decoration:underline;">种子计划</a>&nbsp;<a href="javascript:void();" onclick="getcode(\'4\',0);" style="color:white;text-decoration:underline;">掘种资源</a>&nbsp;<a href="javascript:void();" onclick="getcode(\'2\',0);" style="color:white;text-decoration:underline;">磁力资源</a>&nbsp;<a href="javascript:void();" onclick="getcode(\'0\',0);" style="color:white;text-decoration:underline;">电驴影音</a>&nbsp;<a href="javascript:void();" onclick="getcode(\'1\',0);" style="color:white;text-decoration:underline;">磁力影音</a>&nbsp;<a href="javascript:void;" onclick="showsetbox();" style="color:white;text-decoration:underline;">设置</a>&nbsp;<a href="javascript:void;" onclick="getcode_ktxp(scontent,page);" style="color:white;text-decoration:underline;">刷新</a>&nbsp;<a href="javascript:void;" onclick="scroll(0,0);" style="color:white;text-decoration:underline;">顶部</a>&nbsp;关键词<input value="' + scontent + '" id="search"/><input type="submit" value="搜索" onclick="page=1;scontent=document.getElementById(\'search\').value;getcode_ktxp(scontent,page);"/></form></span></div><br><div style="background:black;width:100%">' + '</div><br>');
	setbox();
	var gn = Math.floor(document.body.scrollWidth / 300);
	var isji = 'top,';
	document.body.style.color = 'white';
	document.body.style.background = 'black';
	document.body.style.backgroundImage = "url(http://img14.poco.cn/mypoco/myphoto/20130321/12/17338767320130321124216067.jpg)";
	for (var x = 0; x < gn; x++) {
		if (!isji) {
			break;
		}
		var iq = Math.floor(x * (lis.length / gn));

		var ih = Math.floor((x + 1) * (lis.length / gn));
		iq += 1;
		ih += 1;

		if (ih > lis.length) {
			ih = lis.length;
		}
		if (gn > lis.length || gn == lis.length) {
			iq = 1;
			ih = lis.length;
			isji = '';
		}
		document.writeln('<span style="float:left">');
		for (var i = iq; i < ih; i++) {

			try {
				document.writeln('<div style="overflow: hidden; float: ' + isji + 'left; width: 300px; height: 250px; padding: 10px; margin: 5px; border: 1px solid black;color:black; background-color: black; top: -50px; background-position: initial initial; background-repeat: initial initial;color:white;" onmouseover="this.getElementsByTagName(\'textarea\')[0].style.color=\'black\';this.getElementsByTagName(\'div\')[0].style.color=\'black\';this.style.color=\'black\';this.style.background=\'white\';this.style.height=\'527\';scroll(0,getAbsPoint(this,\'y\')-((document.body.offsetHeight-parseInt(this.style.height))/2));" onmouseout="this.getElementsByTagName(\'textarea\')[0].style.color=\'white\';this.getElementsByTagName(\'div\')[0].style.color=\'white\';this.style.color=\'white\';this.style.background=\'black\';this.style.height=\'250\';"><font face="arial"><p><div style="overflow: auto; color: white; width: 300px; height: 50px; border: 0px; font-family: arial; font-size: 16; background-position: initial initial; background-repeat: initial initial;">' + lis[i][0] + '</div></p>' + '<p><b>Hash</b>&nbsp;<textarea style="color:white;resize:none;background:transparent;width:250px;height:17px;border:0;font-family:arial;font-size:16px;" readonly>' + lis[i][1].split('\/')[1] + '</textarea></p><p><b>Size</b> ' + lis[i][3] + '</p><p><b>Date</b> ' + lis[i][4] + '</p><p><b>操作</b>&nbsp;<a style="color:black;text-decoration:underline;" target="_blank" href="javascript:void();" onclick="getview_ktxp(\'' + lis[i][1].split('\/')[1] + '\',3);">播放</a>&nbsp;<a style="color:black;text-decoration:underline;" target="_blank" href="javascript:void();" onclick="getview_ktxp(\'' + lis[i][1] + '\',2);">下载</a>&nbsp;<a style="color:black;text-decoration:underline;" target="_blank" href="javascript:void();" onclick="getview_ktxp(\'' + lis[i][1].split('\/')[1] + '\',1);">复制</a>&nbsp;<a style="color:black;text-decoration:underline;" target="_blank" href="http://bt.ktxp.com/html/' + lis[i][2] + '">详细</a></p><span style="float:right;margin-right:0;">' + i + '</span><p><b>H评价</b>&nbsp;' + (lis[i][5] == '2' ? '很黄很暴力': (lis[i][5] == '1' ? '爱情动作文艺片': '无节操视频')) + '</p><br><p><a target="_blank" title="' + lis[i][0].replace('<span class="keyword">', '').replace('</span>', '') + '" href="javascript:void();" onclick="getview_ktxp(\'' + lis[i][1].split('\/')[1] + '\',3);"><img src="http://donkey4u.com/static/hexie.jpg" width="300px"/></a></p></font></div>');
			} catch(e) {}
		}
		document.writeln('</span>');
	}
	document.writeln('<title>' + scontent + ' - 种子资源</title><style>#emotion{margin:5px 0;}input:focus::-webkit-input-placeholder,textarea:focus::-webkit-input-placeholder{color:transparent;}::-webkit-scrollbar-track-piece{background:#FFF;}::-webkit-scrollbar{width:3px;height:3px;}::-webkit-scrollbar-thumb{height:50px;background-color:#999;border:none;}::-webkit-scrollbar-thumb:hover{background-color:#666;}.readmore{display:none}</style>');

}

//-------------------ktxp---------------------//
//-------------------btdigg---------------------//
function getcode_btdigg(str, p) {
	document.getElementById('loading').innerHTML = '获取中... ';
	scontent = str;
	window.location.hash = '4' + '|-|' + encodeURIComponent(scontent);
	var ms = new Array();
	ms[0] = "get"; //method
	ms[1] = 0; //postdata
	ms[2] = 0; //cookie
	ms[3] = "http://www.baidu.com/"; //referer
	ms[4] = 0; //proxy
	ms[5] = "Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.31 (KHTML, like Gecko) Chrome/26.0.1410.64 Safari/537.31"; //agent
	var mshead = new Array();
	mshead[0] = 'X-Requested-With:XMLHttpRequest';
	ms[6] = mshead; //head
	var xx = CrossScript(ajax_btdigg_url, 'https://btdigg.org/search?q=' + encodeURIComponent(str) + '&p=' + p, ms, 'ajax_ds', 'ajax_ds?getxjson_btdigg(ajax_ds):alert("获取失败！");');
}

//getcode_btdigg(scontent,page);
function getxjson_btdigg(content) {
	document.writeln('<body></body>');
	document.body.innerHTML = '';
	document.body.innerHTML = '<div><span style="float:right;"><form method="post" style="height: 12px;">关键词<input value="' + scontent + '" id="search"/><input type="submit" value="搜索" onclick="page=1;scontent=document.getElementById(\'search\').value;getcode_btdigg(scontent,page);"/></form></span></div><iframe id="ifm" src="about:blank" style="display:none;"></iframe>';
	document.getElementById("ifm").contentDocument.body.innerHTML = content;
	var lis = new Array();
	lis[0] = 1;
	try {
		var listmp = document.getElementById("ifm").contentDocument.body.getElementsByClassName('pager')[0].getElementsByTagName('tbody')[0].getElementsByTagName('tr')[0].getElementsByTagName('td')[1].innerHTML;
		lis[0] = listmp.split('\/')[1];
		var lisx = listmp.split('\/')[0];

		if (parseInt(lisx.innerHTML) > parseInt(lis[0])) {
			lis[0] = parseInt(lisx.innerHTML);
		}
	} catch(e) {}

	var rootnod = document.getElementById("ifm").contentDocument.body;
	var tipp = rootnod.getElementsByClassName('snippet');

	for (var $i0 = 0; $i0 < tipp.length; $i0++) {
		var liname = rootnod.getElementsByClassName('torrent_name')[$i0].getElementsByTagName('a')[0].innerHTML; //name
		var lihash = rootnod.getElementsByClassName('torrent_name_tbl')[(2 * $i0) + 1].getElementsByClassName('ttth')[0].getElementsByTagName('a')[0].getAttribute('href').replace('magnet:?xt=urn:btih:', '').split('&')[0]; //hash
		var lihref = rootnod.getElementsByClassName('torrent_name_tbl')[(2 * $i0) + 1].getElementsByClassName('ttth')[0].getElementsByTagName('a')[0].getAttribute('href'); //ed2k
		var lisize = rootnod.getElementsByClassName('torrent_name_tbl')[(2 * $i0) + 1].getElementsByClassName('attr_val')[0].innerHTML; //size
		var lidate = rootnod.getElementsByClassName('torrent_name_tbl')[(2 * $i0) + 1].getElementsByClassName('attr_val')[3].innerHTML; //date
		var lidetail = rootnod.getElementsByClassName('torrent_name')[$i0].getElementsByTagName('a')[0].getAttribute('href'); //detail
		var lia = [(liname.trim()), lihash.trim(), (lihref.trim()), lisize.trim(), lidate.trim(), lidetail.trim(), tipp[$i0].innerHTML.trim()];

		lis.push(lia);
	}

	runjson_btdigg(lis);
}
function getpages_btdigg(num) {

	var jl = '';
	for (var i = 1; i < parseInt(num) + 1; i++) {

		jl += '<option value="' + i + '"' + (i == page ? 'selected': '') + '>第' + i + '页</option>';
	}
	return jl;
}

function runjson_btdigg(lis) {
	document.body.innerHTML = '';
	document.writeln('<div style="margin-top:-8px;position:fixed;background:black;width:98%"><span id="loading"></span><span id="ym">' + (page > 1 ? '<a href="javascript:void();" onclick="page-=1;getcode_btdigg(scontent,page);" style="color:white;text-decoration:underline;">上一页</a>': '') + '&nbsp;<select onchange="page=parseInt(this.value);getcode_btdigg(scontent,page);" style="width:100px;border:0;" id="spages" value="' + page + '">' + getpages_btdigg(lis[0]) + '</select>&nbsp;结果:' + (lis.length - 1) + '个');
	document.writeln((document.getElementById('spages').length > page ? ('<a href="javascript:void;" onclick="page+=1;getcode_btdigg(scontent,page);" style="color:white;text-decoration:underline;">下一页</a>') : '') + '</span><span style="float:right;"><form method="post" style="height: 12px;"><a href="javascript:void();" onclick="getcode(\'5\',0);" style="color:white;text-decoration:underline;">种子计划</a>&nbsp;<a href="javascript:void();" onclick="getcode(\'3\',0);" style="color:white;text-decoration:underline;">种子资源</a>&nbsp;<a href="javascript:void();" onclick="getcode(\'1\',0);" style="color:white;text-decoration:underline;">磁力影音</a>&nbsp;<a href="javascript:void();" onclick="getcode(\'2\',0);" style="color:white;text-decoration:underline;">磁力资源</a>&nbsp;<a href="javascript:void();" onclick="getcode(\'0\',0);" style="color:white;text-decoration:underline;">电驴影音</a>&nbsp;<a href="javascript:void;" onclick="showsetbox();" style="color:white;text-decoration:underline;">设置</a>&nbsp;<a href="javascript:void;" onclick="getcode_btdigg(scontent,page);" style="color:white;text-decoration:underline;">刷新</a>&nbsp;<a href="javascript:void;" onclick="scroll(0,0);" style="color:white;text-decoration:underline;">顶部</a>&nbsp;关键词<input value="' + scontent + '" id="search"/><input type="submit" value="搜索" onclick="page=1;scontent=document.getElementById(\'search\').value;getcode_btdigg(scontent,page);"/></form></span></div><br>');
	setbox();
	var gn = Math.floor(document.body.scrollWidth / 300);
	var isji = 'top,';

	document.body.style.color = 'white';
	document.body.style.background = 'black';
	document.body.style.backgroundImage = "url(http://img14.poco.cn/mypoco/myphoto/20130321/12/17338767320130321124216067.jpg)";
	for (var x = 0; x < gn; x++) {
		if (!isji) {
			break;
		}
		var iq = Math.floor(x * (lis.length / gn));

		var ih = Math.floor((x + 1) * (lis.length / gn));
		iq += 1;
		ih += 1;

		if (ih > lis.length) {
			ih = lis.length;
		}
		if (gn > lis.length || gn == lis.length) {
			iq = 1;
			ih = lis.length;
			isji = '';
		}
		document.writeln('<span style="float:left">');
		for (var i = iq; i < ih; i++) {
			document.writeln('<div style="overflow: hidden; float: ' + isji + 'left; width: 300px; height: 250px; padding: 10px; margin: 5px; border: 1px solid black;color:black; background-color: black; top: -50px; background-position: initial initial; background-repeat: initial initial;color:white;" onmouseover="this.getElementsByTagName(\'textarea\')[0].style.color=\'black\';this.getElementsByTagName(\'textarea\')[1].style.color=\'black\';this.style.color=\'black\';this.style.background=\'white\';this.style.height=\'527\';scroll(0,getAbsPoint(this,\'y\')-((document.body.offsetHeight-parseInt(this.style.height))/2));" onmouseout="this.getElementsByTagName(\'textarea\')[0].style.color=\'white\';this.getElementsByTagName(\'textarea\')[1].style.color=\'white\';this.style.color=\'white\';this.style.background=\'black\';this.style.height=\'250\';"><font face="arial"><p><textarea style="color:white;resize:none;background:transparent;width:300px;height:50px;border:0;font-family:arial;font-size:16px;" readonly>' + lis[i][0] + '</textarea></p><p><b>Hash</b>&nbsp;<textarea style="color:white;resize:none;background:transparent;width:250px;height:17px;border:0;font-family:arial;font-size:16px;" readonly>' + lis[i][1] + '</textarea></p><p><b>操作</b>&nbsp;<a style="color:black;text-decoration:underline;" href="javascript:void();" onclick="window.open(getplayer() + encodeURIComponent(\'' + lis[i][2] + '\'),\'_blank\');">播放</a>&nbsp;<a style="color:black;text-decoration:underline;" target="_blank" href="' + lis[i][2] + '">下载</a>&nbsp;<a style="color:black;text-decoration:underline;" target="_blank" href="javascript:void();" onclick="prompt(\'请复制以下路径:\',\'' + lis[i][2] + '\');">复制</a>&nbsp;<a style="color:black;text-decoration:underline;" target="_blank" href="https://btdigg.org' + lis[i][5] + '">详细</a></p><p><b>大小</b>&nbsp;' + lis[i][3] + '</p><p><b>日期</b>&nbsp;' + lis[i][4] + '</p><span style="float:right;margin-right:0;">' + i + '</span><p><b>H评价</b>&nbsp;' + (lis[i][5] == '2' ? '很黄很暴力': (lis[i][5] == '1' ? '爱情动作文艺片': '无节操视频')) + '</p><br><p><div style="overflow: hidden;font-family:arial;font-size:16px;width:300px;height:221px;">' + lis[i][6] + '</div></p></font></div>');
		}
		document.writeln('</span>');
	}
	document.writeln('<title>' + scontent + ' - BTDIGG资源</title><style>#emotion{margin:5px 0;}input:focus::-webkit-input-placeholder,textarea:focus::-webkit-input-placeholder{color:transparent;}::-webkit-scrollbar-track-piece{background:#FFF;}::-webkit-scrollbar{width:3px;height:8px;}::-webkit-scrollbar-thumb{height:50px;background-color:#999;border:none;}::-webkit-scrollbar-thumb:hover{background-color:#666;}.readmore{display:none}</style>');

}

//-------------------btdigg---------------------//
//-------------------trtp---------------------//
function getcode_trtp(str, p) {
	document.getElementById('loading').innerHTML = '获取中... ';
	scontent = str;
	window.location.hash = '5' + '|-|' + encodeURIComponent(scontent);
	var ms = new Array();
	ms[0] = "get"; //method
	ms[1] = 0; //postdata
	ms[2] = 0; //cookie
	ms[3] = "http://www.baidu.com/"; //referer
	ms[4] = 0; //proxy
	ms[5] = "Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.31 (KHTML, like Gecko) Chrome/26.0.1410.64 Safari/537.31"; //agent
	var mshead = new Array();
	mshead[0] = 'X-Requested-With:XMLHttpRequest';
	ms[6] = mshead; //head
	var xx = CrossScript(ajax_trtp_url, 'http://torrentproject.com/?t=' + encodeURIComponent(str) + '&p=' + p, ms, 'ajax_ds', 'ajax_ds?getxjson_trtp(ajax_ds):alert("获取失败！");');
}

//getcode_trtp(scontent,page);
function getxjson_trtp(content) {
	document.writeln('<body></body>');
	document.body.innerHTML = '';
	document.body.innerHTML = '<div><span style="float:right;"><form method="post" style="height: 12px;">关键词<input value="' + scontent + '" id="search"/><input type="submit" value="搜索" onclick="page=1;scontent=document.getElementById(\'search\').value;getcode_trtp(scontent,page);"/></form></span></div><iframe id="ifm" src="about:blank" style="display:none;"></iframe>';
	document.getElementById("ifm").contentDocument.body.innerHTML = content;
	var lis = new Array();
	lis[0] = 1;
	try {
		lis[0] = document.getElementById("ifm").contentDocument.body.getElementsByClassName('gac_bb')[0].getElementsByTagName('span')[0].innerHTML.replace('found ', '').split('results')[0].trim();

		var rootnod = document.getElementById("ifm").contentDocument.body.getElementsByClassName('tt')[0];
		var linod = rootnod.getElementsByTagName('div');

	} catch(e) {
		var linod = '';
	}

	for (var $i0 = 1; $i0 < linod.length; $i0++) {

		var lihash = linod[$i0].getElementsByTagName('span')[0].getElementsByTagName('a')[0].getAttribute('href').replace(/http\:\/\/torrentproject\.com\//ig, '').split('\/')[0]; //hash
		var lihref = linod[$i0].getElementsByTagName('span')[0].getElementsByTagName('a')[0].getAttribute('href'); //ed2k
		var liname = linod[$i0].getElementsByTagName('span')[0].getElementsByTagName('a')[0].innerHTML; //name
		var lidate = linod[$i0].getElementsByTagName('span')[linod[$i0].getElementsByTagName('span').length - 2].innerHTML; //name
		var lisize = linod[$i0].getElementsByTagName('span')[linod[$i0].getElementsByTagName('span').length - 1].innerHTML; //name
		var litype = linod[$i0].getElementsByTagName('span')[1].innerHTML; //type
		var lia = [(liname.trim()), lihash.trim(), (lihref.trim()), lisize.trim(), lidate.trim(), litype.trim()];

		lis.push(lia);
	}

	runjson_trtp(lis);
}
function getpages_trtp(num) {

	var ppn = num / 50;
	ppn = (ppn * 50 < num ? ppn += 1 : ppn = ppn);
	if (num > 1000) {
		ppn = 19;
	}
	var jl = '';
	for (var i = 1; i < ppn + 1; i++) {
		jl += '<option value="' + i + '"' + (i == page ? 'selected': '') + '>第' + i + '页</option>';
	}
	return jl;
}

function runjson_trtp(lis) {
	document.body.innerHTML = '';
	document.writeln('<div style="margin-top:-8px;position:fixed;background:black;width:98%"><span id="loading"></span><span id="ym">' + (page > 1 ? '<a href="javascript:void();" onclick="page-=1;getcode_trtp(scontent,page);" style="color:white;text-decoration:underline;">上一页</a>': '') + '&nbsp;<select onchange="page=parseInt(this.value);getcode_trtp(scontent,page);" style="width:100px;border:0;" id="spages" value="' + page + '">' + getpages_trtp(lis[0]) + '</select>&nbsp;结果:' + (lis.length - 1) + '个');
	document.writeln((document.getElementById('spages').length > page ? ('<a href="javascript:void;" onclick="page+=1;getcode_trtp(scontent,page);" style="color:white;text-decoration:underline;">下一页</a>') : '') + '</span><span style="float:right;"><form method="post" style="height: 12px;"><a href="javascript:void();" onclick="getcode(\'4\',0);" style="color:white;text-decoration:underline;">掘种资源</a>&nbsp;<a href="javascript:void();" onclick="getcode(\'3\',0);" style="color:white;text-decoration:underline;">种子资源</a>&nbsp;<a href="javascript:void();" onclick="getcode(\'2\',0);" style="color:white;text-decoration:underline;">磁力资源</a>&nbsp;<a href="javascript:void();" onclick="getcode(\'1\',0);" style="color:white;text-decoration:underline;">磁力影音</a>&nbsp;<a href="javascript:void();" onclick="getcode(\'0\',0);" style="color:white;text-decoration:underline;">电驴影音</a>&nbsp;<a href="javascript:void;" onclick="showsetbox();" style="color:white;text-decoration:underline;">设置</a>&nbsp;<a href="javascript:void;" onclick="getcode_trtp(scontent,page);" style="color:white;text-decoration:underline;">刷新</a>&nbsp;<a href="javascript:void;" onclick="scroll(0,0);" style="color:white;text-decoration:underline;">顶部</a>&nbsp;关键词<input value="' + scontent + '" id="search"/><input type="submit" value="搜索" onclick="page=1;scontent=document.getElementById(\'search\').value;getcode_trtp(scontent,page);"/></form></span></div><br><br>');
	setbox();
	var gn = Math.floor(document.body.scrollWidth / 300);
	var isji = 'top,';

	document.body.style.color = 'white';
	document.body.style.background = 'black';
	document.body.style.backgroundImage = "url(http://img14.poco.cn/mypoco/myphoto/20130321/12/17338767320130321124216067.jpg)";
	for (var x = 0; x < gn; x++) {
		if (!isji) {
			break;
		}
		var iq = Math.floor(x * (lis.length / gn));

		var ih = Math.floor((x + 1) * (lis.length / gn));
		iq += 1;
		ih += 1;

		if (ih > lis.length) {
			ih = lis.length;
		}
		if (gn > lis.length || gn == lis.length) {
			iq = 1;
			ih = lis.length;
			isji = '';
		}
		document.writeln('<span style="float:left">');
		for (var i = iq; i < ih; i++) {
			document.writeln('<div style="overflow: hidden; float: ' + isji + 'left; width: 300px; height: 250px; padding: 10px; margin: 5px; border: 1px solid black;color:black; background-color: black; top: -50px; background-position: initial initial; background-repeat: initial initial;color:white;" onmouseover="this.getElementsByTagName(\'textarea\')[0].style.color=\'black\';this.getElementsByTagName(\'textarea\')[1].style.color=\'black\';this.style.color=\'black\';this.style.background=\'white\';this.style.height=\'527\';scroll(0,getAbsPoint(this,\'y\')-((document.body.offsetHeight-parseInt(this.style.height))/2));" onmouseout="this.getElementsByTagName(\'textarea\')[0].style.color=\'white\';this.getElementsByTagName(\'textarea\')[1].style.color=\'white\';this.style.color=\'white\';this.style.background=\'black\';this.style.height=\'250\';"><font face="arial"><p><textarea style="color:white;resize:none;background:transparent;width:300px;height:50px;border:0;font-family:arial;font-size:16px;" readonly>' + lis[i][0] + '</textarea></p><p><b>Hash</b>&nbsp;<textarea style="color:white;resize:none;background:transparent;width:250px;height:17px;border:0;font-family:arial;font-size:16px;" readonly>' + lis[i][1] + '</textarea></p><p><b>操作</b>&nbsp;<a style="color:black;text-decoration:underline;" target="_blank" href="javascript:void();" onclick="window.open(getplayer() + encodeURIComponent(\'magnet:?xt=urn:btih:' + lis[i][1] + '\'),\'_blank\');">播放</a>&nbsp;<a style="color:black;text-decoration:underline;" target="_blank" href="http://torrentproject.com/torrent/' + lis[i][1].toUpperCase() + '.torrent">下载</a>&nbsp;<a style="color:black;text-decoration:underline;" target="_blank" href="javascript:void();" onclick="prompt(\'请复制以下路径:\',\'magnet:?xt=urn:btih:' + lis[i][1] + '\');">复制</a>&nbsp;<a style="color:black;text-decoration:underline;" target="_blank" href="' + lis[i][2] + '">详细</a></p><p><b>大小</b>&nbsp;' + lis[i][3] + '</p><p><b>日期</b>&nbsp;' + lis[i][4] + '</p><span style="float:right;margin-right:0;">' + i + '</span><p><b>类型</b>&nbsp;' + lis[i][5] + '</p><br><p><a target="_blank" title="' + lis[i][0] + '" href="javascript:void();" onclick="window.open(getplayer() + encodeURIComponent(\'magnet:?xt=urn:btih:' + lis[i][1] + '\'),\'_blank\');"><img src="http://donkey4u.com/static/hexie.jpg" width="300px"/></a></p></font></div>');
		}
		document.writeln('</span>');
	}
	document.writeln('<title>' + scontent + ' - 种子计划</title><style>#emotion{margin:5px 0;}input:focus::-webkit-input-placeholder,textarea:focus::-webkit-input-placeholder{color:transparent;}::-webkit-scrollbar-track-piece{background:#FFF;}::-webkit-scrollbar{width:3px;height:8px;}::-webkit-scrollbar-thumb{height:50px;background-color:#999;border:none;}::-webkit-scrollbar-thumb:hover{background-color:#666;}.readmore{display:none}</style>');

}

//-------------------trtp---------------------//
