const findTheOldest = function(people) {
    const date = new Date().getFullYear();
    const newPeople = people.map(person => {
        if (person.yearOfDeath) {
            return person;
        } else {
            person.yearOfDeath = date
            return person;
        }
    });
    newPeople.sort((a, b) => (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth));
    return newPeople[0];
};

// Do not edit below this line
module.exports = findTheOldest;
