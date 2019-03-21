import React, { Component } from 'react';
import {observer} from "mobx-react";
import TestData from'./TestData';
import {OrderItem} from'./OrderItem';
import {
    StyleSheet,
    View,
    Text,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Alert,
    Modal,
    TouchableHighlight,
    FlatList
  } from 'react-native';
import { action } from 'mobx';

  var Dimensions=require('Dimensions');
  var {height}=Dimensions.get('window');
  //定义一些全局变量
  // 边距数目  设置左右边距
  var dialogH = parseInt(height/3);
  var vMargin=10; 
  const styles = StyleSheet.create({
    root: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        height: 50,
        justifyContent: 'space-between',
        borderTopColor: '#f5f5f5',
        borderTopWidth: StyleSheet.hairlineWidth,
        backgroundColor: '#FAFAFA',
        alignItems: 'center',
    },
    boxLeft:{
        flex:3,
        paddingLeft:10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textCount: {
        flex:1,
        color : '#222222',
        fontSize : 16,
      },
      textMoney: {
        flex:2,
        color : '#F22E04',
        fontSize : 16,
        paddingLeft:5,
      },
      textBuy: {
        color : '#FAFAFA',
        fontSize : 16,
      },
      checkout: {
        flex:1,
        height: 50,
        backgroundColor: '#F22E04',
        justifyContent: 'center',
        alignItems: 'center',
      },
      container: {
        position: 'absolute',
        bottom: 50,
        left: 0,
        right: 0,
        height:dialogH,
        backgroundColor: '#FAFAFA',
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#CED0CF',
        padding:vMargin,
        justifyContent:'flex-end',
        alignItems: 'center',     
      },
      topBox:{
        height:20,
        flexDirection: 'row',
        justifyContent:'flex-end'
    },
    delete:{
        color : '#222222',
        textAlign: 'right',
        fontSize : 12
    },
    foodText:{
        color : '#D3C7C7',
        fontSize : 12
    },
  });
  export const Footer = observer(class Footer extends Component {
    constructor(props){
        super(props);
        this.state = {
          animationType: 'none',//none slide fade
          modalVisible: false,//模态场景是否可见
          transparent: true,//是否透明显示 
        };
        this._onPressButton = this._onPressButton.bind(this);
        this.pressDelete = this.pressDelete.bind(this);
        this._onBack = this._onBack.bind(this);
    }
    checkout(){
        Alert.alert(
            'Alert Title',
            'My right Msg',
            [
              {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
          )
    }
    // pressDelete = action(() => {
    //   TestData.orderData.get().map((a) => {
    //     a.count=0;
    // });
    // this.setState({
    //   modalVisible:false
    // })});
    pressDelete(){
      TestData.orderData.get().map((a) => {
        a.count=0;
    });
    this.setState({
      modalVisible:false
    });
    };
    _onPressButton(){
      if(TestData.orderData.get().length>0){
        this.setState({
          modalVisible: !this.state.modalVisible,//模态场景是否可见
        });
      }

    }
    _onBack(){
      this.setState({
        modalVisible: false
    })
    }
    renderRow(data) {
      return (
        <OrderItem key={data.id} itemdata={data.item} />
      )
  }
  _keyExtractor = (item, index) => {
    return item.id + index
  }
    render() {
        return (     
        <View style={styles.root}>
        {
        TestData.orderData.get().length == 0 ? (
          <Modal
          animationType="slide"
          transparent={this.state.transparent}
          visible={this.state.modalVisible=false}
          onRequestClose={this._onBack}
        >
    <View style={styles.container}>
              <TouchableHighlight
              style={styles.topBox}
              onPress={this.pressDelete}
              >
                <Text style={styles.delete}>清空</Text>
              </TouchableHighlight>
              <FlatList
                  style={{backgroundColor: '#F2F2F2'}}
                  renderItem={this.renderRow}
                  data={TestData.orderData.get()}
                  keyExtractor={this._keyExtractor}
                  numColumns={1}
                  columnWrapperStyle={styles.columnStyle}
                  contentContainerStyle={{paddingBottom: 10 }}
                  horizontal={false}
                />
          </View>
          </Modal>
        ) : (
        <Modal
            animationType="slide"
            transparent={this.state.transparent}
            visible={this.state.modalVisible}
            onRequestClose={this._onBack}
          >
      <View style={styles.container}>
                <TouchableHighlight
                style={styles.topBox}
                onPress={this.pressDelete}
                >
                  <Text style={styles.delete}>清空</Text>
                </TouchableHighlight>
                <FlatList
                    style={{backgroundColor: '#F2F2F2'}}
                    renderItem={this.renderRow}
                    data={TestData.orderData.get()}
                    keyExtractor={this._keyExtractor}
                    numColumns={1}
                    columnWrapperStyle={styles.columnStyle}
                    contentContainerStyle={{paddingBottom: 10 }}
                    horizontal={false}
                  />
            </View>
            </Modal>
             )
          }
        <TouchableWithoutFeedback
            onPress={this._onPressButton}
            >
            <View  style={styles.boxLeft} >
            <Text style={styles.textCount}>已选：{TestData.count.get()}</Text>
            <Text style={styles.textMoney}>总计：￥{TestData.sum.get()}</Text>
            </View>
            </TouchableWithoutFeedback>
            <TouchableOpacity
              style={styles.checkout}
              onPress={this.checkout}
            >
              <Text style={styles.textBuy}>去结算</Text>
            </TouchableOpacity>
        </View>   
        );
    }
  });