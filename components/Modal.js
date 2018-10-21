import React from 'react'
import Modal from 'react-modal'
import styled from 'styled-components'

const CustomModal = ({ isOpen, children }) => {
    return (
        <StyledModal isOpen={isOpen} style={customStyle} ariaHideApp={false}>
            {children}
        </StyledModal>
    )
}

export default CustomModal

const StyledModal = styled(Modal)`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const customStyle = {
    overlay: {
        zIndex: 999,
        background: 'rgba(0,0,0,0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}
