function tagsViewModel() {

    var self = this;

    self.tags = ko.observableArray();
	self.contentvisible = ko.observable(false);
	self.messages = Globalize.culture(Application.appLanguage()).messages;

	self.getalldata = function () {
		$.ajax({
			url : Application.config.api_url + "gettags?callback=?",
			dataType : "jsonp",
			timeout : Application.config.timeout
		}).success(function(tags) {
	        self.tags(tags);
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
