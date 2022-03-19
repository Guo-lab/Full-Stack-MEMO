import React from 'react';

import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import memos from './images/memos.png';

import Posts from './components/Posts/Posts';
import Form  from './components/Form/Form';

import useStyles from './styles';

// dispatch an action
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

// used in useEffect()
import { getPosts } from './actions/posts';




// Use useState hook
import { useState } from 'react';





const App = () => {
    const classes = useStyles(); 
    const dispatch = useDispatch();

    const [currentId, setCurrentId] = useState(null);



    // ? UPDATE
    useEffect(() => {
        //* In actions/posts.js
        dispatch(getPosts());
        //* To reducers/posts.js
    }, [currentId, dispatch]);
    // Once changing ID (eg. in clear() of Form.js, dispatch the getPosts())



    return(
        ////<div>
        ////    <h1>App</h1>
        ////</div>
        <Container maxidth='lg'> 
            <AppBar className={classes.appBar} position='static' color='inherit'>   
                <Typography className={classes.heading} variant='h2' align='center'> 
                M E M O
                </Typography>
                <img className={classes.image} src={memos} alt='memos' height='60' /> 
            </AppBar>

            <Grow in >
                <Container>
                    <Grid className={classes.mainContainer} container justifyContent='space-between' alignItems='stretch' spacing={3}>
                        
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;
