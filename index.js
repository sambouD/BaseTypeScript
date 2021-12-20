var num1 = 24;
var num2;
var numOrString;
// Tableau
var arr = ["chien", "chat", "poisson"];
var tableau = [];
var zidane = {
    id: 0,
    name: "Zidane",
    jersey: 10
};
// Les classes
var Singer = /** @class */ (function () {
    function Singer(id, name, alive) {
        this.id = id;
        this.name = name;
        this.alive = alive;
    }
    return Singer;
}());
var prince = new Singer(0, 'Prince');
// Les fonctions
var sayMyName = function (name) {
    // console.log(`Bonjour : ${name}`);
};
//   sayMyName('BG');
var ageDuCapitaine = function (age, size) {
    if (size) {
        // console.log(`La taille du capitaine est de ${size}cm et il est agé de: ${age}`);
    }
    else {
        // console.log(`Le capitaine est agé de : ${age} ans`);
    }
};
ageDuCapitaine(18, 198);
// Enum & Tuple
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["PREMIEUM"] = 1] = "PREMIEUM";
    Role[Role["BASIC"] = 2] = "BASIC";
})(Role || (Role = {}));
console.log(Role.ADMIN);
console.log(Role.PREMIEUM);
var user1 = {
    name: "Julien",
    attributes: [42, 'author'],
    role: Role.BASIC
};
if (user1.role == Role.ADMIN || user1.role == Role.PREMIEUM) {
    console.log("Connection administraction");
}
else {
    console.log("Vous, pouvez pas vous connecter en tant que ADMIN OU PREMIEUM... \n Veuillez vous connecter en tant que BASIC");
}
