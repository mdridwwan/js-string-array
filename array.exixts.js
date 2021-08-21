function megaFirends(friends) {
    if (Array.isArray(friends) == false) {
        return 'please provide an array'
    }
    let mega = friends[0];
    for (const friend of friends) {
        if (friend.length > mega.length) {
            mega = friend;
        }
    }
    return mega;
}
const friends = ['Ridwan', 'Farhan', 'Rahima', 'salam', 'Salauddin'];
const bigFriends = megaFirends(friends);
// console.log(bigFriends);

if (friends.indexOf('Ridwan') != -1) {
    console.log('lion exixts');
} else if (friends.indexOf('linon') == -1) {
    console.log('lion NAi ry vai');
};

//concat sob gula ry jora dei aksathe..!
const first = [1, 3, 4, 6, 6];
const second = [2, 4, 7, 87, 56];
const combined = first.concat(second);
console.log(combined);