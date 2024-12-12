
let user = {
    name: "Elmin",
    age: 25, 

    setAge(newAge) {
        if (newAge > 0) {
            this.age = newAge;
        }
    },

    getYearsBeforeRetirement() {
        let retirementAge = 65;
        if (this.age >= retirementAge) {
            return 0;
        }
        return retirementAge - this.age;
    }
};


console.log(user.age);

user.setAge(50)
console.log(user.age);

const yearsLeft = user.getYearsBeforeRetirement();
console.log(yearsLeft);
