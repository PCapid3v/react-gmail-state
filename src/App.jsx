import { useState } from 'react'
import Header from './components/header'
import initialEmails from './data/emails'

import './styles/App.css'

function App() {
  // Use initialEmails for state
  const [newEmail, setNewEmail] = useState(initialEmails)
  const newEmailRendered = 
  newEmail.map((email, index) => {
    return (<li key={index}>
      <div className="select">
        <input
          type="checkbox"
          className='select-checkbox'
          checked={email}/>
          </div>
        <div className="star">
          <input
            type="checkbox"
            className='star-checkbox'
            checked={email.starred} />
          </div>
          <div className="sender">{email.sender}</div>
          <div className="title">{email.title}</div>
          </li>)
  })
const isRead = newEmail.filter(email => email.read)
const isStarred = newEmail.filter(email => email.starred)




  console.log(initialEmails)

  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className="item active"
            // onClick={() => {}}
          >
            <span className="label">Inbox</span>
            <span className="count">{isRead.length}</span>
          </li>
          <li
            className="item"
            // onClick={() => {}}
          >
            <span className="label">Starred</span>
            <span className="count">{isStarred.length}</span>
          </li>

          <li className="item toggle">
            <label htmlFor="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={false}
              // onChange={() => {}}
            />
          </li>
        </ul>
      </nav>
      <main className=" = ">{newEmailRendered}</main>
    </div>
  )
}

export default App
