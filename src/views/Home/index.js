import React, { useEffect, useState } from 'react';
import ArrowImg from '../../assets/images/In/Arrow.svg';
import Logo from '../../assets/images/In/Logo.svg';
import ShapeImg from '../../assets/images/In/Shape.svg';
import Book from '../../components/Book';
import { getName } from '../../functions/getName';
import { getBooks } from '../../Services/api';
import { Arrow, Background, BodyContainer, HeaderContainer, IconContainer, Shape, SignOut, TextContainer, TextIconContainer, Title } from './styles';

export default function Home() {
  const [books, setBooks] = useState([]);
  const [name, setName] = useState('');

  const catchBooks = async () =>{
    var url_atual = window.location.href.split("/")[4];
    let books = await getBooks(url_atual);
    setBooks(books)
  }

  useEffect(()=>{
    setName(getName())
    catchBooks()
  },[])

  
  return (
    <>
    <Background/>
     <header>
       <HeaderContainer>
          <TextContainer>
          <img src={Logo} alt="ioasys"/> 
          <Title>Books</Title>
          </TextContainer>
          <SignOut>
            <TextIconContainer>
             Bem vindo, <span>{name}!</span>
            </TextIconContainer>
            <IconContainer>
              <Arrow src={ArrowImg}/>
              <Shape src={ShapeImg}/>
            </IconContainer>
          </SignOut>
       </HeaderContainer>
     </header>
     <main>
      <BodyContainer>
      {books.length > 0 && books.map((book,index) => {
          return <Book key={index} id={book.id} image={book.imageUrl} title={book.title} authors={book.authors} pages={book.pageCount}
          publishing={book.publisher} year={book.published}
          />
      })}
      </BodyContainer>
     </main>
     <div>
       
     </div>     
   

    </>
  )
}
