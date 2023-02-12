import React, { FunctionComponent } from "react"

const NextEvent: FunctionComponent<{
  startTime: string
  finishTime: string
  date: string
  venue: string
  title: string
  url: string
}> = ({ date, startTime, finishTime, venue, title, url }) => {
  return (
    <section className="h-event">
      <h2 className="text-2xl mb-4">{title || "Jam Session"}</h2>
      <p className="font-serif mb-4">
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
      <p className="font-serif mb-4">
        <a  className="text-blue-600 dark:text-blue-500 hover:underline" href={url}>More details on Facebook</a>, where you can RSVP.
      </p>
    </section>
  )
}

export default NextEvent