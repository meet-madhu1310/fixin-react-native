import React from 'react'
import { ScrollView, View, Text, StyleSheet, Button, TextInput, Dimensions, Pressable, Alert } from 'react-native'

let device = Dimensions.get('screen')

class CustomerLogin extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            TextInputUserName: '',
            TextInputPassword: ''
        }
    }

    navToCustomerHomePage = () => {
        const { TextInputPassword } = this.state
        const { TextInputUserName } = this.state

        if ( TextInputUserName === '' || TextInputPassword === '' ) {
            Alert.alert(
                'Required',
                'Username and password required',
                [
                    {
                        text: 'OK'
                    }
                ],
                { cancelable: false }
            )
        } 
        else {
            try {
                this.props.navigation.reset({
                    index: 0,
                    routes: [
                        {
                            name: 'Home'
                        }
                    ]
                })
            } catch(err) {
                console.log(err)
            }
        }
    }

    render() {
        return(
            <>
                <ScrollView
                    contentInsetAdjustmentBehavior='automatic'
                    style={styles.scrollView}
                >
                    <View style={styles.body}>
                        <TextInput 
                            style={styles.username}
                            placeholder='Enter your username'
                            onChangeText={TextInputUserName => this.setState({TextInputUserName})}
                        />
                        <TextInput 
                            style={styles.password}
                            placeholder='Enter your password'
                            secureTextEntry={true}
                            onChangeText={TextInputPassword => this.setState({TextInputPassword})}
                        />
                        <View style={styles.btnContainer}>
                            <Button
                                color='#F2F2F2'
                                title='LOGIN'
                                onPress={ () => this.navToCustomerHomePage() }
                            ></Button>
                        </View>
                        <View style={styles.signUpText}>
                            <Text style={{color: '#f2f2f2'}}>Don't have an account yet?</Text>
                            <Pressable>
                                <Text style={styles.signUp}>Sign Up</Text>
                            </Pressable>
                        </View>
                    </View>
                </ScrollView>
            </>
        )
    }
}

const styles = StyleSheet.create({
    scrollView: {
       backgroundColor: '#0d0d0d'
    },
    body: {
       display: 'flex',
       flexDirection: 'column',
       alignItems: 'center'
    },
    username: {
        color: '#181818',
        fontSize: 16,
        backgroundColor: '#f2f2f2',
        height: 50,
        width: device.width - 120,
        borderRadius: 4,
        paddingLeft: 10,
        marginTop: 250
    },
    password: {
        color: '#181818',
        fontSize: 16,
        backgroundColor: '#f2f2f2',
        height: 50,
        width: device.width - 120,
        borderRadius: 4,
        paddingLeft: 10,
        marginTop: 20,
    },
    btnContainer: {
        backgroundColor: '#35A8ED',
        marginTop: 20,
        width: device.width - 120,
        borderRadius: 4,
        height: 50,
        paddingTop: 6,
    },
    signUpText: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10
    },
    signUp: {
        color: '#f2f2f2',
        textTransform: 'uppercase',
        textDecorationLine: 'underline',
        marginLeft: 5,
    }
})

export default CustomerLogin