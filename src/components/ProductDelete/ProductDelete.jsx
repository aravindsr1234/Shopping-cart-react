import axios from "axios";
import { useState } from "react";

const ProductDelete = ({ id }) => {

    const [deleteModal, setDeleteModal] = useState(false);

    const deleteData = async (id) => {
        const data = {
            delete: 'delete',
        }
        console.log('data', data);
        const result = await axios.delete(`http://localhost:4000/product/?id=${id}`, data);
        setDeleteModal(false);
    }

    return (
        <>
            <button onClick={() => setDeleteModal(true)}>Delete</button>
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

export default ProductDelete;