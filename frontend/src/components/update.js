import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { useNavigate } from "react-router";

export default function Update() {
  const navigate = useNavigate();
  const [_id, setID] = useState(null);
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

  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setName(localStorage.getItem("Name"));
    setAddress(localStorage.getItem("Address"));
    setSerialNo(localStorage.getItem("Serial Number"));
    setPhoneProvider(localStorage.getItem("Phone Provider"));
    setInternetProvider(localStorage.getItem("Internet Provider"));
    setLandlineNumber(localStorage.getItem("Landline Number"));
    setCellularNumber(localStorage.getItem("Cellular Number"));
    setPublicIP(localStorage.getItem("Public IP"));
    setSubnet(localStorage.getItem("Subnet"));
    setPlcIP(localStorage.getItem("PLC IP"));
    setPlcMAC(localStorage.getItem("PLC MAC"));
    setPlcMake(localStorage.getItem("PLC Make"));
    setPlcModel(localStorage.getItem("PLC Model"));
    try {
      setPlcInstallDate(new Date(localStorage.getItem("PLC Install Date")));
    } catch (error) {
      console.error(error);
      setPlcInstallDate(null);
    }
    setPanelIP(localStorage.getItem("Panel IP"));
    setPanelMAC(localStorage.getItem("Panel MAC"));
    setPanelMake(localStorage.getItem("Panel Make"));
    setPanelModel(localStorage.getItem("Panel Model"));
    try {
      setPanelInstallDate(new Date(localStorage.getItem("Panel Install Date")));
    } catch (error) {
      console.error(error);
      setPanelInstallDate(null);
    }
    setPanelOS(localStorage.getItem("Panel OS"));
    setPanelHMI(localStorage.getItem("Panel HMI"));
    setPumpControlPanelIP(localStorage.getItem("Pump Control Panel IP"));
    setPumpControlPanelMAC(localStorage.getItem("Pump Control Panel MAC"));
  }, []);

  const updateAPIData = () => {
    axios
      .put(`http://localhost:8080/api/sysops/${_id}`, {
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
      .then(() => {
        navigate("/");
      });
  };
  return (
    <div className="scrollable">
      <form>
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
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input
                  placeholder="Name"
                  value={Name}
                  onChange={(e) => setName(e.target.value)}
                />
              </td>
              <td>
                <input
                  placeholder="Address"
                  value={Address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </td>
              <td>
                <input
                  placeholder="Serial Number"
                  value={SerialNo}
                  onChange={(e) => setSerialNo(e.target.value)}
                />
              </td>
              <td>
                <input
                  placeholder="Phone Provider"
                  value={PhoneProvider}
                  onChange={(e) => setPhoneProvider(e.target.value)}
                />
              </td>
              <td>
                <input
                  placeholder="Internet Provider"
                  value={InternetProvider}
                  onChange={(e) => setInternetProvider(e.target.value)}
                />
              </td>
              <td>
                <input
                  placeholder="Landline Number"
                  value={LandlineNumber}
                  onChange={(e) => setLandlineNumber(e.target.value)}
                />
              </td>
              <td>
                <input
                  placeholder="Cellular Number"
                  value={CellularNumber}
                  onChange={(e) => setCellularNumber(e.target.value)}
                />
              </td>
              <td>
                <input
                  placeholder="Public IP"
                  value={PublicIP}
                  onChange={(e) => setPublicIP(e.target.value)}
                />
              </td>
              <td>
                <input
                  placeholder="Subnet"
                  value={Subnet}
                  onChange={(e) => setSubnet(e.target.value)}
                />
              </td>
              <td>
                <input
                  placeholder="PLC IP"
                  value={PlcIP}
                  onChange={(e) => setPlcIP(e.target.value)}
                />
              </td>
              <td>
                <input
                  placeholder="PLC MAC"
                  value={PlcMAC}
                  onChange={(e) => setPlcMAC(e.target.value)}
                />
              </td>
              <td>
                <input
                  placeholder="PLC Make"
                  value={PlcMake}
                  onChange={(e) => setPlcMake(e.target.value)}
                />
              </td>
              <td>
                <input
                  placeholder="PLC Model"
                  value={PlcModel}
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
                  placeholder="Panel IP"
                  value={PanelIP}
                  onChange={(e) => setPanelIP(e.target.value)}
                />
              </td>
              <td>
                <input
                  placeholder="Panel MAC"
                  value={PanelMAC}
                  onChange={(e) => setPanelMAC(e.target.value)}
                />
              </td>
              <td>
                <input
                  placeholder="Panel Make"
                  value={PanelMake}
                  onChange={(e) => setPanelMake(e.target.value)}
                />
              </td>
              <td>
                <input
                  placeholder="Panel Model"
                  value={PanelModel}
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
                  placeholder="Panel OS"
                  value={PanelOS}
                  onChange={(e) => setPanelOS(e.target.value)}
                />
              </td>
              <td>
                <input
                  placeholder="Panel HMI"
                  value={PanelHMI}
                  onChange={(e) => setPanelHMI(e.target.value)}
                />
              </td>
              <td>
                <input
                  placeholder="Pump Control Panel IP"
                  value={PumpControlPanelIP}
                  onChange={(e) => setPumpControlPanelIP(e.target.value)}
                />
              </td>
              <td>
                <input
                  placeholder="Pump Control Panel MAC"
                  value={PumpControlPanelMAC}
                  onChange={(e) => setPumpControlPanelMAC(e.target.value)}
                />
              </td>
              <td>
                <input type="submit" onClick={updateAPIData} value="Update" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}
