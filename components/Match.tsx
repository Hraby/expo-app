import { Link } from "expo-router";
import {View, Text, StyleSheet, Image} from "react-native";
import { useNavigation } from '@react-navigation/native';


export default function Match({team1, team2, img1, img2, time, goal1, goal2, num}: any){
    const navigation = useNavigation();

    return(
        <View>
            <View style={styles.content}>
                <View>
                    <View>
                        <Image source={img1}/>
                        <Text style={{color: "black", fontWeight: "600"}}>{team1}</Text>
                    </View>
                    <View>
                        <Image source={img2}/>
                        <Text style={{color: "black", fontWeight: "600"}}>{team2}</Text>
                    </View>
                </View>
                <View>
                {!goal1 && !goal2 ? (
                    <View>
                        <Text style={{color: "rgba(0, 0, 0, 0.75)", fontWeight: "600"}}>{time}</Text>
                    </View>
                ) : (
                    <View>
                        <Text style={{color: "#2459AB", fontWeight: "600"}}>{goal1}</Text>
                        <Text style={{color: "#2459AB", fontWeight: "600"}}>{goal2}</Text>
                    </View>
                )}
                </View>
            </View>
            <Link style={{fontSize: 16, color: "#0053A1", fontWeight: "bold"}} href={`/details/${num}`}>→</Link>
        </View>
    )
}

const styles = StyleSheet.create({
    team:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    content: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
    }
  });