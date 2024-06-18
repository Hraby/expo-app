import Match from "@/components/Match";
import {View, Text, StyleSheet} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function FavoriteMatches(){
    return(
        <View style={styles.content}>
            <Text style={{fontWeight: "900", color: "#0053A1", fontSize: 16}}>Oblíbené zápasy →</Text>
            <Match team1="FC Zlín" team2="FK Teplice" goal1="5" goal2="0"/>
            <Match team1="České Budějovice" team2="Slovan Liberec" time="19:00"/>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 10,
        paddingTop: 25,
        paddingLeft: 15,
        paddingRight: 15
    }
  });