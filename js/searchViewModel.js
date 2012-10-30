function searchViewModel() {

	var self = this;
	self.searchstring = ko.observable(Application.lastsearchfilter);
	self.posts = ko.observableArray();
	self.pendingposts = ko.observable(true);
	self.page = 1;
	self.contentvisible = ko.observable(false);
	self.messages = Globalize.culture(Application.appLanguage()).messages;	

	self.loadmore =  function(data, event) {		
		self.page = self.page + 1;
	    $.mobile.loading("show");
		$.ajax({
			url : Application.config.api_url + "searchposts?searchstring="  + data.searchstring() + "&page="  + self.page + "&callback=?",
			dataType : "jsonp",
			timeout : 10000
		}).success(function(data) {
	        $.map(data.posts, function (item) { self.posts.push(item) });	        
			self.pendingposts(data.pendingposts);
	        $.mobile.loading("hide");
			$("img[data-role='bgm-list-image']").not(".img-loaded").lazyload({effect : "fadeIn"}).addClass("img-loaded");
		}).error(function() {
			$('<div id="my_toast" data-role="toast">' + Globalize.localize("global_unable_connect", Application.appLanguage()) + '</div>').appendTo($("body")).toast().toast("show");
	        $.mobile.loading("hide");			
		});	
	}
		
	self.searchposts =  function(data, event) {		
		$.mobile.loading("show");			
		if (Application.lastsearchfilter != "" && Application.lastsearchfilter !=  data.searchstring()) {
			self.page = 1;
		}						
		Application.lastsearchfilter = data.searchstring();
		$.ajax({
			url : Application.config.api_url + "searchposts?searchstring="  + data.searchstring() + "&page="  + self.page + "&callback=?",
			dataType : "jsonp",
			timeout : 10000
		}).success(function(data) {
			if (data.posts) {
				self.posts(data.posts);
			}
			else {
				self.posts({});
			}				
	        $("div[data-role='content'] ul").listview("refresh");	    
			self.pendingposts(data.pendingposts);			
	        $.mobile.loading("hide");			
			$("img[data-role='bgm-list-image']").lazyload({effect : "fadeIn"}).addClass("img-loaded");							
			if (Application.lastsearchfilter == "")	{
			    self.page = 1;
			}
		}).error(function() {
			$('<div id="my_toast" data-role="toast">' + Globalize.localize("global_unable_connect", Application.appLanguage()) + '</div>').appendTo($("body")).toast().toast("show");
	        $.mobile.loading("hide");			
		});				
	}
	
	self.initialize = function () {      
	    self.contentvisible(true);	        	        
	    $.mobile.loading("hide");	
	}        
	
	self.initialize();
}
