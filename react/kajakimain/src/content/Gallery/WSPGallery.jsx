import { useState } from 'react'
import {motion} from 'framer-motion';
import {
    AiOutlineArrowLeft, 
  AiOutlineArrowRight, 
  AiFillCloseCircle
} from 'react-icons/ai'

import './wsp-gallery.scss'

const WSPGallery = ({galleryImages}) => {

  const [slideNumber, setSlideNumber] = useState(0)
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = (index) => {
    setSlideNumber(index)
    setOpenModal(true)
  }

  // Close Modal
  const handleCloseModal = () => {
    setOpenModal(false)
  }

  // Previous Image
  const prevSlide = () => {
    slideNumber === 0 
    ? setSlideNumber( galleryImages.length -1 ) 
    : setSlideNumber( slideNumber - 1 )
  }

  // Next Image  
  const nextSlide = () => {
    slideNumber + 1 === galleryImages.length 
    ? setSlideNumber(0) 
    : setSlideNumber(slideNumber + 1)
  }

  return (
    <div>

      {openModal && 
        <div className='sliderWrap'>
          <AiFillCloseCircle className='btnClose' onClick={handleCloseModal}/>
          <AiOutlineArrowLeft className='btnPrev' onClick={prevSlide} />
          <AiOutlineArrowRight className='btnNext' onClick={nextSlide} />
          <div className='fullScreenImage'>
            <img src={galleryImages[slideNumber].img} alt='' />
          </div>
        </div>
      }

      <div className='galleryWrap'>
        {
          galleryImages && galleryImages.map((slide, index) => {
            return(
              <motion.div whileInView={{ opacity: [0, 1]}}
    transition={{ duration: 1}}
                className='single' 
                key={index}
                onClick={ () => handleOpenModal(index) }
              >
                <img src={slide.img} alt='' />
              </motion.div>
            )
          })
        }
      </div>

    </div>
  )
}

export default WSPGallery