import React from 'react';
import axios from "axios"

const SilModal = ({ yazi, push }) => {
    const handleDelete = (id) => {
        axios
            .delete(`https://eminbackend.herokuapp.com/posts/${id}`)
            .then((response) => {
                push("/");
            })
    }
    return (
        <div>
            <button className="ui red button"
                type="button"
                onClick={() => {
                    handleDelete(yazi.id)
                }}

            >sil</button>

        </div>
    )
}
export default SilModal
