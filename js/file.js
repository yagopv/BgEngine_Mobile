document.addEventListener("deviceready", onDeviceReady, false);

// PhoneGap is ready
function onDeviceReady() {
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
}

//xml file is in sdcard/config/config.xml
function gotFS(fileSystem) {
    fileSystem.root.getFile("config/app_config.xml", { create: true }, gotFileEntry, fail);
}

function gotFileEntry(fileEntry) {
    fileEntry.file(gotFile, fail);
}

function gotFile(file) {
    readAsText(file);
}

function readAsText(file) {
    var reader = new FileReader();
    reader.onloadend = function (evt) {
        console.log("Read as text");
        var xml = evt.target.result;
        fileObject = xml;
        ParseXmlCat(xml);
    };
    reader.readAsText(file);
}

//function to parse xml and create a li tag using the parsed values and append that to Ul tag 
function ParseXmlCat(xmlcat)
{
    $(xmlcat).find("category").each(function(){
        var name = $(this).attr("name");
        var displayName = $(this).attr("displayName");
        console.log(name);
        var litext = "<li class='licat'><a href='video.html' id='"+name+"'>"+displayName+"</a></li>";
        console.log(litext);
        $("#category").append(litext);
    });
    $('ul').listview('refresh');    
}

//if fail occurs at any point alert is displayed on phone device
function fail(evt) {
    alert("configuration Error" + evt.target.error.code);
    console.log(evt.target.error.code);
}
