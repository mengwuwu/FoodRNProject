/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet,View,} from 'react-native';
import FoodItemList from './src/FoodItemList'
import {Footer} from './src/Footer'
import TestData from'./src/TestData';
var REQUEST_URL =
  "https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json";

export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      cartList:[],
    };
    console.log(TestData);
    this.fetchData = this.fetchData.bind(this);
}
// _onListenerCallback(data){
// this.orderData = data.filter(
//   function(value){
//     return value.count>0;
//   }
// );
// }
componentDidMount() {
  // this.subscription = DeviceEventEmitter.addListener('dataChange',this._onListenerCallback.bind(this));
//  this.fetchData();
  this.setState({
          cartList: TestData,
        });
}
fetchData(){
  fetch(REQUEST_URL)
    .then((response) => response.json())
    .then((responseData) => {
      //测试数据
      // responseData = TestData;
      // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作       
      this.setState({
        cartList: TestData,
      });
      console.log(TestData);
    });
}

  render() {
    let foodData = this.state.cartList;
  
    return (
      <View style={styles.container}>
      <FoodItemList foodData={foodData}/>
      <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
