import React from 'react'
import styles, {  layout }from '../style'
import { Button } from './ui/button'
import Cards from './Card'


const Album = () => {
  return (
    <section id='album' className={`${styles.flexCenter} ${styles.marginY} sm:flex-col flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
        <div className='flex justify-between w-full flex-col sm:flex-row'>
            <h4 className={`${styles.heading2}`}>Browse our latest work ___</h4>
            <Button className="p-8 w-[11rem] sm:w-[15rem]  rounded-full">Browse albums</Button>
        </div>
        <div className={`${styles.paddingY} flex gap-3 w-full justify-between flex-col sm:flex-row`}>
            <Cards />
            <Cards />
        </div>
    </section>
  )
}

export default Album