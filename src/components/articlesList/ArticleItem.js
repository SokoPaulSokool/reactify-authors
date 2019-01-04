import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBMask,
  MDBIcon,
  MDBView,
  MDBBtn,
  MDBContainer
} from "mdbreact";

const getDate = str => {
  let date = new Date(str);
  return (
    date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
  );
};

export default function ArticleItem(props) {
  console.log(props.article);
  return (
    <MDBCardBody>
      <MDBRow>
        <MDBCol lg="5">
          <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
            <img
              className="img-fluid"
              src="https://mdbootstrap.com/img/Photos/Others/img%20(27).jpg"
              alt=""
            />
            <a href="#!">
              <MDBMask overlay="white-slight" />
            </a>
          </MDBView>
        </MDBCol>
        <MDBCol lg="7">
          <h3 className="font-weight-bold mb-3 p-0">
            <strong>{props.article.title}</strong>
          </h3>
          <p>{props.article.body}</p>
          <p>
            by
            <a href="#!" className="ml-1">
              <strong>{props.article.author.username}</strong>
            </a>
            , {getDate(props.article.created_at)}
          </p>
          <MDBBtn color="primary" size="md" className="waves-light ">
            Read more
          </MDBBtn>
        </MDBCol>
      </MDBRow>
    </MDBCardBody>
  );
}
