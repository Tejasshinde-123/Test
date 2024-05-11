import React from 'react'
import { FiPhoneCall } from "react-icons/fi";
import { MdMissedVideoCall} from 'react-icons/md';
import { MdCallEnd } from "react-icons/md";
import './Caller.css'

function Caller() {
  return (
    <>
    <div className="all">
        <div className="id1">
            <h3>Hi,your ID is <u>twinlight-forest-7411</u></h3>
            <p>Get started by calling a friend below</p>
        </div>
        <div className="id2">
            <h3><u>Your Friend ID</u></h3>
            <h1><MdMissedVideoCall /><FiPhoneCall />
            </h1>
        </div>
        <div className="call">
          <p>crimson-snow-1258 is calling</p><br />
          <div className="icons">
           <MdCallEnd /><MdMissedVideoCall /><FiPhoneCall />
           </div>
        </div>
    </div>
    </>
  )
}

export default Caller