class DataManipulator {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    connectPeopleAndComments(person) {
        const opinionsAndComments = opinions.map((person) => {
            const theSameId = (op) => op.name === person.name;
            const opAndPeople = opinions.find(theSameId);
            Object.assign({}, person, opAndPeople);
            console.log(person.name, person.text); 
        })      
    }

    peopleOver19() {
        const ages = new Date().getFullYear() - this.year;
        const over19 = people.find(person => ages >= 19);
        if (over19) {
            console.log(`Użytkownicy powyżej 19 lat: ${this.name} ma ${ages} lata`);
        }
    }

    peopleUnder19() {
        const ages = new Date().getFullYear() - this.year;
        const under19 = people.find(person => ages <= 19);
        if (under19) {
            console.log(`Użytkownicy poniżej 19 lat:`);
            console.log(`${this.name} ma ${ages} lat`);
        }
    }
}

let people = [
    new DataManipulator('Wes', 1988),
    new DataManipulator('Kait', 1986),
    new DataManipulator('Irv', 1970),
    new DataManipulator('Lux', 2015)
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 }
];

const opinions = [
    { name: 'Wes', year: 1988, text: 'Love this!', id: 523423 },
    { name: 'Kait', year: 1986, text: 'Super good', id: 823423 },
    { name: 'Irv', year: 1970, text: 'You are the best', id: 2039842 },
    { name: 'Lux', year: 2015, text: 'Ramen is my fav food ever', id: 123523 }

];


for (let i = 0; i < people.length; i++) {
    people[i].peopleOver19();
    people[i].peopleUnder19();
   
};
people[0].connectPeopleAndComments(1);