import React , {Component } from 'react'
import {List} from './List'
import {Title} from './Title'


class Main extends Component {
    render()
            {
              return  <div> <Title headerTitle = {'My Experience , Company'}/> 
              
              <List tasks = {['Chain-sys' , 'Infosys']}/> 
              <List  tasks = {['2118' , '1141947']}/>
              
               </div>
  
  }

}


export default Main;