import "./Turno.css"
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { Calendar } from 'react-date-range';
import {useState} from 'react'
import format from 'date-fns/format'


const Turno = () => {
const [date, setDate] = useState(null);

const handleSelect = (date) => {
    setDate(format(date, 'dd/MM/yyyy'))
    console.log(format(date, 'dd/MM/yyyy'));
    //console.log(date);
}

    return(
        <div className="container_turno">
            <div>
                <select name="" id="">
                    <option value="Neurología">Neurología</option>
                    <option value="Clínica">Clínica</option>
                    <option value="Oftalmología">Oftalmología</option>
                    <option value="Inmunología">Inmunología</option>
                    <option value="Endocrinología">Endocrinología</option>
                </select></div>
            <div><Calendar onChange={handleSelect} date={new Date()} /></div>
        </div>
    )
}

export default Turno;