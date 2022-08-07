import React, { FunctionComponent } from "react"

const NextEvent: FunctionComponent<{
  startTime: string
  finishTime: string
  date: string
  venue: string
  title: string
}> = ({ date, startTime, finishTime, venue, title }) => {
  return (
    <section className="h-event">
      <h2 className="p-name">{title || "Jam Session"}</h2>
      <p>
        Our next Jam Session is on {date}, from{" "}
        <time className="dt-start" dateTime="2020-03-17 20:30">
          {startTime}
        </time>{" "}
        -{" "}
        <time className="dt-start" dateTime="2020-03-17 22:30">
          {finishTime}
        </time>
        , at <span className="p-location">{venue}</span>.
      </p>
    </section>
  )
}

export default NextEvent
