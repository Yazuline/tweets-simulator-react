import React from 'react';
import './SendTweet.scss';
import { Fab } from '@mui/material';
import moment from 'moment';
import { Add, AddCircle, AddCircleSharp } from '@mui/icons-material';
import ModalContainer from '../ModalContainer/ModalContainer';

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
           <FormSendTweet/>
        </ModalContainer>
       </div>
  )
}

export default SendTweet