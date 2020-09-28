import React from 'react'
import { View, Text, StyleSheet, Image, Button, Dimensions } from 'react-native'
import logo from '../../category-images/LogoNormal.png'

let device = Dimensions.get('screen')

class WelcomeLoginSignUp extends React.Component {
    render() {
        return(
            <>
                <View style={styles.body}>
                    <Image source={logo} style={styles.logoImg}></Image>
                    <Text style={styles.msgText}>You want become:</Text>
                    <View style={styles.btnContainer}>
                        <Button
                            color='#F2F2F2'
                            title='Tradesperson'
                            onPress={ () => this.props.navigation.navigate('Tradesperson') }
                        ></Button>
                    </View>
                    <Text style={styles.textOr}>Or</Text>
                    <View style={styles.btnContainer}>
                        <Button
                            color='#F2F2F2'
                            title='Customer'
                            onPress={ () => this.props.navigation.navigate('Customer') }
                        ></Button>
                    </View>
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
       alignItems: 'center',
    },
    msgText: {
        color: '#F2F2F2',
        fontSize: 24,
        marginTop: 50
    },
    logoImg: {
        height: 100,
        width: 100,
        marginTop: 150
    },
    btnContainer: {
        backgroundColor: '#35A8ED',
        marginTop: 30,
        width: device.width - 120,
        borderRadius: 4,
        height: 50,
        paddingTop: 6
    },
    textOr: {
        marginTop: 20,
        marginBottom: -5,
        textTransform: 'uppercase',
        textDecorationLine: 'underline',
        color: '#F2F2F2',
        fontSize: 20
    }
})

export default WelcomeLoginSignUp