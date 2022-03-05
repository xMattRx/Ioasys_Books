import React from 'react';
import { BookAuthor, BookBlock, BookBlockContainer, BookBlockImg, BookBlockTextContainer, BookTitle, Information, InformationContainer } from './styles.js';

export default function Book({image,title,authors,pages,publishing,year}) {
  return (
    <>
          <BookBlock>
            <BookBlockContainer>
              <BookBlockImg src={image}/>
              <BookBlockTextContainer>
                
                <BookTitle>
                  {title}
                </BookTitle>

                <BookAuthor>
                {authors[0]}
                </BookAuthor>

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
