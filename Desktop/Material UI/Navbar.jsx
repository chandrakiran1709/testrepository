import React from 'react'
import Button from '@mui/material/Button';
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
    <Box sx={{ width: '100%', mb:'0' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}>
          <Item> <a href="#" className='a1'>Subscribe</a>
            <p className='blog'>Blog<i class="fa fa-fw fa-search searchh"></i><Button variant="outlined" size="small" style={{ border: '1px solid', fontWeight: 'bold' }}>SIGN UP</Button></p></Item>
        </Grid>
      </Grid>
      <ul className='ull'>
            <a href="#">Technology</a>
            <a href="#">Design</a>
            <a href="#">Culture</a>
            <a href="#">Business</a>
            <a href="#">Politics</a>
            <a href="#">Opinion</a>
            <a href="#">Science</a>
            <a href="#">Health</a>
            <a href="#">Style</a>
            <a href="#">Travel</a>
        </ul>
    </Box>
    
  );
}