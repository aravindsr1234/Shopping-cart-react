import axios from "axios";
import { useEffect, useState } from "react";

const EditCategoryBtn = ({ data, modal, reset }) => {
    if (data) {
        console.log(data.categoryName);
        console.log("data", data)
    }
    useEffect(() => {
        setEditData(data);
    }, [data]);

    const [editData, setEditData] = useState({
        categoryName: '',
        image: '',
    });

    if (editData) {
        console.log('editdata', editData.categoryName);
    }

    if (editData) {
        console.log("editData", editData);
    }

    const editModal = () => {
        reset(true)
    }

    const closeEditModal = () => {
        reset(false)
    }

    const handleChange = (e) => {
        const value = e.target.value;
        const inputName = e.target.name;
        setEditData({ ...editData, [inputName]: value })
    }

    const handleSubmit = async (id) => {
        console.log('id', id);
    }
    return (
        <>
            {/* <h1>EditCategoryBtn</h1> */}
            {/* <button onClick={editModal}>Edit</button> */}
            <div className="add_category">
                {modal ?
                    <form onSubmit={(e) => handleSubmit(data._id)}>
                        <input type="text" name="categoryName" value={editData.categoryName || ''} onChange={handleChange} />
                        <img src={data.image} alt="" className="editData" />
                        <input type="file" name="image" onChange={handleChange} />
                        <button type="submit" className="categoryAddBtn">Edit Data</button>
                        <button type="button" onClick={closeEditModal}>Cancel</button>
                    </form>
                    :
                    ""}
            </div>
        </>
    );
};

export default EditCategoryBtn;