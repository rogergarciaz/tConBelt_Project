import React from 'react';
import { auth } from '../firebase';
import firebase from '@firebase/app';

class Data extends React.Component{
  constructor(props){
    super(props)
  }
  componentDidMount = () => {
    firebase.database().ref('data').on('value', function(snapshot){
      console.log(snapshot.val())
      })
  }
}

export default Data;