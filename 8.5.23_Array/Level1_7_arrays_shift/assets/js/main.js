let person = ["Bruce", "Wayne", "Superreich"]
let friends = ["Farid", "Christian", "Sergio"]
let favoriteFood = ["Burger", "Sushi", "Mais-Käsebällchen"]


let unshiftPerson = person.unshift("Batman", "Gothamcity");
console.log(unshiftPerson);
console.log(person);
// + Batman, + Gothamcity


let unshiftFriends = friends.unshift("Julia", "Lea");
console.log(unshiftFriends);
console.log(friends);
// + Julia, + Lea


let unshiftFavoriteFood = favoriteFood.unshift("Leberkäse", "Spinat");
console.log(unshiftFavoriteFood);
console.log(favoriteFood);
// + Leberkäse, + Spinat