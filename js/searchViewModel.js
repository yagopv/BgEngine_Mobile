function searchViewModel() {

	var self = this;
	self.searchstring = ko.observable();
	self.posts = ko.observableArray();
	self.pendingposts = ko.observable(true);
	self.page = 0;
	self.contentvisible = ko.observable(false);
	self.messages = Globalize.culture(navigator.language.substr(0,2)).messages;	

	self.loadmore =  function(data, event) {		
		self.page = self.page + 1;
	    $.mobile.loading("show");
	    $.getJSON(Application.config.api_url + "searchposts?searchstring="  + data.searchstring() + "&page="  + self.page + "&callback=?", function (data) {
	        $.map(data.posts, function (item) { self.posts.push(item) });	        
			self.pendingposts(data.pendingposts);
	        $.mobile.loading("hide");
	    });	
	}
		
	self.searchposts =  function(data, event) {		
		$.mobile.loading("show");			
	    $.getJSON(Application.config.api_url + "searchposts?searchstring="  + data.searchstring() + "&page="  + self.page + "&callback=?", function (data) {
	        self.posts(data.posts);
	        $("div[data-role='content'] ul").listview("refresh");	    
			self.pendingposts(data.pendingposts);			
	        $.mobile.loading("hide");			
			self.page = 0;
	    });	
	}
	
	self.initialize = function () {      
	    self.contentvisible(true);	        	        
	    $.mobile.loading("hide");				
	}        
	
	self.initialize();
}
