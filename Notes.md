# React Hooks - Introduction
<a href="https://youtu.be/cF2lQ_gZeA8?si=ixPVrq-_UYrOd-hA" target="_blank">Video Explanation</a></br> 

<img src="Images/44-1 Hooks Pre-requirements.png">
<img src="Images/44-1 - What are Hooks.png" >
<img src="Images/44-1 - Why Hooks Reason 1.png">
<img src="Images/44-1 - Why Hooks Reason 2.png">
<img src="Images/44-1 - Why Hooks Reason 3.png">
<img src="Images/44-1 - Hooks - Noteworthy Points.png">
<img src="Images/44-1 - Hooks - Summery.png">


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
Anytime if you see that your value relies on previous value always pass a arrow function with parameter as previousValue in set method.

* See file HookCounterTwo.js


## useState with object
<a href="https://youtu.be/-3lL8oyev9w?si=z9Et7MYjF3jr6Sfb" target="_blank">Video Explanation</a></br>

A state variable can be a string, number, boolean, object or even any array.
When updating an object single value in set method, automatic merge is not avaible in useState and that's the key difference between class state and Hook State. However we can do manual merge by spreading ...object first and then overrite the desired property.
* The Setter function provided by useState Hook does not automatically merge or update object.
* See file HookCounterThree.js


## useState with array
<a href="https://youtu.be/RZ5wKYbOM_I?si=_hjYxy3eFn7zFoZ1" target="_blank">Video Explanation</a></br>

Same as Object, just make sure that when calling setter function spread the previous items first.
* See file HookCounterFour.js
<img src="Images/48-6 - useState Summery.png">



# useEffect Hook
<a href="https://youtu.be/06Y6aJzTmXY?si=UOcz4MFgRZyvp9kt" target="_blank">Video Explanation</a></br>

<img src="Images/49-6 - useEffect Hook.png">
<img src="Images/49-6 - useEffect Hook repeating code.png">
<img src="Images/49-6 - useEffect Hook related code in different lifecycles.png">
<img src="Images/49-6 - useEffect Hook Combine the side effects.png">


# useEffect after render
<a href="https://youtu.be/nAuWOnFMlOw?si=TeP54mghZb7cw5Oh" target="_blank">Video Explanation</a></br>

'useEffect' works in functional component and do the same thing like "componentDidMount, componentDidUpdate, componentWillUnmount" in class component. useEffect accept a function as a parameter and run it after every render or re-render in functional component.

* See files "ClassEffectCounter.js", "HookEffectCounter.js"


# Conditionally run effects
<a href="https://youtu.be/8DYlzVUTC7s?si=tC4cb8MYQcETqvwY" target="_blank">Video Explanation</a></br>

As we know that 'useEffect()' runs after every render, so it sometimes cause performance issue. To fix this we run it conditionaly.
Let first do the same with class component for better understanding then will do with functional component via useEffect Hook.

In class 'componentDidUpdate(prevProps, prevState)' accept the 2 parameters which help us make conditions.
In 'useEffect(func, [])' first parameter is the function and second is array and we can specify here which state or prop to monitor and if it changes between renders only then useEffect run it's first parameter function.

* See files "ClassCondEffectCounter.js", "FuncCondEffectCounter.js"


# Run effects only once
<a href="https://youtu.be/BH4xvzHa7H8?si=8BAZoskOuX307acO" target="_blank">Video Explanation</a></br>

if you want to runf effect only once, just pass 2nd parameter(dependencies) as empty '[]' array. React considers this as no dependencies for re-render so will run only once.

* See files 'ClassMouse.js', 'HookMouse.js'.


# useEffect with cleanup
<a href="https://youtu.be/DTlmk6QeOHY?si=KhURPQqosCGX6kKM" target="_blank">Video Explanation</a></br>

In class component we can perform cleanup task like removing event listeners in componentWillUnmount() method.
But in Functional component useEffect takes a first parameter as function and that function can return a function which will be executed when component will get unmounted.

* See file 'MouseContainer.js'


# useEffect with incorrect dependency
<a href="https://youtu.be/SP-NrbQHFww?si=-9PFzQxE8trOIFqz" target="_blank">Video Explanation</a></br>

If you think dependency array is a way to specify when you want to re-render the effect then you are going to run into the problem instead dependency array should be thought of as a way to let reach know about eveything that the effect must watch for changes

* Note: if you are using any function inside useEffect() and definition of this function outside and you are calling it once via [], then make your that the function you are calling does not have any changing state or props if it is then add that in dependency array.

We see that in class related code is in different lifecycles and unrelated code is in same lifecycle, but useEffect makes possible to write related code togather, to obtain this we can use multiple 'useEffect()'. See below screenshot from react.docs
<img src="Images/54-11 - Multiple useEffects.png" >

* See files 'IntervalClassCounter.js', 'IntervalHookCounter.js'


# Fetching data with useEffect Part 1
<a href="https://youtu.be/bYFYF2GnMy8?si=2nZOX-8tyv7o1z1w" target="_blank">Video Explanation</a></br>

Fetch the data from 'JSON Placeholder API' using axios and show on UI. 
* See file 'DataFetching.js'


# Fetching data with useEffect Part 2 & 3 (Fetch indiviual post)-(Fetch post on button click via useEffect)
<a href="https://youtu.be/1tfd6ANaNRY?si=iKaXNdTJXXvgeNB7" target="_blank">Video Explanation</a></br>

Part2: To fetch individual post set input box id as dependency of useEffect.
Part3: useEffect work on dependencies, if you set id related to button as a dependency of useEffect then it will re-render only when button id change.

* See files 'DataFetchingTwo.js'


# useContext Hook Part 1 (Context Definition)
<a href="https://youtu.be/CI7EYWmRDJE?si=jZA5LwTlqcObMNBY" target="_blank">Video Explanation</a></br>

Context provide a way to pass data through the component tree without having to pass props down manually to every level.


# useContext Hook Part 2 (Class Context)
<a href="https://youtu.be/tEqNSOhCHLU?si=XKCeYp8sH3501m6L" target="_blank">Video Explanation</a></br>

For details go to React-basic-advance-cv repository and in notes read 'Context' topic.

Provider:
<img src="Images/60-17 Context API Provider way .png" >
Consumption:
<img src="Images/59-16 Context Api Consumption way.png" >

We can see that in this class context way nesting looks bad and also not look easier to read/understand. But useContext Hook solves this, let do in next part.

* See files 'App.js', 'ComponentC.js', 'ComponentE.js', 'ComponentF.js'



# useContext Hook Part 3 (useContext Hook)
<a href="https://youtu.be/UjjtvroahBU?si=na1DTHMjh_YINoGQ" target="_blank">Video Explanation</a></br>

In useContext context provider way remains same but the consumption way changed. 
Provider:
<img src="Images/60-17 Context API Provider way .png" >
Consumption:
<img src="Images/60-17 - useContext Hook Consumption way.png">



# useReducer Hook 
<a href="https://youtu.be/cVYp4u1m6iA?si=ILOX-fEtJHzv_RsI" target="_blank">Video Explanation</a></br>

<img src="Images/61-18 - useReducer Definition.png.png">
<img src="Images/61-18 - Hooks so far learned.png">
<img src="Images/61-18 - reduce method vs useReducer.png">
<img src="Images/61-18 - useReducer Summery.png">



# useReducer (simple state & action)
<a href="https://youtu.be/cVYp4u1m6iA?si=ILOX-fEtJHzv_RsI" target="_blank">Video Explanation</a></br>

























