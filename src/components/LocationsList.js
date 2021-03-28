import * as React from 'react';
import {connect} from 'react-redux';
import {getLocations} from '../actions/LocationActions';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Pie from 'react-native-pie';

class LocationsList extends React.Component {
  componentDidMount = () => {
    this.props.getLocs('uark');
  };

  directionsPopup = () => {
    Alert.alert('Directions', 'Would you like directions here?', [
      {
        text: 'Yes, take me here!',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'No Thanks',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
    ]);
  };
  render() {
    const locs = this.props.locations ? this.props.locations : [];
    return (
      <View style={styles.locationListContainer}>
        {locs.length > 0
          ? locs.map((loc, index) => {
              return (
                <TouchableOpacity key={index} style={styles.locationListItem} onPress={this.directionsPopup}>
                  <View style={{flex: 2, justifyContent: 'center'}}>
                    <Text style={styles.roomNameText}>{loc.name}</Text>
                    <Text>{loc.building}</Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'flex-end',
                      alignItems: 'center',
                      padding: 5,
                    }}>
                    <View
                      style={{alignItems: 'center', justifyContent: 'center'}}>
                      <Pie
                        radius={25}
                        innerRadius={20}
                        sections={[
                          {
                            percentage:
                              100 * (loc.occupancy / loc.maxOccupancy),
                            color: 'orange',
                          },
                          {
                            percentage:
                              100 *
                              ((loc.maxOccupancy - loc.occupancy) /
                                loc.maxOccupancy),
                            color: '#d5dbe3',
                          },
                        ]}
                        strokeCap={'butt'}
                      />
                      <View style={styles.gauge}>
                        <Text style={styles.gaugeText}>
                          {loc.occupancy}/{loc.maxOccupancy}
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })
          : [<ActivityIndicator size="large" color="#0000ff" />]}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  locationListContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 5,
  },
  locationListItem: {
    height: 70,
    margin: 5,
    flexDirection: 'row',
    backgroundColor: 'white',
    width: Dimensions.get('screen').width,
    padding: 5,
  },
  gauge: {
    position: 'absolute',
    width: 100,
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gaugeText: {
    backgroundColor: 'transparent',
    color: '#000',
    fontSize: 17,
  },
  roomNameText: {
    fontSize: 24,
  },
});

const mapStateToProps = (state) => {
  const {locations, organizationID} = state.locData;
  return {locations, organizationID};
};

export default connect(mapStateToProps, {
  getLocs: getLocations,
})(LocationsList);
