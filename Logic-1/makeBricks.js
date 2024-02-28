/*Logic-2 -- makeBricks
We want to make a row of bricks that is goal inches long. We have a number of small bricks (1 inch each) and big bricks (5 inches each). Return true if it is possible to make the goal by choosing from the given bricks. This is a little harder than it looks and can be done without any loops. See also: Introduction to MakeBricks

Examples

makeBricks(3, 1, 8) → true
makeBricks(3, 1, 9) → false
makeBricks(3, 2, 10) → true*/

function makeBricks(small, big, goal){
  // Calculate the total length of all bricks
    const sum = small + big * 5;
    
    // Check if the total length is sufficient
    if (sum >= goal) {
        // Calculate the minimum number of small bricks needed
        const smallCount = goal % 5;
        return smallCount <= small;
    }
    
    return false;
}
