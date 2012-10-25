function searchViewModel() {

	var self = this;
	self.searchstring = ko.observable(Application.lastsearchfilter);
	self.posts = ko.observableArray();
	self.pendingposts = ko.observable(true);
	self.page = 0;
	self.contentvisible = ko.observable(false);
	self.messages = Globalize.culture(Application.appLanguage()).messages;	

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
		Application.lastsearchfilter = data.searchstring();
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
