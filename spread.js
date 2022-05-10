const users=['Hossen','Ali','Shahin'];
const newUser=['Rabby','Howlader'];

const copiedArray=[...users];//coping array
users.push(...newUser);//pusing a aaray into an old array
const allusers=[...users,...newUser]; //add arrays into a new array
const withStaticUser=[...users,"Alex",...newUser]; //add arrays into a new array
const copyArray=[users,...newUser]; //copy array directly into a new array


console.log("In new Array",allusers);
console.log("Copy direct Array",copyArray);
 console.log(users);
