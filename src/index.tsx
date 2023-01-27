import { type } from '@testing-library/user-event/dist/type'
import React from 'react'
import ReactDOM from 'react-dom/client'
import {Content} from './Content'
import Title from './Title'

function App() {
    return (
        <>
            <Title text="React" />
            <Title text="TS" />
            <Content 
            text1={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum voluptates aliquid corporis vel libero vitae dolor, a minima impedit mollitia commodi ipsam soluta neque corrupti, non aspernatur provident? Maiores, eligendi?'} 
            text2={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis perferendis quibusdam, magni alias autem iste cum vitae id delectus ipsam minus at soluta earum architecto dolorum ratione magnam fugit distinctio.'} 
            year={2023} />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
