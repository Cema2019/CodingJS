/*Map-1 -- topping2
Given a map of food keys and their topping values, modify and return the map as follows: if the key "ice cream" has a value, set that as the value for the key "yogurt" also. If the key "spinach" has a value, change that value to "nuts".

Examples

Note that the Map syntax for the example runs and output has been simplified for user readability, but would not actually create a Map() properly.

topping2({'ice cream': 'cherry'}) → {'ice cream': 'cherry', 'yogurt': 'cherry'}
topping2({'spinach': 'dirt', 'ice cream': 'cherry'}) → {'spinach': 'nuts', 'ice cream': 'cherry', 'yogurt': 'cherry'}
topping2({'yogurt': 'salt'}) → {'yogurt': 'salt'}*/

//Option 1

function topping2(s){
   if (s.has("ice cream")) {
         s.set('yogurt', s.get('ice cream');
                    }
   if (s.has('spinach')) {
      s.set('spinach', 'nuts'));
   }
  
  return s;
}

//Option 2

function topping2(s){
  return (
    s.has("ice cream") && s.set("yogurt", s.get("ice cream")),
    s.has("spinach") && s.set("spinach", "nuts"),
    s
);
}
