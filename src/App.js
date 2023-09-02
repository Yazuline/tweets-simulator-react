import React, { useEffect, useState } from "react";
import {Container, Snackbar} from "@mui/material"
import Header  from "./components/Header"
import SendTweet from "./components/SendTweet";
import { TWEET_STORAGE} from "./Utils/constans";
function App() {
  const [toastProps, setToastProps]=useState ({
    open:false,
    text:null

  });

  const [allTwees, setAllTweets] = useState([])
  useEffect(()=>{
    const AllTweetsStorage=localStorage.getItem(TWEET_STORAGE);
    const AllTweetsArray=JSON.parse(AllTweetsStorage);
    setAllTweets(AllTweetsArray);

  },[]);

  //console.log(allTwees);
  return (
   <Container className="tweets-simulator" maxWidth={false}>
    <Header/>
    <SendTweet setToastProps={setToastProps} allTwees={allTwees}/>
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
