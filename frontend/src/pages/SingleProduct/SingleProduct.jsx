import { useParams } from "react-router-dom";
import { PRODUCTS } from "../../PRODUCT";
import { useLocation } from "react-router-dom";
import './SingleProduct.css'
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/shop-context";
import { useContext } from "react";
import HomeSectionTen from "../../components/HomeSectionTen";
export const SingleProduct = () => {
  const { products, addToCart } = useContext(ShopContext);
  const { id } = useParams();
  const location = useLocation();
  const currentRoute = location.pathname.split("/")[1];
  console.log(currentRoute);
  const currentProduct =
  //   currentRoute === "sales"
  //     ? SALES.find((el) => el.id == id)
  products?.find((el) => el.id == id);
  return (
      <div className="singleProductPage">
          <div className="flexDiv">
            <img src={currentProduct?.images[0].files} />
            <div className="singleProduct">
              <div className="singleInfo">
                <h1>{currentProduct?.product_name}</h1>
                <p>{currentProduct?.product_description}</p>
                <h2>${currentProduct?.prod_price}</h2>
                <h4>VAT not included</h4>
              </div>
              <div className="sizeGuide">
                <h1>FR 34/XXS</h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <mask id="mask0_73_3323" style={{maskType: "alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                    <rect x="24" width="24" height="24" transform="rotate(90 24 0)" fill="#D9D9D9"/>
                  </mask>
                  <g mask="url(#mask0_73_3323)">
                    <path d="M2 8.02494L3.775 6.24994L12 14.4749L20.225 6.24994L22 8.02494L12 18.0249L2 8.02494Z" fill="#A9A9A9"/>
                  </g>
                </svg>
              </div>
              <div className="done">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <mask id="mask0_73_3536" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36">
                    <rect x="0.5" y="0.463867" width="35" height="35" fill="#D9D9D9"/>
                  </mask>
                  <g mask="url(#mask0_73_3536)">
                    <path d="M15.0833 24.3805L9.25 18.5472L11.2917 16.5055L15.0833 20.2972L24.7083 10.6722L26.75 12.7138L15.0833 24.3805Z" fill="white"/>
                  </g>
                </svg>
              </div>
              {/* <button className="wish" onClick={() => addToCart(id.data)}>
                <h1>ADD TO WISHLIST</h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                  <mask id="mask0_93_3929" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="24">
                    <rect x="0.5" width="24" height="24" fill="#D9D9D9"/>
                  </mask>
                  <g mask="url(#mask0_93_3929)">
                    <path d="M12.5 21L11.05 19.7C9.36667 18.1834 7.975 16.875 6.875 15.775C5.775 14.675 4.9 13.6875 4.25 12.8125C3.6 11.9375 3.14583 11.1334 2.8875 10.4C2.62917 9.66669 2.5 8.91669 2.5 8.15002C2.5 6.58336 3.025 5.27502 4.075 4.22502C5.125 3.17502 6.43333 2.65002 8 2.65002C8.86667 2.65002 9.69167 2.83336 10.475 3.20002C11.2583 3.56669 11.9333 4.08336 12.5 4.75002C13.0667 4.08336 13.7417 3.56669 14.525 3.20002C15.3083 2.83336 16.1333 2.65002 17 2.65002C18.5667 2.65002 19.875 3.17502 20.925 4.22502C21.975 5.27502 22.5 6.58336 22.5 8.15002C22.5 8.91669 22.3708 9.66669 22.1125 10.4C21.8542 11.1334 21.4 11.9375 20.75 12.8125C20.1 13.6875 19.225 14.675 18.125 15.775C17.025 16.875 15.6333 18.1834 13.95 19.7L12.5 21Z" fill="#1C1B1F"/>
                  </g>
                </svg>
              </button> */}
              <Link to='/products' className="buy">
                <h1>BUY IT NOW</h1>
              </Link>
              <h1 className="free">Free shipping for you</h1>
            </div>
            
          </div>
          <HomeSectionTen />
      </div>
    );
  };

 export default SingleProduct;