import { useEffect, useState } from "react";
import { getCategory } from "../../features/category/categorySlice";
import { useDispatch, useSelector } from "react-redux";
import AddCategoryBtn from "../AddCategoryBtn/AddCategoryBtn";
import EditCategoryBtn from "../EditCategoryBtn/EditCategoryBtn";
import Delete from "../Delete/Delete";
import './AdminCategory.css'
import { useNavigate } from "react-router-dom";

const AdminCategory = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [categoryModal, setCategoryModal] = useState(false);
    const [editData, setEditData] = useState();
    console.log(editData);

    const categoryData = useSelector((state) => { return state.category.getCategoryData });

    useEffect(() => {
        dispatch(getCategory());
    }, [dispatch]);


    return (
        <>
            <div className="admin_container">
                <div className="admin_category_header">
                    <h1 className="admin_category_heading">Categorys</h1>
                    <AddCategoryBtn data={categoryModal} reset={setCategoryModal} />
                </div>
                <div className="admin_content_container">
                    {categoryData.map((data, index) => (
                        <div className="cate" key={index}>
                            <div className="content_img_name" onClick={() => navigate(`/adminProduct/${data.id}`)}>
                                <img src={data.image} alt="" className="admin_content_img" />
                                <h1>{data.categoryName}</h1>
                            </div>
                            <div>
                                {/* <button onClick={() => editBtn(data)}>Edit</button> */}
                                {/* <EditCategoryBtn onClick={() => editBtn(data)} data={editData} modal={editCategoryModal} reset={setEditCategoryModal}/> */}
                                <EditCategoryBtn id={data._id} data={data} />
                                <Delete id={data._id} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default AdminCategory;
