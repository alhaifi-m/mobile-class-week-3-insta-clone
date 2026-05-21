import { StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'

const LandingPage = () => {
  return (
    <LinearGradient colors={["#fdf497", "#fd59f9", "#d6249f", "#285AEB"]} style={styles.container}>
        <Image 
        source={{uri:"https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"}} style={styles.logo}
        />
        <Text style={styles.title}>Welcome to Clone</Text>
        <Text style={styles.subtitle}>Connect with friends and share moments</Text>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
    </LinearGradient>
  )
}

export default LandingPage

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        width: '100%'
    },
    logo:{
        width: 100,
        height: 100,
        marginBottom: 20,
        borderRadius: 20
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        color:"#fff",
        marginBottom:30,
    },
    subtitle:{
        fontSize: 16,
        color: "#fff",
        textAlign:"center",
        paddingHorizontal: 20,
        marginBottom: 30
    },
    button: {
        backgroundColor: "#fff",
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius:30,
        marginVertical: 10,
        width: '80%',
        alignItems:'center'
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#d6249f'
    }
})