/*Map-1 -- mapShare
Modify and return the given map as follows: if the key "a" has a value, set the key "b" to have that same value. In all cases remove the key "c", leaving the rest of the map unchanged.

Examples

Note that the Map syntax for the example runs and output has been simplified for user readability, but would not actually create a Map() properly.

mapShare({'a': 'aaa', 'b': 'bbb', 'c': 'ccc'}) → {'a': 'aaa', 'b': 'aaa'}
mapShare({'b': 'xyz', 'c': 'ccc'}) → {'b': 'xyz'}
mapShare({'a': 'aaa', 'c': 'meh', 'd': 'hi'}) → {'a': 'aaa', 'd': 'hi', 'b': 'aaa'}*/

function mapShare(s){
  if (s.has('a')) {
        s.set('b', s.get('a'));
        s.delete('c');
    } else {
        s.delete('c'); 
    }
    return s;
}

//Alternately

function mapShare(s){
  return s.delete('c') 
            ? s.set('b', s.has('a') ? s.get('a') 
            : s.get('b')) : s;
}
