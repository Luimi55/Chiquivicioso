import React from 'react'
import { Image } from 'react-bootstrap'

type Props = {
    image: string,
    title: string
}

const ScreenTitle = ({image, title}: Props) => {
  return (
    <div className='w-100 screenTitleHeight'>
            <Image className="d-block w-100 centerScreenTitleImage" src={image}/>
            <div className="overlayScreenTitleImage"></div>
            <p className='text-light textScreenTitleImage'>{title}</p>
    </div>
  )
}

export default ScreenTitle