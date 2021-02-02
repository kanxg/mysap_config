var proxy = "PROXY proxy.sha.sap.corp:8080";



function FindProxyForURL(url, host) {
    ow = [
        ".google.com", ".googlevideo.com",
        ".youtube.com", ".ytimg.com", ".ggpht.com", ".googlesyndication.com", ".youtube-nocookie.com"
        ".facebook.com",
        ".twitter.com", ".twimg.com"
    ];
    for (i = 0; i < ow.length; i++) {
        if (dnsDomainIs(host, ow[i])) {
            return proxy;
        }
    }
	return "DIRECT";
}
