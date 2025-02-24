

// class Animal {
//     name = 'animal name';
//     color = 'black';

//     show() {
//         console.log("name: ", this.name , " color: ", this.color);
//     }
// }
// const cat = new Animal();
// console.log(cat.name);
// cat.show();


class Animal {
    name;
    color;
    constructor(petName, petColor) {
        this.name = petName;
        this.color = petColor;
    }
    showInfo() {
        console.log(`My son name is ${this.name} and my son's color is ${this.color}`);
    }

}

const cat = new Animal();
console.log(cat.name, cat.color);
cat.showInfo();