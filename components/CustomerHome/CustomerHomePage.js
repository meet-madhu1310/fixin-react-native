import React from 'react'
import { ScrollView, View, Text, StyleSheet, Button, Dimensions, StatusBar } from 'react-native'

let device = Dimensions.get('screen')

class CustomerHomePage extends React.Component {
    render() {
        return(
            <>
                <StatusBar barStyle="light-content" />
                <ScrollView
                    contentInsetAdjustmentBehavior='automatic'
                    style={styles.scrollView}
                >
                    <View style={styles.body}>
                        <Text style={styles.just}>Welcome HOME!!!</Text>
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
    just: {
        color: '#f3f2f2',
        fontSize: 30
    }
})

export default CustomerHomePage