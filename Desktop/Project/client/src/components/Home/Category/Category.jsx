import { useNavigate } from "react-router-dom";
import "./Category.scss";

const Category = ({ categories }) => {
    const navigate = useNavigate();
    return (
        <div className="shop-by-category">
              <h1 className="title">Categories</h1>
            <div className="categories">
                {categories?.data?.map((item) => (
                    <div
                        key={item.id}
                        className="category"
                        onClick={() => navigate(`/category/${item.id}`)}
                    >
                        <img className="imgcategory"
                            src={
                                
                                process.env.REACT_APP_STRIPE_APP_DEV_URL +
                                item.attributes.img.data.attributes.url
                            } alt=""
                        
                        /> 
                    </div>
                ))}
            </div>
        </div>
        
    );
};

export default Category;
