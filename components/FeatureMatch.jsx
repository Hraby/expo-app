import { View, Text, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import sparta from "../assets/images/sparta-praha.png"
import slavia from "../assets/images/slavia-praha.png"

export function FeatureMatchScreen(){
    return(
        <SafeAreaView>
            <View style={styles.feature}>
                <Text style={styles.leagueText}>Fortuna liga</Text>
                <Text style={styles.roundText}>1. kolo</Text>
                <View style={styles.content}>
                    <View style={styles.team}>
                        <Image source={slavia} style={{height: 55, width: 55, resizeMode: "contain"}}/>
                        <Text style={{fontSize: 12, color: "white", paddingTop: 10}}>SK Slavia Praha</Text>
                        <Text style={{fontSize: 10, color: "white"}}>Domácí</Text>
                        
                    </View>
                    <View>
                        <Text style={{fontSize: 20, color: "white", fontWeight: "800"}}>19:00</Text>
                    </View>
                    <View style={styles.team}>
                        <Image source={sparta} style={{height: 55, width: 55, resizeMode: "contain"}}/>
                        <Text style={{fontSize: 12, color: "white", paddingTop: 10}}>AC Sparta Praha</Text>
                        <Text style={{fontSize: 10, color: "white"}}>Hosté</Text>
                    </View>
                </View>
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
    },
    leagueText: {
        color: "white",
        textAlign: "center",
        fontFamily: 'Manrope',
        fontSize: 14,
        fontWeight: "bold"
    },
    roundText: {
        textAlign: "center",
        fontFamily: 'Manrope',
        fontSize: 10,
        fontWeight: "bold",
        color: "#FFFFFF",
        opacity: 62 
    },
    titleText: {
      fontSize: 20,
      fontWeight: 'bold',
    },
  });