import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Home = () => {
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
        <img
          src="https://static.vecteezy.com/system/resources/previews/022/574/913/large_2x/abstract-blurred-public-library-interior-space-blurry-room-with-bookshelves-by-defocused-effect-use-for-background-or-backdrop-in-abstract-blurred-publicbusiness-or-education-concepts-generative-ai-photo.jpg"
          alt="books"
          className="image2"
        ></img>
        <Link className="imgbut" to="/books">
          To see Books📕
        </Link>
        <Link className="imgbut1" to="/addbooks">
          To add Books
        </Link>
        <p className="para">
          Reading develops language skills and vocabulary.<br></br> Reading books is also
          a way to relax and reduce stress.<br></br> It is important to read a good book
          at least for <br></br>a few minutes each day to stretch the brain muscles<br></br> for
          healthy functioning.Books really are your<br></br> best friends as you can rely on them when you are bored,<br></br> upset, depressed, lonely or annoyed.
        </p>
        <img src="https://i.pinimg.com/originals/b3/89/82/b389821e94756ca017ef5bf3b5db3aa7.gif" className="jerry"></img>
      </div>
    </>
  );
};

export default Home;
