chrome.extension.sendMessage({}, function(response) {
  var replaceWords = function(query, newElement) {
    var els = document.querySelectorAll(query);
    for ( var i = 0; i < els.length; i++ ) {
      var el = els[i];
      el.innerHTML = el.innerText.replace(/[a-z0-9’]+(\b)/gi, newElement + '$1');
    }
  };

	var readyStateCheckInterval = setInterval(function() {
	  if (document.readyState === "complete") {
		  clearInterval(readyStateCheckInterval);
      
      replaceWords("p.story-body-text", '<img src="https://twemoji.maxcdn.com/36x36/1f4a9.png" />');
      replaceWords('p.comment-text', '<img src="https://twemoji.maxcdn.com/16x16/1f4a9.png" />');
      replaceWords('.caption > span', '<img src="https://twemoji.maxcdn.com/16x16/1f4a9.png" />');      


      
      var images = document.querySelectorAll(".story-body > figure > div.image > img");
      for ( var i = 0; i < images.length; i++ ) {
        var img = images[i];
        img.src = "https://twemoji.maxcdn.com/svg/1f4a9.svg";
      }
      
	  }
  }, 10);
});
