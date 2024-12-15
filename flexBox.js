import React, { StyleSheet, View} from "react-native";
import Box from './component/Box';

export default function App(){
    return(
        <View style={styles.container}>
            <Box style={{backgroundColor: 'red'}}>Box 1</Box>
            <Box style={{backgroundColor: 'blue'}}>Box 2</Box>
            <Box style={{backgroundColor: 'green'}}>Box 3</Box>
            <Box style={{backgroundColor: 'yellow'}}>Box 4</Box>
            <Box style={{backgroundColor: 'brown'}}>Box 5</Box>
            <Box style={{backgroundColor: 'pink'}}>Box 6</Box>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      marginTop: 64,
      borderwidth: 6,
      borderColor: "red"
    },
})