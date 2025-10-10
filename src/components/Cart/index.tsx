"use client"

import {Grid} from "@mui/system";
import {Button, Card, CardActionArea, CardContent} from "@mui/material";
import Typography from "@mui/material/Typography";
import {useAppDispatch, useAppSelector} from "@/redux/hooks";
import Product from "@/types/Product";
import {removeItem} from "@/redux/features/cart/cartSlice";

function CartInfo() {

    const cart = useAppSelector(state => state.cart);
    const dispatch = useAppDispatch();

    const handleRemoveProduct = (product: Product) => {
        dispatch(removeItem(product))
    }


    return (
        <>
            <Grid container spacing={2}>
                <Grid size={8} spacing={2}>
                    { cart.products.map((item: Product) => (
                        <Card key={item.id}>
                            <CardActionArea
                                sx={{
                                    height: '100%',
                                    '&[data-active]': {
                                        backgroundColor: 'action.selected',
                                        '&:hover': {
                                            backgroundColor: 'action.selectedHover',
                                        },
                                    },
                                }}
                            >
                                <CardContent sx={{ height: '100%' }}>
                                    <Typography variant="h5" component="div">
                                        {item.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {item.price}
                                    </Typography>
                                    <Button variant="contained" onClick={() => handleRemoveProduct(item)}>Xoa</Button>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    ))}

                </Grid>
                <Grid size={4}>
                    Tong tien: { cart.totalMoney}
                    So luong: { cart.totalQuantity}
                </Grid>

            </Grid>
        </>
    )
}

export default CartInfo;