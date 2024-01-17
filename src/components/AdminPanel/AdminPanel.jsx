import { useNavigate } from "react-router-dom";
import './AdminPanel.css'

const AdminPanel = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="admin_panel">
                <button onClick={() => navigate('/adminCategory')}>Category</button>
                <button onClick={() => navigate('/adminProduct')}>Products</button>
            </div>
        </>
    );
};

export default AdminPanel;