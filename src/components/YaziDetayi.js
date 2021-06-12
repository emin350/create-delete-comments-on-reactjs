import React, { useEffect, useState } from 'react'
import axios from "axios";
import YaziYorumlari from './YaziYorumlari';
import SilModal from "./SilModal"
import { Link, useParams, useHistory, useLocation } from "react-router-dom";

const YaziDetayi = (props) => {
    const { id } = props.match.params;
    const [yaziDetayi, setYaziDetayi] = useState([]);
    const [yorumlar, setYorumlar] = useState([]);
    const handleSubmit = (event, yorum) => {
        event.preventDefault();
        axios
            .post(`https://eminbackend.herokuapp.com/posts/${id}/comments`, yorum)
            .then((response) => {
                setYorumlar([...yorumlar, response.data])
            })
            .catch((error) => {
                console.log(error);
            })
    }
    useEffect(() => {
        axios
            .get(`https://eminbackend.herokuapp.com/posts/${id}`)
            .then((response) => {
                setYaziDetayi(response.data)
            })
            .catch((error) => {
                console.log(error)
            });
        axios
            .get(`https://eminbackend.herokuapp.com/posts/${id}/comments`)
            .then((response) => {

                setYorumlar(response.data)

            })
            .catch((error) => { console.log(error) })
    }, []);

    return (
        <React.Fragment>
            <h2 className="ui header"> {yaziDetayi.title} </h2>
            <p> {yaziDetayi.created_at}  </p>
            <div className="ui segment">
                <SilModal yazi={yaziDetayi} push={props.history.push} />
            </div>
            <p>{yaziDetayi.content}</p>
            <YaziYorumlari yorumlar={yorumlar} handleSubmit={handleSubmit} />
        </React.Fragment>
    );
};
export default YaziDetayi;
