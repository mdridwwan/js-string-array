const numbers = [1, 4, 6, 3, 7, 8, 9, 2, 5];
const sortNumbers = numbers.sort();
// console.log(sortNumbers);ans[1, 2, 3, 4, 5, 6, 7, 8, 9]
const friends = ['Ridwan', 'Anawer', 'Billal', 'Sagor', 'Dipjol', 'Emon', 'Criti']
    // const sortFriend = friends.sort();
    // const sortFriend = friends.reverse();
const sortedReversedfriends = friends.sort().reverse();
console.log(sortedReversedfriends);
// ans: ['Anawer', 'Billal', 'Criti', 'Emon', 'Ridwan', 'dipjol', 'sagor']


// number sorting fun
const bigNumbers = [20, 1, 43, 46, 67, 34, 67, 76, 43, 76, 44, 33, 23];
const bigNumbersSorting = bigNumbers.sort(function(a, b) {
    return a - b;
});
console.log(bigNumbers);