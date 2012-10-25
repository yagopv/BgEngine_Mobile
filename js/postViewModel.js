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
		$.getJSON(Application.config.api_url + "getpost?postid=" + $.mobile.pageData.postid + "&callback=?", function (post) {
			self.post(post);			
			self.postcomments(post.comments);
			self.contentvisible(true);	  
			$.mobile.loading("hide");			
		});
	}        
	
	self.getalldata();
}
