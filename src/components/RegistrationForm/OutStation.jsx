import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import RoundTrip from './RoundTrip';
import OnewayTrip from './OnewayTrip';

function OutStation() {
    const [roundtrip, setRoundTrip] = useState(false)
  return (
    <div>
       <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="m-0 mb-3 p-0"
      fill
    >
      <Tab eventKey="home" title="One-Way Trip " className="p-0 m-0">
        <OnewayTrip/>
      </Tab>
      <Tab eventKey="profile" title="Round Trip" className="p-0 m-0">
        <RoundTrip/>
      </Tab>
    </Tabs>
    </div>
  )
}

export default OutStation
