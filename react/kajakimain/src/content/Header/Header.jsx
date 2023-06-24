import React from 'react';
import './Styles.scss';

import {motion} from 'framer-motion';
import AppWrap from '../../wrappers/AppWrap';
import images from '../../constants/images';
import data from './data';
import {BiInfoCircle} from 'react-icons/bi';



const Header = () => {
  return (
    <div className='app__header-container'>
        <h1 style={{width:'100%',marginTop:'2rem'}} className='head-text'>Wypożyczalnia Kajaków nad Pilicą - <span className='stroke-text'>Kajakowa Warka</span></h1>

      <div className='app__header-wrapper'>
        <motion.div whileInView={{ opacity: [0, 1]}}
    transition={{ duration: 0.5}} className='app__header-image'>
          <img src={images.header} alt="" />
        </motion.div>
        <div className='app__header-content'>
          <h1 className='head-text' style={{width:'100%',margin:'0 0 1.2rem 0'}}>Jak to u nas wygląda?</h1>
          {data.tekst.map((prop,index)=>(
            <motion.div whileInView={{ opacity: [0, 1]}}
            transition={{ duration: 0.7}} className='app__header-content-text' key={index} >
              <motion.div
               whileHover={{ scale: 1.2 }}
               whileTap={{ scale: 0.8 }}
               animate={{
                boxShadow: "10px 10px 0 rgb(117, 220, 117,0.3)",
              }}
              
              className='app__header-content-text-circle'>
              <div className='circle-svg'>{prop.pic}</div>
              </motion.div>
              <p className='p-text' style={{marginTop:'1rem'}}>{prop.title}</p>
            </motion.div>
          ))}
          <motion.div whileInView={{opacity: [0, 1]}}
            transition={{ duration: 1}} className="app__header-content-info">
            <div >
            <p className='p-text'><BiInfoCircle/> W cenie wypożyczenia kajaka zapewniamy wiosła, kapoki,
             transport z miejsca zbiórki do miejsca rozpoczęcia spływu lub transport z miejsca zakończenia spływu.</p>

            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default AppWrap(Header,'start');