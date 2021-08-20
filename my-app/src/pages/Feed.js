import * as React from 'react';
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Input, Text, Button, Icon, Left, Body, Right, Header, Item } from 'native-base';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { WebView } from 'react-native-webview';

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
                <Text>Fotos</Text>
                <Icon active name="camera-outline" />
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Text>Downl.</Text>
                <Icon active name="download-outline" />
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
          <CardItem>
            <WebView style={styles.image} source={{ uri: 'https://video.xx.fbcdn.net/v/t42.9040-2/81675908_2583297988624115_8933104493290061824_n.mp4?_nc_cat=102&ccb=1-5&_nc_sid=985c63&efg=eyJybHIiOjUzNCwicmxhIjo1MTIsInZlbmNvZGVfdGFnIjoic3ZlX3NkIn0%3D&_nc_ohc=V8Uv-cGMCaoAX_S9Wdc&rl=534&vabr=297&_nc_ht=video-lga3-1.xx&edm=AGo2L-IEAAAA&oh=b6d4d40041ec4a3ad2840979415cd2d4&oe=611DA7D4'}}  />
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Text>Eventos</Text>
                <Icon active name="today-outline" />
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Text>Downl.</Text>
                <Icon active name="download-outline" />
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
          <CardItem>
            <Text style={styles.text}>CDPC | Poços conta agora com Centro de Divulgação e Popularização da Ciência</Text>
          </CardItem>
          <CardItem cardBody>
            <Image source={{ uri: 'https://pocosdigital.com/wp-content/uploads/2019/12/cdpc-inauguração-fachada-01-696x529.jpeg' }} style={styles.image} />
          </CardItem>
          <CardItem>
            <Text style={styles.text}>Desde a última sexta-feira (13), Poços de Caldas conta com o Centro de Divulgação e Popularização da Ciência (CDPC), instalado no prédio do campus do Instituto Federal do Sul de Minas, no Jardim Esperança, na zona sul, em parceria com a Autarquia Municipal de Ensino. Durante a solenidade de inauguração, foi assinado o termo de cessão dos equipamentos adquiridos pela AME ao IFSULDEMINAS, com investimentos de aproximadamente R$ 98 mil.</Text>
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Text>Info</Text>
                <Icon active name="megaphone-outline" />
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Text>Downl.</Text>
                <Icon active name="download-outline" />
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
                <Icon active name="today-outline" />
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Text>Downl.</Text>
                <Icon active name="download-outline" />
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