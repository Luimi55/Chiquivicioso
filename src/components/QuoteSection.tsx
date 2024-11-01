import React from 'react'

type Props = {}

const Quote = (props: Props) => {
  return (
    <div className='quoteContainer'>
        <p className='quote'>
          <span className='bigQuoteMark'>"</span>¿Quién dijo que todo está perdido? 
          <br/>
          Yo vengo a ofrecer mi corazón.<span className='bigQuoteMark'>"</span>
        </p>
    </div>
  )
}

export default Quote