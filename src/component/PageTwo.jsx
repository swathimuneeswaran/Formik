import React from "react";
import './style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function PageTwo() {
  const books = [
    {
      id: 1,
      name: "Liza of Lambeth",
      author: "	W. Somerset Maugham",
      publication: 1897,
      isbn: 9780434456017,
      img:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Liza_of_Lambeth_Front_cover.jpg/330px-Liza_of_Lambeth_Front_cover.jpg"
    },
    {
      id: 2,
      name: "Mrs Craddock",
      author: "	W. Somerset Maugham",
      publication: 1902,
      isbn: 978043789999,
      img:"https://upload.wikimedia.org/wikipedia/en/c/c5/MrsCraddock.jpg"
    },
    {
      id: 3,
      name: "The Magician",
      author: "	W. Somerset Maugham",
      publication: 1908,
      isbn: 8778043789999,
      img:"https://upload.wikimedia.org/wikipedia/en/d/de/TheMagicianMaugham.jpg"
    },
    {
      id: 4,
      name: "The Painted Veil",
      author: "	W. Somerset Maugham",
      publication: 1925,
      isbn: 94575904889999,
      img:"https://upload.wikimedia.org/wikipedia/en/2/27/PaintedVeil.jpg"
    },
    {
      id: 5,
      name: "The Narrow Corner",
      author: "	W. Somerset Maugham",
      publication: 1932,
      isbn: 256043789999,
      img:"https://upload.wikimedia.org/wikipedia/en/2/2d/The_Narrow_Corner.jpg"
    },
    {
      id: 6,
      name: "Up at the Villa",
      author: "	W. Somerset Maugham",
      publication: 1941,
      isbn: 897643789999,
      img:"https://upload.wikimedia.org/wikipedia/en/d/d1/UpAtTheVilla.jpg"
    },
    {
      id: 7,
      name: "The Razor's Edge",
      author: "	W. Somerset Maugham",
      publication: 1944,
      isbn: 967843789999,
      img:"https://upload.wikimedia.org/wikipedia/en/c/ce/The_Razor%27s_Edge_1st_ed.jpg"
    },
    {
      id: 8,
      name: "Catalina",
      author: "	W. Somerset Maugham",
      publication: 1948,
      isbn: 345673789999,
      img:"https://upload.wikimedia.org/wikipedia/en/2/26/CatalinaMaugham.jpg"
    },
    {
      id: 9,
      name: "The Moon and Sixpence",
      author: "	W. Somerset Maugham",
      publication: 1919,
      isbn: 978043789999,
      img:"https://upload.wikimedia.org/wikipedia/en/6/69/The_Moon_and_Sixpence.jpg"
    },
    {
      id: 10,
      name: "Theatre",
      author: "	W. Somerset Maugham",
      publication: 1937,
      isbn: 456883789999,
      img:"https://upload.wikimedia.org/wikipedia/en/8/87/Theatre_%28novel%29.jpg"
    },
  ];
  return (
    <>
    <div className="container-fluid head1">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/004/297/596/small_2x/education-logo-open-book-dictionary-textbook-or-notebook-with-sunrice-icon-modern-emblem-idea-concept-design-for-business-libraries-schools-universities-educational-courses-vector.jpg"
          alt="book"
          className="image1"
        ></img>
        <h1 className="lib">Library Management📚</h1>
        <button className="but1">
          <FontAwesomeIcon icon={faUser} className="ic" />
          Logout
        </button>
      </div>
      <div className="container">
        <div className="container1">
      <table className="tab">
        
          <tr>
            <td>S.No</td>
            <td>NAME</td>
            <td>AUTHOR</td>
            <td>PUBLICATION</td>
            <td>ISBN NUMBER</td>
            <td>IMAGE</td>
          </tr>
        
        {books.map((book) => (
          <tbody>
            <tr>
              <td>{book.id}</td>
              <td>{book.name}</td>
              <td>{book.author}</td>
              <td>{book.publication}</td>
              <td>{book.isbn}</td>
              <td><img src={book.img} style={{width:"60px",height:"100px"}}></img></td>
            </tr>
          </tbody>
        ))}
      </table>
      </div>
      </div>
    </>
  );
}

export default PageTwo;
