import { React } from 'react'
import { createRoot } from 'react-dom/client'
import { Main } from './components/Main'

//Creating the element
//const element = React.createElement('h1',null,'Hello World!');

//const task = ['Hi' , 'hello' , 'World!'];

// const element = React.createElement('ol',null,
// task.map((task,index) => React.createElement('li', {key:index}, task))

// );

//JSX
// const element = 
//       <div>
//          <h1> Task List</h1>
//          <ol> 
//            {task.map((task,index)   =>    <li key={index}> {task} </li>)}
//          </ol>
//       </div>

//getting the root dom node
const container = document.getElementById('root');

//creating a root
const root = createRoot(container);

//rendering the root
root.render(<Main/>);

