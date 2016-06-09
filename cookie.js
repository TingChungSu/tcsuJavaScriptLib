/*
	usage:
	tcsu_cookies.setCookie(cname,cvalue,exdays); 
	tcsu_cookies.deleteCookie(cname);
	tcsu_cookies.getCookie(cname);
*/

var tcsu_cookies = tcsu_cookies || {};

tcsu_cookies = {
	
	setCookie: function setCookie(cname, cvalue, exdays) {
		var d = new Date();
		d.setTime(d.getTime() + (exdays*24*60*60*1000));
		var expires = "expires="+ d.toUTCString();
		document.cookie = cname + "=" + cvalue + "; " + expires;
	},
	deleteCookie: function setCookie(cname) {
		var d = new Date();
		d.setTime(d.getTime());
		var expires = "expires="+ d.toUTCString();
		document.cookie = cname + "="  + "; " + expires;
	},
	getCookie: function getCookie(cname) {
		var name = cname + "=";
		var ca = document.cookie.split(';');
		for(var i = 0; i <ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length,c.length);
			}
		}
		return "";
	}
}