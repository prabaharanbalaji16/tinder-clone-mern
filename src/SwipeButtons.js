import { IconButton } from '@material-ui/core'
import { Close, Favorite, FlashOn, Replay, Star } from '@material-ui/icons'
import React from 'react'
import './SwipeButtons.css'

function SwipeButtons() {
    return (
        <div className="swipeButtons">
            <IconButton classname="swipeButtons__repeat">
                <Replay style={{color:'#f5b748'}} fontSize="large" />
            </IconButton>
            <IconButton classname="swipeButtons__left">
                <Close style={{color:'#ec5e6f'}} fontSize="large" />
            </IconButton>
            <IconButton classname="swipeButtons__star">
                <Star style={{color:'#62b4f9'}} fontSize="large" />
            </IconButton>
            <IconButton classname="swipeButtons__right">
                <Favorite style={{color:'#76e2b3'}} fontSize="large" />
            </IconButton>
            <IconButton classname="swipeButtons__lightning">
                <FlashOn style={{color:'#915dd1'}} fontSize="large" />
            </IconButton>
        </div>
    )
}

export default SwipeButtons
