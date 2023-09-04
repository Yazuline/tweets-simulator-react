import React, { useEffect, useState } from "react";
import {Container, Snackbar} from "@mui/material"
import Header  from "./components/Header"
import SendTweet from "./components/SendTweet";
import { TWEET_STORAGE} from "./Utils/constans";
import ListTweets from "./components/ListTwees";
function App() {
  const [toastProps, setToastProps]=useState ({
    open:false,
    text:null

  });

  const [allTwees, setAllTweets] = useState([])
  const [reloadTweets, setReloadTweets]=useState(false)

  useEffect(()=>{
    const AllTweetsStorage=localStorage.getItem(TWEET_STORAGE);
    const AllTweetsArray=JSON.parse(AllTweetsStorage);
    setAllTweets(AllTweetsArray);
    setReloadTweets(false)

  },[reloadTweets]);

  const deleteTweet =(index)=>{
    allTwees.splice(index,1)
    setAllTweets(allTwees)
    localStorage.setItem(TWEET_STORAGE, JSON.stringify(allTwees))
    setReloadTweets(true)

  }



  //console.log(allTwees);
  return (
   <Container className="tweets-simulator" maxWidth={false}>
    <Header/>
    <SendTweet setToastProps={setToastProps} allTwees={allTwees}/>
    <ListTweets allTwees={allTwees} deleteTweet={deleteTweet} />
    <Snackbar
     anchorOrigin={{
      vertical:"top",
      horizontal:"right"

     }}
     open={toastProps.open}
     autoHideDuration={1000}
     message={<span id="message-id">{toastProps.text} </span>}
    
    />

   </Container>
  );
}

export default App;
