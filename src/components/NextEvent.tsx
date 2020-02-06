import React, { FunctionComponent } from "react"

const NextEvent: FunctionComponent<{
  startTime: string
  finishTime: string
  date: string
  venue: string
}> = ({ date, startTime, finishTime, venue }) => {
  return (
    <section>
      <h2>Our next jam session</h2>
      <div>is on {date}</div>
      <div>
        from {startTime} - {finishTime}
      </div>
      <div>at {venue}</div>
    </section>
  )
}

export default NextEvent
