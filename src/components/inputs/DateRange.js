import { useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DateRange(dateTo, dateFrom) {
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;

    const handleChange = (date) => {

        dateTo(`${startDate.getFullYear()}-${startDate.getMonth()}-${startDate.getDay()}`)
        dateTo(`${endDate.getFullYear()}-${endDate.getMonth()}-${endDate.getDay()}`)
    }

    return (
        <DatePicker
            className="border-current"
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={handleChange}
            // onChange={(update) => {
            //     setDateRange(update);
            // }}
            isClearable={true}
        />
    );
}

export default DateRange;