var Application =  new App();

$("#home").live("pageinit", function () {
	ko.applyBindings(new homeViewModel());	
});	

$("#post").live("pageinit", function () {
	ko.applyBindings(new postViewModel(), $("#post")[0]);
});

$("#postsby").live("pageinit", function () {
	ko.applyBindings(new postsbyViewModel(), $("#postsby")[0]);
});

$("#categories").live("pageinit", function () {
	ko.applyBindings(new categoriesViewModel(), $("#categories")[0]);
});

$("#tags").live("pageinit", function () {
	ko.applyBindings(new tagsViewModel(), $("#tags")[0]);
});

$("#search").live("pageinit", function () {
	ko.applyBindings(new searchViewModel(), $("#search")[0]);
});

$("#home, #post, #postsby, #categories, #tags, #search").live("pageshow", function () {
	var iscontentvisible = ko.contextFor($(this)[0]);
	if (!ko.utils.unwrapObservable(iscontentvisible.$data.contentvisible)) {
		$.mobile.loading("show");
	}
});

$(document).live("pagebeforechange", function (event, data) {
	$.mobile.pageData = $.url(data.toPage).param();
});	

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
	document.addEventListener("online", onOnline, false);
	document.addEventListener("offline", onOffline, false);
}

function onOnline() {
	showToast(Globalize.localize("global_apponline", navigator.language.substr(0, 2)));
}

function onOffline() {
    showToast(Globalize.localize("global_appoffline", navigator.language.substr(0, 2)));
}

function showToast(message) {
    $('<div id="my_toast" data-role="toast">' + message + '</div>').appendTo($("body")).toast().toast("show");
}

if (Application.config.google_analytics_code != "") {
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', Application.config.google_analytics_code]);
  _gaq.push(['_trackPageview']);
  (function() {
	var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();		  
}

