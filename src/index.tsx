import React from 'react'
import ReactDOM from 'react-dom/client'

//jsx
const h1 = <h1 id="title" className='new'>Hello React.js</h1> 

let a = 10;
let b = 'Hello test'

const list = (
    <ul>
        <li>List item {a + 10 + 15}</li>
        <li>List item {b}</li>
        <li>List item 3</li>
    </ul>
)

const content = (
    <div>
        {h1}
        {list}
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<React.StrictMode>{content}</React.StrictMode>)
