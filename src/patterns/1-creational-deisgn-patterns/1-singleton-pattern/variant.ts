/*
    One obvious limitation of this pattern is that you cannot pass on initialization parameters 
    when you first instantiate the object. This is because if you think about it for a minute, 
    you may realize that if you were allowed to do that, then you would need to create different objects
     every time. Suppose you wanted to pass on a URL path parameter for the UsersAPISingleton class:

    UsersAPISingleton.getInstance('/v1/users').getUsers();
    UsersAPISingleton.getInstance('/v2/users').getUsers();

    This would lead to the creation of two different objects as each parameter would create a new 
    unique object. However, this by definition is not a Singleton.

    One proposal here is to use what we call the parametric Singleton pattern, 
    where instead of keeping a sole instance for the Singleton, you keep multiple ones cached 
    by a key. You want to generate a unique key based on the parameters sup- plied in the getInstance method.
    Therefore, when passing two different parameters it should return a different object, 
    and passing the same one will return the same object
 */

export class ParametricSingleton {
    private param: string;
    private static instances: Map<string, ParametricSingleton>;

    private constructor(param: string) {
        this.param = param;
    }

    public static getInstance(param: string) {
        if(!ParametricSingleton.instances) {
            ParametricSingleton.instances = new Map<string, ParametricSingleton>();
        }
        if(!ParametricSingleton.instances.has(param)) {
            ParametricSingleton.instances.set(param, new ParametricSingleton(param));
        }
        return ParametricSingleton.instances.get(param);
    }
}