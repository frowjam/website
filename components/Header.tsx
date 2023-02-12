import Image from "next/image"
import Link from "next/link"
import { FunctionComponent } from "react"

const Header: FunctionComponent = () => (
  <header
    style={{
      marginBottom: `1.45rem`,
      borderBottom: "1px solid black",
    }}
  >
    <div className="max-w-4xl my-0 mx-auto">
      <h1 className="m-0">
        <Link href="/">
          <Image
            priority
            src="/images/logo.svg"
            width={225}
            height={150}
            alt=""
          />
        </Link>
      </h1>
    </div>
  </header>
)

export default Header
