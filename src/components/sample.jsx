import React,{Component} from 'react'

class App extends React.Component{
 constructor (){
  super();
    this.state={
      data:[
        {
          "name":"Tejas"
        },
        {
          "name":"ganesh"
        }
      ]
    }
  
 }
 render(){
  return(
    <>
     <Student/>
     <ul>{this.state.data.map((item)=> <List data={item}/>)}</ul> 
    </>
  )
}
}

class Student extends React.Component{
   render(){
    return(
      <>
      <h1>Record</h1>
     
      </>
    )
   }
}

class List extends React.Component{
  render(){
    return(
      <ul>
      <li>{this.props.data.name}</li>
    </ul>
    )
  }
}
export default App


  
 