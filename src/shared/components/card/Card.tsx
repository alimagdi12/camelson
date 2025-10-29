import React from 'react'
import './Card.scss'
import {Card, Box, CardContent, Tooltip, Typography } from '@mui/material';
import type { CategoryCardProps } from '../../../core/models/category-card';
const CategoryCard: React.FC<CategoryCardProps> = ({ title, image, onClick }) => {  
    return (
        <Card
            className="category-card"
            elevation={4}
            sx={{ borderRadius: "16px", cursor: "pointer" }}
            onClick={() => onClick(title)}
            >
            <Box className="card-background">
                <img src={image} alt={title} className="background-image" />
            </Box>
            <CardContent className="card-content">
                <Tooltip title={title}>
                <Typography variant="h6" className="card-title" fontWeight={700}>
                    {title}
                </Typography>
                </Tooltip>
            </CardContent>
        </Card>
    )
}

export default CategoryCard;