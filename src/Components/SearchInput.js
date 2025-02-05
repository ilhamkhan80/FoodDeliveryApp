import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import theme from '../utils/Constants'
import Colors from '../themes/Colors'
const SearchInput = () => {
  return (
      <View style={styles.ImageInputStyle}>
            <Image style={styles.SearchIconStyle} source={require('../images/search.png')} />
            <TextInput placeholder='Search' placeholderTextColor={Colors.gray} style={styles.InputStyle} />
          </View>
  )
}

export default SearchInput

const styles = StyleSheet.create({
    ImageInputStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#EFEEEE',
        borderRadius: 30,
        height: 60,
        marginTop: '1%',
        width: '80%',
        alignSelf: 'center',
        marginLeft: 16,
        paddingHorizontal: '5%'
    },
    SearchIconStyle: {
        width: 18,
        height: 18,
        marginLeft: 10

    },
    InputStyle: {
        marginLeft: 10,
        fontSize: 17,
        fontFamily: theme.SEMIBOLD,
        color: Colors.gray
    },
})
