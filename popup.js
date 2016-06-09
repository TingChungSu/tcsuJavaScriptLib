/*
	usage: 
		tcsu_popupWeb.popNewWeb('test.html','test',500,500);
		tcsu_popupWeb.popCenter('test.html','test',500,500);
*/

var tcsu_popupWeb = tcsu_popupWeb || {};

tcsu_popupWeb = {
	popNewWeb: function popNewWeb(url,title,width,height) {
		window.open(url,title,'height='+height+',innerHeight='+height+
		',width='+width+',innerWidth='+width);
	},
	popCenter: function popCenter(url,title,width,height){
		var iTop = (window.screen.availHeight-30-height)/2;  //視窗的垂直位置;
		var iLeft = (window.screen.availWidth-10-width)/2;   //視窗的水平位置;
		window.open(url,title,'height='+height+',innerHeight='+height+
		',width='+width+',innerWidth='+width+
		',top='+iTop+',left='+iLeft+',status=no,location=no,status=no,menubar=no,toolbar=no,resizable=no,scrollbars=no');
	}
}
