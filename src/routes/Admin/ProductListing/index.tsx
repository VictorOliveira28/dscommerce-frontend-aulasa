import "./styles.css";
import * as productService from "../../../services/product-service";
import updateButton from "../../../assets/edit.svg";
import deleteButton from "../../../assets/delete.svg";
import computerImg from "../../../assets/computer.png";
import { useEffect, useState } from "react";
import { ProductDTO } from "../../../models/product";
import SearchBar from "../../../components/SearchBar";
import ButtonNextPage from "../../../components/ButtonNextPage";
import DialogInfo from "../../../components/DialogInfo";
import DialogConfirmation from "../../../components/DialogConfirmation";

type QueryParams = {
  page: number;
  name: string;
};

export default function ProductListing() {
  const [dialogInfoData, setDialogInfoData] = useState({
    visible: false,
    message: "Operação com Sucesso!",
  });

  const [dialogConfirmationData, setDialogConfirmationData] = useState({
    visible: false,
    message: "Tem certeza?",
  });

  const [isLastPage, setIsLastPage] = useState(false);

  const [products, setProducts] = useState<ProductDTO[]>([]);

  const [queryParams, setQueryParam] = useState<QueryParams>({
    page: 0,
    name: "",
  });

  useEffect(() => {
    productService
      .findPageRequest(queryParams.page, queryParams.name)
      .then((response) => {
        const nextPage = response.data.content;
        setProducts(products.concat(nextPage));
        setIsLastPage(response.data.last);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryParams]);

  function handleSearch(searchText: string) {
    setProducts([]);
    setQueryParam({ ...queryParams, page: 0, name: searchText });
  }

  function handleNextPageClick() {
    setQueryParam({ ...queryParams, page: queryParams.page + 1 });
  }

  function handleDialogInfoClose() {
    setDialogConfirmationData({ ...dialogConfirmationData, visible: false });
  }

  function handleDeleteClick() {
    setDialogConfirmationData({ ...dialogConfirmationData, visible: true });
  }

  function handleDialogConfirmationAnswer(answer: boolean) {
    console.log("Resposta ", answer);
    setDialogConfirmationData({ ...dialogInfoData, visible: false });
  }

  return (
    <>
      <main>
        <section id="product-listing-section" className="dsc-container">
          <h2 className="dsc-section-title dsc-mb20">Cadastro de produtos</h2>

          <div className="dsc-btn-page-container dsc-mb20">
            <div className="dsc-btn dsc-btn-white">Novo</div>
          </div>

          <SearchBar onSearch={handleSearch} />

          <table className="dsc-table dsc-mb20 dsc-mt20">
            <thead>
              <tr>
                <th className="dsc-tb576">ID</th>
                <th></th>
                <th className="dsc-tb768">Preço</th>
                <th className="dsc-txt-left">Nome</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td className="dsc-tb576">{product.id}</td>
                  <td>
                    <img
                      className="dsc-product-listing-image"
                      src={computerImg}
                      alt={product.name}
                    />
                  </td>
                  <td className="dsc-tb768">R$ {product.price.toFixed(2)}</td>
                  <td className="dsc-txt-left">{product.name}</td>
                  <td>
                    <img
                      className="dsc-product-listing-btn"
                      src={updateButton}
                      alt="Editar"
                    />
                  </td>
                  <td>
                    <img
                      onClick={handleDeleteClick}
                      className="dsc-product-listing-btn"
                      src={deleteButton}
                      alt="Deletar"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {!isLastPage && (
            <div onClick={handleNextPageClick}>
              <ButtonNextPage />
            </div>
          )}
        </section>

        {dialogInfoData.visible && (
          <DialogInfo
            message={dialogInfoData.message}
            onDialogClose={handleDialogInfoClose}
          />
        )}

        {dialogConfirmationData.visible && (
          <DialogConfirmation
            message={dialogConfirmationData.message}
            onDialogAnswer={handleDialogConfirmationAnswer}
          />
        )}
      </main>
    </>
  );
}
