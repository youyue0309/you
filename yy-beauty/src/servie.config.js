const SERVERURL = 'http://localhost:3000/';

const URL = {
  registUser: SERVERURL + 'user/registUser',
  loginUser: SERVERURL + 'user/loginUser',
  getType: SERVERURL + 'type/getTypes',
  getProductsByType: SERVERURL + 'product/getProductsByType',
  getUserList: SERVERURL + 'user/getUserList',
  deleteUser: SERVERURL + 'user/deleteUser',
  getProductList: SERVERURL + 'product/getProductList',
  searchProduct: SERVERURL + 'product/searchProduct',
  addProduct: SERVERURL + 'product/addProduct',
  updateProduct: SERVERURL + 'product/updateProduct',
  getDetail: SERVERURL + 'product/getDetail',
  addCart: SERVERURL + 'cart/addCart',
  getCart: SERVERURL + 'cart/getCart',
  delCart: SERVERURL + 'cart/delCart',
  addOrder: SERVERURL + 'order/addOrder',
  getOrder: SERVERURL + 'order/getOrder',
  delOrder: SERVERURL + 'order/delOrder',
  updatePassword: SERVERURL + 'user/updatePassword',
  updateAddress: SERVERURL + 'user/updateAddress',
  getuserDetail: SERVERURL + 'user/getuserDetail',
  getOrderList: SERVERURL + 'order/getOrderList',
  searchOrder: SERVERURL + 'order/searchOrder',
  delProduct: SERVERURL + 'product/delProduct'
};

export default URL;