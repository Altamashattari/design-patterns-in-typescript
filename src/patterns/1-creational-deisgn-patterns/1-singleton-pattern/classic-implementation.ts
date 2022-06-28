export class Singleton {
    /*
        cache the global instance of the Singleton. 
        You want to use a static variable for that as the runtime will ensure 
        only one instance per class is reserved
    */
    // Stores the singleton instance
    private static instance: Singleton;

    // Prevents creation of new instances by making the constructor private
    private constructor() { }

    // Method to retrieve instance
    static getInstance() {
        // create the instance lazily
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}

// Another example

export class UsersAPISingleton {
    private static instance: UsersAPISingleton;
    private constructor() { }

    static getInstance() {
        if (!UsersAPISingleton.instance) {
            UsersAPISingleton.instance = new UsersAPISingleton()
        }
        return UsersAPISingleton.instance;
    }

    getUsers(): Promise<Array<string>> {
        return Promise.resolve(["Alex", "John", "Sarah"]);
    }
}

// usage
const usersPromise = UsersAPISingleton.getInstance().getUsers();
usersPromise.then(console.log);