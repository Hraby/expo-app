import {View, Text, StyleSheet} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function FavoriteMatches({team1, team2, img1, img2, time, score}){
    return(
        <SafeAreaView>
            <View style={styles.content}>
                <Text>Oblíbené zápasy →</Text>
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
        padding: 15
    }
  });