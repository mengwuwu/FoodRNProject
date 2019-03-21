
import {observable,action,computed} from 'mobx';

const TestData =observable([
    {
      id: '001',
      name: '清炒荷兰豆',
      price: 18,
      count: 0,
      img: '../imgs/food.jpg',
      checked: false,
    },
    {
      id: '002',
      name: '凉拌木耳',
      price: 20,
      count: 0,
      img: '../imgs/food1.png',
      checked: false,
    },
    {
      id: '003',
      name: '酱鸭肉',
      price: 26,
      count: 0,
      img: '../imgs/food.jpg',
      checked: false,
    },
    {
      id: '004',
      name: '猪皮冻',
      price: 18,
      count: 0,
      img: '../imgs/food1.png',
      checked: false,
    },
    {
      id: '005',
      name: '青椒鸡蛋',
      price: 16,
      count: 0,
      img: '../imgs/food.jpg',
      checked: false,
    },
    {
      id: '006',
      name: '小炒肉',
      price: 26,
      count: 0,
      img: '../imgs/food1.png',
      checked: false,
    },
    {
      id: '007',
      name: '素三鲜',
      price: 22,
      count: 0,
      img: '../imgs/food.jpg',
      checked: false,
    },
    {
      id: '008',
      name: '木瓜沙拉',
      price: 24,
      count: 0,
      img: '../imgs/food1.png',
      checked: false,
    },
    {
      id: '009',
      name: '水煮肉片',
      price: 28,
      count: 0,
      img: '../imgs/food.jpg',
      checked: false,
    },
    {
      id: '010',
      name: '笋丝炒肉',
      price: 28,
      count: 0,
      img: '../imgs/food1.png',
      checked: false,
    },
    {
      id: '011',
      name: '宫保鸡丁',
      price: 26,
      count: 0,
      img: '../imgs/food.jpg',
      checked: false,
    },
    {
      id: '012',
      name: '红烧肉',
      price: 38,
      count: 0,
      img: '../imgs/food1.png',
      checked: false,
    },
    {
      id: '013',
      name: '拔丝红薯',
      price: 22,
      count: 0,
      img: '../imgs/food.jpg',
      checked: false,
    },
    {
      id: '014',
      name: '烤羊腿',
      price: 48,
      count: 0,
      img: '../imgs/food1.png',
      checked: false,
    },
    {
      id: '015',
      name: '手撕牛肉',
      price: 65,
      count: 0,
      img: '../imgs/food.jpg',
      checked: false,
    },
    {
      id: '016',
      name: '酱焖肘子',
      price: 48,
      count: 0,
      img: '../imgs/food1.png',
      checked: false,
    },
  ]) ;
  TestData.minus = action((index) => {
    TestData[index].count -= 1;
  });
  
  TestData.plus =action((index) => {
    TestData[index].count += 1;
  });
  
  TestData.check =action((checked, index) => {
    TestData[index].checked = checked;
  });
  
  TestData.count = computed(() => {
    return TestData.reduce((a, b) => {
      if (b.count>0) {
        return a + b.count;
      }
      else {
        return a;
      }
    }, 0);
  });
  
  TestData.sum = computed(() => {
    return TestData.reduce((a, b) => {
      if (b.count>0) {
        return a + b.count * b.price;
      }
      else {
        return a;
      }
    }, 0);
  });
  TestData.orderData=computed(() => {
    return TestData.filter((a) => {
        return a.count>0;
    });
  });

  export default TestData;