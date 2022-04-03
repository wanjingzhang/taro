export default function() {
	let sysInfo = uni.getSystemInfoSync();   
	let info = {};
	info.capsule = uni.getMenuButtonBoundingClientRect(); 
	info.capsule.top += "px";
	info.capsule.height += "px";
	const barHight = info.ios ? 32 : 48;
	

    // 获取手机系统
    info.android = sysInfo.platform == 'android';
    info.iphone = sysInfo.brand == 'iPhone';
    info.ios = sysInfo.platform == 'ios';
    info.iphoneType = sysInfo.model.replace(/^iPhone \w+<$/);
    info.isIphoneX = sysInfo.model.match(/iPhone X/) ? true : false;  
 
    info.os = sysInfo.system.indexOf("Android") == 0 ? true : false; // android=true 
    info.navigationPadding = sysInfo.statusBarHeight + 'rpx' //状态栏高度
    info.navigationHeight = barHight + 'rpx';
    info.contentTop = (barHight + sysInfo.statusBarHeight) + 'rpx';
    info.bgmTop = (sysInfo.statusBarHeight+ barHight) + 'rpx';
	console.log('barHight:',barHight," statusBarHeight:",sysInfo.statusBarHeight);
	
	const articleTop = 80 + parseInt(barHight) + parseInt(sysInfo.statusBarHeight);  
	
    info.articleHeight = 'calc( 100%' + ' - ' + articleTop + ')'; 
	info.articleTop = articleTop + 'rpx';
	console.log("articleTop",articleTop)
	
    info.windowW = sysInfo.safeArea ? sysInfo.safeArea.width : sysInfo.windowWidth;
    info.windowH = sysInfo.safeArea ? sysInfo.safeArea.height : sysInfo.windowHeight;
  
    // 获取手机缩放比例
    info.screenProp =sysInfo.windowWidth/sysInfo.windowHeight; 
    switch (true) {
        case info.screenProp<0.54:
            info.screenProp = "screen189";
            break;
        case info.screenProp >= 0.54 && info.screenProp < 0.55:
            info.screenProp = "screen1891";
            break;
        case info.screenProp >= 0.55 && info.screenProp < 0.64:
            info.screenProp = "screen169";
            break;
        case info.screenProp > 0.64:
            info.screenProp = "screen159"
            break;
    }
	
	info.CDN = 'https://upload.cdn.be-xx.com/Oravida';

    return Object.assign(info,sysInfo);  
} //end func
 