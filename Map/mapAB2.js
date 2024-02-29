/*Map-1 -- mapAB2
Modify and return the given map as follows: if the keys "a" and "b" are both in the map and have equal values, remove them both.

Examples

Note that the Map syntax for the example runs and output has been simplified for user readability, but would not actually create a Map() properly.

mapAB2({'a': 'aaa', 'b': 'aaa', 'c': 'cake'}) → {'c': 'cake'}
mapAB2({'a': 'aaa', 'b': 'bbb'}) → {'a': 'aaa', 'b': 'bbb'}
mapAB2({'a': 'aaa', 'b': 'bbb', 'c': 'aaa'}) → {'a': 'aaa', 'b': 'bbb', 'c': 'aaa'}*/

//Option 1

function mapAB2(foodMap) {
    if (foodMap.has("a") && foodMap.has("b") && foodMap.get("a") === foodMap.get("b")) {
        foodMap.delete("a");
        foodMap.delete("b");
    }
    return foodMap;
}

//Option 2: One-liner with ternary.

function mapAB2(s){
  return s.has('a') && s.has('b') && s.get("a") === s.get("b")
            ? (s.delete('a'), s.delete('b'), s)
            : s;
}
