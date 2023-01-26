import React from 'react'
import ReactDOM from 'react-dom/client'

const Title = () => {
    return <h1>Hello App.js</h1>
}

const Content = () => {
    return (
    <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, id! Dolore impedit odit ad. Reprehenderit officiis tempore voluptatem? Corporis incidunt earum cum saepe asperiores laudantium! Atque, consectetur quo. Possimus, aspernatur.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quisquam, illum recusandae dolore earum autem est eius dicta iure nostrum illo harum vero voluptatum quos id veniam, cumque asperiores quod!</p>
    </div>
    )
}

function App (){
    return (
        <div>
            <Title />
            <Content />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<React.StrictMode>
    <App />
</React.StrictMode>)
