/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  let friendsList = document.createElement('ul');
  for (friend of friends) {
    friendsList.appendChild(document.createElement('li'));
    friendsList.lastChild.innerText = friend.firstName;
  }
  console.log(friendsList);
  return friendsList;
}
