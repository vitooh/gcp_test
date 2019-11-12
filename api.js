var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var getAll =  (req, res) => {
        result = ""
        for (var i = 0; i < 2000; i++) {
                result = result + i + "   :   "  + httpGet("http://api.snooker.org/?e="+i)
                result = result + "\n" 
        }
        res.send(result)
}
function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    console.log(xmlHttp.responseText);
    return xmlHttp.responseText;
}
module.exports = { getAll }
