import React from "react"
import styles from "./contact.module.scss"

const contacts = [
  {
    source: 'gmail',
    link: 'mailto:marina.webdev@gmail.com',
  },
  {
    source: 'twitter',
    link: 'https://twitter.com/mari__goto',
  },
  {
    source: 'github',
    link: 'https://github.com/MarinaGoto',
  },
  {
    source: 'linkedin',
    link: 'https://www.linkedin.com/in/marina-goto/',
  },
  {
    source: 'instagram',
    link: 'https://www.instagram.com/mari__goto/',
  },
];

const Contact = () => {
  return (
    <div className={styles.contactBox}>
      {contacts.map((contact, index) => (
        <a key={index} href={contact.link}>
          {contact.source}
        </a>
      ))}
      <p className={styles.creds}>created by myself. photos by  <a href={'https://www.instagram.com/cocainym/'}>jim lafleur</a> </p>
      </div>
  )
};

export default Contact
