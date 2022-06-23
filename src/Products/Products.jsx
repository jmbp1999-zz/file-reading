import React from "react";
import Grid from "@mui/material/Grid";

import Product from "./Product/Product";
import useStyles from "./styles";
import { useDispatch } from "react-redux";

export const Products = ({ products }) => {
    const classes = useStyles();

    if (!products.length) return <p>Loading...</p>;
    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify='center' spacing={2}>
                {products.map((product) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                        <Product
                            product={product}
                            name={product.name}
                            price={product.details.price}
                            tag={product.details.tag}
                            image={product.details.image}
                        />
                    </Grid>
                ))}
            </Grid>
        </main>
    );
};
