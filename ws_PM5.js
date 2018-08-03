var qthis;

Qualtrics.SurveyEngine.addOnload(function()
{
	/*Place Your Javascript Below This Line*/
	
	//Possible_Condition
	
	var gameAreaEl = document.getElementById('ws-area');

     var thesesettings = {
      'directions': ['W', 'N', 'WN', 'EN'],
      'gridSize': 10,
      'words': [
	     'cocktail',
		'dusk',
		'sunset',
		'supper',
		'twilight'
	  ],
      'debug': false,
	  'condition' : 5,
	  'same' : true,
	  'test' : false
    }
	
	
      var listlength = thesesettings.words.length;
	
	 
	  
      var gameobj = gameAreaEl.wordSeach(thesesettings);

	
      // Put words into `.ws-words`
      var wordsnow = thesesettings.words,
      wordsWrap = document.querySelector('.ws-words');
	  var count=0;
      for (i in wordsnow) {
		  if (count < listlength) {
        var liEl = document.createElement('li');
	    liEl.setAttribute('id', wordsnow[i]);
        liEl.setAttribute('class', 'ws-word');
	    liEl.setAttribute("text-decoration", "none");
        liEl.innerHTML = wordsnow[i];
        wordsWrap.appendChild(liEl);
		  }
		  count = count + 1;
      }
	
     qthis = this;    					
	 var myVar = setInterval(function(){tfunction()}, 500); 
						
	//var UpdateScore = setInterval (function {tfunction()), 1000);    //save counter back to qualtrics

});
	

	function tfunction() {
		Qualtrics.SurveyEngine.setEmbeddedData('Word_Search_Score', document.getElementById("score").innerHTML.replace("Found ", "").replace(" out of 1 words so far.", ""));
        
		var cscore = document.getElementById("score").innerHTML;

		if (cscore.indexOf("Found 10") > -1) {
			  
			  qthis.clickNextButton();
		}
     		
	}