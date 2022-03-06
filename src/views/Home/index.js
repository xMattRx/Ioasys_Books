
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowImg from '../../assets/images/In/Arrow.svg';
import ArrowRight from '../../assets/images/In/ArrowLeft.svg';
import ArrowLeft from '../../assets/images/In/ArrowRight.svg';
import Logo from '../../assets/images/In/Logo.svg';
import ShapeImg from '../../assets/images/In/Shape.svg';
import Book from '../../components/Book';
import { getName } from '../../functions/getName';
import { getBooks } from '../../Services/api';
import { Arrow, ArrowIcon, Arrows, Background, BodyContainer, Container, HeaderContainer, IconContainer, LeftArrowPage, Pagination, ResponsivePagination, RightArrowPage, Shape, SignOut, TextContainer, TextIconContainer, TextPagination, Title } from './styles';

export default function Home() {
  
  const [books, setBooks] = useState([]);
  const [name, setName] = useState('');
  const [currentPage, setCurrentPage] = useState(1)
  
  let navigate = useNavigate();

  const catchBooks = async (number = currentPage) =>{
    try{
    let books = await getBooks(number);
    console.log(books)
    setBooks(books)
    }catch(err){ 
      console.log(err)
      navigate('/');
    }
  }
  const increase = () => {
    if(currentPage < 42){
      let number = currentPage + 1;
      setCurrentPage(currentPage+1)
      catchBooks(number)
    }
  }
  const decrease = () => {
    if(currentPage > 1){
      let number = currentPage - 1;
      setCurrentPage(currentPage-1)
      catchBooks(number)
    }
  }
  const leave = () => {
    sessionStorage.clear();
    navigate('/');
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
            <IconContainer onClick={()=>{leave()}}>
              <ArrowIcon src={ArrowImg}/>
              <Shape src={ShapeImg}/>
            </IconContainer>
          </SignOut>
       </HeaderContainer>
     </header>

    
     <main>
    <Container>
      <BodyContainer>
      
      {books.length > 0 && books.map((book,index) => {
          return <Book key={index} book={book} />
      })}

    

      </BodyContainer>
     

      <Pagination>
     
        {currentPage > 0 &&
          <TextPagination>Página <span>{currentPage}</span> de<span> 42</span></TextPagination>
        }
        <Arrows>

        <Arrow onClick={()=>{decrease()}}  pages={currentPage} side="left">
            {currentPage > 1 ?
              <LeftArrowPage src={ArrowLeft}/> :
              <RightArrowPage src={ArrowRight}/>
            }
          </Arrow>

          <Arrow onClick={()=>{increase()}} pages={currentPage} side="right">
          {currentPage < 42 ?
              <RightArrowPage src={ArrowLeft}/> :
              <LeftArrowPage src={ArrowRight}/>
            }
          </Arrow>

        </Arrows>
      </Pagination>
          
      <ResponsivePagination>

      <Arrow onClick={()=>{decrease()}}  pages={currentPage} side="left">
            {currentPage > 1 ?
              <LeftArrowPage src={ArrowLeft}/> :
              <RightArrowPage src={ArrowRight}/>
            }
          </Arrow>

      {currentPage > 0 &&
          <TextPagination>Página <span>{currentPage}</span> de<span> 42</span></TextPagination>
        }
        <Arrows>

          <Arrow onClick={()=>{increase()}} pages={currentPage} side="right">
          {currentPage < 42 ?
              <RightArrowPage src={ArrowLeft}/> :
              <LeftArrowPage src={ArrowRight}/>
            }
          </Arrow>

        </Arrows>
      </ResponsivePagination>


    </Container>
     </main>

   

    </>
  )
}
