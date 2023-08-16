import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


export default function CreateBook() {
  const [title, setOnChangeTitle] = useState("");
  const [author, setOnChangeAuthor] = useState("");
  const [description, setOnChangeDescription] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const individualbook = { author: author, title: title, description: description };
    console.log(individualbook);
    axios.post("https://backendfinalfullstack.onrender.com", individualbook).then((res) => {
      window.location = "/";
      console.log("add in progress");
    });
    console.log(individualbook);
  };

  return (
    <div className="CreateBook">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <br />
            <Link className="btn btn-info float-left" to="/">
              Show BooK List
            </Link>
          </div>
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Add Book</h1>
            <p className="lead text-center">Create New Book</p>
            <form noValidate="" onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Title of the Book"
                  name="title"
                  className="form-control"
                  value={title}
                  onChange={(e) => setOnChangeTitle(e.target.value)}
                  spellcheck="false"
                  data-ms-editor="true"
                  required
                />
                <br/>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Author"
                  name="author"
                  className="form-control"
                  value={author}
                  onChange={(e) => setOnChangeAuthor(e.target.value)}
                  spellcheck="false"
                  data-ms-editor="true"
                  required
                />
                <br/>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Describe this book"
                  name="description"
                  className="form-control"
                  value={description}
                  onChange={(e) => setOnChangeDescription(e.target.value)}
                  spellcheck="false"
                  data-ms-editor="true"
                />
              </div>
              <input type="submit" className="btn btn-info btn-block mt-4 col-md-12" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}