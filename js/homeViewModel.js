function homeViewModel() {

    var self = this;

    self.homeposts = ko.observableArray();
    self.page = 2;
	self.contentvisible = ko.observable(false);
	self.messages = Globalize.culture(navigator.language.substr(0,2)).messages;

	self.loadmore = function () {
	    $.mobile.loading("show");
	    $.getJSON(Application.config.api_url + "getposts?page=" + self.page + "&callback=?", function (posts) {
	        $.map(posts, function (item) { self.homeposts.push(item) });
	        self.page = self.page + 1;
	        $.mobile.loading("hide");
	    });
	}

	self.getalldata = function () {
	    $.getJSON(Application.config.api_url + "getposts?callback=?", function (posts) {
	        self.homeposts(posts);
	        $("div[data-role='content'] ul").listview("refresh");
	        self.contentvisible(true);	        
	        document.title = Globalize.localize("home_title", navigator.language.substr(0, 2));
	        $.mobile.loading("hide");
	    });
	}
        
	self.getalldata();
}
