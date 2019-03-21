import React, { Component } from 'react';
import {
    StyleSheet,
    FlatList,
    View,
    DeviceEventEmitter
  } from 'react-native';

import {FoodItem} from'./FoodItem';
//定义一些全局变量
var cols=2;
  const styles = StyleSheet.create({
    root: {
      backgroundColor: '#F2F2F2',
    },
  });
  export default class FoodItemList extends Component {
    constructor(props) {
      super(props);
    
  }    
    // componentWillUnmount(){
    //   this.subscription && this.subscription.remove();
    // }  
    renderRow(data) {
      return (
        <FoodItem key={data.id} itemdata={data.item} />
      )
  }
  _keyExtractor = (item, index) => {
    return item.id + index
}
    render() {  
      let foodData = this.props.foodData;
        return (
            <View> 
              <FlatList
                  style={styles.root}
                  renderItem={this.renderRow}
                  data={foodData}
                  keyExtractor={this._keyExtractor}
                  numColumns={cols}
                  columnWrapperStyle={styles.columnStyle}
                  contentContainerStyle={{paddingBottom: 60 }}
                  horizontal={false}
                />
        </View>
        );
    }
  }
  