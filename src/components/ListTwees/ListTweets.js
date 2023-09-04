import React from 'react'
import { Grid, dividerClasses } from '@mui/material'
import './ListTweets.scss'
import '../Tweet'
import Tweet from '../Tweet/Tweet'

const ListTweets = (props) => {
    const {allTwees, deleteTweet}=props;
    if(!allTwees ||  allTwees.length===0){

        return(
            <div  className="list-tweets-empty">
                <h2> No hay Tweets</h2>
            </div>
        );
    }
  return (
 
  
   <Grid container spacing={3} className="list-tweets">
    {allTwees.map((tweet, index)=> {
       return( 
        
        <Grid key={index} item  xs={4}> 
         <Tweet tweet={tweet} index={index} deleteTweet={deleteTweet} />
        </Grid>
)
            
    })}
   </Grid>

  
  )
}

export default ListTweets