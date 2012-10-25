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
	    $.getJSON(Application.config.api_url + "getposts?page=" + self.page + "&callback=?", function (data) {
	        $.map(data.posts, function (item) { self.homeposts.push(item) });
			self.pendingposts(data.pendingposts);
	        self.page = self.page + 1;
	        $.mobile.loading("hide");
	    });
	}

	self.getalldata = function () {
	    $.getJSON(Application.config.api_url + "getposts?callback=?", function (data) {
	        self.homeposts(data.posts);
			self.pendingposts(data.pendingposts);
	        $("div[data-role='content'] ul").listview("refresh");
	        self.contentvisible(true);
	        document.title = Globalize.localize("home_title", Application.appLanguage());
	        $.mobile.loading("hide");
	    });
	}
        
	self.getalldata();
}
