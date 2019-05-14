import React from "react";
import CustomizedTable from "./Tabla";
import Calendar from "./Calendar";
import Graph from "./Graph";
import Preloader from "./Preloader";
import withAuthorization from "./withAuthorization";
import firebase from "@firebase/app";
import { Container, Row, Col } from "react-bootstrap";
require("firebase/database");

var data = {};
var show = 0;
var show2 = 0;

class Historicos extends React.Component {
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
      pb: [],
      pc: [],
      verTabla: true,
      loading: false
    };
  }

  componentWillUnmount = () => {
    show = 0;
    show2 = 0;
    this.setState({ c1: [] });
    this.setState({ c2: [] });
    this.setState({ c3: [] });
    this.setState({ vab: [] });
    this.setState({ vbc: [] });
    this.setState({ vca: [] });
    this.setState({ date: [] });
    this.setState({ pa: [] });
    this.setState({ pb: [] });
    this.setState({ pc: [] });
    this.setState({ sensor: [] });
    this.setState({ verTabla: true });
    this.setState({ loading: false });
  };

  applyCallback = rangeDate => {
    show2 = 0;
    this.setState({ loading: true });
    const that = this;
    data = {};
    var uno = rangeDate.start.subtract(5, "hours");
    var dos = rangeDate.end.subtract(5, "hours");
    data = {
      start: uno.toISOString(),
      end: dos.toISOString()
    };
    uno = rangeDate.start.add(5, "hours");
    dos = rangeDate.end.add(5, "hours");
    var inicio1 = data.start.toString().replace("-", "/");
    var inicio2 = inicio1.replace("T", " ");
    var inicio3 = inicio2.replace("-", "/");
    var inicio =
      inicio3[0] +
      inicio3[1] +
      inicio3[2] +
      inicio3[3] +
      inicio3[4] +
      inicio3[5] +
      inicio3[6] +
      inicio3[7] +
      inicio3[8] +
      inicio3[9] +
      inicio3[10] +
      inicio3[11] +
      inicio3[12] +
      inicio3[13] +
      inicio3[14] +
      inicio3[15];
    var final1 = data.end.toString().replace("-", "/");
    var final2 = final1.replace("T", " ");
    var final3 = final2.replace("-", "/");
    var final =
      final3[0] +
      final3[1] +
      final3[2] +
      final3[3] +
      final3[4] +
      final3[5] +
      final3[6] +
      final3[7] +
      final3[8] +
      final3[9] +
      final3[10] +
      final3[11] +
      final3[12] +
      final3[13] +
      final3[14] +
      final3[15];
    firebase
      .database()
      .ref("data")
      .orderByChild("date")
      .startAt(inicio)
      .endAt(final)
      .on("value", async function(snapshot) {
        if (snapshot.val() === null) {
          show2 = 1;
          show = 0;
          that.setState({ loading: false });
        } else {
          let c1 = [];
          let c2 = [];
          let c3 = [];
          let vab = [];
          let vbc = [];
          let vca = [];
          let date = [];
          let pa = [];
          let pb = [];
          let pc = [];
          let sensor = [];
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
            pb.push(element.PB);
            pc.push(element.PC);
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
          await that.setState({ pb: pb });
          await that.setState({ pc: pc });
          await that.setState({ sensor: sensor });
          show2 = 0;
          show = 1;
          c1 = [];
          c2 = [];
          c3 = [];
          vab = [];
          vbc = [];
          vca = [];
          date = [];
          pa = [];
          pb = [];
          pc = [];
          sensor = [];
          that.setState({ loading: false });
        }
      });
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
      pb: this.state.pb,
      pc: this.state.pc,
      sensor: this.state.sensor
    };
    return (
      <Container>
        <div className="p-4">
          <Row>
            <Col>
              <Calendar onSelectDate={this.applyCallback} />
            </Col>
            <Col sm="auto">
              <button
                className="btn btn-success m-l-10 m-r-10"
                onClick={async () => {
                  await this.setState({ verTabla: !this.state.verTabla });
                }}
              >
                {this.state.verTabla ? "Mostrar Tabla" : "Mostrar Graficas"}
              </button>
            </Col>
          </Row>
        </div>
        <div className="p-1">
          {this.state.loading ? (
            <Preloader className="p-1" />
          ) : (
            ""
          )}
          {show === 1 ? (
            !this.state.verTabla ? (
              <CustomizedTable
                className="p-1"
                datos={datos}
              />
            ) : (
              <Graph datos={datos} />
            )
          ) : (
            ""
          )}
          {show2 === 1 ? <h2>No se encontraron datos</h2> : ""}
        </div>
      </Container>
    );
  }
}

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(Historicos);
