import { atom } from "recoil";



const cart = atom({
  key: 'cart',
  default: [],
});

export const totalAmount = atom({
  key: 'totalAmount',
  default: 0,
});

export default cart