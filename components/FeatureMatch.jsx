import { View, Text, StyleSheet, Image } from "react-native";
import { useState, useEffect } from "react";

const getCountryImage = (code) => {
    const images = {
      GER: require('../assets/images/teams/GER.png'),
      SCO: require('../assets/images/teams/SCO.png'),
      HUN: require('../assets/images/teams/HUN.png'),
      SUI: require('../assets/images/teams/SUI.png'),
      ESP: require('../assets/images/teams/ESP.png'),
      CRO: require('../assets/images/teams/CRO.png'),
      ITA: require('../assets/images/teams/ITA.png'),
      ALB: require('../assets/images/teams/ALB.png'),
      SVN: require('../assets/images/teams/SVN.png'),
      DEN: require('../assets/images/teams/DEN.png'),
      SRB: require('../assets/images/teams/SRB.png'),
      ENG: require('../assets/images/teams/ENG.png'),
      POL: require('../assets/images/teams/POL.png'),
      NED: require('../assets/images/teams/NED.png'),
      AUT: require('../assets/images/teams/AUT.png'),
      FRA: require('../assets/images/teams/FRA.png'),
      ROU: require('../assets/images/teams/ROU.png'),
      UKR: require('../assets/images/teams/UKR.png'),
      BEL: require('../assets/images/teams/BEL.png'),
      SVK: require('../assets/images/teams/SVK.png'),
      GEO: require('../assets/images/teams/GEO.png'),
      POR: require('../assets/images/teams/POR.png'),
      CZE: require('../assets/images/teams/CZE.png'),
      TUR: require('../assets/images/teams/TUR.png'),
    };
  
    return images[code]
  };

export function FeatureMatchScreen() {
  const today = new Date().toISOString().slice(0, 10);
  const [matches, setMatches] = useState([]);
  const [featureMatch, setFeatureMatch] = useState(null);

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
      const response = await fetch("https://raw.githubusercontent.com/openfootball/euro.json/master/2024/euro.json");
      const data = await response.json();
      const todaysMatches = data.rounds.flatMap((round) => 
        round.matches.filter((match) => match.date === today)
      );
      setMatches(todaysMatches.sort((a, b) => {
        const timeA = a.time.split(':');
        const timeB = b.time.split(':');
        const hoursA = parseInt(timeA[0]);
        const minutesA = parseInt(timeA[1]);
        const hoursB = parseInt(timeB[0]);
        const minutesB = parseInt(timeB[1]);

        if (hoursA < hoursB) return -1;
        if (hoursA > hoursB) return 1;
        if (minutesA < minutesB) return -1;
        if (minutesA > minutesB) return 1;
        return 0;
      }));
    };

    fetchData();
  }, [today]);

  useEffect(() => {
    if (matches.length > 0) {
      const randomIndex = Math.floor(Math.random() * matches.length);
      setFeatureMatch(matches[randomIndex]);
    }
  }, [matches]);

  if (!featureMatch) {
    return (
      <View style={styles.feature}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  const matchDisplay = featureMatch.goals1 != null && featureMatch.goals2 != null 
    ? `${featureMatch.goals1} - ${featureMatch.goals2}` 
    : featureMatch.time;

  return (
    <View style={styles.feature}>
      <Text style={styles.leagueText}>EURO 2024</Text>
      <Text style={styles.roundText}>{formatDate(today)}</Text>
      <View style={styles.content}>
        <View style={styles.team}>
          <Image source={getCountryImage(featureMatch.team1.code)} style={styles.teamLogo} />
          <Text style={styles.teamName}>{featureMatch.team1.name}</Text>
          <Text style={styles.teamRole}>Domácí</Text>
        </View>
        <View style={styles.matchInfo}>
          <Text style={styles.matchDisplay}>{matchDisplay}</Text>
        </View>
        <View style={styles.team}>
          <Image source={getCountryImage(featureMatch.team2.code)} style={styles.teamLogo} />
          <Text style={styles.teamName}>{featureMatch.team2.name}</Text>
          <Text style={styles.teamRole}>Hosté</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  feature: {
    margin: 15,
    padding: 15,
    backgroundColor: "#0053A1",
    borderRadius: 15,
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
  loadingText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});

