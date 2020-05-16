mui.init({swipeBack: false
,gestureConfig: {tap:true,doubletap:true,longtap:true,hold:true,release:true}});

var 标题栏1 = new 标题栏("标题栏1",标题栏1_被双击,null,null);
var 编辑框1 = new 编辑框("编辑框1",null,null,null,null,null);
var 编辑框2 = new 编辑框("编辑框2",null,null,null,null,null);
var 编辑框3 = new 编辑框("编辑框3",null,null,null,null,null);
var 按钮1 = new 按钮("按钮1",按钮1_被单击,null,null);
var 按钮2 = new 按钮("按钮2",按钮2_被单击,null,null);
var 按钮3 = new 按钮("按钮3",按钮3_被单击,null,null);
var 按钮4 = new 按钮("按钮4",按钮4_被单击,null,null);
var 按钮5 = new 按钮("按钮5",按钮5_被单击,null,null);
var 按钮6 = new 按钮("按钮6",按钮6_被单击,null,null);
var 按钮7 = new 按钮("按钮7",按钮7_被单击,null,null);
var 按钮8 = new 按钮("按钮8",按钮8_被单击,null,null);
var 按钮9 = new 按钮("按钮9",按钮9_被单击,null,null);
var 按钮10 = new 按钮("按钮10",按钮10_被单击,null,null);
var 按钮11 = new 按钮("按钮11",按钮11_被单击,null,null);
var 按钮12 = new 按钮("按钮12",按钮12_被单击,null,null);
var 按钮13 = new 按钮("按钮13",按钮13_被单击,null,null);
var 按钮14 = new 按钮("按钮14",按钮14_被单击,null,null);
var 加密操作1 = new 加密操作("加密操作1");
if(mui.os.plus){
    mui.plusReady(function() {
        主窗口_创建完毕();
        document.getElementsByClassName("mui-content")[0].style.display="";
    });
}else{
    window.onload=function(){ 
        主窗口_创建完毕();
        document.getElementsByClassName("mui-content")[0].style.display="";
    }
}

function 标题栏1_被双击(){

}

function 主窗口_创建完毕(){
	标题栏1.置标题("奇奇在线加解密");
	按钮1.置标题("md5加密");
	按钮2.置标题("sha1加密");
	按钮3.置标题("文本编码");
	按钮4.置标题("文本解码");
	按钮5.置标题("RC4加密");
	按钮6.置标题("RC4解密");
	按钮7.置标题("AES加密");
	按钮8.置标题("AES解密");
	按钮9.置标题("DES加密");
	按钮10.置标题("DES解密");
	按钮11.置标题("BASE64加密");
	按钮12.置标题("BASE64解密");
	按钮13.置标题("usc2转ansi");
	按钮14.置标题("ansi转usc2");
}

function 按钮1_被单击(){
	编辑框3.置内容(加密操作1.取md5值(编辑框1.取内容()));
}

function 按钮2_被单击(){
	编辑框3.置内容(加密操作1.取sha1值(编辑框1.取内容()));
}

function 按钮3_被单击(){
	编辑框3.置内容(加密操作1.url编码(编辑框1.取内容()));
}

function 按钮4_被单击(){
	编辑框3.置内容(加密操作1.url解码(编辑框1.取内容()));
}

function 按钮5_被单击(){
	编辑框3.置内容(加密操作1.rc4加密(编辑框1.取内容(),编辑框2.取内容()));
}

function 按钮6_被单击(){
	编辑框3.置内容(加密操作1.rc4解密(编辑框1.取内容(),编辑框2.取内容()));
}

function 按钮7_被单击(){
	编辑框3.置内容(加密操作1.aes加密(编辑框1.取内容(),编辑框2.取内容()));
}

function 按钮8_被单击(){
	编辑框3.置内容(加密操作1.aes解密(编辑框1.取内容(),编辑框2.取内容()));
}

function 按钮9_被单击(){
	编辑框3.置内容(加密操作1.des加密(编辑框1.取内容(),编辑框2.取内容()));
}

function 按钮10_被单击(){
	编辑框3.置内容(加密操作1.des解密(编辑框1.取内容(),编辑框2.取内容()));
}

function 按钮11_被单击(){
	编辑框3.置内容(加密操作1.base64加密(编辑框1.取内容()));
}

function 按钮12_被单击(){
	编辑框3.置内容(加密操作1.base64解密(编辑框1.取内容()));
}

function 按钮13_被单击(){
	编辑框3.置内容(加密操作1.usc2转ansi(编辑框1.取内容()));
}

function 按钮14_被单击(){
	编辑框3.置内容(加密操作1.ansi转usc2(编辑框3.取内容()));
}
