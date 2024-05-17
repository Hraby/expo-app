import {View, Text, StyleSheet} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function Match({team1, team2, img1, img2, time, score}){
    return(
        <SafeAreaView>
            <View style={styles.content}>
                <Image source={img1}/>
                <Text>{team1}</Text>
                <Image source={img2}/>
                <Text>{team2}</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    team:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    feature: {
        margin: 15,
        padding: 15,
        backgroundColor: "#0053A1",
        borderRadius: 15,
    },
    content: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 15,
    }
  });