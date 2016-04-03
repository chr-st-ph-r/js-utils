function _(tag, father, id, _class) {
  // Returns a new element and sticks in it the dom!
  var new_elem = document.createElement(tag);
  new_elem.father = father;
  if ( id ) {
    new_elem.id = id;
  };
  if ( _class ) {
  	new_elem.className = _class;
  };
  father.appendChild( new_elem );
  return new_elem;
};

function assert(condition, message) {
	if (!condition) {
		throw message || "Assert failed";
	}
}

function shuffle(array) {
    // http://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array-in-javascript
    var counter = array.length;
    while (counter > 0) {
        var index = Math.floor(Math.random() * counter);

        counter--;

        var temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }  
}