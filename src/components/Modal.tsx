import { AiOutlineWarning } from 'react-icons/ai';
import ModalCss from '../styles/modal.module.css'

import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import React from 'react';
import { IoCloseSharp } from 'react-icons/io5';



export type CustomModalType = React.PropsWithChildren<{
    modalIsOpen:boolean;
    setModalIsOpen:(value:boolean)=>void;
}>



export const CustomModal =({
    setModalIsOpen,modalIsOpen,children
}:CustomModalType)=>{
    function closeModal() {
        setModalIsOpen(false)
    }

      return (
        <div>
            {
                modalIsOpen?
                <Modal
                open={modalIsOpen}
                onClose={closeModal}
                classNames={{
                  modal: ModalCss.customModal,
                  modalContainer: ModalCss.customOverlay
                }}
                animationDuration={1}
                closeIcon={<></>}
                >
                 <div style={{'position':'relative'}}>
                    <div style={{'position':'absolute','top':'20px',
                    'right':'20px',
                    'cursor':'pointer',
                    'height':'40px',
                    'width':'40px','backgroundColor':'rgb(255, 255, 255)',
                    'fontSize':'1.5rem','borderRadius':'50%','display':'flex','justifyContent':'center','alignItems':'center'
                    }}
                    onClick={closeModal}
                    >
                        <IoCloseSharp />
                    </div>
                 {children}
                 </div>
                </Modal>
                :''
            }
        </div>
    )
}