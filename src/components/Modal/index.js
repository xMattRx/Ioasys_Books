import React from 'react'
import Quotes from '../../assets/images/In/Quotes.svg'
import { Author, Background, ContainerInternalModal, ContainerModal, ContainerReview, ContainerText, Data, DataContainer, Description, ImageModal, Information, Informations, InformationsContainer, Title, TitleReview, X } from './styles'


export default function Modal({book,close} ) {
  return (
    <Background>
      <X onClick={close}>X</X>
      <ContainerModal>
        <ContainerInternalModal>
          <div>
            <ImageModal src={book.imageUrl}/>
          </div>
          <ContainerText>
            <Title>{book.title}</Title>
            <Author>
              {book.authors.map((element,index)=>{
                return `${(index === book.authors.length - 1) ? element : element+"," } `
              })}
            </Author>
            <InformationsContainer>
              <Informations>
              <span>Informações</span>
               <Information>Páginas</Information>
                <Information>Editora</Information>
                <Information>Publicação</Information>
                <Information>Idioma</Information>
                <Information>Título Original</Information>
                <Information>ISBN-10</Information>
                <Information>ISBN-13</Information>
              </Informations>
              <DataContainer>
                <Data>{book.pageCount} páginas</Data>  
                <Data>editora {book.publisher}</Data>  
                <Data>{book.published}</Data>  
                <Data>{book.language}</Data>  
                <Data>{book.title}</Data>  
                <Data>{book.isbn10}</Data>  
                <Data>{book.isbn13}</Data>  
              </DataContainer>
            </InformationsContainer>
            <ContainerReview>
              <TitleReview>RESENHA REVIEW</TitleReview>
                  <Description>
                    <img src={Quotes}/>
                    {book.description}
                  </Description>
            </ContainerReview>
          </ContainerText>
        </ContainerInternalModal>
      </ContainerModal>
    </Background>
  )
}
