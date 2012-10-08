function categoriesViewModel() {

    var self = this;

    self.categories = ko.observableArray();
	self.contentvisible = ko.observable(false);
	self.messages = Globalize.culture(navigator.language.substr(0,2)).messages;

	self.getalldata = function () {
	    $.getJSON(Application.config.api_url + "getcategories?callback=?", function (categories) {
	        self.categories(categories);
	        $("div[data-role='content'] ul").listview("refresh");
	        self.contentvisible(true);	        
	        //document.title = Globalize.localize("home_title", navigator.language.substr(0, 2));
	        $.mobile.loading("hide");			
	    });
	}
        
	self.getalldata();
}
