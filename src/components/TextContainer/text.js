import React from "react"
import styles from "./text.module.scss"

const TextContainer = ({paragraphs}) => {

  return (
    <div className={styles.textContainer}>
      {paragraphs.map((p, index) => (
        <p key={index}>
          {p}
        </p>
      ))}
    </div>
  )
};

export default TextContainer
