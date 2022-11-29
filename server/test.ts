

interface Person {
    name: string;
    age: number;
  }
   
  function greet(person: Person):string {
    return "Hello " + person.name;
  }


    const user:Person = { name: "Jane User", age: 20 };

    console.log(user,greet({name:"test",age:20}));