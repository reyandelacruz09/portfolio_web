
import { useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DatePickerReact({ handleDatePicker }){
    const [selectedDate, setSelectedDate] = useState(new Date())

    const handleChange = (date) => {
        setSelectedDate(date)
        let new_date = `${selectedDate.getFullYear()}-${selectedDate.getMonth()}-${selectedDate.getDay()}`
        handleDatePicker(new_date)
    }

    return (
        <div>
            <DatePicker className="bordered border p-1"
                selected={selectedDate}
                value={selectedDate}
                onChange={handleChange}
                dateFormat="yyyy/MM/dd"
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
            />
        </div>
    )
}

export default DatePickerReact;