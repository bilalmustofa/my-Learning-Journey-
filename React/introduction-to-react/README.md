# What Is React

- React is one of the most popular JavaScript libraries for building user interfaces and web applications. Originally developed at Facebook, now Meta.
- A fundamental concept in React is the creation of reusable UI components. 
- These components, such as buttons, cards, and avatars, can be easily reused throughout your application. 
- One of the key advantages of React is that these custom components can update and render independently as data changes.
- Unlike traditional JavaScript, which requires direct manipulation of the DOM (Document Object Model), React uses a virtual DOM, which  improves performance and efficiency. You'll learn more about the virtual DOM and how it works in upcoming lessons.

# What Are Components in React

- Components are the building blocks of React applications that allow developers to break down complex user interfaces into smaller, manageable pieces, making it easier to develop and maintain large-scale applications.

* The two types of components in React are functional and class-based components. In modern React, developers use functional components

example of a React Function component:
```jsx
function Greeting() {
  const name = "John";
  return (
    <h1>
      {/* The result will be Hello John */}
      Hello {name}
    </h1>
  );
}
```
- Use capital letter at the beginning of the component name, This is because React treats components with a capital letter as custom components, while elements with lowercase letters are considered built-in HTML elements.

# What Is Vite

- One of the most popular tools for setting up projects is Vite. Vite, which means "fast" in French, is a build tool that aims to provide a faster development experience for modern web projects.
- Vite can be used with React, as well as with other libraries and frameworks like TypeScript.

- To create a new project with Vite, you will need to use the command line, for window Command Prompt or Windows PowerShell.
- Once you have the command line open, you can use the following command:
```bash
npm create vite@latest [project-name]
```
- Then open up the new project and see the React boilerplate code that Vite has provided for you.
- To run your project, run this command
```bash 
npm run dev 
```
- Then open up a new browser tab at http://localhost:5173/.

# How Do You Pass Props from a Parent Component to a Child Component in React?

## what is props
-  Props, which is short for properties, is the way for parent components to pass data down to the child component.
- Props can be of any type: strings, numbers, booleans, objects, or arrays.

Example:
```jsx
// parent component
function App() {
  return(
    <>
      <Greeting name="Jessica" />;
    </>
  ) 
}
export default App;

function Greeting({ name }) {
  console.log(name);
  return (
    <>
      <h1>Hi {name}!</h1>;
    </>
  )
}
export default Greeting;
```
# How Do You Render Lists in React?

- rendering lists in React involves converting arrays of data into JSX elements, typically using the map function.
```jsx
function FruitList() {
  const fruits = ['Apple', 'Banana', 'Cherry', 'Date'];
  return (
    <ul>
      {fruits.map(fruit => <li>{fruit}</li>)}
    </ul>
  );
}
```
# How Do Events Work in React?
- In React, event handlers work in a similar way to native browser events, but with a few Different.
- Instead of using lowercase event attribute names like onclick and onsubmit, React uses camelCase, like onClick and onSubmit.
- In addition, instead of using strings to specify the kind of event, React expects a function for the event handler.
- The event handler function is passed to the element as a prop, and the event type like onClick or onSubmit is used as an attribute in JSX.
- In React, event handler functions usually start with the prefix handle to indicate they are responsible for handling events, like handleClick or handleSubmit.

*  event in regular HTML: 
```js
<button onclick="alert('Button clicked!')">Click Me</button>
```
* And here is how you do the same in React:
```jsx
function handleClick() {
  console.log("Button clicked!");
}

<button onClick={handleClick}>Click Me</button>;
```