const MOCKURL = 'http://www.wangyibo.com/';
const SERVERURL = 'http://localhost:3000/';

const URL = {
  hotList: MOCKURL + 'hotList',
  goodsList: MOCKURL + 'goodsList',
  swipeList: MOCKURL + 'swipeList',
  registUser: SERVERURL + 'user/registUser',
  loginUser: SERVERURL + 'user/loginUser',
  getTypes: SERVERURL + 'type/getTypes',
  getProductsByType: SERVERURL + 'product/getProductsByType',
  getDetail: SERVERURL + 'product/getDetail',
  addCart: SERVERURL + 'cart/addCart',
  getCart: SERVERURL + 'cart/getCart',
};

export default URL;