/*Map-1 -- mapAB3
Modify and return the given map as follows: if exactly one of the keys "a" or "b" has a value in the map (but not both), set the other to have that same value in the map.

Examples

Note that the Map syntax for the example runs and output has been simplified for user readability, but would not actually create a Map() properly.

mapAB3({'a': 'aaa', 'c': 'cake'}) → {'a': 'aaa', 'c': 'cake', 'b': 'aaa'}
mapAB3({'b': 'bbb', 'c': 'cake'}) → {'b': 'bbb', 'c': 'cake', 'a': 'bbb'}
mapAB3({'a': 'aaa', 'b': 'bbb', 'c': 'cake'}) → {'a': 'aaa', 'b': 'bbb', 'c': 'cake'}*/

//Option 1

function mapAB3(s){
       if (s.has('a') && !s.has('b')) {
        s.set("b", s.get("a"));
          } else if (!s.has('a') && s.has('b')) {
              s.set("a", s.get("b"));
          }

    return s;
  }

//Option 2: With ternay.

function mapAB3(s){
  return (s.has("a") && !s.has("b")) 
      ? (s.set("b", s.get("a")), s) 
      : (s.has("b") && !s.has("a")) 
      ? (s.set("a", s.get("b")), s) 
      : s;
}
