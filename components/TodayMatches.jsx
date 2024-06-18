import Match from "@/components/Match";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function FavoriteMatches() {
  const today = new Date().toISOString().slice(0, 10);
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://raw.githubusercontent.com/openfootball/euro.json/master/2024/euro.json");
      const data = await response.json();
      const todaysMatches = data.rounds.flatMap((round) => round.matches.filter((match) => match.date === today));
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
  }, []);

  return (
    <View style={styles.content}>
      <Text style={{ fontWeight: "900", color: "#0053A1", fontSize: 16 }}>Dnešní zápasy →</Text>
      {matches && (
        <View style={styles.matches}>
          {matches.map((match) => (
            <Match
              key={match.num}
              num={match.num}
              team1={match.team1.name}
              team2={match.team2.name}
              time={match.time}
              goal1={match.goals1?.length}
              goal2={match.goals2?.length}
            />
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 10,
    paddingTop: 25,
    paddingLeft: 15,
    paddingRight: 15,
  },
  matches: {
    rowGap: 10,
  },
});