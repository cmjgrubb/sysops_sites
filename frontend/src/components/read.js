import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table, Button } from "semantic-ui-react";
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
      <Table singleLine sortable striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Address</Table.HeaderCell>
            <Table.HeaderCell>Serial Number</Table.HeaderCell>
            <Table.HeaderCell>Phone Provider</Table.HeaderCell>
            <Table.HeaderCell>Internet Provider</Table.HeaderCell>
            <Table.HeaderCell>Landline Number</Table.HeaderCell>
            <Table.HeaderCell>Cellular Number</Table.HeaderCell>
            <Table.HeaderCell>Public IP</Table.HeaderCell>
            <Table.HeaderCell>Subnet</Table.HeaderCell>
            <Table.HeaderCell>PLC IP</Table.HeaderCell>
            <Table.HeaderCell>PLC MAC</Table.HeaderCell>
            <Table.HeaderCell>PLC Make</Table.HeaderCell>
            <Table.HeaderCell>PLC Model</Table.HeaderCell>
            <Table.HeaderCell>PLC Install Date</Table.HeaderCell>
            <Table.HeaderCell>Panel IP</Table.HeaderCell>
            <Table.HeaderCell>Panel MAC</Table.HeaderCell>
            <Table.HeaderCell>Panel Make</Table.HeaderCell>
            <Table.HeaderCell>Panel Model</Table.HeaderCell>
            <Table.HeaderCell>Panel Install Date</Table.HeaderCell>
            <Table.HeaderCell>Panel OS</Table.HeaderCell>
            <Table.HeaderCell>Panel HMI</Table.HeaderCell>
            <Table.HeaderCell>Pump Control Panel IP</Table.HeaderCell>
            <Table.HeaderCell>Pump Control Panel MAC</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {APIData.map((data) => {
            return (
              <Table.Row key={data._id}>
                <Table.Cell>{data.Name}</Table.Cell>
                <Table.Cell>{data.Address}</Table.Cell>
                <Table.Cell>{data.SerialNo}</Table.Cell>
                <Table.Cell>{data.PhoneProvider}</Table.Cell>
                <Table.Cell>{data.InternetProvider}</Table.Cell>
                <Table.Cell>{data.LandlineNumber}</Table.Cell>
                <Table.Cell>{data.CellularNumber}</Table.Cell>
                <Table.Cell>{data.PublicIP}</Table.Cell>
                <Table.Cell>{data.Subnet}</Table.Cell>
                <Table.Cell>{data.PlcIP}</Table.Cell>
                <Table.Cell>{data.PlcMAC}</Table.Cell>
                <Table.Cell>{data.PlcMake}</Table.Cell>
                <Table.Cell>{data.PlcModel}</Table.Cell>
                <Table.Cell>{data.PlcInstallDate}</Table.Cell>
                <Table.Cell>{data.PanelIP}</Table.Cell>
                <Table.Cell>{data.PanelMAC}</Table.Cell>
                <Table.Cell>{data.PanelMake}</Table.Cell>
                <Table.Cell>{data.PanelModel}</Table.Cell>
                <Table.Cell>{data.PanelInstallDate}</Table.Cell>
                <Table.Cell>{data.PanelOS}</Table.Cell>
                <Table.Cell>{data.PanelHMI}</Table.Cell>
                <Table.Cell>{data.PumpControlPanelIP}</Table.Cell>
                <Table.Cell>{data.PumpControlPanelMAC}</Table.Cell>
                <Link to="/update">
                  <Table.Cell>
                    <Button onClick={() => setData(data)}>Update</Button>
                  </Table.Cell>
                </Link>
                <Table.Cell>
                  <Button onClick={() => onDelete(data._id)}>Delete</Button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
