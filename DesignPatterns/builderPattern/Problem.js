class Address {
    constructor(zip, street) {
        this.zip = zip
        this.street = street
    }
}

class User {
    constructor(name, age, phone, address) {
        this.name = name
        this.age = age
        this.phone = phone
        this.address = address
    }

    
}

const user = new User('Ramesh', undefined, undefined, new Address('12345', 'Netaji Marg!'))

const user2 = new User("Prateek");

console.log(user);
console.log(user2);