function App(document) {
    var self = this;	
	
	self.config = {
		api_url : "http://bgengine.yagoperez.com/api/",
		google_analytics_code : "UA-29286359-2"
	}	
	
	self.appLanguage = function() {
	    if (navigator.language) {
		    return navigator.language.substr(0, 2);
		}
		else if (navigator.userLanguage) {
		    return navigator.userLanguage;
		} 
		else {
		    return "en";
		}		
	}
}
