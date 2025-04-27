import "./styles.css";
import ButtonInverse from "../../../components/ButtonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary";
import SectionDetails from "../../../components/SectionDetails";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductDTO } from "../../../models/product";
import * as productService from "../../../services/product-service";

export default function ProductDetails() {
  const [product, setProduct] = useState<ProductDTO>();

  const params = useParams();

  useEffect(() => {
    productService.findById(Number(params.productId)).then((response) => {
      console.log(response.data);
      setProduct(response.data);
    });
  });

  return (
    <>
      <main>
        <section id="product-details-section" className="dsc-container">
          {product && <SectionDetails product={product} />}
          <div className="dsc-btn-page-container">
            <ButtonPrimary text="Comprar" />

            <Link to={`/`}>
              <ButtonInverse text="Inicio" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
