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
    $("body").height(0);
	var iscontentvisible = ko.contextFor($(this)[0]);
	if (!ko.utils.unwrapObservable(iscontentvisible.$data.contentvisible)) {
		$.mobile.loading("show");
		$(".ui-loader").css("top","50%");		
	}
});

$(document).live("pagebeforechange", function (event, data) {
	$.mobile.pageData = $.url(data.toPage).param();
});	

var gaPlugin;

document.addEventListener("deviceready", onDeviceReady, false);


function onDeviceReady() {
	document.addEventListener("online", onOnline, false);
	document.addEventListener("offline", onOffline, false);
	document.addEventListener("backbutton", function(e){
		if($.mobile.activePage.is('#home')){
			e.preventDefault();
			navigator.app.exitApp();
			gaPlugin.exit();
		}
		else {
			navigator.app.backHistory()
		}
	}, false);	
    gaPlugin = window.plugins.gaPlugin;
    gaPlugin.init(successHandler, errorHandler, Application.google_analytics_code, 10);	
}

function onOnline() {
	showToast(Globalize.localize("global_apponline", Application.appLanguage()));
}

function onOffline() {
    showToast(Globalize.localize("global_appoffline", Application.appLanguage()));
}

function showToast(message) {
    $('<div id="my_toast" data-role="toast">' + message + '</div>').appendTo($("body")).toast().toast("show");
}




