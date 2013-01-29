function postsbyViewModel() {

	var self = this;

	self.postsby = ko.observableArray();
	self.page = 1;
	self.pendingposts = ko.observable(true);
	self.contentvisible = ko.observable(false);
	self.messages = Globalize.culture(Application.appLanguage()).messages;
	if ($.mobile.pageData.by == undefined) {
		$.mobile.pageData = $.url(document.location.href).param();
	}

	self.titletext = $.mobile.pageData.id;

	self.openPanel = function() {
		$("div[data-role='panel']").panel("open");
	}
	
	self.closePanel = function() {
		$("div['data-role=panel']").panel("close");	
	}	
	
	self.getCommentsMessage = function(count) {
	    if (count == 0) {
		    return "";
		} else if (count == 1){
		    return " / 1 " + Globalize.localize("global_comment", Application.appLanguage());
		} else {
			return " / " + count + " " + Globalize.localize("global_comments", Application.appLanguage());
		}		
	}
	
	self.loadmore = function () {
	    $.mobile.loading("show");
		$.mobile.pageData = $.url(document.location.href).param();        
		$.ajax({
			url : Application.config.api_url + "getpostsby?by=" + $.mobile.pageData.by + "&id=" + $.mobile.pageData.id + "&page=" + self.page + "&callback=?",
			dataType : "jsonp",
			timeout : Application.config.timeout
		}).success(function(data) {
			$.map(data.posts, function (item) { self.postsby.push(item) });
			self.pendingposts(data.pendingposts);
			$("div[data-role='content'] ul").listview("refresh");
			self.page = self.page + 1;
			$.mobile.loading("hide");	
			$("img[data-role='bgm-list-image']").not(".img-loaded").lazyload({effect : "fadeIn"}).addClass("img-loaded");		
		}).error(function() {
			$('<div id="my_toast" data-role="toast">' + Globalize.localize("global_unable_connect", Application.appLanguage()) + '</div>').appendTo($("body")).toast().toast("show");
	        $.mobile.loading("hide");			
		});				
	}

	self.getalldata = function () {
	    $.mobile.loading("show");
		$.ajax({
			url : Application.config.api_url + "getpostsby?by=" + $.mobile.pageData.by + "&id=" + $.mobile.pageData.id + "&callback=?",
			dataType : "jsonp",
			timeout : Application.config.timeout
		}).success(function(data) {
		    self.postsby(data.posts);
			self.pendingposts(data.pendingposts);
		    $.mobile.loading("hide");
			$("div[data-role='content'] ul").listview("refresh");			
			self.contentvisible(true);
			$.mobile.loading("hide");
			$("img[data-role='bgm-list-image']").lazyload({effect : "fadeIn"}).addClass("img-loaded");					
			self.page = self.page + 1;
		}).error(function() {
			$('<div id="my_toast" data-role="toast">' + Globalize.localize("global_unable_connect", Application.appLanguage()) + '</div>').appendTo($("body")).toast().toast("show");
	        $.mobile.loading("hide");			
		});			
	}
    
	self.getalldata();
}
