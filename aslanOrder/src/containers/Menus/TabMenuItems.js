import React from 'react';
import {
  View, ScrollView, Text,
  TouchableWithoutFeedback,
  Dimensions,
  Animated,
  StyleSheet,
} from 'react-native';

const { width, height } = Dimensions.get('window');

console.log(`HEIGHT : ${height}`);

const styles = StyleSheet.create({
  activeTintColor: {
    backgroundColor: 'red',
  },
  inactiveTintColor: {
    backgroundColor: 'blue',
  },
  tabText: {
    color: 'red',
  },
});

const TabMenuItems = ({ props }) => {
  const {
    activeTintColor, tab, tabbar, tabText, inactiveTintColor,
  } = styles;
  const { index } = props.navigation.state;
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ backgroundColor: '#88CCF1', flexDirection: 'row' }}>
        {
            props.navigation.state.routes.length ? (
                props.navigation.state.routes.map((route, number) => {
                    const focused = (index === number) ? '#1874CD' : '#4E9BE6';
                    const tintColor = focused ? activeTintColor : inactiveTintColor;
                    return (
                      <TouchableWithoutFeedback
                            key={route.key}
                            onPress={() => {
                                props.jumpToIndex(number)
                            }}
                            delayPressIn={0}
                            >
                            <View style={{marginLeft : 20, marginTop : 25, shadowOpacity : 25, alignSelf : 'flex-start' }}>
                                <Text adjustsFontSizeToFit style={{borderRadius : 5, borderWidth :2, paddingTop : 5,color : 'purple', height : 30, width : 80,textAlign : 'center', backgroundColor : focused, borderStyle: 'dashed',borderColor : 'gray'}}>
                                {props.getLabel({route, number})}
                                </Text>
                            </View>
                        </TouchableWithoutFeedback>
                    );
                })
            ) : null
        }
      </ScrollView>
    </View>
  );
};

export default TabMenuItems;

/*


<Text style={{ fontSize : 16, marginTop : 10, color :'blue', backgroundColor : 'white' ,fontFamily : 'AppleSDGothicNeo-SemiBold'}}>
                                    {props.getLabel({route, number})}
                                </Text>

*/
