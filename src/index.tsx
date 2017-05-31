import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Body, Button, Header, Icon, Left, Right, Text, Title, View } from 'native-base';

export default class NBButtonPlayground extends Component<{}, void> {
  render() {
    return (
        <ScrollView>
          <View style={{ marginTop: 16, margin: 8 }}>
            <View style={{ flexDirection: 'row' }}>
              <Button iconLeft>
                <Icon name="settings"/>
                <Text>
                  Normal
                </Text>
              </Button>
              <Button small>
                <Text>
                  Small
                </Text>
              </Button>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Button dark>
                <Text>
                  Dark
                </Text>
              </Button>
              <Button light>
                <Text>
                  Light
                </Text>
              </Button>
            </View>
            <Button transparent>
              <Text>
                Transparent
              </Text>
            </Button>
            <View style={{ flexDirection: 'row' }}>
              <Button rounded iconLeft>
                <Icon name="settings"/>
                <Text>
                  Rounded
                </Text>
              </Button>
              <Button rounded small>
                <Text>
                  Small
                </Text>
              </Button>
            </View>
            <Button block>
              <Text>
                Block
              </Text>
            </Button>
            <Button full>
              <Text>
                Full
              </Text>
            </Button>
            <Button rounded transparent primary>
              <Icon name="settings"/>
            </Button>
            <Header>
              <Left>
                <Button rounded transparent androidRippleColor="rgba(255, 255, 255, 0.26)">
                  <Icon name="menu"/>
                </Button>
              </Left>
              <Body>
              <Title>Header</Title>
              </Body>
              <Right>
                <Button transparent androidRippleColor="rgba(255, 255, 255, 0.26)">
                  <Text>Cancel</Text>
                </Button>
              </Right>
            </Header>
            <Header style={{ backgroundColor: '#f4f4f4' }}>
              <Left>
                <Button dark rounded transparent>
                  <Icon name="menu"/>
                </Button>
              </Left>
              <Body>
              <Title style={{ color: '#000' }}>
                Header
              </Title>
              </Body>
              <Right>
                <Button dark rounded transparent>
                  <Icon name="settings"/>
                </Button>
                <Button dark rounded transparent>
                  <Icon name="help"/>
                </Button>
              </Right>
            </Header>
          </View>
        </ScrollView>
    );
  }
}
