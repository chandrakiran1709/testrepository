import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),

    color: theme.palette.text.secondary,
}));

export default function Body() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={8}><br /><br />
                    <Item><h4 className='h44'>From the fire house</h4></Item>
                    <h1>Sample blog post</h1>
                    <p className='oliv'><i>April 1, 2020 by <span className='oliver'>Oliver</span></i></p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem quia magni dolorum aliquid maiores aspernatur consequatur pariatur laudantium libero laborum excepturi amet quam eos recusandae enim nobis, iusto, consequuntur dolorem.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maxime, neque reprehenderit quae illo ipsum voluptas ipsam laboriosam blanditiis fugiat vel deleniti. Eveniet fugiat ab modi ea, et illo quasi.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <strong className='spp'>Doloribus dignissimos provident totam </strong>quos consequatur fuga voluptatem obcaecati, atque delectus labore iste saepe itaque est. Facere.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod repudiandae maiores numquam corrupti ducimus delectus exercitationem amet, a ex velit.</p>
                    <h4>Heading</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo illo laudantium, harum ipsa quam eos? Veritatis totam quae laborum dignissimos consequatur, dolorum eum repudiandae, tenetur optio exercitationem, doloribus ipsum aliquid.</p>
                    <p>Sub-heading 1</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae doloremque harum maxime voluptatem. Recusandae, illum?</p>
                    <p>Sub-heading 2</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, cum maiores eum possimus commodi aspernatur quibusdam sunt tempore laborum nihil, necessitatibus reiciendis aliquid mollitia labore doloremque enim! Quasi, totam? Corporis.</p>
                    <br /><br />
                    <h1>New feature</h1>
                    <p className='oliv'><i>March 14, 2020 by <span className='oliver'>Tom</span></i></p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem quia magni dolorum aliquid maiores aspernatur consequatur pariatur laudantium libero laborum excepturi amet quam eos recusandae enim nobis, iusto, consequuntur dolorem.</p>
                    <ul className='gul'>
                        <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, ea!</li>
                        <li>Lorem ipsum dolor sit amet consectetur.</li>
                        <li>Lorem ipsum dolor sit.</li>
                    </ul>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt esse voluptatum odit officia beatae eos. Ipsum minus maiores nihil totam, non ex reprehenderit sit pariatur?</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, velit amet impedit reiciendis culpa ad?</p>
                </Grid>
                <Grid item xs={4}><br/><br/><br/>
                    <div className='divv'>
                        <h4>About</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda esse voluptas nesciunt excepturi autem nisi.</p>
                    </div>
                    <h4>Archives</h4>
                    <a href="#" className='sidea'>March 2020</a>
                    <a href="#" className='sidea'>February 2020</a>
                    <a href="#" className='sidea'>January 2020</a>
                    <a href="#" className='sidea'>November 1999</a>
                    <a href="#" className='sidea'>October 1999</a>
                    <a href="#" className='sidea'>September 1999</a>
                    <a href="#" className='sidea'>August 1999</a>
                    <a href="#" className='sidea'>July 1999</a>
                    <a href="#" className='sidea'>June 1999</a>
                    <a href="#" className='sidea'>May 1999</a>
                    <a href="#" className='sidea'>April 1999</a><br/>

                    <h4 className='sideh4'>Social</h4>
                    <p className='iconf'><i class="fa fa-github gitt" aria-hidden="true"></i><span className='git'>GitHub</span></p>
                    <p className='iconf'><i class="fa fa-twitter gitt" aria-hidden="true"></i><span className='git'>GitHub</span></p>
                    <p className='iconf'><i class="fa fa-facebook gitt" aria-hidden="true"></i><span className='git'>GitHub</span></p>
                </Grid>
            </Grid>
        </Box>
    );
}
