import React from 'react'
import {View,Text,TextInput,Button} from 'react-native'

class App extends React.Component{
  state = {
    text:'',
    todo:[]
  }
  addTodo = ()=>{
    var text = this.state.text
    var arr = this.state.todo
    arr.push(text)
    this.setState({todo:arr,text:""})
  }
  deleteTodo = (t) =>{
    var todos = this.state.todo
    var pos = todos.indexOf(t)
    todos.splice(pos,1)
    this.setState({todo:todos})
  }
  renderTodo = ()=>{
    return this.state.todo.map(t => {
       return ( <Text 
        key={t}
        onPress={()=>{this.deleteTodo(t)}}
        >{t}</Text>)
      })
  }
  render(){
    return (
  <View style={styles.mainStyle}>
    <View style={styles.viewStyle}>
      <Text style={styles.header}>Todo App</Text>
      <TextInput 
      style={styles.inputStyle}
      onChangeText={(text)=>this.setState({text:text})}
      value={this.state.text}
      />
      <Button 
      title="Add Todo"
      onPress={this.addTodo}
      />
      <Text>{this.renderTodo()}</Text>
    </View>
  </View>
    )
  }
  
}
const styles = { 
  mainStyle:{
   backgroundColor:'#B3E5FC',
   flex:1
  },
  viewStyle:{
    marginTop:40,
    alignItems:'center',
    justifyContent:'center',
    margin:10
  },
  inputStyle:{
    height:40,
    width:300,
    borderColor:'green',
    borderWidth:1
  },
  header:{
    fontSize:30,
    color:'green',
    fontWeight:"bold"
  }
 }
export default App;