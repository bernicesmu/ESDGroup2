import { formatDate } from '@fullcalendar/core'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'

const events = [
  {
    url: '../backend/event/addsmth.php',
    method: 'GET',
    failure: function() {
      alert('there was an error while fetching events!');
    }
  }
]

export default function Calendar() {
      return (
        <div style="width: 70%">
            <div >
                <FullCalendar
            plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin ]}
            initialView="dayGridMonth"
            events={events}
            eventContent={renderEventContent}
            />
            </div>  
        </div>
      )
    }

  function renderEventContent(eventInfo) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    )
  }