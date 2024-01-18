import axios from "axios";
import { useEffect, useState } from "react";

const EditCategoryBtn = ({ data, id }) => {

    const [editData, setEditData] = useState({
        categoryName: '',
        image: '',
    });
    const [file, setFile] = useState(null);
    console.log('file', file);
    console.log('editData', editData);
    const [editId, setEditId] = useState();
    const [editModal, setEditModal] = useState(false);

    const editBtn = async (id) => {
        setEditId(id)
        const result = await axios.get(`http://localhost:4000/?id=${id}`);
        // console.log("result", result.data);
        setEditData((prevData) => ({
            ...prevData,
            categoryName: result.data.categoryName,
            image: result.data.image,
        }));
        setEditModal(true);
    };

    const handleChange = (e) => {
        const value = e.target.value;
        const inputName = e.target.name;
        setEditData({ ...editData, [inputName]: value });
    }

    const handleImageChange = (e) => {
        console.log(e.target.files[0]);
        const selectedFile = e.target.files[0];
        console.log(e.target.files[0]);
        setFile(selectedFile);
    }

    const closeEditModal = () => {
        setEditModal(false);
    }

    const editSubmit = async (e, id) => {
        // e.preventDefault();
        let formData = new FormData();
        formData.append('categoryName', editData.categoryName);
        formData.append('image', file);
        const result = await axios.put(`http://localhost:4000?id=${editId}`, formData);
        console.log('result', result);
    }

    return (
        <>
            <button onClick={() => editBtn(data._id)}>Edit</button>
            <div className="add_category">
                {editModal ?
                    <form onSubmit={() => editSubmit(data._id)}>
                        <input type="text" name="categoryName" onChange={handleChange} value={editData.categoryName} />
                        <img src={editData.image} alt="" className="editData" />
                        <input type="file" name="image" onChange={handleImageChange} />
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