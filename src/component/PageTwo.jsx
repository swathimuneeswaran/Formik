// PageTwo.js
import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import './style.css';
import BookContext from "../context/TableContext";
import { Link } from "react-router-dom";

function PageTwo() {
  const { books } = useContext(BookContext);

  return (
    <>
      <div className="container-fluid head1" >
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/004/297/596/small_2x/education-logo-open-book-dictionary-textbook-or-notebook-with-sunrice-icon-modern-emblem-idea-concept-design-for-business-libraries-schools-universities-educational-courses-vector.jpg"
          alt="book"
          className="image1"
        />
        <h1 className="lib">Library Management📚</h1>
        <button className="but1"><Link to="/" style={{textDecoration:"none"}}> <FontAwesomeIcon icon={faUser} className="ic" />
          Logout </Link>
        </button>
      </div>
      <div className="container" style={{backgroundImage:"url('https://i.pinimg.com/originals/67/18/22/671822c2f63dd5f65d8fd15c9710420b.jpg')",height:"100vh"}}>
        <div className="container1" style={{display:"flex",justifyContent:"center",alignItems:"center"}} >
          <table className="tab" >
            <thead>
              <tr>
                <th>S.No</th>
                <th>NAME</th>
                <th>AUTHOR</th>
                <th>PUBLICATION</th>
                <th>ISBN NUMBER</th>
                <th>IMAGE</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book, index) => (
                <tr key={book.id}>
                  <td>{index + 1}</td>
                  <td>{book.name}</td>
                  <td>{book.author}</td>
                  <td>{book.publication}</td>
                  <td>{book.isbn}</td>
                  <td>
                    <img src={book.img} alt={book.name} style={{ width: "60px", height: "100px" }} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default PageTwo;
