import { View, Text, Image, StyleSheet } from "react-native";

export default function featureMatch(){
    return(
        <View>
            <Text style={styles.leagueText}>Fortuna liga</Text>
            <Text style={styles.roundText}>1. kolo</Text>
            <View style={styles.content}>
                <View>
                    <Image></Image>
                    <Text style={{fontSize: 12}}>SK Slavia Praha</Text>
                    <Text style={{fontSize: 10}}>Domácí</Text>
                </View>
                <View>
                    <Text style={{fontSize: 20}}>19:00</Text>
                </View>
                <View>
                    <Image></Image>
                    <Text style={{fontSize: 12}}>AC Sparta Praha</Text>
                    <Text style={{fontSize: 10}}>Hosté</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    leagueText: {
      fontFamily: 'Manrope',
      fontSize: 14,
      fontWeight: "bold"
    },
    roundText: {
        fontFamily: 'Manrope',
        fontSize: 10,
        fontWeight: "bold",
        color: "#fffff",
        opacity: 62 
    },
    titleText: {
      fontSize: 20,
      fontWeight: 'bold',
    },
  });