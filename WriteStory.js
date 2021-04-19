import React from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View,KeyboardAvoidingView, Platform,ToastAndroid } from 'react-native';
import db from '../config'

export default class WriteStory extends React.Component {
 constructor() {
   super();
   this.state = {
     storyTitle: "",
     storyAuthor: "",
     storyPlot: "",
     invalid: "",
   }
 }

  storyTitle = (text) => {
    this.setState({storyTitle:text})
  }

  storyAuthor = (text) => {
    this.setState({storyAuthor:text})
  }

  storyPlot = (text) => {
    this.setState({storyPlot:text})
  }

  sumbitStory = (sTitle,sAuthor,sPlot) => {
     if(this.state.storyTitle === "" || this.state.storyPlot === "" || this.state.storyEnd === "") {
       this.setState({invalid: "Fill in all boxes" })
     }
    var storyTitle = db.ref('Title' + sTitle);
    var storyAuthor = db.ref('Author' + sAuthor);
    var storyPlot = db.ref('Plot' + sPlot);

     if(this.state.storyTitle.length === 0 || this.state.storyAuthor.length === 0 || this.state.storyPlot.length === 0) {
       Alert.alert("Not all text boxes are filled or valid therefore the stor cannot be submited");
     } else {
      ToastAndroid.showWithGravity("Your story has been submitted sucsessfully. Thank you!",ToastAndroid.SHORT,ToastAndroid.BOTTOM)
     }
    }


  render() {
    return(
      <KeyboardAvoidingView
       behavior = {Platform.OS === "android" ? 'padding':'height'}
       style = {{flex:1}}
      >
      <View>
       <Text style = {styles.text}> Story Hub </Text>
        <TextInput style = {{height:20,width:100, borderColor : "purple", borderWidth : 2}}
         placeholder = "Story Title"
         placeholderTextColor = "purple"
         onChangeText = {this.storyTitle}
         multiline = {true}
        />
         <TextInput style = {{height:20,width:100, borderColor : "purple", borderWidth : 2}}
         placeholder = "Story Author(you probably):"
         placeholderTextColor = "purple"
         onChangeText = {this.storyAuthor}
         multiline = {true}
        />
        <TextInput style = {{height:120,width:100, borderColor : "purple", borderWidth : 2}}
         placeholder = "Story"
         placeholderTextColor = "purple"
         onChangeText = {this.storyPlot}
         multiline = {true}
        />
         <TouchableOpacity style = {styles.button}
          onPress = {() => {
              this.sumbitStory(this.state.storyTitle, this.state.storyAuthor, this.state.storyPlot);
          }}
         >
           <Text style ={{fontSize:16,fontWeight:'bold'}}> Sumbit </Text>
         </TouchableOpacity>

          <Text style = {{fontSize:16,color:'red',fontWeight:'bold'}}> {this.state.invalid} </Text>
      </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color:'red',
    backgroundColor:'white',
    fontSize:25,
    alignSelf:'center',
    textShadowColor:'white',
    textShadowOffset:7,
    fontWeight:'bold',
  },
  button:{
   backgroundColor:'lightpink',
   height:30,
   width:45,
   buttonRadius:12
  },
});