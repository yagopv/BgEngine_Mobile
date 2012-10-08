function postsbyViewModel() {

	var self = this;

	self.postsby = ko.observableArray();
	self.page = 1;
	self.contentvisible = ko.observable(false);
	self.messages = Globalize.culture(navigator.language.substr(0, 2)).messages;
	if ($.mobile.pageData.by == undefined) {
		$.mobile.pageData = $.url(document.location.href).param();
	}

	self.collapsibletext = Globalize.localize("postsby_filteredby", navigator.language.substr(0, 2))
						 + $.mobile.pageData.id;

	self.loadmore = function () {
	    $.mobile.loading("show");
		$.mobile.pageData = $.url(document.location.href).param();        
		$.getJSON(Application.config.api_url + "getpostsby?by=" + $.mobile.pageData.by + "&id=" + $.mobile.pageData.id + "&page=" + self.page + "&callback=?", function (posts) {
			$.map(posts, function (item) { self.postsby.push(item) });
			$("div[data-role='content'] ul").listview("refresh");
			self.page = self.page + 1;
			$.mobile.loading("hide");			
		});
	}

	self.getalldata = function () {
	    $.mobile.loading("show");
		$.getJSON(Application.config.api_url + "getpostsby?by=" + $.mobile.pageData.by + "&id=" + $.mobile.pageData.id + "&callback=?", function (posts) {
		    self.postsby(posts);
		    $.mobile.loading("hide");
			$("div[data-role='content'] ul").listview("refresh");
			$("#postsbycollapsible").trigger('expand');
			self.contentvisible(true);
			$.mobile.loading("hide");
		});
	}
    
	self.getalldata();
}
