/*Map-1 -- topping1
Given a map of food keys and topping values, modify and return the map as follows: if the key "ice cream" is present, set its value to "cherry". In all cases, set the key "bread" to have the value "butter".

Examples

Note that the Map syntax for the example runs and output has been simplified for user readability, but would not actually create a Map() properly.

topping1({'ice cream': 'peanuts'}) → {'ice cream': 'cherry', 'bread': 'butter'}
topping1({}) → {'bread': 'butter'}
topping1({'pancake': 'syrup'}) → {'pancake': 'syrup', 'bread': 'butter'}*/

function topping1(s){
return (s.has('ice cream')
          ? s.set('ice cream','cherry') :s)
          .set('bread','butter')
}
