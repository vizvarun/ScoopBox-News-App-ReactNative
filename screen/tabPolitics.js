import React, { Component } from 'react';
import { Alert, View, ActivityIndicator } from 'react-native';
import { Container, Content, List, Text } from 'native-base';


import DataItem from './dataitem';
import Modal from './modal';

import { getArticles } from '../screen/config/news';

export default class TabPolitics extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      data: null,
      setModalVisible: false,
      modalArticleData: {}
    }
  }

  handleItemDataOnPress = (articleData) => {
    this.setState({
      setModalVisible: true,
      modalArticleData: articleData
    });
  }

  handleModalClose = () => {
    this.setState({
      setModalVisible: false,
      modalArticleData: {}
    });
  }

  componentDidMount() {
    getArticles('politics').then(data => {
      this.setState({
        isLoading: false,
        data: data
      });
    }, error => {
      Alert.alert('Error', 'Something went wrong!');
    }
    )
  }

  render() {
    console.log(this.state.data);

    let view = this.state.isLoading ? (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 230}}>
        <ActivityIndicator animating={this.state.isLoading} color="#16151f" size="large" />
        <Text style={{marginTop: 20, fontFamily: "Poppins-Regular"}} children="Politics" />
      </View>
    ) : (
      <List
        dataArray={this.state.data}
        renderRow={(item) => {
            return (
              <DataItem onPress={this.handleItemDataOnPress} data={item} />
            )
        }} />
    )

    return (
      <Container>
        <Content>
          {view}
        </Content>
        <Modal 
          showModal={this.state.setModalVisible}
          articleData={this.state.modalArticleData}
          onClose={this.handleModalClose}
        />
      </Container>
    );
  }
}