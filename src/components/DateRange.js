import React from "react";
import DatePicker from "react-datepicker";
import isAfter from "date-fns/is_after";

class DateRange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date("2019/05/09"),
      endDate: new Date("2019/05/09")
    };
  }

  handleChange = ({ startDate, endDate }) => {
    startDate = startDate || this.state.startDate;
    endDate = endDate || this.state.endDate;

    if (isAfter(startDate, endDate)) {
      endDate = startDate;
    }

    this.setState({ startDate, endDate });
  };

  handleChangeStart = startDate => this.handleChange({ startDate });

  handleChangeEnd = endDate => this.handleChange({ endDate });

  render() {
    return (
      <div className="row">
        <pre className="column example__code">
        <code className="jsx">
            {`
<DatePicker
    selected={this.state.startDate}
    selectsStart
    startDate={this.state.startDate}
    endDate={this.state.endDate}
    onChange={this.handleChangeStart}
/>

<DatePicker
    selected={this.state.endDate}
    selectsEnd
    startDate={this.state.startDate}
    endDate={this.state.endDate}
    onChange={this.handleChangeEnd}
/>
`}
          </code>
        </pre>
        <div className="column">
          <DatePicker
            selected={this.state.startDate}
            selectsStart
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onChange={this.handleChangeStart}
          />
          <DatePicker
            selected={this.state.endDate}
            selectsEnd
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onChange={this.handleChangeEnd}
          />
        </div>
      </div>
    );
  }
}

export default DateRange;