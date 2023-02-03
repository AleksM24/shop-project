import { Button, Card, CardActions, CardContent } from '@mui/material'
import './ProductsListItem.scss'

type Props = {}
const ProductsListItem = (props: Props) => {
    return (
        <Card className="product" variant="outlined">
            <CardContent>
                <div className="product-title">iPhone 14 Pro</div>
                <div className="product-desc"> This is iPhone 14 Pro</div>
                <div className="product-features"> Type: phone</div>
                <div className="product-features">Capacity: 256Gb</div>
                <div className="product-price">1200$</div>
            </CardContent>

            <CardActions className="product-btn-wrap">
                <Button variant="outlined">Add to Cart</Button>
            </CardActions>
        </Card>
    )
}
export default ProductsListItem
