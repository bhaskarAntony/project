import React from 'react'
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
      className="mb-3 p-0"
      fill
    >
      <Tab eventKey="home" title="OutStation" className="p-0 m-0 text-900">
        <OutStation/>
      </Tab>
      <Tab eventKey="profile" title="Local" className="p-0 m-0 text-900">
        <LocalTaxi/>
      </Tab>
      <Tab eventKey="longer-tab" title="Airport" className="p-0 m-0 text-900">
        <Airport/>
      </Tab>
    </Tabs>

        </div>
    </div>
  )
}

export default BookForm
