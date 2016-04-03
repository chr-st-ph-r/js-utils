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