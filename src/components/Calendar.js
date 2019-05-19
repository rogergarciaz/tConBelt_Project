import React from "react";
import DateTimeRangeContainer from "react-advanced-datetimerange-picker";
import { FormControl } from "react-bootstrap";
import moment from "moment";

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    let now = new Date();
    let start = moment(
      new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0)
    );
    let end = moment(start)
      .add(1, "days")
      .subtract(1, "seconds");
    this.state = {
      start: start,
      end: end
    };
    this.applyCallback = this.applyCallback.bind(this);
  }

  applyCallback(startDate, endDate) {
    this.setState({
      start: startDate,
      end: endDate
    });
    this.props.onSelectDate({ start: startDate, end: endDate });
  }

  render() {
    let now = new Date();
    let start = moment(
      new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0)
    );
    let end = moment(start)
      .add(1, "days")
      .subtract(1, "seconds");
    let ranges = {
      "Solo Hoy": [moment(start), moment(end)],
      "Solo Ayer": [
        moment(start).subtract(1, "days"),
        moment(end).subtract(1, "days")
      ],
      "3 Días": [moment(start).subtract(3, "days"), moment(end)]
    };
    let local = {
      format: "YYYY/MM/DD HH:mm",
      sundayFirst: false
    };
    let maxDate = moment(start).add(24, "hour");
    return (
      <div className="limiter">
        <DateTimeRangeContainer
          ranges={ranges}
          start={this.state.start}
          end={this.state.end}
          local={local}
          maxDate={maxDate}
          applyCallback={this.applyCallback}
        >
          <FormControl
            id="formControlsTextB"
            type="text"
            label="Text"
            placeholder="Toque para buscar"
            value = {this.props.value === " - " ? "":this.props.value}
          />
        </DateTimeRangeContainer>
      </div>
    );
  }
}

export default Calendar;
