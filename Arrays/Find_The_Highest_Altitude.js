// Title:
// 1732. Find the Highest Altitude

// Description:
// You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.
// For each index i, names[i] and heights[i] denote the name and height of the ith person.
// Return names sorted in descending order by the people's heights.

// Case 1
// Input: gain = [-5,1,5,0,-7]
// Output: 1
// Explanation: The altitudes are [0,-5,-4,1,1,-6]. The highest is 1.

// Case 2
// Input: gain = [-4,-3,-2,-1,4,3,2]
// Output: 0
// Explanation: The altitudes are [0,-4,-7,-9,-10,-6,-3,-1]. The highest is 0.

var largestAltitude = function(gain) {
    rest = [0];
    for (i=0 ; i<gain.length ; i++){
        rest.push(rest[i]+gain[i])
    }
    return Math.max(...rest)
};

//Runtime           Memory
//59%               41%