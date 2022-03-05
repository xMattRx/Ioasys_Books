import React from 'react';
import { BookAuthor, BookAuthorContainer, BookBlock, BookBlockContainer, BookBlockImg, BookBlockTextContainer, BookTitle, Information, InformationContainer } from './styles.js';

export default function Book({image,title,authors,pages,publishing,year}) {
  return (
    <>
          <BookBlock>
            <BookBlockContainer>
              <BookBlockImg src={image} alt={title}/>
              <BookBlockTextContainer>
                
                <BookTitle>
                  {title}
                </BookTitle>

              <BookAuthorContainer>
                {/* {authors.map((element,index)=>{
                  return <BookAuthor key={index}>
                    {element},
                  </BookAuthor>
                })} */}
                  <BookAuthor>
                    {authors[0]}
                  </BookAuthor>
                  <BookAuthor>
                    {authors[1]}
                  </BookAuthor>
               
              </BookAuthorContainer>


                <InformationContainer>
                  <Information>
                  {pages} páginas
                  </Information>
                  <Information>
                  Editora {publishing}
                  </Information>
                  <Information>
                  Publicado em {year}
                  </Information>
                </InformationContainer>

              </BookBlockTextContainer>
            </BookBlockContainer>
          </BookBlock>
    </>
  )
}
