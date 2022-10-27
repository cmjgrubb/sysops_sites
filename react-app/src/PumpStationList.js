import React, { Component } from "react";

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
}) => (
  <div>
    <p>{name}</p>
    <p>{address}</p>
    <p>{serialno}</p>
    <p>{phoneprovider}</p>
    <p>{internetprovider}</p>
    <p>{landlinenumber}</p>
    <p>{cellularnumber}</p>
    <p>{publicip}</p>
    <p>{subnet}</p>
    <p>{plcip}</p>
    <p>{plcmac}</p>
    <p>{plcmake}</p>
    <p>{plcmodel}</p>
    <p>{plcinstalldate}</p>
    <p>{panelip}</p>
    <p>{panelmac}</p>
    <p>{panelmake}</p>
    <p>{panelmodel}</p>
    <p>{panelinstalldate}</p>
    <p>{panelos}</p>
    <p>{panelhmi}</p>
    <p>{pumpcontrolpanelip}</p>
    <p>{pumpcontrolpanelmac}</p>
  </div>
);

export default class PumpStationList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pumpstations: [],
    };

    this.FetchFromDB = this.FetchFromDB.bind(this);
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
            key={pumpstation._id}
          />
        ))}
      </div>
    );
  }
}
