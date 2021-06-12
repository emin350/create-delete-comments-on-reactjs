import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import "../App.css"

const YaziListesi = () => {
  const [yaziListesi, setYaziListesi] = useState([]);

  useEffect(() => {
    axios
      .get("https://eminbackend.herokuapp.com/posts")
      .then((response) => {
        console.log(response);
        setYaziListesi(response.data);
      })
      .catch((error) => { console.log(error) })
  }, []);

  return (
    <div className="ui list" id="liste">
      {yaziListesi.map((yazi) => {
        return (
          <div className="item" key={yazi.id}>
            <div className="content">
              <Link to={`/posts/${yazi.id}`} className="header">{yazi.title} </Link>
              <div className="description">{ }</div>
            </div>
          </div>);
      })}
      <button className="ui secondary button" > <Link to={`/yazi_ekle`} style={{ color: 'white' }}> Yazı Ekle </Link></button>
    </div>
  )
}
export default YaziListesi;
