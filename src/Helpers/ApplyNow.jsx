import React, { useState } from 'react'
import BookTaxi from '../modals/BookTaxi';

function ApplyNow({text}) {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
  return (
    <>
         <button className='main-btn py-3' onClick={openModal}>{text}<i class="bi bi-chevron-double-right"></i></button>
           <BookTaxi
        show={showModal}
        onHide={handleClose}
      />
    </>
  )
}

export default ApplyNow
