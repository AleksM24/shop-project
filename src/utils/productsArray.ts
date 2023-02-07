type Product = {
    id: number
    title: string
    description: string
    type: string
    capacity: string
    price: number
}

const productsArray: Product[] = [
    {
        id: 1,
        title: 'iPhone 14 Pro',
        description: 'This is iPhone 14 Pro',
        type: 'phone',
        capacity: '256',
        price: 2000,
    },
    {
        id: 2,
        title: 'Samsung Galaxy',
        description: 'This is Samsung Galaxy',
        type: 'phone',
        capacity: '64',
        price: 1500,
    },
    {
        id: 3,
        title: 'Redmi Note',
        description: 'This is Redmi Note',
        type: 'phone',
        capacity: '32',
        price: 500,
    },
    {
        id: 4,
        title: 'iPhone 13',
        description: 'This is iPhone 13',
        type: 'phone',
        capacity: '512',
        price: 1600,
    },
    {
        id: 5,
        title: 'Nokia',
        description: 'This is Nokia',
        type: 'phone',
        capacity: '32',
        price: 800,
    },
    {
        id: 6,
        title: 'Tecno Spark',
        description: 'This is Tecno Spark',
        type: 'phone',
        capacity: '128',
        price: 200,
    },
]

export default productsArray
