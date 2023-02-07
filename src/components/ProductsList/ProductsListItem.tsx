import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from '@mui/material'
import './ProductsListItem.scss'

type Props = {
    title: string
    description: string
    type: string
    capacity: string
    price: number
    image: string
}

const ProductsListItem = ({
    image,
    title,
    description,
    type,
    capacity,
    price,
}: Props) => {
    return (
        <Card className="product" variant="outlined">
            <CardContent>
                <div className="product-image">
                    <img src={image} alt="" />
                </div>
                <div className="product-title">{title}</div>
                <div className="product-desc">{description}</div>
                <div className="product-features"> Type: {type}</div>
                <div className="product-features">Capacity: {capacity}</div>
                <div className="product-price">{price}$</div>
                <div className="product-quantity">
                    <Button variant="outlined">-</Button>
                    <TextField size="small" value="1" />
                    <Button variant="outlined">-</Button>
                </div>
            </CardContent>

            <CardActions className="product-btn-wrap">
                <Button variant="outlined">Add to Cart</Button>
            </CardActions>
        </Card>
    )
}
export default ProductsListItem
