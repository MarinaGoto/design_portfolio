import { Link } from "gatsby"
import React from "react"
import styles from "./header.module.scss"


const Header = () => (
  <header className={styles.header}>
    <div>
      <h1 style={{ margin: 0 }}>
        <Link
          className={styles.link}
          to="/"
          style={{
            textDecoration: `none`,
          }}
        >
          craft your passion
        </Link>
      </h1>
    </div>
  </header>
);

export default Header
