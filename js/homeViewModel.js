function homeViewModel() {

    var self = this;

    self.homeposts = ko.observableArray();
    self.page = 2;
	self.pendingposts = ko.observable(true);
	self.contentvisible = ko.observable(false);
	self.messages = Globalize.culture(Application.appLanguage()).messages;

	self.evaluatepending = function(a,b,c) {
		if (!self.pendingposts()) {
			$(".loadmore").addClass("ui-disabled");
		}
	}
	
	self.loadmore = function () {
	    $.mobile.loading("show");
		$.ajax({
			url : Application.config.api_url + "getposts?page=" + self.page + "&callback=?",
			dataType : "jsonp",
			timeout : 10000
		}).success(function(data) {
	        $.map(data.posts, function (item) { self.homeposts.push(item) });
			self.pendingposts(data.pendingposts);
	        self.page = self.page + 1;
	        $.mobile.loading("hide");
			$("img[data-role='bgm-list-image']").not(".img-loaded").lazyload({effect : "fadeIn"}).addClass("img-loaded");		
		})
		.error(function() {
			$('<div id="my_toast" data-role="toast">' + Globalize.localize("global_unable_connect", Application.appLanguage()) + '</div>').appendTo($("body")).toast().toast("show");
	        $.mobile.loading("hide");			
		});		
	}

	self.getalldata = function () {
		$.ajax({
			url : Application.config.api_url + "getposts?page=" + self.page + "&callback=?",
			dataType : "jsonp",
			timeout : 10000
		}).success(function(data) {
	        self.homeposts(data.posts);
			self.pendingposts(data.pendingposts);
	        $("div[data-role='content'] ul").listview("refresh");
	        self.contentvisible(true);
	        document.title = Globalize.localize("home_title", Application.appLanguage());			
	        $.mobile.loading("hide");
			$("img[data-role='bgm-list-image']").lazyload({effect : "fadeIn"}).addClass("img-loaded");
		})
		.error(function() {
			$('<div id="my_toast" data-role="toast">' + Globalize.localize("global_unable_connect", Application.appLanguage()) + '</div>').appendTo($("body")).toast().toast("show");
	        $.mobile.loading("hide");			
		});	
	}
        
	self.getalldata();
}
