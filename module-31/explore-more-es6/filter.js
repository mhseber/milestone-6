
const numbers = [1, 5, 6, 4, 15];
const players = [75, 65, 67, 72, 55, 59]
// const selected = players.filter(p => p > 70);
// const selected = players.filter(p => p > 80);
// const selected = players.filter(p => p > 20);
const selected = players.filter(p => p % 2 === 1);
// console.log(selected)

const friends = ['tom', 'seber', 'hasan', 'messi', 'ronaldo', 'king']
const oddFriends = friends.filter(friend => friend.length > 6);
console.log(oddFriends)