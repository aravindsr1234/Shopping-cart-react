import { useState } from "react";
import './Delete.css'
import axios from "axios";

const Delete = ({ id }) => {
    
    const [deleteModal, setDeleteModal] = useState(false);

    const closeModal = () => {
        setDeleteModal(true);
    }

    const deleteData = async (id) => {
        const data = {
            delete: 'delete',
        }
        console.log('data', data);
        const result = await axios.put(`http://localhost:4000/delete/?id=${id}`, data);
        setDeleteModal(false);
    }

    return (
        <>
            <button onClick={closeModal}>Delete</button>
            {deleteModal ?
                <div className="outley">
                    <div className="delete_modal ">
                        <h2>Are sure you want to delete?</h2>
                        <button onClick={() => deleteData(id)}>Yes</button>
                        <button onClick={() => setDeleteModal(false)}>No</button>
                    </div>
                </div> : ""
            }

        </>
    );
};

export default Delete;