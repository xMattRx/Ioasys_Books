import React, { useState } from 'react';
import Modal from '../Modal/index.js';
import { BookAuthor, BookAuthorContainer, BookBlock, BookBlockContainer, BookBlockImg, BookBlockTextContainer, BookTitle, Information, InformationContainer } from './styles.js';

export default function Book({book}) {
  const [toggleModal, setModal] = useState(false);

  const open = () => {
    setModal(true);
  }

  const close = () =>{
    setModal(false);
  }

  return (
    <>
          {toggleModal && <Modal book={book} close={close}/>}
          <BookBlock onClick={()=>{open()}}>

            <BookBlockContainer>
              <BookBlockImg src={book.imageUrl} alt={book.title}/>
              <BookBlockTextContainer>
                
                <BookTitle>
                  {book.title}
                </BookTitle>

              <BookAuthorContainer>
                {/* {authors.map((element,index)=>{
                  return <BookAuthor key={index}>
                    {element},
                  </BookAuthor>
                })} */}
                  <BookAuthor>
                    {book.authors[0]}
                  </BookAuthor>
                  <BookAuthor>
                    {book.authors[1]}
                  </BookAuthor>
               
              </BookAuthorContainer>

              <InformationContainer>
                  <Information>
                  {book.pageCount} páginas
                  </Information>
                  <Information>
                  Editora {book.publisher}
                  </Information>
                  <Information>
                  Publicado em {book.published}
                  </Information>
              </InformationContainer>

              </BookBlockTextContainer>
            </BookBlockContainer>
          </BookBlock>
    </>
  )
}
