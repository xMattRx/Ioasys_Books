import React from 'react'
import { Background, ContainerModal } from './styles'

export default function Modal(close) {
  return (
    <Background onClick={close.close} >
      <ContainerModal>
        
      </ContainerModal>
    </Background>
  )
}
