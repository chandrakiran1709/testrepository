import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,

  color: theme.palette.text.secondary,
}));

export default function Card() {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
           <Item> <h3 className='h33'>Featured post</h3>
            <small className='small1'>Nov 12</small><br />
            <p className='cp'>This is a wider card eith supporting text below as<br/>a natural lead-in to additional content</p>
            <p className='cp1'>Continue reading...</p>
          <img src={require("./FlowerVase.jpg")} alt="Vase" className='Fvase'/></Item>
        </Grid>
        <Grid item xs={6}>
        <Item> <h3 className='h33'>Post title</h3>
            <small className='small1'>Nov 11</small><br />
            <p className='cp'>This is a wider card eith supporting text below as<br/>a natural lead-in to additional content</p>
            <p className='cp1'>Continue reading...</p>
          <img src={require("./FlowerVase.jpg")} alt="Vase" className='Fvase'/></Item>
        </Grid>
      </Grid>
    </Box>
  );
}
