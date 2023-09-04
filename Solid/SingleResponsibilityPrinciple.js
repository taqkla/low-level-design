/* Clean Code: S.O.L.I.D. */

// **Single Responsibility Principle**

// Definition: A class should have one and only one reason to change, meaning that a class should have only one job.

// Example: Imagine a restaurant where the chef also serves as the waiter, cashier, and dishwasher.While it's possible for one person to do all these tasks, it's inefficient and prone to errors.In an ideal restaurant, each person has a specific role: the chef cooks, the waiter serves, and the cashier handles payments.Each person has a single responsibility, making the whole operation more efficient and manageable.

//Bad

class UserSettings {
  constructor(user) {
    this.user = user;
  }

  changeSettings(settings) {
    if (this.verifyCredentials()) {
      // ...
    }
  }

  verifyCredentials() {
    // ...
  }
}

//Good

class UserAuth {
  constructor(user) {
    this.user = user;
  }

  verifyCredentials() {
    // ...
  }
}


class UserSettings {
  constructor(user) {
    this.user = user;
    this.auth = new UserAuth(user);
  }

  changeSettings(settings) {
    if (this.auth.verifyCredentials()) {
      // ...
    }
  }
}






