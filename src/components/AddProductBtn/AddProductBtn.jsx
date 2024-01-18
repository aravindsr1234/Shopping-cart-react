import { useEffect, useState } from "react";
import './AddProductBtn.css';
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getCategory } from "../../features/category/categorySlice";

const AddProductBtn = () => {

    const dispatch = useDispatch();
    const categoryData = useSelector((state) => { return state.category.getCategoryData });

    useEffect(() => {
        dispatch(getCategory());
    },[dispatch])

    const [createProductModal, setCreateProductModal] = useState(false);
    const [data, setData] = useState({
        productName: '',
        category: '',
        price: '',
        description: '',
    });
    console.log('data', data);

    const [files, setFile] = useState([]);
    console.log(files);

    const editBtn = () => {
        setCreateProductModal(true);
    };

    const handleChange = (e) => {
        const value = e.target.value;
        const input = e.target.name;
        setData({ ...data, [input]: value });
    };

    const handleImageChange = (e) => {
        const newFiles = [];
        for (let i = 0; i < e.target.files.length; i++) {
            newFiles.push(e.target.files[i]);
        }
        setFile(newFiles);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('productName', data.productName);
        formData.append('categoryId', data.category || categoryData[0].id);
        formData.append('price', data.price);
        formData.append('description', data.description);
        files.map((data) => {
            formData.append('files', data);
        });

        const result = await axios.post(`http://localhost:4000/product`, formData);
        console.log(result);
    }

    return (
        <>
            <button type="type" onClick={editBtn}>Add Product</button>
            <div className="admin_product_form">
                {createProductModal ?
                    <form className="edit_product_form" onSubmit={handleSubmit} encType="multipart/form-data">
                        <label htmlFor="">ProductName:</label>
                        <input type="text" name="productName" placeholder="ProductName" onChange={handleChange} />
                        <label htmlFor="">Category:</label>
                        <select name="category" id="" onChange={handleChange}>
                            {categoryData.map((data, index) => (
                                <option key={index} value={data.id}>{data.categoryName}</option>
                            ))}
                        </select>
                        <label htmlFor="">Price:</label>
                        <input type="text" placeholder="price" name="price" onChange={handleChange} />
                        <label htmlFor="">Description:</label>
                        <input type="text" placeholder="Description" name="description" onChange={handleChange} />
                        <label htmlFor="">Image:</label>
                        <input type="file" multiple onChange={handleImageChange} />
                        <button type="submit">Add Product</button>
                        <button type="button" onClick={editBtn}>Cancel</button>
                    </form> : ""
                }
            </div>
        </>
    )
};

export default AddProductBtn;