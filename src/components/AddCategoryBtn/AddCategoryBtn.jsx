import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createCategory } from "../../features/category/categorySlice";

const AddCategoryBtn = ({ data, reset }) => {
    const dispatch = useDispatch;
    // console.log(data, reset);
    const [postData, setPostData] = useState({
        categoryName: '',
        image: '',
    })
    const [file, setFile] = useState(null);
    console.log(postData);
    console.log(file);

    const handleChange = (e) => {
        const value = e.target.value;
        const inputName = e.target.name;
        setPostData({ ...postData, [inputName]: value });
    };

    const HandleImageChange = (e) => {
        console.log(e.target.files[0]);
        const selectedFile = e.target.files[0];
        console.log(e.target.files[0]);
        setFile(selectedFile);
        // if (selectedFile) {
        //   setImagePreview(URL.createObjectURL(selectedFile));
        // } else {
        //   setImagePreview(" ");
        // }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('categoryName', postData.categoryName);
        formData.append('image', file);
        const result = await axios.post('http://localhost:4000', formData);
        // dispatch(createCategory(postData));
    }

    const btnSet = () => {
        reset(true);
    }

    const closeBtnSet = () => {
        reset(false);
    }
    return (
        <>
            <button onClick={btnSet}>ADD Category</button>
            <div className="add_category">
                {data ?
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="categoryName">Category Name:</label>
                        <input type="text" name="categoryName" value={postData.categoryName} onChange={handleChange} placeholder="Category Name" />
                        <label htmlFor="categoryName">Category Image:</label>
                        <input type="file" name="image" onChange={HandleImageChange} />
                        <button type="submit" className="categoryAddBtn">create</button>
                        <button type="button" onClick={closeBtnSet}>Cancel</button>
                    </form> :
                    null
                }
            </div>
        </>
    );
};

export default AddCategoryBtn;