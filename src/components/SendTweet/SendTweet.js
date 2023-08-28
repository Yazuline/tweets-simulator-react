import React from 'react';
import './SendTweet.scss';
import { Fab } from '@mui/material';
import moment from 'moment';
import { Add, AddCircle, AddCircleSharp } from '@mui/icons-material';
import ModalContainer from '../ModalContainer/ModalContainer';
import   {TWEET_STORAGE} from "../../Utils/constans";

import { useState } from 'react';
import { FormSendTweet } from '../FormSendTweet/FormSendTweet';

const SendTweet = () => {
  
  const [isOpenModal, setIsOpenModal]= useState(false)
  
  const openModal = ()=>{
    setIsOpenModal(true);
  }

  const closeModal= ()=>{
    setIsOpenModal(false);
  }

  const sendTweet =(event, formValue)=>{
    event.preventDefault();
    const {name, tweet} = formValue;
    let allTweetArray=[];
    if (!name || !tweet){
      console.log("WARNIG: Todos los campos son obligatorios");
    } else{
      formValue.time=moment();
      allTweetArray.push(formValue);
      localStorage.setItem(TWEET_STORAGE, JSON.stringify(allTweetArray));
      console.log("Tweet enviado correctamente")
      closeModal();
    }
    allTweetArray=[];


    
    //console.log("Tweets a enviar")
    //console.log(formValue)
  };
  return (
    <div  className="send-tweet">
        
        <Fab className="send-tweet__open-modal"
             color="primary"
             arial-label="add"
             onClick={openModal}>
            <Add />
             </Fab>

        <ModalContainer isOpenModal={isOpenModal}  closeModal={closeModal} >
             <p>ModalContainer</p>
           <FormSendTweet  sendTweet={sendTweet}/>
        </ModalContainer>
       </div>
  )
}

export default SendTweet