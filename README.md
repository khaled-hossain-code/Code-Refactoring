# Code-Refactoring

![](bad-smells.png)

## Duplicated Code
- copying and pasting same code whenever need.
- copy a bulk chunk and edit a small portion of it.

## Long Methods
### problem:
- methods that do more than one thing. these kind of methods might become more than 8 to 10 lines
### solution:
- split them up into small methods

## Complex Conditional Statements
### problem:
- nested ternary operation
- nested if else
- making comparison with magic numbers like 1, 10, 20
- too many parenthesis, &&, || so that to understand the logic takes more than 1min of time.
### solution:
- try to avoid them by rethinking the condition
- try to avoid by calling a function with meaningful name

## Primitive Obsession
### problem:
- without using object we use decimal, string, array to solve our problem.
### solution:
- try to think as entity and create a class, encapsulate it behavior into it. 

## Indecent Exposure
### problem:
- exposing methods which is not needed. making very complex for client to understand which method should be used
### solution:
- encapsulate methods
- may expose one single method which does combining multiple methods under the hood.

## Solution Sprawl
### problem:
- when code and/or data used to perform a single responsibility becomes sprawled across numerous classes. it occurs when we add features quickly without spending enough time to simplify and consolidate the design
### solution:
- combine all those responsibility into one class 

## Alternative Classes with Different Interfaces
### problem:
- when similar classes have different interfaces. 
### solution:
- its better to combine those interfaces into one.

## Lazy Classes
### problem:
- these classes doesn't do much on their own. just used for small helping methods
### solution:
- remove the class and take those method inside the class which uses it.

## Large Classes
### problem:
- this occurs when we move too much lazy classes into one class.
- this can also occur when we use instances of that class over and over again in different places for different purposes.
### solution:
- a class should have a single reason to change. that indicate a class should be small which can perform single responsibility

## Switch Statements
### problem:
- if these are used for the sake of different type problem.
### solution:
- we should replace them with an object by polymorphic solution

## Combinatorial Explosions
### problem:
- it happens when we create lots of methods to do one thing. like creating methods for each database query.
### solution:
- instead of that we can create a single method which handle numerous query.

## Oddball Solutions
### problem:
 - when we solve same problem in different ways.
### solution:
 - only keep the one which is the best considering the constrains and remove others

## Techniques
### Creation Method
- replace constructor with different descriptive named creation methods. Its advantage is that we don't need to call new.