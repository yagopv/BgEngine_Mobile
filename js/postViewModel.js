function postViewModel() {

	var self = this;

	self.post = ko.observable();
	self.postcomments = ko.observableArray();
	self.contentvisible = ko.observable(false);	
	self.messages = Globalize.culture(Application.appLanguage()).messages;
	
	if ($.mobile.pageData.postid == undefined) {
		$.mobile.pageData = $.url(document.location.href).param();
	}

	self.getalldata = function () {      
		$.ajax({
			url : Application.config.api_url + "getpost?postid=" + $.mobile.pageData.postid + "&callback=?",
			dataType : "jsonp",
			timeout : 10000
		}).success(function(post) {
			self.post(post);			
			self.postcomments(post.comments);
			self.contentvisible(true);	  
			$.mobile.loading("hide");				
		}).error(function() {
			$('<div id="my_toast" data-role="toast">' + Globalize.localize("global_unable_connect", Application.appLanguage()) + '</div>').appendTo($("body")).toast().toast("show");
	        $.mobile.loading("hide");			
		});			
	}        
	
	self.getalldata();
}
