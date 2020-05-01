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
  updateProduct: SERVERURL + 'product/updateProduct'
};

export default URL;