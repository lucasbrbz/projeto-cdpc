import * as React from 'react';
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Input, Text, Button, Icon, Left, Body, Right, Header, Item } from 'native-base';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from '../styles/Feed';

function Feed() {
  return (
    <Container style={styles.container}>
      <Content>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={{ uri: 'https://st3.depositphotos.com/19428878/37137/v/450/depositphotos_371377450-stock-illustration-default-avatar-profile-image-vector.jpg' }} />
              <Body>
                <Text>Admin1</Text>
                <Text note>@admin1</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image source={{ uri: 'https://portal.pcs.ifsuldeminas.edu.br/images/galeriadeimagens/2019/dezembro/20191226/inauguracao-cdpc/IMG_8688.JPG' }} style={styles.image} />
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Text>Eventos</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Icon active name="camera-outline" />
                <Text>Fotos</Text>
              </Button>
            </Body>
            <Right>
              <Button transparent>
                <Text>Comp.</Text>
                <Icon active name="share-social-outline" />
              </Button>
            </Right>
          </CardItem>
        </Card>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={{ uri: 'https://st3.depositphotos.com/19428878/37137/v/450/depositphotos_371377450-stock-illustration-default-avatar-profile-image-vector.jpg' }} />
              <Body>
                <Text>Admin2</Text>
                <Text note>@admin2</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Text style={styles.text}>https://www.facebook.com/watch/?v=882498028831966  Componente WebView está crashando o app</Text>
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Text>Eventos</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Icon active name="videocam-outline" />
                <Text>Vídeos</Text>
              </Button>
            </Body>
            <Right>
              <Button transparent>
                <Text>Comp.</Text>
                <Icon active name="share-social-outline" />
              </Button>
            </Right>
          </CardItem>
        </Card>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={{ uri: 'https://st3.depositphotos.com/19428878/37137/v/450/depositphotos_371377450-stock-illustration-default-avatar-profile-image-vector.jpg' }} />
              <Body>
                <Text>Admin3</Text>
                <Text note>@admin3</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in interdum turpis. Cras sit amet mi vitae odio ultricies bibendum. Integer vulputate tempus tortor.</Text>
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Text>Info</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Icon active name="newspaper-outline" />
                <Text>Notícias</Text>
              </Button>
            </Body>
            <Right>
              <Button transparent>
                <Text>Comp.</Text>
                <Icon active name="share-social-outline" />
              </Button>
            </Right>
          </CardItem>
        </Card>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={{ uri: 'https://st3.depositphotos.com/19428878/37137/v/450/depositphotos_371377450-stock-illustration-default-avatar-profile-image-vector.jpg' }} />
              <Body>
                <Text>Admin4</Text>
                <Text note>@admin4</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image source={{ uri: 'https://portal.pcs.ifsuldeminas.edu.br/images/galeriadeimagens/2019/dezembro/20191226/inauguracao-cdpc/IMG_8723.JPG' }} style={styles.image} />
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Text>Eventos</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Icon active name="camera-outline" />
                <Text>Fotos</Text>
              </Button>
            </Body>
            <Right>
              <Button transparent>
                <Text>Comp.</Text>
                <Icon active name="share-social-outline" />
              </Button>
            </Right>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
}

function Buscar() {
  return (
    <Container style={styles.container}>
      <Header searchBar rounded style={{ backgroundColor: '#359830' }}>
        <Item>
          <Icon name="ios-search" />
          <Input placeholder="Pesquisar" />
        </Item>
        <Button transparent>
          <Text>Search</Text>
        </Button>
      </Header>
      <Content padder>
        <Text note>Pesquisas recentes</Text>
      </Content>
    </Container>
  );
}

const Tab = createMaterialBottomTabNavigator();

function App() {
  return (
    <Tab.Navigator
      barStyle={{ backgroundColor: '#359830' }}>
      <Tab.Screen name="Feed" component={Feed}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }} />
      <Tab.Screen name="Buscar" component={Buscar}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={size} />
          ),
        }} />
    </Tab.Navigator>
  );
}

export default App;