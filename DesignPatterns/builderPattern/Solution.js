class Address {
    constructor(zip, street) {
        this.zip = zip;
        this.street = street;
    }
}

class UserBuilder {
    constructor(name) {
        this.user = new User(name);
    }

    setAge(age) {
        this.user.age = age;
        return this;
    }
    setPhone(phone) {
        this.user.phone = phone;
        return this;
    }
    setAddress() {
        this.user.address = address;
        return this;
    }

    build() {
        return this.user;
    }
}

const user = new UserBuilder("Bob").setAge(18).setAddress(new Address("223411", "Netaji Marg!")).build();
console.log(user);
