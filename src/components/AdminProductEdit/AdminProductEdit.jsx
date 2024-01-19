import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";

const AdminProductEdit = ({ id, data }) => {

    const [editModal, setEditModal] = useState(false);
    const [editId, setEditId] = useState()
    const [editData, setEditData] = useState({
        productName: '',
        category: '',
        price: '',
        description: '',
    });
    const [files, setFile] = useState([]);
    console.log('files', files);
    console.log('editData', editData);

    const categoryData = useSelector((state) => { return state.category.getCategoryData });

    const editBtn = async (id) => {
        setEditId(id);
        const result = await axios.get(`http://localhost:4000/product/?id=${id}`);
        console.log(result);
        setEditData((data) => ({
            ...data,
            productName: result.data.productName,
            category: result.data.categoryId,
            price: result.data.price,
            description: result.data.description
        }));
        setEditModal(true)
    };

    const handleChange = (e) => {
        const value = e.target.value;
        const inputName = e.target.name;
        setEditData({ ...editData, [inputName]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('productName', editData.productName);
        formData.append('categoryId', editData.category || categoryData[0].id);
        formData.append('price', editData.price);
        formData.append('description', editData.description);
        files.map((data) => {
            formData.append('files', data);
        });
        const result = await axios.put(`http://localhost:4000/product/?id=${editId}`, formData, { new: true });
        console.log(result);
    };

    const handleImageChange = (e) => {
        const newFiles = [];
        for (let i = 0; i < e.target.files.length; i++) {
            newFiles.push(e.target.files[i]);
        }
        setFile(newFiles);
    };

    return (
        <>
            <button onClick={() => editBtn(data._id)}>Edit</button>
            {editModal ?
                <form className="edit_product_form edit_product" onSubmit={handleSubmit} encType="multipart/form-data">
                    <label htmlFor="">ProductName:</label>
                    <input type="text" value={editData.productName} name="productName" placeholder="ProductName" onChange={handleChange} />
                    <label htmlFor="">Category:</label>
                    <select name="category" id="" onChange={handleChange}>
                        {categoryData.map((data, index) => (
                            <option  value={editData.categoryId}>{data.categoryName}</option>
                        ))}
                    </select>
                    <label htmlFor="">Price:</label>
                    <input type="text" value={editData.price} placeholder="price" name="price" onChange={handleChange} />
                    <label htmlFor="">Description:</label>
                    <input type="text" placeholder="Description" value={editData.description} name="description" onChange={handleChange} />
                    <label htmlFor="">Image:</label>
                    <input type="file" multiple onChange={handleImageChange} />
                    <button type="submit">Edit Product</button>
                    <button type="button" onClick={() => setEditModal(false)}>Cancel</button>
                </form> : ""
            }
        </>
    );
};

export default AdminProductEdit;