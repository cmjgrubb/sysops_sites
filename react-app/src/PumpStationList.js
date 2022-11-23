import React, { Component } from "react";
import { Link } from "react-router-dom";

const PumpStations = ({
  name,
  address,
  serialno,
  phoneprovider,
  internetprovider,
  landlinenumber,
  cellularnumber,
  publicip,
  subnet,
  plcip,
  plcmac,
  plcmake,
  plcmodel,
  plcinstalldate,
  panelip,
  panelmac,
  panelmake,
  panelmodel,
  panelinstalldate,
  panelos,
  panelhmi,
  pumpcontrolpanelip,
  pumpcontrolpanelmac,
  psid,
}) => (
  <tr>
    <td>{name}</td>
    <td>{address}</td>
    <td>{serialno}</td>
    <td>{phoneprovider}</td>
    <td>{internetprovider}</td>
    <td>{landlinenumber}</td>
    <td>{cellularnumber}</td>
    <td>{publicip}</td>
    <td>{subnet}</td>
    <td>{plcip}</td>
    <td>{plcmac}</td>
    <td>{plcmake}</td>
    <td>{plcmodel}</td>
    <td>{plcinstalldate}</td>
    <td>{panelip}</td>
    <td>{panelmac}</td>
    <td>{panelmake}</td>
    <td>{panelmodel}</td>
    <td>{panelinstalldate}</td>
    <td>{panelos}</td>
    <td>{panelhmi}</td>
    <td>{pumpcontrolpanelip}</td>
    <td>{pumpcontrolpanelmac}</td>
    <td>{psid}</td>
  </tr>
);

export default class PumpStationList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pumpstations: [],
    };

    this.FetchFromDB = this.FetchFromDB.bind(this);
    this.DeleteFromDB = this.DeleteFromDB.bind(this);
  }

  async FetchFromDB() {
    const res = await fetch(`http://localhost:8080/api/sysops`);
    const data = await res.json();
    return data;
  }

  async componentDidMount() {
    const pumpstations = await this.FetchFromDB();
    this.setState({ pumpstations });
  }

  render() {
    return (
      <div>
        <div>
          <Link to="/add">Add</Link>
          <Link to="/delete">Delete</Link>
          <Link to="/edit">Edit</Link>
          <Link to="/find">Find</Link>
        </div>
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
            </tr>
          </thead>
          <tbody>
            {this.state.pumpstations.map((pumpstation) => (
              <PumpStations
                name={pumpstation.Name}
                address={pumpstation.Address}
                serialno={pumpstation.SerialNo}
                phoneprovider={pumpstation.PhoneProvider}
                internetprovider={pumpstation.InternetProvider}
                landlinenumber={pumpstation.LandlineNumber}
                cellularnumber={pumpstation.CellularNumber}
                publicip={pumpstation.PublicIP}
                subnet={pumpstation.Subnet}
                plcip={pumpstation.PlcIP}
                plcmac={pumpstation.PlcMAC}
                plcmake={pumpstation.PlcMake}
                plcmodel={pumpstation.PlcModel}
                plcinstalldate={pumpstation.PlcInstallDate}
                panelip={pumpstation.PanelIP}
                panelmac={pumpstation.PanelMAC}
                panelmake={pumpstation.PanelMake}
                panelmodel={pumpstation.PanelModel}
                panelinstalldate={pumpstation.PanelInstallDate}
                panelos={pumpstation.PanelOS}
                panelhmi={pumpstation.PanelHMI}
                pumpcontrolpanelip={pumpstation.PumpControlPanelIP}
                pumpcontrolpanelmac={pumpstation.PumpControlPanelMAC}
                psid={pumpstation._id}
                key={pumpstation._id}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
