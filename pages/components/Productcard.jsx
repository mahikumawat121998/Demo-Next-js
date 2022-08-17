import *  as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import styles from "../../styles/Productcard.module.css";
import MyButton from './myButton';;






const Productcard = (props) => {
    const { product } = props
    return (
        <>
    
        <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={product.category.image}
                        alt="product image"
                    />
                    <CardContent style={{ padding: '10px' }}>
                        <Typography gutterBottom variant="h5" component="div">
                            {product.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {product.description}
                        </Typography>
                        <Typography className={styles.cardPrice} gutterBottom variant="h6" component="div">
                            Price - ₹{product.price}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <MyButton value={'More Details'} />
                    <MyButton value={'Add to Cart'} />
                </CardActions>
            </Card>
     
        </>
           
    )
}

export default Productcard            