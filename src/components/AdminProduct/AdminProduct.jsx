import './AdminProduct.css';
import AddProductBtn from "../AddProductBtn/AddProductBtn";
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCategoryRow } from '../../features/categoryRowSlice/categoryRowSlice';
import AdminProductEdit from '../AdminProductEdit/AdminProductEdit';
import ProductDelete from '../ProductDelete/ProductDelete';

const AdminProduct = () => {

    const { id } = useParams();
    let categoryId = id;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getCategoryRow(id));
    }, [id, dispatch]);

    const product = useSelector((state) => state.categoryRow.getCategoryRow);
    console.log(product);

    const filterData = product.filter((filter) => (filter.categoryId === categoryId));

    const productById = async (id) => {
        navigate(`/adminProductById/${id}`);
    }

    return (
        <>
            <div className="admin_product_container">
                <div className="admin_product_header">
                    <h1>Products</h1>
                    <AddProductBtn />
                </div>
                <div className="product_layout">
                    {Array.isArray(filterData) ? (
                        filterData.map((product, index) => (
                            <div className="products" key={index} >
                                <div onClick={() => productById(product._id)}>
                                    <img src={product.images[0]} alt="" />
                                    <div className="product_content">
                                        <h1>{product.productName}</h1>
                                        <h2>13th Gen Laptops</h2>
                                        <h3>Rs:{product.price}</h3>
                                    </div>
                                </div>
                                <AdminProductEdit id={product._id} data={product} />
                                <ProductDelete id={product._id} />
                            </div>
                        ))
                    ) : (
                        <p>No products available</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default AdminProduct;