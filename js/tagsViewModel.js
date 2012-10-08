function tagsViewModel() {

    var self = this;

    self.tags = ko.observableArray();
	self.contentvisible = ko.observable(false);
	self.messages = Globalize.culture(navigator.language.substr(0,2)).messages;

	self.getalldata = function () {
	    $.getJSON(Application.config.api_url + "gettags?callback=?", function (tags) {
	        self.tags(tags);
	        $("div[data-role='content'] ul").listview("refresh");
	        self.contentvisible(true);	        	        
	        $.mobile.loading("hide");			
	    });
	}
	
	self.getalldata();
}
