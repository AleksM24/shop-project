type Product = {
    id: number
    title: string
    description: string
    type: string
    capacity: string
    price: number
    image: string
}

const productsArray: Product[] = [
    {
        id: 1,
        title: 'iPhone 14 Pro',
        description: 'This is iPhone 14 Pro',
        type: 'phone',
        capacity: '256',
        price: 2000,
        image: 'imeges/iPhone-black.jpg'
    },
    {
        id: 2,
        title: 'Samsung Galaxy',
        description: 'This is Samsung Galaxy',
        type: 'phone',
        capacity: '64',
        price: 1500,
        image: 'imeges/iPhone-purple.jpg'

    },
    {
        id: 3,
        title: 'Redmi Note',
        description: 'This is Redmi Note',
        type: 'phone',
        capacity: '32',
        price: 500,
        image: 'imeges/iPhone-gold.jpg'

    },
    {
        id: 4,
        title: 'iPhone 13',
        description: 'This is iPhone 13',
        type: 'phone',
        capacity: '512',
        price: 1600,
        image: 'imeges/iPhone-blue.jpg'

    },
    {
        id: 5,
        title: 'Nokia',
        description: 'This is Nokia',
        type: 'phone',
        capacity: '32',
        price: 800,
        image: 'imeges/iPhone-green.jpg'

    },
    {
        id: 6,
        title: 'Tecno Spark',
        description: 'This is Tecno Spark',
        type: 'phone',
        capacity: '128',
        price: 200,
        image: 'imeges/iPhone-silver.jpg'
    },
]

export default productsArray
