const SERVERURL = 'http://localhost:3000/';

const URL = {
  registUser: SERVERURL + 'user/registUser',
  loginUser: SERVERURL + 'user/loginUser',
  getType: SERVERURL + 'type/getTypes',
  getProductsByType: SERVERURL + 'product/getProductsByType',
  getProvinceId: SERVERURL + 'province/getProvinceId',
  getProductsByProvince: SERVERURL + 'product/getProductsByProvince'
};

export default URL;