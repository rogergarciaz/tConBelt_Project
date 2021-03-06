import React, { Component } from "react";
import StepSlider from "./Slider";
import Piston from "./Piston";
import Retro from "./Retro";
import Graph from "./Graph";
import withAuthorization from "./withAuthorization";
import firebase from "@firebase/app";
import { Container } from "react-bootstrap";
import swal from 'sweetalert';
require("firebase/database");

class ControlPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      c1: [],
      c2: [],
      c3: [],
      vab: [],
      vbc: [],
      vca: [],
      date: [],
      sensor: [],
      pa: [],
    };
  }

  componentDidMount = () => {
    swal({
      title: "¡Hola!",
      text: "-Desliza el slider para controlar la velocidad de la banda transportadora."+
       "\n-Oprime el botón para accionar el pistón que controla el flujo de los objetos sobre la banda transportadora.",
      icon: "info",
    })
    const that = this;
    let c1 = [];
    let c2 = [];
    let c3 = [];
    let vab = [];
    let vbc = [];
    let vca = [];
    let date = [];
    let pa = [];
    let sensor = [];
    firebase.database().ref("data").limitToLast(1).on("value", async function(snapshot) {
        if (snapshot.val() === null) {
          return <div>No hay datos</div>;
        } else {
          if (c1.length === 10) {
            c1 = [
              c1[1],
              c1[2],
              c1[3],
              c1[4],
              c1[5],
              c1[6],
              c1[7],
              c1[8],
              c1[9]
            ];
            c2 = [
              c2[1],
              c2[2],
              c2[3],
              c2[4],
              c2[5],
              c2[6],
              c2[7],
              c2[8],
              c2[9]
            ];
            c3 = [
              c3[1],
              c3[2],
              c3[3],
              c3[4],
              c3[5],
              c3[6],
              c3[7],
              c3[8],
              c3[9]
            ];
            vab = [
              vab[1],
              vab[2],
              vab[3],
              vab[4],
              vab[5],
              vab[6],
              vab[7],
              vab[8],
              vab[9]
            ];
            vbc = [
              vbc[1],
              vbc[2],
              vbc[3],
              vbc[4],
              vbc[5],
              vbc[6],
              vbc[7],
              vbc[8],
              vbc[9]
            ];
            vca = [
              vca[1],
              vca[2],
              vca[3],
              vca[4],
              vca[5],
              vca[6],
              vca[7],
              vca[8],
              vca[9]
            ];
            pa = [
              pa[1],
              pa[2],
              pa[3],
              pa[4],
              pa[5],
              pa[6],
              pa[7],
              pa[8],
              pa[9]
            ];
            sensor = [
              sensor[1],
              sensor[2],
              sensor[3],
              sensor[4],
              sensor[5],
              sensor[6],
              sensor[7],
              sensor[8],
              sensor[9]
            ];
            date = [
              date[1],
              date[2],
              date[3],
              date[4],
              date[5],
              date[6],
              date[7],
              date[8],
              date[9]
            ];
          }
          let data = await snapshot.val();
          data = await Object.values(data);
          data.forEach(element => {
            c1.push(element.C1);
            c2.push(element.C2);
            c3.push(element.C3);
            vab.push(element.VAB);
            vbc.push(element.VBC);
            vca.push(element.VCA);
            date.push(element.date);
            pa.push(element.PA);
            sensor.push(element.Sensor);
          });
          await that.setState({ c1: c1 });
          await that.setState({ c2: c2 });
          await that.setState({ c3: c3 });
          await that.setState({ vab: vab });
          await that.setState({ vbc: vbc });
          await that.setState({ vca: vca });
          await that.setState({ date: date });
          await that.setState({ pa: pa });
          await that.setState({ sensor: sensor });
        }
      });
  };

  componentWillUnmount = () => {
    this.setState({ c1: [] });
    this.setState({ c2: [] });
    this.setState({ c3: [] });
    this.setState({ vab: [] });
    this.setState({ vbc: [] });
    this.setState({ vca: [] });
    this.setState({ date: [] });
    this.setState({ pa: [] });
    this.setState({ sensor: [] });
  };

  render() {
    let datos = {
      date: this.state.date,
      c1: this.state.c1,
      c2: this.state.c2,
      c3: this.state.c3,
      vab: this.state.vab,
      vbc: this.state.vbc,
      vca: this.state.vca,
      pa: this.state.pa,
      sensor: this.state.sensor
    };
    return (
      <Container>
        <div className="pt-4 pb-4 width-S-P">
          <StepSlider />
          <div className="pt-4 pb-4">
            <Piston />
          </div>
        </div>
        <div className="p-1">
          <Graph datos={datos} />
        </div>
        <div>
          <Retro />
        </div>
      </Container>
    );
  }
}
const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(ControlPage);
