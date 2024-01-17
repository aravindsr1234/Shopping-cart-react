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
    // console.log(postData);
    const handleChange = (e) => {
        const value = e.target.value;
        const inputName = e.target.name;
        setPostData({ ...postData, [inputName]: value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await axios.post('http://localhost:4000', postData);
        // dispatch(createCategory(postData));
        console.log(result);
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
                        <input type="text" name="categoryName" value={postData.categoryName} onChange={handleChange} placeholder="Category Name"/>                        
                        <label htmlFor="categoryName">Category Image:</label>
                        <input type="file" name="image" value={postData.image} onChange={handleChange} />
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