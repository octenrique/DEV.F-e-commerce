import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Product from "../product/Product";
import { getProducts } from "../helpers/getProducts";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function Products() {
  const classes = useStyles();

  const [items, setItems] = useState([]);

  useEffect(() => {
    let mounted = true;
    getProducts().then((list) => {
      if (mounted) {
        setItems(list);
      }
    });
  }, []);
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {items.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Product key={product.id} product={product} />
          </Grid>
        ))}
      </Grid>
      {/* <Grid item xs={12} sm={6} md={4} lg={3}>
        <Product />
      </Grid> */}
    </div>
  );
}
