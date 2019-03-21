import React, { Component } from 'react';
import {action} from 'mobx';
import {observer} from "mobx-react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    DeviceEventEmitter,
  } from 'react-native';
  var Dimensions=require('Dimensions');
  var {width}=Dimensions.get('window');
  //定义一些全局变量
  // 边距数目  设置左右边距
  var cols=2;
  var vMargin=10; 
  var boxW=parseInt((width - (cols + 1) * vMargin) / cols);
  var bottomBarH = parseInt(boxW/3);

  const styles = StyleSheet.create({
    container: {
      width:boxW,
      height:boxW,
      marginLeft: vMargin,
      marginTop: vMargin,
      backgroundColor: '#FAFAFA',
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: '#CED0CF',
      paddingTop:10,
      paddingBottom:5,
      justifyContent: 'center',
      alignItems: 'center',     
    },
    img:{
      width:boxW-vMargin*2,
      height:boxW-bottomBarH-5,
      resizeMode:'contain'
    },
    bottomBar:{
      height: bottomBarH-5,
      flexDirection: 'row',
      width:boxW-vMargin*2,
      justifyContent: 'center',
      alignItems: 'center', 
    },
    name:{
      color : '#222222',
      fontSize : 12,
      padding:5
    },
    bottomRight:{
      justifyContent: 'center',
      alignItems: 'center',
    },
    priceBox:{
      position: 'absolute',
      top: 10,
      left:10,
      width:36,
      height:36,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F02F04'
    },
    price:{
      color : '#FAFAFA',
      fontSize : 12
    },
    buttonBox:{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      width:28,
      height:28,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: '#D3C7C7',
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      color : '#D3C7C7',
      textAlign: 'center',
      fontSize : 12
    },
    countText:{
      color : '#D3C7C7',
      textAlign: 'center',
      fontSize : 12,
      padding:5
    }

  });

  export const FoodItem = observer(class FoodItem extends Component {
    constructor(props) {
      super(props);
      this.itemdata = props.itemdata;
      this.state = {
  
      };
      this.plus = this.plus.bind(this);
      this.minus = this.minus.bind(this);

  }

  plus = action(() => {
      this.itemdata.count += 1;
    });
  minus =  action(() => {
    if(this.itemdata.count>0)
    this.itemdata.count -= 1;
  });

    render() {

      return (
        <View style={styles.container}>
          <Image style={styles.img} source={require('../imgs/food.jpg')} />     
          <View style={styles.priceBox}>
          <Text style={styles.price} >￥{this.itemdata.price}</Text>
          </View>
          <View style={styles.bottomBar}>
          <Text style={styles.name}>{this.itemdata.name}</Text>
          <View style={styles.bottomRight}>
          
          <View style={styles.buttonBox}>
          <TouchableOpacity
              style={styles.button}
              onPress={this.minus}
            >
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.countText}>{this.itemdata.count}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={this.plus}
            >
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>
          </View>
          </View>    
        </View>
      );
    }
  });