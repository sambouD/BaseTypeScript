let num1 = 24;

let num2:string;
let numOrString: number | string

// Tableau
let arr = ["chien", "chat", "poisson"];
let tableau: (number | boolean)[] = []
// tableau.push(false);
// tableau.push(24)
// tableau.push('string')

// les objets
interface Player {
    id: number,
    name: string,
    jersey: number
}
let zidane:Player = {
    id: 0,
    name: "Zidane",
    jersey : 10
  };

// Les classes
class Singer {
    id: number;
    name: string;
    alive?: boolean;

constructor(id: number, name: string, alive?: boolean){

    this.id = id;
    this.name = name;
    this.alive = alive;
}
}

const prince = new Singer(0, 'Prince');

// Les fonctions
const sayMyName = (name: string) => {
    // console.log(`Bonjour : ${name}`);
  };
  
//   sayMyName('BG');

const ageDuCapitaine = (age: number | string, size?:number):void => {
    if(size){
        // console.log(`La taille du capitaine est de ${size}cm et il est agé de: ${age}`);
        
    }else
    {
        // console.log(`Le capitaine est agé de : ${age} ans`);
        
    }
}
ageDuCapitaine(18, 198);

// Enum & Tuple

enum Role {ADMIN, PREMIEUM, BASIC}

console.log(Role.ADMIN);
console.log(Role.PREMIEUM);


interface User{
    name: string;
    attributes: [number , string]
    role : Role
}
const user1:User = {
    name: "Julien",
    attributes: [42, 'author'],
    role: Role.BASIC
}
if(user1.role == Role.ADMIN  || user1.role == Role.PREMIEUM){
    console.log("Connection administraction");
    
}
else{
    console.log("Vous, pouvez pas vous connecter en tant que ADMIN OU PREMIEUM... \n Veuillez vous connecter en tant que BASIC");
    
}
