import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Read() {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:8080/api/sysops`).then((response) => {
      console.log(response.data);
      setAPIData(response.data);
    });
  }, []);

  const setData = (data) => {
    let {
      _id,
      Name,
      Address,
      SerialNo,
      PhoneProvider,
      InternetProvider,
      LandlineNumber,
      CellularNumber,
      PublicIP,
      Subnet,
      PlcIP,
      PlcMAC,
      PlcMake,
      PlcModel,
      PlcInstallDate,
      PanelIP,
      PanelMAC,
      PanelMake,
      PanelModel,
      PanelInstallDate,
      PanelOS,
      PanelHMI,
      PumpControlPanelIP,
      PumpControlPanelMAC,
    } = data;
    localStorage.setItem("ID", _id);
    localStorage.setItem("Name", Name);
    localStorage.setItem("Address", Address);
    localStorage.setItem("Serial Number", SerialNo);
    localStorage.setItem("Phone Provider", PhoneProvider);
    localStorage.setItem("Internet Provider", InternetProvider);
    localStorage.setItem("Landline Number", LandlineNumber);
    localStorage.setItem("Cellular Number", CellularNumber);
    localStorage.setItem("Public IP", PublicIP);
    localStorage.setItem("Subnet", Subnet);
    localStorage.setItem("PLC IP", PlcIP);
    localStorage.setItem("PLC MAC", PlcMAC);
    localStorage.setItem("PLC Make", PlcMake);
    localStorage.setItem("PLC Model", PlcModel);
    localStorage.setItem("PLC Install Date", PlcInstallDate);
    localStorage.setItem("Panel IP", PanelIP);
    localStorage.setItem("Panel MAC", PanelMAC);
    localStorage.setItem("Panel Make", PanelMake);
    localStorage.setItem("Panel Model", PanelModel);
    localStorage.setItem("Panel Install Date", PanelInstallDate);
    localStorage.setItem("Panel OS", PanelOS);
    localStorage.setItem("Panel HMI", PanelHMI);
    localStorage.setItem("Pump Control Panel IP", PumpControlPanelIP);
    localStorage.setItem("Pump Control Panel MAC", PumpControlPanelMAC);
  };

  const getData = () => {
    axios.get(`http://localhost:8080/api/sysops`).then((getData) => {
      setAPIData(getData.data);
    });
  };

  const onDelete = (_id) => {
    axios.delete(`http://localhost:8080/api/sysops/${_id}`).then(() => {
      getData();
    });
  };

  return (
    <div className="scrollable">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Serial Number</th>
            <th>Phone Provider</th>
            <th>Internet Provider</th>
            <th>Landline Number</th>
            <th>Cellular Number</th>
            <th>Public IP</th>
            <th>Subnet</th>
            <th>PLC IP</th>
            <th>PLC MAC</th>
            <th>PLC Make</th>
            <th>PLC Model</th>
            <th>PLC Install Date</th>
            <th>Panel IP</th>
            <th>Panel MAC</th>
            <th>Panel Make</th>
            <th>Panel Model</th>
            <th>Panel Install Date</th>
            <th>Panel OS</th>
            <th>Panel HMI</th>
            <th>Pump Control Panel IP</th>
            <th>Pump Control Panel MAC</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {APIData.map((data) => {
            return (
              <tr key={data._id}>
                <td>{data.Name}</td>
                <td>{data.Address}</td>
                <td>{data.SerialNo}</td>
                <td>{data.PhoneProvider}</td>
                <td>{data.InternetProvider}</td>
                <td>{data.LandlineNumber}</td>
                <td>{data.CellularNumber}</td>
                <td>{data.PublicIP}</td>
                <td>{data.Subnet}</td>
                <td>{data.PlcIP}</td>
                <td>{data.PlcMAC}</td>
                <td>{data.PlcMake}</td>
                <td>{data.PlcModel}</td>
                <td>{data.PlcInstallDate}</td>
                <td>{data.PanelIP}</td>
                <td>{data.PanelMAC}</td>
                <td>{data.PanelMake}</td>
                <td>{data.PanelModel}</td>
                <td>{data.PanelInstallDate}</td>
                <td>{data.PanelOS}</td>
                <td>{data.PanelHMI}</td>
                <td>{data.PumpControlPanelIP}</td>
                <td>{data.PumpControlPanelMAC}</td>
                <td>
                  <Link to="/update">
                    <button onClick={() => setData(data)}>Update</button>
                  </Link>
                </td>
                <td>
                  <button onClick={() => onDelete(data._id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
