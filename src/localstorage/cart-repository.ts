import { OrderDTO } from "../models/order";

export function save(cart: OrderDTO) {
  const str = JSON.stringify(cart);
  localStorage.setItem("com.victoroliveira.catalogo/Cart", str);
}

export function get(): OrderDTO {
  const str =
    localStorage.getItem("com.victoroliveira.catalogo/Cart") || '{"items"}=[]';
  return JSON.parse(str);
}
