import React from 'react'

const Modal = ({ modalTitle, children, setIsModalOpen }) => {

  return (
    <div className='w-[50%] h-full'>
        <div className='flex justify-between mx-6'>
            <h4>{ modalTitle }</h4>
            <button className="text-yellow bg-none"
                onClick={() => {setIsModalOpen(false)}}>
                    X
            </button>
        </div>

        { children }
    </div>
  )
}

export default Modal