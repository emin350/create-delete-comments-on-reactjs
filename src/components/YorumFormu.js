import React, { useState } from 'react'
import { Link } from "react-router-dom";

const YORUM_BASLANGIC = {
  display_name: "",
  body: "",
};

const YorumFormu = (props) => {
  const [yorum, setYorum] = useState(YORUM_BASLANGIC)
  const handleOnChange = (event) => {
    setYorum({ ...yorum, [event.target.name]: event.target.value });
  }
  return (
    <React.Fragment>
      <form
        onSubmit={(event) => {
          props.handleSubmit(event, yorum);
          setYorum(YORUM_BASLANGIC);
        }}
      >
        <div class="ui small icon input">
          <input
            type="text"
            placeholder="Adınız"
            name="display_name"
            value={yorum.display_name}
            onChange={handleOnChange}
          />
        </div>
        <div class="ui form">
          <div class="field">
            <textarea
              rows="2"
              name="body"
              placeholder="Yorumunuz"
              value={yorum.body}
              onChange={handleOnChange}
            ></textarea>
          </div>
        </div>
        <button className="ui blue button" type='submit'>
          Gönder
        </button>

        <Link to="/" className="ui orenge button">Anasayfa</Link>

      </form>

    </React.Fragment>
  )
}
export default YorumFormu
