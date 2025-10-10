"use client"
import {useAppDispatch} from "@/redux/hooks";
import {addToCart} from "@/redux/features/cart/cartSlice";
import {useEffect, useState} from "react";
import ProductService from "@/services/ProductService";
import {Button, Card, CardActions, CardContent, CardMedia} from "@mui/material";
import Typography from "@mui/material/Typography";
import {Grid} from "@mui/system";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Product from "@/types/Product";

function ProductList() {
    const [products, setProducts] = useState([])

    const dispatch = useAppDispatch();

    const handleClick = (product: Product) => {
        dispatch(addToCart(product))
    }

    useEffect(() => {
        ProductService.getAllProduct().then(res => {
            const {data} = res;
            setProducts(data);
        })
    }, [])

    return (
        <>
            <h1>Product List</h1>
            <Grid container spacing={2}>
            {products.map((item: Product) => (
                <Grid key={item.id} size={{ xs: 6, md: 3 }}>
                    <Card sx={{ maxWidth: 345, minHeight: 500 }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image={item.imageUrl}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {item.name}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                {item.price}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small"
                                    onClick={() => handleClick(item)}
                                    variant="contained">
                                <AddShoppingCartIcon/>
                                Add to cart
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
            </Grid>
        </>
    )
}

export default ProductList;