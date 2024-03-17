import React, { Component } from 'react';
import { DateRangePicker } from 'react-date-range';
import { addDays } from 'date-fns';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

class CalendarComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selection: null,
            showPicker: true
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    onRangeChange = (ranges) => {
        if (ranges['selection']) {
            this.setState({
                selection: ranges['selection']
            });
        }
    };

    render() {

        const emptySelection = { startDate: new Date(), endDate: new Date(), key: 'selection' };

        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {this.state.showPicker && (
                    <DateRangePicker
                        onChange={this.onRangeChange}
                        months={1}
                        minDate={addDays(new Date(), -300)}
                        maxDate={addDays(new Date(), 900)}
                        direction="vertical"
                        scroll={{ enabled: false }}
                        ranges={this.state.selection ? [this.state.selection] : [emptySelection]}
                        initialSettings={{
                            firstDayOfWeek: 1,
                            showDateDisplay: false,
                            focusedRange: [0, 0],
                        }}
                    />
                )}
            </div>
        );
    }
}

export default CalendarComponent;
