import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { useNavigate } from "react-router";

export default function Create() {
  let navigate = useNavigate();
  const [Name, setName] = useState("");
  const [Address, setAddress] = useState("");
  const [SerialNo, setSerialNo] = useState("");
  const [PhoneProvider, setPhoneProvider] = useState("");
  const [InternetProvider, setInternetProvider] = useState("");
  const [LandlineNumber, setLandlineNumber] = useState("");
  const [CellularNumber, setCellularNumber] = useState("");
  const [PublicIP, setPublicIP] = useState("");
  const [Subnet, setSubnet] = useState("");
  const [PlcIP, setPlcIP] = useState("");
  const [PlcMAC, setPlcMAC] = useState("");
  const [PlcMake, setPlcMake] = useState("");
  const [PlcModel, setPlcModel] = useState("");
  const [PlcInstallDate, setPlcInstallDate] = useState(null);
  const [PanelIP, setPanelIP] = useState("");
  const [PanelMAC, setPanelMAC] = useState("");
  const [PanelMake, setPanelMake] = useState("");
  const [PanelModel, setPanelModel] = useState("");
  const [PanelInstallDate, setPanelInstallDate] = useState(null);
  const [PanelOS, setPanelOS] = useState("");
  const [PanelHMI, setPanelHMI] = useState("");
  const [PumpControlPanelIP, setPumpControlPanelIP] = useState("");
  const [PumpControlPanelMAC, setPumpControlPanelMAC] = useState("");

  const handlePlcDateChange = (date) => {
    setPlcInstallDate(date);
  };

  const handlePanelDateChange = (date) => {
    setPanelInstallDate(date);
  };

  const postData = (event) => {
    event.preventDefault();
    axios
      .post(`http://localhost:8080/api/sysops`, {
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
      })
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="scrollable">
      <form onSubmit={postData}>
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
              <th>Submit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                />
              </td>
              <td>
                <input
                  placeholder="Address"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </td>
              <td>
                <input
                  placeholder="SerialNo"
                  onChange={(e) => setSerialNo(e.target.value)}
                />
              </td>
              <td>
                <input
                  placeholder="PhoneProvider"
                  onChange={(e) => setPhoneProvider(e.target.value)}
                />
              </td>
              <td>
                <input
                  placeholder="InternetProvider"
                  onChange={(e) => setInternetProvider(e.target.value)}
                />
              </td>
              <td>
                <input
                  placeholder="LandlineNumber"
                  onChange={(e) => setLandlineNumber(e.target.value)}
                />
              </td>
              <td>
                <input
                  placeholder="CellularNumber"
                  onChange={(e) => setCellularNumber(e.target.value)}
                />
              </td>
              <td>
                <input
                  placeholder="PublicIP"
                  onChange={(e) => setPublicIP(e.target.value)}
                />
              </td>
              <td>
                <input
                  placeholder="Subnet"
                  onChange={(e) => setSubnet(e.target.value)}
                />
              </td>
              <td>
                <input
                  placeholder="PlcIP"
                  onChange={(e) => setPlcIP(e.target.value)}
                />
              </td>
              <td>
                <input
                  placeholder="PlcMAC"
                  onChange={(e) => setPlcMAC(e.target.value)}
                />
              </td>
              <td>
                <input
                  placeholder="PlcMake"
                  onChange={(e) => setPlcMake(e.target.value)}
                />
              </td>
              <td>
                <input
                  placeholder="PlcModel"
                  onChange={(e) => setPlcModel(e.target.value)}
                />
              </td>
              <td>
                <DatePicker
                  selected={PlcInstallDate}
                  onChange={handlePlcDateChange}
                />
              </td>
              <td>
                <input
                  placeholder="PanelIP"
                  onChange={(e) => setPanelIP(e.target.value)}
                />
              </td>
              <td>
                <input
                  placeholder="PanelMAC"
                  onChange={(e) => setPanelMAC(e.target.value)}
                />
              </td>
              <td>
                <input
                  placeholder="PanelMake"
                  onChange={(e) => setPanelMake(e.target.value)}
                />
              </td>
              <td>
                <input
                  placeholder="PanelModel"
                  onChange={(e) => setPanelModel(e.target.value)}
                />
              </td>
              <td>
                <DatePicker
                  selected={PanelInstallDate}
                  onChange={handlePanelDateChange}
                />
              </td>
              <td>
                <input
                  placeholder="PanelOS"
                  onChange={(e) => setPanelOS(e.target.value)}
                />
              </td>
              <td>
                <input
                  placeholder="PanelHMI"
                  onChange={(e) => setPanelHMI(e.target.value)}
                />
              </td>
              <td>
                <input
                  placeholder="PumpControlPanelIP"
                  onChange={(e) => setPumpControlPanelIP(e.target.value)}
                />
              </td>
              <td>
                <input
                  placeholder="PumpControlPanelMAC"
                  onChange={(e) => setPumpControlPanelMAC(e.target.value)}
                />
              </td>
              <td>
                <input type="submit" value="Submit" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}
