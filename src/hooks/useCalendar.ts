

interface Day {
    day: string;
    date: string;
}

const DAYS: string[] = [
    "Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"
]

interface Week {
    days: Day[];
}

interface Month {
    firstDayOfMonth: number;
    month: string;
    date : string;
    days: Day[];
    weeks: Week[];
}

const MONTHS: string[] = [
    "Janvier", "Février", "Mars", "Avril", 
    "Mai", "Juin", "Juillet", "Août", 
    "Septembre", "Octobre", "Novembre", "Décembre"
]

interface Year {
    year: number;
    months: Month[];
}

export default function useCalendar  () {
   
    const getDaysInMonth = (month: number, year: number) => {
        return new Date(year, month, 0).getDate();
    }

    const getBlankDays = (month: number, year: number) => {
        const blanks = [];
        for (let i = 0; i < getFirstDayOfMonth(month, year); i++) {
            blanks.push({
                day: DAYS[i]
            });
        }
        return blanks;
    }

    const getFirstDayOfMonth = (month: number, year: number) => {
        return new Date(year, month, 1).getDay();
    }

    const getMonth = (month: number, year: number) => {
        const daysInMonth = getDaysInMonth(month, year);
        const firstDayOfMonth = getFirstDayOfMonth(month, year);
        const blankDays = getBlankDays(month, year);
        const monthArray = Array.from({ length: daysInMonth }, (_, i) => {
            return {
                day: DAYS[(firstDayOfMonth + i + blankDays.length - 1) % 7],
                date: `${year}-${month}-${i + 1}`
            }
        });

        const weekArray = Array.from({ length: Math.ceil(daysInMonth / 7) }, (_, i) => {
            return {
                days: monthArray.slice(i * 7, (i * 7) + 7)
            }
        });
        
        const monthObject: Month = {
            firstDayOfMonth,
            month: MONTHS[month - 1],
            date: `${year}-${month}`,
            days: monthArray as Day[],
            weeks: weekArray as Week[]
        }
        return monthObject;
    }

    const getYear = (year: number) => {
        const months = Array.from({ length: 12 }, (_, i) => {
            return getMonth(i + 1, year);
        });
        const yearObject: Year = {
            year: year,
            months: months as Month[]
        }
        return yearObject;
    }

    return {
        getYear
    }
}