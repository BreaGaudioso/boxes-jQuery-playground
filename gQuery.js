(function() {
  window.gQuery = gQuery;
  window.$ = window.gQuery;


  function gQueryCtor (selector, elements){
  	this.selector = selector;
  	this.elements = elements;
  }
  // style[property]

	gQueryCtor.prototype.css = function (property, value){
  	var styler = window.getComputedStyle(this.elements[0]).getPropertyValue(property)
  		if (value === undefined){
  			return styler;
  		} else {
  			this.elements[0].style[property] = value;
  		}
  }



	gQueryCtor.prototype.html = function (htmlString){
  	if (htmlString === undefined){
      return this.elements[0].innerHTML;
  	}	else {
  		this.elements[0].innerHTML = htmlString;
  	}
  }





  function gQuery(peram){
 
  	if(typeof peram == 'string'){
  	 return newCtor = new gQueryCtor(peram, document.querySelectorAll(peram));
  	} else if ( peram instanceof HTMLElement){
  		return newCtor = new gQueryCtor('', [peram]);
  	} else if ( peram instanceof NodeList){
  		return newCtor = new gQueryCtor('', peram)
  	} else {
  			return newCtor = undefined;
  	}


  }


})();

//strings, htmlelements, nodeList


var elt = document.getElementById('html');
