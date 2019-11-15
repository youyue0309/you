import Mock from 'mockjs';
import data from './data.json';

Mock.mock('http://www.wangyibo.com/getlist', { data: data.list });

const Ran = Mock.Random;
const hotData = () => {
  const hotList = [];
  for (let i = 0; i < 10; i += 1) {
    const hot = {
      detail: Ran.ctitle(10, 20),
      img: Ran.dataImage(),
      price: Ran.integer(10, 9999),
      pay: Ran.integer(0, 999),
    };
    hotList.push(hot);
  }
  return hotList;
};
Mock.mock('http://www.wangyibo.com/hotList', hotData);

const goodsData = () => {
  const goodsList = [];
  for (let i = 0; i < 10; i += 1) {
    const goods = {
      detail: Ran.ctitle(10, 20),
      img: Ran.dataImage(),
      price: Ran.integer(10, 9999),
      pay: Ran.integer(0, 999),
    };
    goodsList.push(goods);
  }
  return goodsList;
};
Mock.mock('http://www.wangyibo.com/goodsList', goodsData);

const swipeData = () => {
  const swipeList = [];
  for (let i = 0; i < 10; i += 1) {
    const swipe = {
      path: Ran.dataImage(),
    };
    swipeList.push(swipe);
  }
  return swipeList;
};
Mock.mock('http://www.wangyibo.com/swipeList', swipeData);
