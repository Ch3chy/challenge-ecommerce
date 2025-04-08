import { ShoppingCartProduct } from "../types/shopping-cart.type";

export const calculeAddProduct = (
  product: ShoppingCartProduct,
  quantity = 1
) => {
  const newQuantity = product.quantity + quantity;
  const totalNeto = newQuantity * product.price;
  const totalTax = totalNeto * product.tax;
  const totalPrice = totalNeto + totalTax;

  return {
    ...product,
    quantity: newQuantity,
    totalNeto: totalNeto,
    totalTax: totalTax,
    totalPrice: totalPrice,
  };
};
