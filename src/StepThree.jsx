
import React, { useState } from 'react';
import {
    Typography,
    Card,
    CardContent,
    Grid,
    Button,
    TextField,
    Box,
    IconButton,
} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';

const StepThree = ({ onBack, onFinish }) => {
    const [products, setProducts] = useState([
        { name: '', description: '', link: '' },
    ]);

    const handleChange = (index, event) => {
        const newProducts = [...products];
        newProducts[index][event.target.name] = event.target.value;
        setProducts(newProducts);
    };

    const handleAddProduct = () => {
        setProducts([...products, { name: '', description: '', link: '' }]);
    };

    const handleRemoveProduct = (index) => {
        const newProducts = products.filter((_, i) => i !== index);
        setProducts(newProducts);
    };

    const handleFinish = () => {
  
        console.log(products);
        onFinish(); 
    };

    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Product Details
            </Typography>
            {products.map((product, index) => (
                <Card variant="outlined" key={index} style={{ marginBottom: '20px' }}>
                    <CardContent>
                        <Typography variant="h5" gutterBottom>
                            Product {index + 1}
                        </Typography>
                        <TextField
                            label="Product Name"
                            name="name"
                            value={product.name}
                            onChange={(event) => handleChange(index, event)}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Product Portfolio Description"
                            name="description"
                            value={product.description}
                            onChange={(event) => handleChange(index, event)}
                            fullWidth
                            margin="normal"
                            multiline
                            rows={4}
                        />
                        <TextField
                            label="Product Link"
                            name="link"
                            value={product.link}
                            onChange={(event) => handleChange(index, event)}
                            fullWidth
                            margin="normal"
                        />
                        {products.length > 1 && (
                            <IconButton
                                aria-label="delete"
                                onClick={() => handleRemoveProduct(index)}
                                color="secondary"
                            >
                                <DeleteIcon />
                            </IconButton>
                        )}
                    </CardContent>
                </Card>
            ))}
            <Box>
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<AddCircleIcon />}
                    onClick={handleAddProduct}
                    style={{ marginBottom: '20px' }}
                >
                    Add More Products
                </Button>
            </Box>
            <Button onClick={onBack} variant="outlined" color="secondary" style={{ marginTop: '20px' }}>
                Back
            </Button>
            <Button
                onClick={handleFinish}
                variant="contained"
                color="primary"
                style={{ marginTop: '20px', marginLeft: '10px' }}
            >
                Finish
            </Button>
        </div>
    );
};

export default StepThree;
