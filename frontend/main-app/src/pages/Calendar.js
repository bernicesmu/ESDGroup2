import { formatDate } from '@fullcalendar/core'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

export default function Calendar() {
      return (
        <div>
            <div>
                <FullCalendar
            plugins={[ dayGridPlugin ]}
            initialView="dayGridMonth"
            />
            </div>  
        </div>
      )
    }