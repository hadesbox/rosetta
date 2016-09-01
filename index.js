require("sdk/tabs").on("ready", logURL);

function logURL(tab) {
    url = tab.url
    is_ssl = false
    if(tab.url.substring(0,7) == "http://"){
        url = tab.url.substring(7)
    }
    else if(tab.url.substring(0,8) == "https://"){
        url = tab.url.substring(8)
        is_ssl = true
    }
    parts = url.split("/")
    domains = parts[0].split(".")
    if(domains[domains.length-1].startsWith("internal") && domains[domains.length-2] == "compute"){
        ip_parts = domains[0].split("-")
        ip_parts.shift();
        ip_address = ip_parts.join(".")
        if(domains[domains.length-1].indexOf(":")==-1){
	        full_address = (is_ssl ? 'https://' : 'http://') + ip_address +':8088'
        }
        else {
        	port = domains[domains.length-1].split(":")[1]
      		full_address = (is_ssl ? 'https://' : 'http://') + ip_address + ':' + port
        }
        parts.shift()
        full_address += '/'+parts.join("/")
        require("sdk/tabs").activeTab.attach({
          contentScript: 'document.location = "'+full_address+'";'
      });        
    }
}