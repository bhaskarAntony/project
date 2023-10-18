import React from 'react'
import '../styles/book-card.css'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function BookForm() {
  return (
    <div className='container bg-white book-card '>
      <div className="w-100 p-2 border-0">
      <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="home" title="OutStation">
        Tab content for Home
      </Tab>
      <Tab eventKey="profile" title="Local">
        Tab content for Profile
      </Tab>
      <Tab eventKey="longer-tab" title="Airport">
        Tab content for Loooonger Tab
      </Tab>
    </Tabs>

        </div>
    </div>
  )
}

export default BookForm
