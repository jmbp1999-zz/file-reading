import React from "react";
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { createItem } from "../../actions/posts";
const Product = ({ product, name, price, tag, image }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const addToCart = (item) => {
        dispatch(createItem(item));
    };
    return (
        <Card className={classes.root}>
            <span class='badge text-bg-dark'>{tag}</span>
            <CardMedia className={classes.media} image={image} title={name} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography gutterBottom variant='h5' component='h2'>
                        {name}
                    </Typography>
                    <Typography gutterBottom variant='h5' component='h2'>
                        ${price}
                    </Typography>
                </div>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton
                    aria-label='Add to Cart'
                    onClick={() => {
                        addToCart(product);
                    }}
                >
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default Product;
