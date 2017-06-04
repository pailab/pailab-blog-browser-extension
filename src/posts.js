var req = new XMLHttpRequest();
req.open(
  "GET",
  "http://blog.pailab.net/feed.xml",
  true
);

function showArticles() {
  var articles = req.responseXML.getElementsByTagName("item"), i, atag, linkURL, div;
  div = document.createElement('div');
  for (i = 0; i < 5; i++) {
    atag = document.createElement("a");
    linkURL = articles[i].getElementsByTagName("link").item(0).firstChild.nodeValue;
    atag.href = linkURL;
    atag.target = "_blank";
    atag.appendChild(articles[i].getElementsByTagName("title").item(0));
    div.appendChild(atag);
  }
  document.body.appendChild(div);
}
req.onload = showArticles;
req.send(null);
