# What is BgEngine Mobile

This is a jquery mobile application using [BgEngine](https://github.com/yagopv/BgEngine) as its api server.

# Getting started

1. Fork or download BgEngine/BgEngine_Azure and start it in Visual Studio
2. Fork or download BgEngine_Mobile and edit <code>js/bgm.app.js</code>. Change the api url to the BgEngine <code>localhost:port/api/</code> url
3. Open <code>index.html</code> in a browser and you are ready

# BgEngine Mobile and phonegap build

You can build the BgEngine Mobile code with [phonegap build](http://build.phonegap.com) 

1. Register with phonegap build
2. Create an app
3. Upload <code>css/*</code>, <code>js/*</code>, <code>views/*</code>, <code>index.html</code>, <code>splash.jpg</code>, <code>icon.png</code> and <code>config.xml</code> in a zip file or
   Fork this repository and link it in phonegap build
   
If you want to download and test the app in your device you can do it [here](https://build.phonegap.com/apps/227435/share)

Once the app is built, you can take the output code and install it in Android, iOS, Windows Phone, ...

# Configuring Google Analytics

It is posible to configure the application in order to work with Google Analytics.
You have to change in <code>js/bg.app.js</code> the <code>google_analytics_code</code> for your own one and you are done









