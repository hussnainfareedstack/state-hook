# React Hooks - Introduction
<a href="https://youtu.be/cF2lQ_gZeA8?si=ixPVrq-_UYrOd-hA" target="_blank">Video Explanation</a></br> 

<img src="Images/44-1 Hooks Pre-requirements.png">
<img src="Images/44-1 - What are Hooks.png" >
<img src="Images/44-1 - Why Hooks Reason 1.png">
<img src="Images/44-1 - Why Hooks Reason 2.png">
<img src="Images/44-1 - Why Hooks Reason 3.png">
<img src="Images/44-1 - Hooks - Noteworthy Points.png">
<img src="Images/44-1 - Hooks - Summery.png">

# React Hooks 
# useState Hook
<a href="https://youtu.be/lAW1Jmmr9hc?si=6x_vKrKwkWvywzOC" target="_blank">Video Explanation</a></br> 

Before Hooks addition in react, if we want to use state within a functional component then we need it to convert into class component because states only be created and used in class component. 
Now After Hooks addition in react we are able to use states in functional component.

For demonstration let's create state in class component and in functional component via react useState. 

A Hook is a special function that let you Hook into the react features so 'use state' is a hook that let you add react state to functional component.

So to use state just import named useState from react, as Hooks are functions so useState takes a parameter as initial value and returns a current value and a method to set that value. we can destructure array and get these two from useState().

### Roles of Hooks
<img src="Images/45-2 useState -  Hook Rules.png">

* See files ClassCounter.js, FuncCounter.js.


## useState with previous state
<a href="https://youtu.be/d0plTCQgsXs?si=HcEmyD087SgGF8vy" target="_blank">Video Explanation</a></br></br>
Anytime if you see that your value relies on previous value always pass a arrow function with parameter as previousValue in set method


## useState with object
<a href="https://youtu.be/-3lL8oyev9w?si=z9Et7MYjF3jr6Sfb" target="_blank">Video Explanation</a></br>

A state variable can be a string, number, boolean, object or even any array.
When updating an object single value in set method, automatic merge is not avaible in useState and that's the key difference between class state and Hook State. However we can do manual merge by spreading ...object first and then overrite the desired property.

* The Setter function provided by useState Hook does not automatically merge or update object.


## useState with array
<a href="https://youtu.be/RZ5wKYbOM_I?si=_hjYxy3eFn7zFoZ1" target="_blank">Video Explanation</a></br>

Same as Object, just make sure that when calling setter function spread the previous items first.
<img src="Images/48-6 - useState Summery.png">



# useEffect Hook
<a href="https://youtu.be/06Y6aJzTmXY?si=UOcz4MFgRZyvp9kt" target="_blank">Video Explanation</a></br>

<img src="Images/49-6 - useEffect Hook.png">
<img src="Images/49-6 - useEffect Hook repeating code.png">
<img src="Images/49-6 - useEffect Hook related code in different lifecycles.png">
<img src="Images/49-6 - useEffect Hook Combine the side effects.png">







