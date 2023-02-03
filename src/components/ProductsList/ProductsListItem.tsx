import { Button, Card, CardActions, CardContent } from '@mui/material'
import './ProductsListItem.scss'

type Props = {
    title: string
    description: string
    type: string
    capacity: string
    price: number
}

const ProductsListItem = ({
    title,
    description,
    type,
    capacity,
    price,
}: Props) => {
    return (
        <Card className="product" variant="outlined">
            <CardContent>
                <div className="product-title">{title}</div>
                <div className="product-desc"> This is {description}</div>
                <div className="product-features"> Type: {type}</div>
                <div className="product-features">Capacity: {capacity}</div>
                <div className="product-price">{price}$</div>
            </CardContent>

            <CardActions className="product-btn-wrap">
                <Button variant="outlined">Add to Cart</Button>
            </CardActions>
        </Card>
    )
}
export default ProductsListItem
