# Creational Design Patterns

These patterns address problems related to the creation of objects.

During Object creation, there are two distinct phases:

- Creating an object of a specific type or for a specific purpose: You want to create an object sometime when the application runs but you want to maintain a consistent and easy-to-use way of creating instances of these objects. Every so often you want to control what parameters to use, what category of objects to create, or how to reuse some functionality and clone objects based on existing ones.
- Managing the object life cycle: You want to control how many instances of the object exist and where they are stored. You also want to be able to safely destroy those instances when they are no longer required.

For all of these reasons, you want to determine what patterns are suitable and why. You want to have a single, clear, and reusable mechanism to create objects on demand but delay the implementation details and hardcoded values as much as possible.

By learning how to use creational design patterns, you will acquire the necessary skills to create and manage objects of any kind elegantly and flexibly. By separating the object creation process from its concrete implementation, you get a decoupled system. By using interfaces of analogous methods that describe what kinds of objects you create instead of how, you can supply different implementors at run- time without changing the overall algorithm or conditional logic.

## Singleton Pattern

The term Singleton describes something that has only a single presence in the program.

You use it when you want to get hold of a single object instead of many different ones for several reasons. For example, maybe you want to keep only one instance of a particular class simply because it is either expensive to create or it does not make sense to keep more than one for the lifetime of the program.

Consider the following key observations to help you understand the Singleton pattern:

- Global access point: When you have a Singleton, you essentially have one and only one access point of its instance. That's why a lot of times you find that the Singleton is just another name for global instance.

- The instance is cached somewhere: You cache the instance of the Singleton object somewhere so that you can retrieve it on demand. Typically, you store it within the class instance itself as a static variable, but it can be stored inside an Inversion of Control (IoC) container as well.

- The instance is created on demand: The instance is not created the moment it's declared. Instead, it is created lazily, in a First In First Out (FIFO) fashion. This has the benefit of avoiding expensive initializations when starting applications.

- Unique instance per class: The instance is unique per class in the sense that different classes have their own Singletons.

## When do we use the Singleton?

The Singleton is used to control access to external resources such as database con- nections, API endpoints, or filesystems. This means you don't want to have two or more objects holding references to those resources without some sort of coordina- tion. Failure to avoid that can lead to having race conditions, increased resource utilization, and integrity issues.

Imagine if 100 different objects tried to open and modify the same file or database connection. This would create several issues with the file itself as one object might see different things from another, and if they both try modifying the file, the OS will be relied upon to make the final decision. This is not what you want, so the Singleton pattern emerged to deal with the dangers of such operations.

## Criticisms of the singleton

- Global instance pollution: Much criticism is made because Singletons are used as a global variable and lots of developers dismiss them for good reason. They are problematic to test or to mock, and using global variables means ignoring any flexibility you can get from interfaces or other abstractions. This is altogether valid, so if you decide to use Singletons, they need to be treated as global static objects that perform some very specific and tightly interrelated work.

- Not very testable: Other than testing the singleton principles, if you want to test the behavior of the object, you will need to overcome some restrictions. For example, you want to mock some side effects such as API calls, otherwise you might perform actual API calls in testing, which is not recommended. This is quite risky unless you adopt an advanced mocking framework such as Jest.

- Hard to get right: The singleton is hard to implement, especially if you plan for testability and lazy initialization, and want to use it as a global variable. You need to make sure that the implementation part does not cause any more coupling than is present already. If it manages a state, then this state needs to be properly guarded against concurrent modifications. If multiple parts of the program call an identical method of the Singleton, then they should always work as expected.

Given these points, it is recommended to keep Singletons isolated, usually in the global part of the application, with a set of rules for testing, and utilizing them appropriately.
