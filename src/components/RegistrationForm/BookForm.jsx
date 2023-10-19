import React from 'react'
// import '/'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import LocalTaxi from './LocalTaxi';
import OutStation from './OutStation';
import Airport from './Airport';

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
        <OutStation/>
      </Tab>
      <Tab eventKey="profile" title="Local">
        <LocalTaxi/>
      </Tab>
      <Tab eventKey="longer-tab" title="Airport">
        <Airport/>
      </Tab>
    </Tabs>

        </div>
    </div>
  )
}

export default BookForm
