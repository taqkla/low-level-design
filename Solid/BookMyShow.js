
// 1. Single Responsibility Principle(SRP):

// ** SRP states that a class should have only one reason to change.**

class Movie {
    constructor(title, duration, genre) {
        this.title = title;
        this.duration = duration;
        this.genre = genre;
    }

    // Methods related to movie information (e.g., getters and setters)
}

class Showtime {
    constructor(movie, theater, startTime) {
        this.movie = movie;
        this.theater = theater;
        this.startTime = startTime;
    }

    // Methods related to showtime information (e.g., getters and setters)
}

class Booking {
    constructor(user, showtime, seats) {
        this.user = user;
        this.showtime = showtime;
        this.seats = seats;
    }

    // Methods related to booking and ticket generation
}

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    // Methods related to user information (e.g., getters and setters)
}



// 2. Open / Closed Principle(OCP):

// ** OCP states that software entities(classes, modules, functions) should be open for extension but closed for modification.**


// Original classes
class Booking {
    constructor(user, showtime, seats) {
        this.user = user;
        this.showtime = showtime;
        this.seats = seats;
    }

    generateTicket() {
        // Logic to generate a ticket
    }
}

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    // Methods related to user information
}

// Extension through inheritance
class VIPBooking extends Booking {
    constructor(user, showtime, seats, extras) {
        super(user, showtime, seats);
        this.extras = extras;
    }

    // Override the generateTicket method to add extra information
    generateTicket() {
        // Generate a VIP ticket with extras
    }
}


// 3. Liskov Substitution Principle(LSP):

// ** LSP states that objects of a superclass should be able to be replaced with objects of a subclass without affecting the correctness of the program.**

// In our example, you should be able to use a `VIPBooking` object wherever you use a `Booking` object without causing issues.

function printTicketDetails(booking) {
    // Display ticket details
}

const regularBooking = new Booking(user1, showtime1, seats1);
const vipBooking = new VIPBooking(user2, showtime2, seats2, extras);

printTicketDetails(regularBooking); // Works fine with a regular booking
printTicketDetails(vipBooking);     // Works fine with a VIP booking


// 4. Interface Segregation Principle(ISP):

// ** ISP states that no client should be forced to depend on methods it does not use.**

// Instead of a monolithic interface
class Booking {
    constructor(user, showtime, seats) {
        this.user = user;
        this.showtime = showtime;
        this.seats = seats;
    }

    generateTicket() {
        // Logic to generate a ticket
    }

    cancelBooking() {
        // Logic to cancel a booking
    }
}

// Split into multiple smaller interfaces
class Ticket {
    constructor(user, showtime, seats) {
        this.user = user;
        this.showtime = showtime;
        this.seats = seats;
    }

    generateTicket() {
        // Logic to generate a ticket
    }
}

class Cancellation {
    cancelBooking() {
        // Logic to cancel a booking
    }
}


// By splitting the monolithic `Booking` class into smaller classes, each with a specific responsibility, you avoid forcing clients to depend on methods they don't use.

// 5. Dependency Inversion Principle(DIP):

// ** DIP states that high - level modules should not depend on low - level modules.Both should depend on abstractions.**

// In JavaScript, you can achieve DIP by using dependency injection, which allows you to inject dependencies(e.g. entities, services) into a class instead of creating them directly inside the class.


class BookingService {
    constructor(showtimeService) {
        this.showtimeService = showtimeService;
    }

    bookShowtime(user, movieTitle, theater, startTime, seats) {
        const showtime = this.showtimeService.findShowtime(movieTitle, theater, startTime);
        if (showtime) {
            return new Booking(user, showtime, seats);
        } else {
            return null; // Showtime not found
        }
    }
}

// In this example, the`BookingService` depends on the`showtimeService`, but the `showtimeService` is an abstraction that can be implemented differently(e.g., with a database or an API). This allows for flexibility and adheres to the Dependency Inversion Principle.

