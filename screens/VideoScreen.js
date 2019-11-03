import React from 'react'
import { StyleSheet, View, ScrollView, Alert, Text } from 'react-native'
//import Video from 'react-native-af-video-player'
import { Video } from 'expo-av';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})

const url = 'http://miscos.in/dqm.mp4'

export default class VideoScreen extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.title}`,
         headerTitleStyle : {textAlign: 'center',alignSelf:'center'},
            headerStyle:{
                backgroundColor:'white',
            },
        });
    
      onMorePress() {
        Alert.alert(
          'Boom',
          'This is an action call!',
          [{ text: 'Aw yeah!' }]
        )
      }

      componentDidMount(){
          console.log(this.props.navigation.state.params.name)
        this.setState({"name":this.props.navigation.state.params.name});
        this.setState({"description":this.props.navigation.state.params.description});
      }

  render() {

    const url = 'http://miscos.in/dqm.mp4'
    const logo = 'https://dzwn71no6vujc.cloudfront.net/img/logo-in.png'
    const placeholder = 'https://dzwn71no6vujc.cloudfront.net/img/logo-in.png'
    const title = 'My video title'

    return (
      <View style={styles.container}>

<Video
  source={{ uri: 'http://miscos.in/dqm.mp4' }}
  //posterSource={ require('../images/please-wait.png') }
  posterSource={ {uri : placeholder} }
  usePoster={true} 
  rate={1.0}
  volume={1.0}
  isMuted={false}
  resizeMode="cover"
  shouldPlay
  isLooping
  useNativeControls= {true}
  style={{ width: "100%", aspectRatio: 2/1.5 }}
/>
<ScrollView>
        <Text style={{fontSize:18, margin:10}}>Description</Text>
          <Text style={{ marginLeft:10}}>{this.props.navigation.state.params.description}</Text>
        </ScrollView>



        {/* <Video 
        autoPlay
          url={url}
          title={title}
          logo={logo}
          placeholder={placeholder}
          onMorePress={() => this.onMorePress()}
          onFullScreen={status => this.onFullScreen(status)}
          fullScreenOnly /> */}
      </View>
    )
  }
}

  
