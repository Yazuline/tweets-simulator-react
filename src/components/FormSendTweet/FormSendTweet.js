import React from 'react'
import { FormControl, FormGroup, TextField, Button } from '@mui/material'
import './FormSendTweet.scss'

export const FormSendTweet = (props) => {
 const {sendTweet}=props;

  return (

    <div  className="form-send-tweet">
        <h2 className="form-send-tweet__title">Enviar Tweet</h2>
        <form className="form-send-tweet__form" onSubmit={sendTweet}>
            <FormGroup>
              <TextField  className="form-send-tweet__form-name" 
              type='text' name="name" 
               placeholder="Nombre de usuario" margin='normal'/>
            </FormGroup>
            
            <FormGroup>
              <TextField className="form-send-tweet__form-textarea"  name="tweet"
              multiline  rows="6" placeholder="Escribe tu Tweet...."/>
            </FormGroup>

            <FormGroup>
              <Button  type="submit">Enviar Tweet</Button>
            </FormGroup>


        </form>
    </div>
  )
}