import React, { useState } from 'react';
import { View, Image, Alert, Linking } from 'react-native';
import { Container, Content, Form, Item, Input, Text, Button, Label } from 'native-base';
import api from '../services/api'
import styles from '../styles/Contato';

export default class Contato extends React.Component {

    render() {
        const { navigation } = this.props;

        return (
            <Container>
                <Content>
                    <Image style={styles.image} source={require('../assets/logo.jpeg')} />
                    <Button full rounded bordered light style={styles.button}
                        title="Telefone"
                        onPress={() => Linking.openURL('tel:(35) 3697-4950')}>
                        <Text style={styles.textButton}>Telefone</Text>
                    </Button>
                    <Button full rounded bordered light style={styles.button}
                        title="E-mail"
                        onPress={() => Linking.openURL('mailto:gabinete.pocos@ifsuldeminas.edu.br')}>
                        <Text style={styles.textButton}>E-mail</Text>
                    </Button>
                </Content>
            </Container>

        )
    }
}