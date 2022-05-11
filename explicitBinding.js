const person={

    
    fullName:function(first,last){
        console.log(this.firstName + " "+this.lastName+ " "+first+" "+last);
    }
}
const names={
    firstName:"Hossen",
    lastName:"Ali",
}

//binding names object with person object..............
person.fullName.call(names,"hi", "there"); 
person.fullName.apply(names, ["hi", "there"]); //apply() takes value with a array


person.fullName.bind(names)("Hey","champ");// it returs a function like below code......
// const myNames=person.fullName.bind(names);
// myNames("Hey","champ");