/**
* @file            formValidatorRegex.js
* @description     正则表达式验证枚举
* @author          朱学超
* @date            2011-07-14
**/
var RegexEnum =
{
    integer: "^-?[1-9]\\d*$", 				//整数
    integer_Z: "^[1-9]\\d*$", 				//正整数
    integer_F: "^-[1-9]\\d*$", 				//负整数
    num: "^([+-]?)\\d*\\.?\\d+$", 		//数字
    num_Z: "^[1-9]\\d*|0$", 				//正数（正整数 + 0）
    num_F: "^-[1-9]\\d*|0$", 				//负数（负整数 + 0）
    decmal: "^([+-]?)\\d*\\.\\d+$", 		//浮点数
    decmal_Z: "^[1-9]\\d*.\\d*|0.\\d*[1-9]\\d*$", //正浮点数
    decmal_F: "^-([1-9]\\d*.\\d*|0.\\d*[1-9]\\d*)$", //负浮点数
    decmal3: "^-?([1-9]\\d*.\\d*|0.\\d*[1-9]\\d*|0?.0+|0)$", //浮点数
    decmal4: "^[1-9]\\d*.\\d*|0.\\d*[1-9]\\d*|0?.0+|0$", //非负浮点数（正浮点数 + 0）
    decmal5: "^(-([1-9]\\d*.\\d*|0.\\d*[1-9]\\d*))|0?.0+|0$", //非正浮点数（负浮点数 + 0）
    decmal6: "(^[1-9]\\d*\\.\\d+$)|(^0\\.\\d*[1-9]\\d*$)|(^[1-9]\\d*$)", //正数

    email: "^\\w+((-\\w+)|(\\.\\w+))*\\@[A-Za-z0-9]+((\\.|-)[A-Za-z0-9]+)*\\.[A-Za-z0-9]+$", //邮件
    color: "^[a-fA-F0-9]{6}$", 			//颜色
    url: "^http[s]?:\\/\\/([\\w-]+\\.)+[\\w-]+([\\w-./?%&=]*)?$", //url
    chinese: "^[\\u4E00-\\u9FA5\\uF900-\\uFA2D]+$", 				//仅中文
    ascii: "^[\\x00-\\xFF]+$", 			//仅ACSII字符
    zipcode: "^\\d{6}$", 					//邮编
    mobile: "^(13|15|18)[0-9]{9}$", 			//手机
    tel: "^(([0\\+]\\d{2,3}-)?(0\\d{2,3})-)?(\\d{7,8})(-(\\d{3,}))?$", //电话号码的函数(包括验证国内区号,国际区号,分机号)
    tel_mobile: "(^(13|15|18)[0-9]{9}$)|(^(([0\\+]\\d{2,3}-)?(0\\d{2,3})-)?(\\d{7,8})(-(\\d{3,}))?$)", //手机和电话号码
    qq: "^[1-9]*[1-9][0-9]*$", 			//QQ号码
    ip4: "^(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)$", //ip地址
    notempty: "^\\S+$", 					//非空
    picture: "(.*)\\.(jpg|bmp|gif|ico|pcx|jpeg|tif|png|raw|tga)$", //图片
    rar: "(.*)\\.(rar|zip|7zip|tgz)$", 							//压缩文件
    date: "^\\d{4}(\\-|\\/|\.)\\d{1,2}\\1\\d{1,2}$", 				//日期
    username: "^\\w+$", 					//用来用户注册。匹配由数字、26个英文字母或者下划线组成的字符串
    letter: "^[A-Za-z]+$", 				//字母
    letter_u: "^[A-Z]+$", 				//大写字母
    letter_l: "^[a-z]+$", 				//小写字母
    idcard: "^[1-9]([0-9]{14}|[0-9]{17})$"	//身份证
};