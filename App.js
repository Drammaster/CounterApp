import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Dimensions
} from 'react-native';
import {
  BarChart
} from 'react-native-chart-kit';

class App extends Component {
  state = {
    nelson: 0,
    connor: 0,
    michael: 0,
    csaba: 0
  }
  
  nelsonPress = () => {
    this.setState({
      nelson: this.state.nelson + 1
    })
  }

  connorPress = () => {
    this.setState({
      connor: this.state.connor + 1
    })
  }

  michaelPress = () => {
    this.setState({
      michael: this.state.michael + 1
    })
  }

  csabaPress = () => {
    this.setState({
      csaba: this.state.csaba + 1
    })
  }

  render() {
    return (
      <View style={styles.main}>
        <View style={styles.title}>
          <Text style={styles.titleText}>Counter App</Text>
        </View>
        <View style={styles.scores}>
          <BarChart
            data={{
              labels: ["Nelson", "Michael", "Connor", "Csaba"],
              datasets: [
                {
                  data: [
                    this.state.nelson,
                    this.state.michael,
                    this.state.connor,
                    this.state.csaba
                  ]
                }
              ]
            }}
            width={Dimensions.get("window").width} // from react-native
            height={555}
            yAxisLabel=""
            yAxisSuffix=""
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: "#2e2e2e",
              backgroundGradientFrom: "#2e2e2e",
              backgroundGradientTo: "#2e2e2e",
              decimalPlaces: 0, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#ffa726"
              }
            }}
            bezier
          />
        </View>
        <View style={styles.boxColumns}>
          <TouchableOpacity style={styles.button} onPress={this.nelsonPress}><Text style={styles.buttonText}>Nelson</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.michaelPress}><Text style={styles.buttonText}>Michael</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.connorPress}><Text style={styles.buttonText}>Connor</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.csabaPress}><Text style={styles.buttonText}>Csaba</Text></TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  title: {
    flex: 1,
    backgroundColor: "#2b2d2d"
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 50,
    textAlign: "center",
    color: "white"
  },
  scores: {
    flex: 7,
    flexDirection: "column",
    backgroundColor: "white"
  },
  boxColumns: {
    flex: 2,
    flexDirection: "column",
    alignContent: "stretch",
    flexWrap: "wrap"
  },
  button: {
    borderStyle: "solid",
    borderWidth: 2,
    justifyContent: "center",
    height: 79.2,
    backgroundColor: "#2b2d2d"
  },
  buttonText: {
    textAlign: "center",
    fontSize: 50,
    fontWeight: "bold",
    color: "white"
  }
})

export default App;