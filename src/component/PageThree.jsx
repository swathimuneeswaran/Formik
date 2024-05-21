// PageThree.js
import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import Popup from "./Popup";
import { Link } from "react-router-dom";

import "./style.css";
import BookContext from "../context/TableContext";

const validate = values => {
  const errors = {};

  if (!values.bookname) {
    errors.bookname = "*Book name should not be empty!!";
  } else if (values.bookname.length < 5) {
    errors.bookname = "*Must be minimum 5 characters";
  }

  if (!values.year) {
    errors.year = "*Year should not be empty!!";
  } else if (values.year.length < 4) {
    errors.year = "*Must be minimum 4 characters";
  }

  if (!values.isbnnumber) {
    errors.isbnnumber = "*ISBN Number should not be empty!!";
  } else if (values.isbnnumber.length < 5) {
    errors.isbnnumber = "*Must be minimum 5 characters";
  }

  if (!values.authorname) {
    errors.authorname = "*Author Name should not be empty!!";
  } else if (values.authorname.length < 5) {
    errors.authorname = "*Must be minimum 5 characters";
  }

  if (!values.dateofbirth) {
    errors.dateofbirth = "*DOB should not be empty!!";
  } else if (values.dateofbirth.length < 6) {
    errors.dateofbirth = "*Must be minimum 6 characters";
  }

  if (!values.biography) {
    errors.biography = "*Biography should not be empty!!";
  } else if (values.biography.length < 10) {
    errors.biography = "*Must be minimum 10 characters";
  }

  return errors;
};

function PageThree() {
  const [bool, setBool] = useState(false);
  const { addBook } = useContext(BookContext);

  const formik = useFormik({
    initialValues: {
      bookname: "",
      year: "",
      isbnnumber: "",
      authorname: "",
      dateofbirth: "",
      biography: "",
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      addBook({
        id: Date.now(),
        name: values.bookname,
        author: values.authorname,
        publication: values.year,
        isbn: values.isbnnumber,
        img: "https://via.placeholder.com/150", // Placeholder image
      });
      setBool(true);
      resetForm();
    }
  });

  return (
    <>
      <div className="container two">
      <button className="home_but"><Link to="/books" className="back_home"><i class='bx bx-chevron-left' style={{fontSize:"25px",padding:"9px"}}></i>Books</Link></button>
        <div className="bookform" >
          <h2>Book Details form</h2>
          <form onSubmit={formik.handleSubmit}>
            <input
              type="text"
              placeholder="Book name.."
              name="bookname"
              autoComplete="off"
              onChange={formik.handleChange}
              value={formik.values.bookname}
              onBlur={formik.handleBlur}
            />
            {formik.touched.bookname && formik.errors.bookname ? (
              <span>{formik.errors.bookname}</span>
            ) : null}

            <input
              type="number"
              placeholder="Published Year.."
              name="year"
              autoComplete="off"
              onChange={formik.handleChange}
              value={formik.values.year}
              onBlur={formik.handleBlur}
            />
            {formik.touched.year && formik.errors.year ? <span>{formik.errors.year}</span> : null}

            <input
              type="text"
              placeholder="ISBN Number.."
              name="isbnnumber"
              autoComplete="off"
              onChange={formik.handleChange}
              value={formik.values.isbnnumber}
              onBlur={formik.handleBlur}
            />
            {formik.touched.isbnnumber && formik.errors.isbnnumber ? (
              <span>{formik.errors.isbnnumber}</span>
            ) : null}

            <input
              type="text"
              placeholder="Author name.."
              name="authorname"
              autoComplete="off"
              onChange={formik.handleChange}
              value={formik.values.authorname}
              onBlur={formik.handleBlur}
            />
            {formik.touched.authorname && formik.errors.authorname ? (
              <span>{formik.errors.authorname}</span>
            ) : null}

            <input
              type="text"
              placeholder="Author DOB.."
              name="dateofbirth"
              autoComplete="off"
              onChange={formik.handleChange}
              value={formik.values.dateofbirth}
              onBlur={formik.handleBlur}
            />
            {formik.touched.dateofbirth && formik.errors.dateofbirth ? (
              <span>{formik.errors.dateofbirth}</span>
            ) : null}

            <input
              type="text"
              placeholder="Short Biography.."
              name="biography"
              autoComplete="off"
              onChange={formik.handleChange}
              value={formik.values.biography}
              onBlur={formik.handleBlur}
            />
            {formik.touched.biography && formik.errors.biography ? (
              <span>{formik.errors.biography}</span>
            ) : null}

            <input type="submit" />
          </form>
        </div>
        <div className="message-box">
          {bool ? <Popup onClick={() => setBool(false)} /> : null}
        </div>
       
      </div>
    </>
  );
}

export default PageThree;
