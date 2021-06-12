import React, { useState } from 'react';
import axios from "axios";
import { withRouter } from 'react-router-dom';
import { Link } from "react-router-dom";

const YaziFormu = (props) => {
  const [hata, setHata] = useState("");
  const [yazi, SetYazi] = useState({ title: "", content: "" });
  const onInputChange = (event) => {

    SetYazi({ ...yazi, [event.target.name]: event.target.value });
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`https://eminbackend.herokuapp.com/posts/`, yazi)
      .then((reponse) => {
        props.history.push('/');
      })
      .catch((error) => {
        console.log(error);
      })
  }
  return (
    <React.Fragment>
      <h1> YAZI EKLEME FORMU </h1>
      {hata && (
        <div className="ui error message">
          <div className="header">Hata</div>
          <p>{hata}</p>
        </div>
      )}
      <div className="ui form">
        <div className="field">
          <label>Yazı Başlığı</label>
          <input
            value={yazi.title}
            type="text"
            name="title"
            onChange={onInputChange}
          />
        </div>
        <div className="field">
          <label>Yazı İçeriği</label>
          <textarea
            value={yazi.content}
            rows="3"
            name="content"
            onChange={onInputChange}
          ></textarea>
        </div>
        <button className="ui primary button" onClick={onFormSubmit}>
          Gönder
        </button>
        <Link to="/" className="ui orange button">Anasayfa</Link>
      </div>
    </React.Fragment>
  )
}
export default withRouter(YaziFormu);
