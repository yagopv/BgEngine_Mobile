function categoriesViewModel() {

    var self = this;

    self.categories = ko.observableArray();
	self.contentvisible = ko.observable(false);
	self.messages = Globalize.culture(navigator.language.substr(0,2)).messages;

	self.getalldata = function () {
		$.ajax({
			url : Application.config.api_url + "getcategories?callback=?",
			dataType : "jsonp",
			timeout : Application.config.timeout
		}).success(function(categories) {
	        self.categories(categories);
	        $("div[data-role='content'] ul").listview("refresh");
	        self.contentvisible(true);	        	        
	        $.mobile.loading("hide");			
		}).error(function() {
			$('<div id="my_toast" data-role="toast">' + Globalize.localize("global_unable_connect", Application.appLanguage()) + '</div>').appendTo($("body")).toast().toast("show");
	        $.mobile.loading("hide");			
		});			
	}
        
	self.getalldata();
}
