import "./styles.css";
import ButtonInverse from "../../../components/ButtonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary";
import SectionDetails from "../../../components/SectionDetails";
import { ProductDTO } from "../../../models/product";

const product: ProductDTO = {
  id: 2,
  name: "Smart TV",
  description: "Esta TV é foda",
  imgUrl:
    "https://github.com/devsuperior/dscatalog-resources/blob/master/backend/img/2-big.jpg?raw=true",
  price: 2500.99,
  categories: [
    {
      id: 2,
      name: "Eletronicos",
    },
    {
      id: 3,
      name: "Computadores",
    },
    {
      id: 4,
      name: "Importados",
    },
  ],
};

export default function ProductDetails() {
  return (
    <>
      <main>
        <section id="product-details-section" className="dsc-container">
          <SectionDetails product={product} />

          <div className="dsc-btn-page-container">
            <ButtonPrimary text="Comprar" />
            <ButtonInverse text="Inicio" />
          </div>
        </section>
      </main>
    </>
  );
}
