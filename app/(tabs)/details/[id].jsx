import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import squadsData from "../../../data/squads.json";

// Funkce pro načtení obrázků týmů na základě kódu
const getCountryImage = (code) => {
  const images = {
    GER: require('../../../assets/images/teams/GER.png'),
    SCO: require('../../../assets/images/teams/SCO.png'),
    HUN: require('../../../assets/images/teams/HUN.png'),
    SUI: require('../../../assets/images/teams/SUI.png'),
    ESP: require('../../../assets/images/teams/ESP.png'),
    CRO: require('../../../assets/images/teams/CRO.png'),
    ITA: require('../../../assets/images/teams/ITA.png'),
    ALB: require('../../../assets/images/teams/ALB.png'),
    SVN: require('../../../assets/images/teams/SVN.png'),
    DEN: require('../../../assets/images/teams/DEN.png'),
    SRB: require('../../../assets/images/teams/SRB.png'),
    ENG: require('../../../assets/images/teams/ENG.png'),
    POL: require('../../../assets/images/teams/POL.png'),
    NED: require('../../../assets/images/teams/NED.png'),
    AUT: require('../../../assets/images/teams/AUT.png'),
    FRA: require('../../../assets/images/teams/FRA.png'),
    ROU: require('../../../assets/images/teams/ROU.png'),
    UKR: require('../../../assets/images/teams/UKR.png'),
    BEL: require('../../../assets/images/teams/BEL.png'),
    SVK: require('../../../assets/images/teams/SVK.png'),
    GEO: require('../../../assets/images/teams/GEO.png'),
    POR: require('../../../assets/images/teams/POR.png'),
    CZE: require('../../../assets/images/teams/CZE.png'),
    TUR: require('../../../assets/images/teams/TUR.png'),
  };

  return images[code];
};

export default function DetailsScreen() {
  const { id } = useLocalSearchParams();
  const [matches, setMatches] = useState(null);
  const [squads, setSquads] = useState([]);

  const formatDate = (dateString) => {
    const months = [
      'ledna', 'února', 'března', 'dubna', 'května', 'června',
      'července', 'srpna', 'září', 'října', 'listopadu', 'prosince'
    ];
    const [year, month, day] = dateString.split('-');
    const monthName = months[parseInt(month, 10) - 1];
    return `${parseInt(day, 10)}. ${monthName} ${year}`;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://raw.githubusercontent.com/openfootball/euro.json/master/2024/euro.json");
        const data = await response.json();
        const allMatches = data.rounds.flatMap((round) => round.matches);
        
        const selectedMatch = allMatches.find((match) => match.num === parseInt(id));

        setMatches(selectedMatch);
      } catch (error) {
        console.error("Error fetching match data:", error);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    setSquads(squadsData); 
  }, []);

  const getSquadByCountryCode = (code) => {
    const team = squads.find((team) => team.code === code);
    return team ? team.squad : [];
  };

  if (!matches) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  const matchDisplay = matches.goals1 != null && matches.goals2 != null 
    ? `${matches.goals1.length} - ${matches.goals2.length}` 
    : matches.time;

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.feature}>
          <Text style={styles.leagueText}>EURO 2024</Text>
          <Text style={styles.roundText}>{formatDate(matches.date)}</Text>
          <View style={styles.content}>
            <View style={styles.team}>
              <Image source={getCountryImage(matches.team1.code)} style={styles.teamLogo} />
              <Text style={styles.teamName}>{matches.team1.name}</Text>
              <Text style={styles.teamRole}>Domácí</Text>
            </View>
            <View style={styles.matchInfo}>
              <Text style={styles.matchDisplay}>{matchDisplay}</Text>
            </View>
            <View style={styles.team}>
              <Image source={getCountryImage(matches.team2.code)} style={styles.teamLogo} />
              <Text style={styles.teamName}>{matches.team2.name}</Text>
              <Text style={styles.teamRole}>Hosté</Text>
            </View>
          </View>
        </View>
        <View style={styles.goals}>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>Góly</Text>
          {matches.goals1 && matches.goals1.map((goal, index) => (
            <View key={index} style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <Text style={styles.goalText}>{goal.name}</Text>
              <Text style={styles.goalText}>{goal.minute}'</Text>
            </View>
          ))}
          {matches.goals2 && matches.goals2.map((goal, index) => (
            <View key={index} style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <Text style={styles.goalText}>{goal.name}</Text>
              <Text style={styles.goalText}>{goal.minute}'</Text>
            </View>
          ))}
        </View>
        <View style={styles.squads}>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>Soupiska</Text>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <View style={{ alignItems: "flex-start" }}>
              {getSquadByCountryCode(matches.team1.code).map((player, index) => (
                <View key={index} style={{ flexDirection: "row", gap: 5 }}>
                  <Text>{player.num}</Text>
                  <Text>{player.name.split(' ')[0][0]}. {player.name.split(' ').slice(-1)}</Text>
                  <Text>({player.position})</Text>
                </View>
              ))}
            </View>
            <View style={{ alignItems: "flex-end" }}>
              {getSquadByCountryCode(matches.team2.code).map((player, index) => (
                <View key={index} style={{ flexDirection: "row", gap: 5 }}>
                  <Text>{player.name.split(' ')[0][0]}. {player.name.split(' ').slice(-1)}</Text>
                  <Text>({player.position})</Text>
                  <Text>{player.num}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
    padding: 15,
    paddingBottom: 100
  },
  feature: {
    margin: 15,
    padding: 15,
    backgroundColor: "#0053A1",
    borderRadius: 15,
    width: "100%"
  },
  leagueText: {
    color: "white",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
  },
  roundText: {
    textAlign: "center",
    fontSize: 10,
    fontWeight: "bold",
    color: "#FFFFFF",
    opacity: 0.62,
    marginBottom: 10,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  team: {
    alignItems: "center",
  },
  teamLogo: {
    height: 75,
    width: 75,
    resizeMode: "contain",
  },
  teamName: {
    fontSize: 12,
    color: "white",
    paddingTop: 10,
    textAlign: "center",
  },
  teamRole: {
    fontSize: 10,
    color: "white",
    textAlign: "center",
  },
  matchInfo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  matchDisplay: {
    fontSize: 20,
    color: "white",
    fontWeight: "800",
    textAlign: "center",
  },
  goals: {
    width: "100%",
  },
  squads: {
    width: "100%",
    paddingTop: 25,
  }
});
