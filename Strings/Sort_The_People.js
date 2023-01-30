// Title:
// 2418. Sort the People

// Description:
// You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.
// For each index i, names[i] and heights[i] denote the name and height of the ith person.
// Return names sorted in descending order by the people's heights.

// Case 1
// Input: names = ["Mary","John","Emma"], heights = [180,165,170]
// Output: ["Mary","Emma","John"]
// Explanation: Mary is the tallest, followed by Emma and John.

// Case 2
// Input: names = ["Alice","Bob","Bob"], heights = [155,185,150]
// Output: ["Bob","Alice","Bob"]
// Explanation: The first Bob is the tallest, followed by Alice and the second Bob.

var sortPeople = function (names, heights) {
  const arr = [];
  const userInfo = names.map((e, i) => {
    return { names: e, age: heights[i] };
  });
  userInfo?.sort((a, b) => (a.age > b.age ? -1 : 1));
  for (let i = 0; i < userInfo.length; i++) {
    arr.push(userInfo[i].names);
  }
  return arr;
};

//Runtime           Memory
//58%               68%
