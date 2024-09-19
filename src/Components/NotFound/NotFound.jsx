import React, { useState } from 'react'
import style from './NotFound.module.css'
import error from '../../assets/images/error.svg'

export default function Notfound() {




  return <>

    <div className='w-1/2 mx-auto my-10'>
      <img src={error} className='w-full' alt="error" />
    </div>

  </>
}