const person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const person1 = {
    firstName: "Mary",
    lastName: "Doe"
  }
  
  // This will return "Mary Doe":

  person.fullName.apply(person1);

  const personTwo = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  
  const person2 = {
    firstName:"masum",
    lastName: "Doe"
  }
  
  personTwo.fullName.apply(person2, ["Oslo", "Norway"]);

//   Compared with the call() method:
const person_three = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  
  const person3 = {
    firstName:"John",
    lastName: "Doe"
  }
  
  person_three.fullName.call(person3, "Oslo", "Norway");