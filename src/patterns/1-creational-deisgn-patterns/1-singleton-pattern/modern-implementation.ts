/*
    Instead of creating your own Singleton implementation and having the class caching this instance, 
    you can leverage the module system loading mechanism. 
*/

// In our example, you simply create a class:
class ApiServiceSingleton {}

// And then you export a default instance variable:
// This will leverage the Node.js module system to export a 
// default variable pointing to an instance of ApiServiceSingleton.
export default new ApiServiceSingleton();