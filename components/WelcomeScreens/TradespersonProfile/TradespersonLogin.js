import React from 'react'
import { View, Text, StyleSheet, Image, Button } from 'react-native'
import logo from '../../../category-images/LogoNormal.png'

class TradespersonLogin extends React.Component {
    render() {
        return(
            <>
                <View style={styles.body}>
                    <Image source={logo} style={styles.logoImg}></Image>
                    <Text style={styles.testText}>Tradesperson Login</Text>
                </View>
            </>
        )
    }
}

const styles = StyleSheet.create({
    body: {
       backgroundColor: '#0d0d0d',
       display: 'flex',
       justifyContent: 'center',
       alignItems: 'center'
    },
    testText: {
        color: '#F2F2F2',
        fontSize: 20
    },
    logoImg: {
        height: 100,
        width: 100,
        marginTop: 150
    }
})

export default TradespersonLogin