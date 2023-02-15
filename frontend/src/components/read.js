import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import "../App.css";

export default function Read() {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://sysops.frederickwater.com:8080/api/sysops`)
      .then((response) => {
        console.log(response.data);
        setAPIData(response.data);
      });
  }, []);

  const setData = (data) => {
    let {
      _id,
      Name,
      Address,
      PumpType,
      Voltage,
      Phase,
      MotorHP,
      TempPower,
      ElectricCoop,
      AccountNumber,
      MeterNumber,
      GridName,
      TransLocation,
      Force,
      Gravity,
      PumpsTo,
      ForceConnection,
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
    localStorage.setItem("Pump Type", PumpType);
    localStorage.setItem("Voltage", Voltage);
    localStorage.setItem("Phase", Phase);
    localStorage.setItem("Motor HP", MotorHP);
    localStorage.setItem("Temp Power", TempPower);
    localStorage.setItem("Electric Coop", ElectricCoop);
    localStorage.setItem("Account Number", AccountNumber);
    localStorage.setItem("Meter Number", MeterNumber);
    localStorage.setItem("Grid Name", GridName);
    localStorage.setItem("Transformer Location", TransLocation);
    localStorage.setItem("Force", Force);
    localStorage.setItem("Gravity", Gravity);
    localStorage.setItem("Pumps To", PumpsTo);
    localStorage.setItem("Force Connection", ForceConnection);
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
    axios
      .get(`http://sysops.frederickwater.com:8080/api/sysops`)
      .then((getData) => {
        setAPIData(getData.data);
      });
  };

  const onDelete = (_id) => {
    axios
      .delete(`http://sysops.frederickwater.com:8080/api/sysops/${_id}`)
      .then(() => {
        getData();
      });
  };

  return (
    <div className="scrollable">
      <header className="App-header">
        <img src="./Seal.png" alt="Frederick Water Seal" className="logo" />
        <h1 className="header-title">System Operations Sites</h1>
      </header>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Pump Type</th>
            <th>Voltage</th>
            <th>Phase</th>
            <th>Motor HP</th>
            <th>Temp Power</th>
            <th>Electric Coop</th>
            <th>Account Number</th>
            <th>Meter Number</th>
            <th>Grid Name</th>
            <th>Transformer Location</th>
            <th>Force</th>
            <th>Gravity</th>
            <th>Pumps To</th>
            <th>Force Connection</th>
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
                <td>{data.PumpType}</td>
                <td>{data.Voltage}</td>
                <td>{data.Phase}</td>
                <td>{data.MotorHP}</td>
                <td>{data.TempPower}</td>
                <td>{data.ElectricCoop}</td>
                <td>{data.AccountNumber}</td>
                <td>{data.MeterNumber}</td>
                <td>{data.GridName}</td>
                <td>{data.TransLocation}</td>
                <td>{data.Force ? "✅" : "❌"}</td>
                <td>{data.Gravity ? "✅" : "❌"}</td>
                <td>{data.PumpsTo}</td>
                <td>{data.ForceConnection}</td>
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
                <td>{format(new Date(data.PlcInstallDate), "P")}</td>
                <td>{data.PanelIP}</td>
                <td>{data.PanelMAC}</td>
                <td>{data.PanelMake}</td>
                <td>{data.PanelModel}</td>
                <td>{format(new Date(data.PanelInstallDate), "P")}</td>
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
      <nav>
        <Link to="/create">
          <button>Create</button>
        </Link>
      </nav>
    </div>
  );
}
