import React, { useState } from "react"
import { View, StyleSheet, Image, Alert } from 'react-native';
import { Container, Content, Form, Item, Input, Label, Text, Button } from 'native-base';
import styles from '../styles/Index';

export default class Index extends React.Component {

    render() {

        const { navigation } = this.props;

        return (
            <Container>
                <Content>
                    <View style={styles.container}>
                        <Image style={styles.image}
                            source={require('../assets/LOGO_CDPC_FINAL_2.png')}
                        />
                        <Text style={styles.textNovaConta}>Bem vindo(a) ao app do CDPC!</Text>
                        <Button full rounded bordered light style={styles.button} onPress={() => navigation.navigate('Feed')}>
                            <Text style={styles.textButton}>Notícias</Text>
                        </Button>
                        <Button full rounded bordered light style={styles.button} onPress={() => navigation.navigate('Contato')}>
                            <Text style={styles.textButton}>Contato</Text>
                        </Button>
                    </View>
                </Content>
            </Container>
        );
    }
}
