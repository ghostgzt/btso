<?php
/* vim: set expandtab tabstop=4 shiftwidth=4: */
// +----------------------------------------------------------------------+
// | PHP version 5                                                        |
// +----------------------------------------------------------------------+
// | Copyright (c) 1997-2004 The PHP Group                                |
// +----------------------------------------------------------------------+
// | This source file is subject to version 3.0 of the PHP license,       |
// | that is bundled with this package in the file LICENSE, and is        |
// | available through the world-wide-web at the following url:           |
// | http://www.php.net/license/3_0.txt.                                  |
// | If you did not receive a copy of the PHP license and are unable to   |
// | obtain it through the world-wide-web, please send a note to          |
// | license@php.net so we can mail you a copy immediately.               |
// +----------------------------------------------------------------------+
// | Authors: Original Author Gentle_Kwan <ghostgzt@gmail.com>            |
// +----------------------------------------------------------------------+
// $version:2.5
//
//Ajax Over All Domain
error_reporting(0);
define("CACHE_TIME",3600*24);
define("CACHE_MIN",512);
define("CACHE_MAX",52428800);
if(Extension_Loaded('zlib')) Ob_Start('ob_gzhandler'); 
function ajax($url, $data = null, $cookie = null, $referer = null, $proxy = null, $agent = null, $head = null) {
    $ch = curl_init($url);
    if ($agent) {
        //curl_setopt($ch, CURLOPT_USERAGENT,"Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.31 (KHTML, like Gecko) Chrome/26.0.1410.64 Safari/537.31");
        curl_setopt($ch, CURLOPT_USERAGENT, $agent);
    }
    
    if ($head) {
        /*
        $header = array(
        'X-Requested-With:XMLHttpRequest'
        ); */
		if($head=='1'||$head=='2'){
		curl_setopt($ch, CURLOPT_HEADER, true);
		curl_setopt($ch, CURLOPT_NOBODY, true);
		}else{
		curl_setopt($ch, CURLOPT_HEADER, 0); // 不返回header部分
        curl_setopt($ch, CURLOPT_HTTPHEADER, $head);
		curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
		}
    }
    if ($proxy) {
        curl_setopt($ch, CURLOPT_PROXY, $proxy);
    }
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); // 返回字符串，而非直接输出
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 120); // 设置socket连接超时时间
    if (!empty($referer)) {
        curl_setopt($ch, CURLOPT_REFERER, $referer); // 设置引用网址
    }
    if (!empty($cookie)) {
        curl_setopt($ch, CURLOPT_COOKIE, $cookie);
    }
    if (is_null($data)) {
        // GET
        
    } else if (is_string($data)) {
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
        // POST
        
    } else if (is_array($data)) {
        // POST
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
    }
    $str = curl_exec($ch);
	if($head=='2'){$str=curl_getinfo($ch,CURLINFO_HTTP_CODE);}
    curl_close($ch);
    return $str;
}
/***** 
*@dir - Directory to destroy 
*@virtual[optional]- whether a virtual directory 
*/
function destroyDir($dir, $virtual = false) {
	$ds = DIRECTORY_SEPARATOR;
	$dir = $virtual ? realpath($dir) : $dir;
	$dir = substr($dir, -1) == $ds ? substr($dir, 0, -1) : $dir;
	if (is_dir($dir) && $handle = opendir($dir)) {
		while ($file = readdir($handle)) {
			if ($file == '.' || $file == '..') {
				continue;
			}
			elseif(is_dir($dir.$ds.$file)) {
				destroyDir($dir.$ds.$file);
			}
			else {
				unlink($dir.$ds.$file);
			}
		}
		closedir($handle);
		rmdir($dir);
		return true;
	}
	else {
		return false;
	}
}
function xcache($content = null) {
try{
if($_GET['cache']){
	$u = $_SERVER['QUERY_STRING'];
	$z = 'cache/'.md5($u).'.js';
	if ($u) {
		if (!$content) {
			if (file_exists($z)) {
				header("Location:$z");
				return true;			
			}
		} else {
			if (time() - date(filemtime('cache')) > constant("CACHE_TIME")) {
				destroyDir('cache');
			}
			if (!is_dir('cache')) {
				mkdir('cache');
			}
			if ((strlen($content) > constant("CACHE_MIN"))&&(strlen($content) < constant("CACHE_MAX"))) {
				file_put_contents($z, $content);
				header("Location:$z");
				return true;	
			}else{return false;}
		}
	}
}	
}catch(Exception $e){return false;}
}
if ($_GET['ajax_get_url']) {
    if(!xcache()){
    $ax = base64_decode($_GET['method']);
    $ax0 = json_decode($ax, true);
    $url = base64_decode($_GET['ajax_get_url']);
    if (strtolower($ax0[0]) == 'post') {
        $data = $ax0[1];
    } else {
        $data = null;
    }

    $r = ajax($url, $data, $ax0[2], $ax0[3], $ax0[4], $ax0[5], $ax0[6]);
	$encode=$_GET['encode'];
	if($encode){$encode=split('\|',base64_decode($encode));
	$r=iconv($encode[0],$encode[1]."//IGNORE",$r);}
	$match=$_GET['match'];
	if($match){$match=split('\|',base64_decode($match));
	preg_match_all(base64_decode($match[0]), $r, $result);
	$m=split('\|',base64_decode($match[0]));
	if($match[1]==2){$result=preg_replace(json_decode(base64_decode($m[0])),json_decode(base64_decode($m[1])),$r);
	$r=$result;
	}else{
	if(isset($match[1])){
	if($match[1]==0){$result=$result[0];}
	if($match[1]==1){$result=$result[1];}
	}
	$r=json_encode($result);
	}
	}
	if($_GET['ajax_get_el']){
    $el = $_GET['ajax_get_el'];
	header("Content-type: text/javascript");
    $op=('var ' . $el . '="";' . $el . '="' . base64_encode($r) . '";');
	if(strlen($r)>0){
	if(!xcache($op)){die($op);}
	}else{
	die($op);
	}
	}else{
	$type=$_GET['type'];
	if($type=='download'){
	Header("Content-type: application/octet-stream");
	header("Content-Disposition: attachment; filename=".basename($url));
	}else{
	if($type){
	header('Content-Type: '.base64_decode($type));
	}
	}
    die($r);
	}
	}
}

/*
  var ms = new Array();
  ms[0]="post";//method
  ms[1]="test=1&start=1";//postdata
  ms[2]="PHPSESSID=TestAjax";//cookie
  ms[3]="http://www.baidu.com/";//referer
  ms[4]=0;//proxy
  ms[5]="Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.31 (KHTML, like Gecko) Chrome/26.0.1410.64 Safari/537.31";//agent
  var mshead = new Array();
  mshead[0]='X-Requested-With:XMLHttpRequest';
  ms[6]=mshead;//head:"1"-getHead|"2"-getHTTP_CODE
  CrossScript('http://www.baidu.com/',ms,'ajax_ds','alert(ajax_ds);','GB2312|UTF-8', -1);
--------------------------------<
  getfile('http://www.baidu.com/img/baidu_jgylogo3.gif', 'http://www.baidu.com/', 'image/png',ms);
--------------------------------<  
  var mats=new Array();
  mats[0]="/<h>(.*?)<\\/h>/";
  mats[1]="/<z>(.*?)<\\/z>/";
  var reps=new Array();
  reps[0]="123";
  reps[1]="456";
  getmatchtext('http://202.112.118.66/bar/list/Total.xml',mats,reps,'ajax_xk','alert(ajax_xk)','GB2312|UTF-8',0,'');
--------------------------------<   
  getmatcharray('http://202.112.118.66/bar/list/Total.xml',"/<h>(.*?)<\/h>/",0,'ajax_xk','alert(ajax_xk[0][0])','GB2312|UTF-8',0,'');
*/
?>
/*<script>window.location.href="/";</script>*/
var ajaxurl='<?php echo "http://".$_SERVER["HTTP_HOST"].$_SERVER["SCRIPT_NAME"];?>';
var lastScript;
var b = new Base64();
var run=0;
var timeout=30000;
function CrossScript(url, method, element, fn, encode, cache, match, errfn) {
try{
	var h = document.getElementsByTagName("head")[0];
	var f = document.createElement("script");
	var d = b.encode(getxdate(cache));
	var k = (new Date).valueOf();
	run=k;
	if(errfn){setTimeout('if((run!=0)&&(((new Date).valueOf())-timeout>run)){eval(\''+errfn+'\')}',timeout);}
	f.type = "text/javascript";
	f.id = d;
	f.src = ajaxurl+'?ajax_get_el=' + element + '&ajax_get_url=' + b.encode(url) + (method?('&method=' + b.encode(arrayToJson(method))):'') + (encode?('&encode=' + b.encode(encode)):'') + (match?('&match=' + b.encode(match)):'') + (cache?'&cache=1':'') + (d?('&spm=' + d):'');
	h.appendChild(f);
	f.onload = f.onreadystatechange = function() {
		if (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete') {
			run=0;
			eval(element + '=getdata(' + element + ');');
			eval(fn);
		}
		f.onload = f.onreadystatechange = null;
	}
	if (lastScript && g(lastScript)) g(lastScript).parentNode.removeChild(g(lastScript));
	}catch(e){
	if(errfn){
	eval(errfn);
	}
	}
	lastScript = d;	
	return f.src;
}
function getmatchtext(url,match,replace,element,fn,encode,cache,method,errfn){
var xmatch;
xmatch=b.encode(arrayToJson(match))+'|'+b.encode(arrayToJson(replace));
getmatcharray(url,xmatch,2,element,fn,encode,cache,method,errfn);
}
function getmatcharray(url,match,type,element,fn,encode,cache,method,errfn){
var gz='';
gz=b.encode(match)+'|'+type;
CrossScript(url,method,element,fn,encode,cache,gz,errfn);
}
function getfile(url, referrer, type, method) {
	var data = '';
	if (method) {
		data = arrayToJson(method);
	} else {
		data = '["get",0,0,"' + referrer + '",0,"Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.31 (KHTML, like Gecko) Chrome/26.0.1410.64 Safari/537.31",["X-Requested-With:XMLHttpRequest"]]';
	}
	return ajaxurl+'?ajax_get_url=' + b.encode(url) + '&method=' + b.encode(data) + (type?('&type=' + b.encode(type)):'');
}
function clearStorage(name){
var storage = window.localStorage; 
if(name){
storage.removeItem(name);
}else{
storage.clear();
}
}
function getStorage(name){ 
try{
		 var storage = window.localStorage; 
            if(storage.getItem(name)){ 
			var t=storage.getItem(name).split('\|');
			if(t[0]>((new Date).valueOf())){

				return b.decode(t[1]);
				}else{
				storage.removeItem(name);
				return '';
				}
            }else{
			    return '';
			}
			}catch(e){}
} 
function setStorage(name,value,time,init){ 
try{
             var storage = window.localStorage; 
            if (storage) { 
			try{
			if(init){storage.clear();}
           storage.setItem(name, (((new Date).valueOf())+(time*1000))+'|'+b.encode(value)); 
		   }catch(e){}
           return true
        }else{return false} 
		}catch(e){}
} 
function arrayToJson(o) {
	var r = [];
	if (typeof o == "string") return "\"" + o.replace(/([\'\"\\])/g, "\\$1").replace(/(\n)/g, "\\n").replace(/(\r)/g, "\\r").replace(/(\t)/g, "\\t") + "\"";
	if (typeof o == "object") {
		if (!o.sort) {
			for (var i in o) r.push(i + ":" + arrayToJson(o[i]));
			if ( !! document.all && !/^\n?function\s*toString\(\)\s*\{\n?\s*\[native code\]\n?\s*\}\n?\s*$/.test(o.toString)) {
				r.push("toString:" + o.toString.toString());
			}
			r = "{" + r.join() + "}";
		} else {
			for (var i = 0; i < o.length; i++) {
				r.push(arrayToJson(o[i]));
			}
			r = "[" + r.join() + "]";
		}
		return r;
	}
	return o.toString();
}
function g(x) {
	return document.getElementById(x)
};
var LittleUrl = {
	encode: function(string) {
		return escape(this._utf8_encode(string));
	},
	decode: function(string) {
		return this._utf8_decode(unescape(string));
	},
	_utf8_encode: function(string) {
		string = string.replace(/\r\n/g, "\n");
		var utftext = "";
		for (var n = 0; n < string.length; n++) {
			var c = string.charCodeAt(n);
			if (c < 128) {
				utftext += String.fromCharCode(c);
			} else if ((c > 127) && (c < 2048)) {
				utftext += String.fromCharCode((c >> 6) | 192);
				utftext += String.fromCharCode((c & 63) | 128);
			} else {
				utftext += String.fromCharCode((c >> 12) | 224);
				utftext += String.fromCharCode(((c >> 6) & 63) | 128);
				utftext += String.fromCharCode((c & 63) | 128);
			}
		}
		return utftext;
	},
	_utf8_decode: function(utftext) {
		var string = "";
		var i = 0;
		var c = c1 = c2 = 0;
		while (i < utftext.length) {
			c = utftext.charCodeAt(i);
			if (c < 128) {
				string += String.fromCharCode(c);
				i++;
			} else if ((c > 191) && (c < 224)) {
				c2 = utftext.charCodeAt(i + 1);
				string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
				i += 2;
			} else {
				c2 = utftext.charCodeAt(i + 1);
				c3 = utftext.charCodeAt(i + 2);
				string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
				i += 3;
			}
		}
		return string;
	}
}
function Base64() {

	// private property
	_keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

	// public method for encoding
	this.encode = function(input) {
		var output = "";
		var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
		var i = 0;
		input = _utf8_encode(input);
		while (i < input.length) {
			chr1 = input.charCodeAt(i++);
			chr2 = input.charCodeAt(i++);
			chr3 = input.charCodeAt(i++);
			enc1 = chr1 >> 2;
			enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
			enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
			enc4 = chr3 & 63;
			if (isNaN(chr2)) {
				enc3 = enc4 = 64;
			} else if (isNaN(chr3)) {
				enc4 = 64;
			}
			output = output + _keyStr.charAt(enc1) + _keyStr.charAt(enc2) + _keyStr.charAt(enc3) + _keyStr.charAt(enc4);
		}
		return output;
	}

	// public method for decoding
	this.decode = function(input) {
		var output = "";
		var chr1, chr2, chr3;
		var enc1, enc2, enc3, enc4;
		var i = 0;
		input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
		while (i < input.length) {
			enc1 = _keyStr.indexOf(input.charAt(i++));
			enc2 = _keyStr.indexOf(input.charAt(i++));
			enc3 = _keyStr.indexOf(input.charAt(i++));
			enc4 = _keyStr.indexOf(input.charAt(i++));
			chr1 = (enc1 << 2) | (enc2 >> 4);
			chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
			chr3 = ((enc3 & 3) << 6) | enc4;
			output = output + String.fromCharCode(chr1);
			if (enc3 != 64) {
				output = output + String.fromCharCode(chr2);
			}
			if (enc4 != 64) {
				output = output + String.fromCharCode(chr3);
			}
		}
		output = _utf8_decode(output);
		return output;
	}

	// private method for UTF-8 encoding
	_utf8_encode = function(string) {
		string = string.replace(/\r\n/g, "\n");
		var utftext = "";
		for (var n = 0; n < string.length; n++) {
			var c = string.charCodeAt(n);
			if (c < 128) {
				utftext += String.fromCharCode(c);
			} else if ((c > 127) && (c < 2048)) {
				utftext += String.fromCharCode((c >> 6) | 192);
				utftext += String.fromCharCode((c & 63) | 128);
			} else {
				utftext += String.fromCharCode((c >> 12) | 224);
				utftext += String.fromCharCode(((c >> 6) & 63) | 128);
				utftext += String.fromCharCode((c & 63) | 128);
			}

		}
		return utftext;
	}

	// private method for UTF-8 decoding
	_utf8_decode = function(utftext) {
		var string = "";
		var i = 0;
		var c = c1 = c2 = 0;
		while (i < utftext.length) {
			c = utftext.charCodeAt(i);
			if (c < 128) {
				string += String.fromCharCode(c);
				i++;
			} else if ((c > 191) && (c < 224)) {
				c2 = utftext.charCodeAt(i + 1);
				string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
				i += 2;
			} else {
				c2 = utftext.charCodeAt(i + 1);
				c3 = utftext.charCodeAt(i + 2);
				string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
				i += 3;
			}
		}
		return string;
	}
}
function getdata(odata) {
	var b = new Base64();
	return b.decode(odata);
}
function getAbsPoint(e, type) {
	var x = e.offsetLeft,
	y = e.offsetTop;
	while (e = e.offsetParent) {
		x += e.offsetLeft;
		y += e.offsetTop;
	}
	if (type == 'x') {
		return x;
	}
	if (type == 'y') {
		return y;
	}
	if (!type) {
		return [x, y];
	}
}
function getCookie(name) {
	var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
	if (arr != null) {
		return unescape(arr[2])
	}
	return ''
}
function setCookie(name, value, n) {
	var expdate = new Date;
	expdate.setTime(expdate.getTime() + n * 1000);
	document.cookie = name + ("=" + escape(value) + ";expires=" + expdate.toGMTString() + ";path=/;")
}
function delCookie(name){
	var expdate = new Date;
	expdate.setTime(expdate.getTime() - (3600 * 24 * 1000));
	document.cookie = name + ("=" + escape('') + ";expires=" + expdate.toGMTString() + ";path=/;")
}
function getimgsrc(htmlstr) {
	var reg = /<img.+?src=('|")?([^'"]+)('|")?(?:\s+|>)/gim;
	var arr = [];
	while (tem = reg.exec(htmlstr)) {
		arr.push(tem[2]);
	}
	alert(arr);
	return arr;
}
function screensnpt(data) {
	document.writeln(data);
	var gct = getimgsrc(data.replace(/http\:\/\//ig, '<img src="http://').replace(/\.jpg/ig, '.jpg">'));
	alert(gct.length);
	for (var i = 1; i < gct.length; i++) {
		document.writeln('<img src="' + gct[i] + '"/><br/>');
	}
}

Date.prototype.format = function(format){ 
var o = { 
"y+" : this.getYear(), //year 
"M+" : this.getMonth()+1, //month 
"d+" : this.getDate(), //day 
"h+" : this.getHours(), //hour 
"m+" : this.getMinutes(), //minute 
"s+" : this.getSeconds(), //second 
"q+" : Math.floor((this.getMonth()+3)/3), //quarter 
"S" : this.getMilliseconds() //millisecond 
} 

if(/(y+)/.test(format)) { 
format = format.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length)); 
} 

for(var k in o) { 
if(new RegExp("("+ k +")").test(format)) { 
format = format.replace(RegExp.$1, RegExp.$1.length==1 ? o[k] : ("00"+ o[k]).substr((""+ o[k]).length)); 
} 
} 
return format; 
}
function getPgjs(){
        var agent = navigator.userAgent.toLowerCase();
        var res = agent.match(/android/);
        if(res == "android")
            return res;
        res = agent.match(/iphone/);
        if(res == "iphone")
            return "ios";
        res = agent.match(/ipad/);
        if(res == "ipad")
            return "ios";
        res = agent.match(/windows/);
        if(res == "windows")
            return "wp";
        return "pc";
}
function getxdate(type){
var fstr;
switch(type){
case 0://all
return false;
break;
case 1://min
fstr="yyyy-MM-dd hh:mm";
break;
case 2://hour
fstr="yyyy-MM-dd hh";
break;
case 3://day
fstr="yyyy-MM-dd";
break;
case 4://mon
fstr="yyyy-MM";
break;
case 4://year
fstr="yyyy";
break;
default:
return false;
break;
}
var now = new Date(); 
var nowStr = now.format(fstr);
return nowStr;
}
function getele(nod, cs, type) {
/*
XML
0 s s
1 n n
2 n s
3 s n
*/
	try {
		if ((type == 1 || type == 2) && (type)) {
			var xnod = nod;
		} else {
			var xnod = (new DOMParser()).parseFromString(nod, "text/xml");
		}
		var s = cs.split('\.');
		for (var i = 0; i < s.length; i++) {
			if ((type == 1 || type == 3) && (i == s.length - 1)) {
				return xnod.getElementsByTagName(s[i]);
			} else {
				xnod = xnod.getElementsByTagName(s[i])[0];
			}
		}
		return xnod.childNodes[0].nodeValue;
	} catch(e) {
		return '';
	}
}
/*
// A simple call - myXML is a string containing your XML:  myJsonObject=xml2json.parser(myXML);    
// A 2:nd, optional, parameter is "tags not to convert" - for example <b> and <i>:  myJsonObject=xml2json.parser(myXML,'b,i');    
// A 3:rd, optional, parameter gives us a string showing us the JSON structure   
// instead of the actual JSON object: 
myString=xml2json.parser(myXML,'','html');    
// - use "compact" for output without linebreaks or tabbing  
// - use "normal" for output with linebreaks and tabbing  
// - use "html" for a html representation
*/
xml2json={
	parser:function(xmlcode,ignoretags,debug){
		if(!ignoretags){ignoretags=""};
		xmlcode=xmlcode.replace(/\s*\/>/g,'/>');
		xmlcode=xmlcode.replace(/<\?[^>]*>/g,"").replace(/<\![^>]*>/g,"");
		if (!ignoretags.sort){ignoretags=ignoretags.split(",")};
		var x=this.no_fast_endings(xmlcode);
		x=this.attris_to_tags(x);
		x=escape(x);
		x=x.split("%3C").join("<").split("%3E").join(">").split("%3D").join("=").split("%22").join("\"");
		for (var i=0;i<ignoretags.length;i++){
			x=x.replace(new RegExp("<"+ignoretags[i]+">","g"),"*$**"+ignoretags[i]+"**$*");
			x=x.replace(new RegExp("</"+ignoretags[i]+">","g"),"*$***"+ignoretags[i]+"**$*")
		};
		x='<JSONTAGWRAPPER>'+x+'</JSONTAGWRAPPER>';
		this.xmlobject={};
		var y=this.xml_to_object(x).jsontagwrapper;
		if(debug){y=this.show_json_structure(y,debug)};
		return y
	},
	xml_to_object:function(xmlcode){
		var x=xmlcode.replace(/<\//g,"?");
		x=x.split("<");
		var y=[];
		var level=0;
		var opentags=[];
		for (var i=1;i<x.length;i++){
			var tagname=x[i].split(">")[0];
			opentags.push(tagname);
			level++
			y.push(level+"<"+x[i].split("?")[0]);
			while(x[i].indexOf("?"+opentags[opentags.length-1]+">")>=0){level--;opentags.pop()}
		};
		var oldniva=-1;
		var objname="this.xmlobject";
		for (var i=0;i<y.length;i++){
			var preeval="";
			var niva=y[i].split("<")[0];
			var tagnamn=y[i].split("<")[1].split(">")[0];
			tagnamn=tagnamn.toLowerCase();
			var rest=y[i].split(">")[1];
			if(niva<=oldniva){
				var tabort=oldniva-niva+1;
				for (var j=0;j<tabort;j++){objname=objname.substring(0,objname.lastIndexOf("."))}
			};
			objname+="."+tagnamn;
			var pobject=objname.substring(0,objname.lastIndexOf("."));
			if (eval("typeof "+pobject) != "object"){preeval+=pobject+"={value:"+pobject+"};\n"};
			var objlast=objname.substring(objname.lastIndexOf(".")+1);
			var already=false;
			for (k in eval(pobject)){if(k==objlast){already=true}};
			var onlywhites=true;
			for(var s=0;s<rest.length;s+=3){
				if(rest.charAt(s)!="%"){onlywhites=false}
			};
			if (rest!="" && !onlywhites){
				if(rest/1!=rest){
					rest="'"+rest.replace(/\'/g,"\\'")+"'";
					rest=rest.replace(/\*\$\*\*\*/g,"</");
					rest=rest.replace(/\*\$\*\*/g,"<");
					rest=rest.replace(/\*\*\$\*/g,">")
				}
			} 
			else {rest="{}"};
			if(rest.charAt(0)=="'"){rest='unescape('+rest+')'};
			if (already && !eval(objname+".sort")){preeval+=objname+"=["+objname+"];\n"};
			var before="=";after="";
			if (already){before=".push(";after=")"};
			var toeval=preeval+objname+before+rest+after;
			eval(toeval);
			if(eval(objname+".sort")){objname+="["+eval(objname+".length-1")+"]"};
			oldniva=niva
		};
		return this.xmlobject
	},
	show_json_structure:function(obj,debug,l){
		var x='';
		if (obj.sort){x+="[\n"} else {x+="{\n"};
		for (var i in obj){
			if (!obj.sort){x+=i+":"};
			if (typeof obj[i] == "object"){
				x+=this.show_json_structure(obj[i],false,1)
			}
			else {
				if(typeof obj[i]=="function"){
					var v=obj[i]+"";
					//v=v.replace(/\t/g,"");
					x+=v
				}
				else if(typeof obj[i]!="string"){x+=obj[i]+",\n"}
				else {x+="'"+obj[i].replace(/\'/g,"\\'").replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/\r/g,"\\r")+"',\n"}
			}
		};
		if (obj.sort){x+="],\n"} else {x+="},\n"};
		if (!l){
			x=x.substring(0,x.lastIndexOf(","));
			x=x.replace(new RegExp(",\n}","g"),"\n}");
			x=x.replace(new RegExp(",\n]","g"),"\n]");
			var y=x.split("\n");x="";
			var lvl=0;
			for (var i=0;i<y.length;i++){
				if(y[i].indexOf("}")>=0 || y[i].indexOf("]")>=0){lvl--};
				tabs="";for(var j=0;j<lvl;j++){tabs+="\t"};
				x+=tabs+y[i]+"\n";
				if(y[i].indexOf("{")>=0 || y[i].indexOf("[")>=0){lvl++}
			};
			if(debug=="html"){
				x=x.replace(/</g,"&lt;").replace(/>/g,"&gt;");
				x=x.replace(/\n/g,"<BR>").replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;")
			};
			if (debug=="compact"){x=x.replace(/\n/g,"").replace(/\t/g,"")}
		};
		return x
	},
	no_fast_endings:function(x){
		x=x.split("/>");
		for (var i=1;i<x.length;i++){
			var t=x[i-1].substring(x[i-1].lastIndexOf("<")+1).split(" ")[0];
			x[i]="></"+t+">"+x[i]
		}	;
		x=x.join("");
		return x
	},
	attris_to_tags: function(x){
		var d=' ="\''.split("");
		x=x.split(">");
		for (var i=0;i<x.length;i++){
			var temp=x[i].split("<");
			for (var r=0;r<4;r++){temp[0]=temp[0].replace(new RegExp(d[r],"g"),"_jsonconvtemp"+r+"_")};
			if(temp[1]){
				temp[1]=temp[1].replace(/'/g,'"');
				temp[1]=temp[1].split('"');
				for (var j=1;j<temp[1].length;j+=2){
					for (var r=0;r<4;r++){temp[1][j]=temp[1][j].replace(new RegExp(d[r],"g"),"_jsonconvtemp"+r+"_")}
				};
				temp[1]=temp[1].join('"')
			};
			x[i]=temp.join("<")
		};
		x=x.join(">");
		x=x.replace(/ ([^=]*)=([^ |>]*)/g,"><$1>$2</$1");
		x=x.replace(/>"/g,">").replace(/"</g,"<");
		for (var r=0;r<4;r++){x=x.replace(new RegExp("_jsonconvtemp"+r+"_","g"),d[r])}	;
		return x
	}
};
<?PHP 
if(Extension_Loaded('zlib')) Ob_End_Flush(); 
?>