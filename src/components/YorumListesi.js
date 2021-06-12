import React from 'react'
import axios from "axios"


const YorumListesi = (props, push, yorum) => {
   
    return (
        <React.Fragment>

            <h3>Yorumlar</h3>

            {props.yorumlar.map((yorum) => {
                return (
                    <div className="ui relaxed list" key={yorum.id}>
                        <div className="item">
                            <div className="content">
                                <span className="header">{yorum.display_name}</span>
                                <div className="description">{yorum.body}</div>
                            </div>
                        </div>

                    </div>
                )

            })}

        </React.Fragment>
    )
}

export default YorumListesi
