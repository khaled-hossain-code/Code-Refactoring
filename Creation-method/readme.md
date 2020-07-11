## Creation Method
- replace constructor with different descriptive named creation methods. so that we can create multiple object from one class without passing all the arguments to the constructor. we can use some of the default constructor for specific type of object.

# Constructor Chaining
- Suppose we have multiple constructor and all of them take different arguments. so we have to assign same property again and again in different constructor. instead of that we can create a common constructor with all the arguments and other constructor will call the common constructor with their arguments and the common constructor will have some default value for other fields.