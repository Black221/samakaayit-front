import moment from 'moment';
import { useEffect, useState} from "react";

interface Props {
    month?: number;
    year?: number;
    getDate: (date: string) => void;
    dateToColor?: string[];
}


interface Dic {
    [index : string]: string;
}

export const Calendar = ({month, year, getDate, dateToColor}: Props) => {

    const [selectedDate, setSelectedDate] = useState<string>();
    const [rows, setRows] = useState<any[]>([]);

    const today = moment();
    const [currentDate, setCurrentDate] = useState(today);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [monthToRender, _setMonthToRender] = useState<number>(month != null ? month : today.month());
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [yearToRender, _setYearToRender] = useState<number>(year || today.year());

    const englishToFrench:  Dic = {
        Sun: 'Dim',
        Mon: 'Lun',
        Tue: 'Mar',
        Wed: 'Mer',
        Thu: 'Jeu',
        Fri: 'Ven',
        Sat: 'Sam',
        Jan: 'Janvier',
        Feb: 'Février',
        Mar: 'Mars',
        Apr: 'Avril',
        May: 'Mai',
        Jun: 'Juin',
        Jul: 'Juillet',
        Aug: 'Août',
        Sep: 'Septembre',
        Oct: 'Octobre',
        Nov: 'Novembre',
        Dec: 'Décembre',
    };

    function convertToFrench(text: string) {
        return englishToFrench[text] || text;
    }

    const weekDayShortName = moment.weekdaysShort().map((day: string) => {
        return (
            <th key={day}>
                <div className="w-full flex justify-evenly">
                    <p className="text-xs font-medium text-center text-gray-800 ">{convertToFrench(day).charAt(0)}</p>
                </div>
            </th>
        );
    });

    const firstDayOfMonth = () => {
        return parseInt(moment(currentDate)
            .startOf("month")
            .format("d"));
    };

    const getBlank = () => {
        const blanks = [];
        for (let i = 0; i < firstDayOfMonth(); i++) {
            blanks.push(
                <td key={i} className="pt-6">
                    <div className="px-1 py-1  cursor-pointer flex w-full justify-center"></div>
                </td>
            );
        }
        return blanks;
    }

    const getDayInMonth = () => {
        const daysInMonth = [];
        for (let d = 1; d <= currentDate.daysInMonth(); d++) {

            daysInMonth.push(
                <td key={(d + 1) * 100} className="pt-2 text-gray-500">
                    <button onClick={() => {

                        getDate(`${d}/${(monthToRender + 1)}/${yearToRender}`);
                        setSelectedDate(`${d}/${monthToRender + 1}/${yearToRender}`);

                    }} className={`
                        px-1 py-1 cursor-pointer flex w-full justify-center rounded-full 
                         ${selectedDate && selectedDate === `${d}/${(monthToRender + 1)}/${yearToRender}` ? "bg-cyan-500 text-white" 
                        : dateToColor && dateToColor.filter((date) => (date === `${d}/${(monthToRender + 1)}/${yearToRender}`)).length && "bg-gray-400 text-white"} 
                         ${`${d}/${(monthToRender + 1)}/${yearToRender}` === today.format("D/M/y") ? "bg-blue-400 text-white" : ""} 
                     `}>
                        <p className={`text-xs font-medium`}>{d}</p>
                    </button>
                </td>
            );
        }
        return daysInMonth;
    }

    const getRows = () => {
        let c:any[] = [];
        const r:any[] = [];
        const array = [...getBlank(), ...getDayInMonth()];
        array.forEach((row, i) => {
            if (i % 7 !== 0) {
                c.push(row); // if index not equal 7 that means not go to next week
            } else {
                r.push(c); // when reach next week we contain all td in last week to rows
                c = []; // empty container
                c.push(row); // in current loop we still push current row to new container
            }
            if (i === array.length - 1) { // when end loop we add remain date
                r.push(c);
            }
        });
        return r;
    }


    useEffect(() => {
        setRows(getRows())
        // eslint-disable-next-line
    }, [dateToColor, selectedDate, currentDate])

    useEffect(() => {

        setCurrentDate(moment(`${(monthToRender + 1)} 1 ${yearToRender}`, "M D YYYY"))

    },[monthToRender, yearToRender])


    return (<>
        <div className="bg-white rounded ">
            
            <div className="mt-4 flex items-center justify-between">
                <span tabIndex={0} className="focus:outline-none  text-base font-bold  text-gray-800">{convertToFrench(moment.monthsShort(monthToRender))}</span>
            </div>
            <div className="flex items-center justify-between mt-4 overflow-x-auto bg-white text-xs">
                <table className="w-full">
                    <thead>
                        <tr>
                            {weekDayShortName}
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((d, i) => {
                            return (<tr key={(i + 1) * 10}>{d}</tr>);
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    </>)
}