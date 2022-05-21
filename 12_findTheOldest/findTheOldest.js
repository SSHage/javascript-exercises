const findTheOldest = function(people) {
    const thisYear = new Date().getFullYear();

    return people.reduce((prevPerson, person) =>{
        const age = (person.yearOfDeath || thisYear) -person.yearOfBirth;
        return age > prevPerson.age ? { person, age } : prevPerson;
    }, {person:null, age:0}).person;
}


// Do not edit below this line
module.exports = findTheOldest;
