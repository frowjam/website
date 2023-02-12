import React, { FunctionComponent } from "react"
import { Temporal } from "temporal-polyfill"
import { Intl } from "temporal-spec"

const timeFormat: Intl.DateTimeFormatOptions = {
  hour12: true,
  hour: "numeric",
  minute: "numeric",
  second: undefined,
}

const dateFormat: Intl.DateTimeFormatOptions = {
  weekday: "long",
  month: "long",
  day: "numeric",
}

function formatDate(dateString: string): string {
  const plainDate = Temporal.PlainDate.from(dateString)
  return plainDate.toLocaleString("en-GB", dateFormat)
}

function formatTime(timeString: string): string {
  const plainTime = Temporal.PlainTime.from(timeString)
  return plainTime.toLocaleString("en-GB", timeFormat)
}

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
        Our next Jam Session is on {formatDate(date)}, from{" "}
        <time className="dt-start" dateTime={`${date} ${startTime}`}>
          {formatTime(startTime)}
        </time>{" "}
        -{" "}
        <time className="dt-start" dateTime={`${date} ${finishTime}`}>
          {formatTime(finishTime)}
        </time>
        , at <span className="p-location">{venue}</span>.
      </p>
      <p className="font-serif mb-4">
        <a
          className="text-blue-600 dark:text-blue-500 hover:underline"
          href={url}
        >
          More details on Facebook
        </a>
        , where you can RSVP.
      </p>
    </section>
  )
}

export default NextEvent
