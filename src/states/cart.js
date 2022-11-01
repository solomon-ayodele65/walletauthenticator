import { atom } from "recoil";



const cart = atom({
  key: 'cart',
  default: [],
});

export default cart