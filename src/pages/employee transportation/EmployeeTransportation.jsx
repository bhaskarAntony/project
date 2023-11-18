import React from 'react'
import Hero from './Hero'
import Efficient from './Efficient'
import Best from './Best'
import Working from '../../components/Working'
import Choose from '../../components/Choose'
import Discover from '../../components/Discover'
import Transportation from '../../components/Transportation'
import Cars from '../../components/Cars'

function EmployeeTransportation() {
  return (
    <div>
      <Hero/>
      <Working/>
      <Transportation/>
      <Efficient/>
      <Cars/>
      <Choose/>
      <Best/>
      <Discover/>
    </div>
  )
}

export default EmployeeTransportation
