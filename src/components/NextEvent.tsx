import React, { FunctionComponent } from "react"

const NextEvent: FunctionComponent<{
  startTime: string
  finishTime: string
  date: string
  venue: string
}> = ({ date, startTime, finishTime, venue }) => {
  return (
    <section className="h-event">
      <h2 className="p-name">February Jam Session</h2>
      <p>
        Our next Jam Session is on {date}, from{" "}
        <time className="dt-start" dateTime="2020-02-18 20:30">
          {startTime}
        </time>{" "}
        -{" "}
        <time className="dt-start" dateTime="2020-02-18 22:30">
          {finishTime}
        </time>
        , at <span className="p-location">{venue}</span>.
      </p>
    </section>
  )
}

export default NextEvent
