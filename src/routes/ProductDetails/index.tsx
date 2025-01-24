import './styles.css';
import ButtonInverse from "../../components/ButtonInverse";
import ButtonPrimary from "../../components/ButtonPrimary";
import HeaderClient from "../../components/HeaderClient";
import ProductCategory from "../../components/ProductCategory";
import SectionDetails from "../../components/SectionDetails";

export default function ProductDetails() {
    
    return (
        <>
            <HeaderClient/>    
            <main>
              <section id="product-details-section" className="dsc-container">
                  <SectionDetails />
                  <div className="dsc-category-container">
                    <ProductCategory />
                    <ProductCategory />
                  </div>
                <div className="dsc-btn-page-container">
                  <ButtonPrimary />
                  <ButtonInverse />
                </div>
              </section>
            </main>
            </>
    );
}