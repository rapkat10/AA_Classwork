import React from 'react';
import BookList from '../components/books/BookList';
import NavBar from '../components/navbar/NavBar';

export default () => {
  return (
    <>
      <NavBar />
      <h1>Book Index Page</h1>
      <BookList />
    </>
  );
};