function searchViewModel() {

	var self = this;
	self.searchstring = ko.observable();
	self.posts = ko.observableArray();
	self.page = 1;
	self.contentvisible = ko.observable(false);
	self.messages = Globalize.culture(navigator.language.substr(0,2)).messages;	

	self.loadmore =  function(data, event) {		
		self.page = self.page + 1;
	    $.mobile.loading("show");
	    $.getJSON(Application.config.api_url + "searchposts?searchstring="  + data.searchstring() + "&page="  + self.page + "&callback=?", function (posts) {
	        $.map(posts, function (item) { self.posts.push(item) });	        
	        $.mobile.loading("hide");
	    });	
	}
		
	self.searchposts =  function(data, event) {		
		$.mobile.loading("show");			
	    $.getJSON(Application.config.api_url + "searchposts?searchstring="  + data.searchstring() + "&page="  + self.page + "&callback=?", function (posts) {
	        self.posts(posts);
	        $("div[data-role='content'] ul").listview("refresh");	        	        
	        $.mobile.loading("hide");			
			self.page = 1;
	    });	
	}
	
	self.initialize = function () {      
	    self.contentvisible(true);	        	        
	    $.mobile.loading("hide");				
	}        
	
	self.initialize();
}
