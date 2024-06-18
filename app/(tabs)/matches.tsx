import Match from '@/components/Match';
import { Link, useNavigation } from 'expo-router';
import { useEffect, useState } from 'react';
import { Text, StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';

export default function Matches() {
  const [matches, setMatches] = useState({});
  const navigation = useNavigation();

  const formatDate = (dateString: any) => {
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
      const allMatches = data.rounds.flatMap((round: any) => round.matches);

      const groupedMatches = allMatches.reduce((acc: any, match: any) => {
        if (!acc[match.date]) {
          acc[match.date] = [];
        }
        acc[match.date].push(match);
        return acc;
      }, {});

      setMatches(groupedMatches);
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{paddingTop: 15, paddingLeft: 15, fontWeight: "bold", fontSize: 14, color: "#0053A1"}}>EURO 2024</Text>
      <ScrollView>
        <View style={styles.content}>
          {matches && Object.keys(matches).map((date) => (
            <View key={date} style={styles.dateGroup}>
              <Text style={styles.dateText}>{formatDate(date)}</Text>
              <View style={styles.matches}>
                {matches[date].map((match: any) => (
                    <Match
                      key={match.num}
                      num={match.num}
                      team1={match.team1.name}
                      team2={match.team2.name}
                      time={match.time}
                      goal1={match.goals1?.length || 0}
                      goal2={match.goals2?.length || 0}
                    />
                ))}
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 10,
    paddingTop: 25,
    paddingLeft: 15,
    paddingRight: 15,
  },
  dateGroup: {
    marginBottom: 20,
  },
  dateText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  matches: {
    rowGap: 10,
  },
});
