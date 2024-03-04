import {useState} from "react";
import "./style.css";
import { useFormik } from "formik";
import Popup from "./Popup";
import { Link } from "react-router-dom";

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

  const [bool,setBool]=useState(0);

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
    onSubmit:(values,{resetForm})=>{
     if(bool){
      setBool(0);
      resetForm({values:''});
     }else{
      setBool(1);
      console.log(values);
     }
    } 
  });

  console.log(formik.values);

  return (
    <>
      <div className="container two">
        <div className="bookform">
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
            ></input>
            { formik.touched.bookname && formik.errors.bookname ? (
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
            ></input>
            {formik.touched.year && formik.errors.year ? <span>{formik.errors.year}</span> : null}

            <input
              type="text"
              placeholder="ISBN Number.."
              name="isbnnumber"
              autoComplete="off"
              onChange={formik.handleChange}
              value={formik.values.isbnnumber}
              onBlur={formik.handleBlur}
            ></input>
            {formik.touched.isbnnumber &&formik.errors.isbnnumber ? (
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
            ></input>
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
            ></input>
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
            ></input>
            {formik.touched.biography && formik.errors.biography ? (
              <span>{formik.errors.biography}</span>
            ) : null}

            <input type="submit"></input>
          </form>
        </div>
        <div className="message-box">
          {
            bool?(<Popup onClick={formik.handleSubmit}/>):null
          }
        </div>
        <Link to="/" className="back_home">Back to Home</Link>
      </div>
    </>
  );
}

export default PageThree;
