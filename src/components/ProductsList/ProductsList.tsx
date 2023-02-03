import { Grid, Typography } from '@mui/material'
import ProductsListItem from './ProductsListItem'

type Props = {}

const ProductsList = (props: Props) => {
    return (
        <>
            <Typography variant="h4" align="center" component="h2">
                Products List
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                    {' '}
                    <ProductsListItem
                        title={'iPhone 14 Pro'}
                        description={
                            'iPhone 14 Pro.'
                        }
                        type={'Phone'}
                        capacity={'256 Gb'}
                        price={1200}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    {' '}
                    <ProductsListItem
                        title={'Samsung Galaxy'}
                        description={
                            'Samsung Galaxy.'
                        }
                        type={'Tablet'}
                        capacity={'128 Gb'}
                        price={1000}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    {' '}
                    <ProductsListItem
                        title={'Redmi Note 10'}
                        description={
                            'Redmi Note 10.'
                        }
                        type={'Phone'}
                        capacity={'64 Gb'}
                        price={500}
                    />
                </Grid>
            </Grid>
        </>
    )
}
export default ProductsList
