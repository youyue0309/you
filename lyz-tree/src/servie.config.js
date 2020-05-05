const SERVERURL = 'http://localhost:3000/';

const URL = {
  registUser: SERVERURL + 'user/registUser',
  loginUser: SERVERURL + 'user/loginUser',
  getType: SERVERURL + 'type/getTypes',
  getProductsByType: SERVERURL + 'product/getProductsByType',
  getProvinceId: SERVERURL + 'province/getProvinceId',
  getProductsByProvince: SERVERURL + 'product/getProductsByProvince',
  getUserList: SERVERURL + 'user/getUserList',
  deleteUser: SERVERURL + 'user/deleteUser',
  getProductList: SERVERURL + 'product/getProductList',
  searchProduct: SERVERURL + 'product/searchProduct',
  addProduct: SERVERURL + 'product/addProduct',
  updateProduct: SERVERURL + 'product/updateProduct',
  getDetail: SERVERURL + 'product/getDetail',
  getuserDetail: SERVERURL + 'user/getuserDetail'
};

export default URL;