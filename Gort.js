var gort = function() {
    
    function assert(condition, message) {
        if (!condition) {
            throw message || "Assertion failed.";
        }
    }
    
    function shuffleArray(array) {
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
    
    function findElem(selector) {
        return document.querySelector(selector);
    }
    
    function makeElem(elem) {
        var e = document.createElement(elem);
        return e;
    }
    
    function setAttr(elem, attr, val) {
        elem.setAttribute(attr, val);
        return elem;
    }
    
    function addChild(father, child) {
        father.appendChild(child);
    }
    
    return {
        assert: assert,
        shuffle: shuffleArray,
        find: findElem,
        set: setAttr,
        add: addChild,
    }
}