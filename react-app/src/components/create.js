import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import { Button, Form } from "semantic-ui-react";
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
  const [PlcInstallDate, setPlcInstallDate] = useState(new Date());
  const [PanelIP, setPanelIP] = useState("");
  const [PanelMAC, setPanelMAC] = useState("");
  const [PanelMake, setPanelMake] = useState("");
  const [PanelModel, setPanelModel] = useState("");
  const [PanelInstallDate, setPanelInstallDate] = useState(new Date());
  const [PanelOS, setPanelOS] = useState("");
  const [PanelHMI, setPanelHMI] = useState("");
  const [PumpControlPanelIP, setPumpControlPanelIP] = useState("");
  const [PumpControlPanelMAC, setPumpControlPanelMAC] = useState("");
  const postData = () => {
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
      .then(() => {
        navigate.push("/read");
      });
  };
  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>Name</label>
          <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <label>Address</label>
          <input
            placeholder="Address"
            onChange={(e) => setAddress(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Serial Number</label>
          <input
            placeholder="SerialNo"
            onChange={(e) => setSerialNo(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Phone Provider</label>
          <input
            placeholder="PhoneProvider"
            onChange={(e) => setPhoneProvider(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Internet Provider</label>
          <input
            placeholder="InternetProvider"
            onChange={(e) => setInternetProvider(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Landline Number</label>
          <input
            placeholder="LandlineNumber"
            onChange={(e) => setLandlineNumber(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Cellular Number</label>
          <input
            placeholder="CellularNumber"
            onChange={(e) => setCellularNumber(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Public IP</label>
          <input
            placeholder="PublicIP"
            onChange={(e) => setPublicIP(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Subnet</label>
          <input
            placeholder="Subnet"
            onChange={(e) => setSubnet(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>PLC IP</label>
          <input
            placeholder="PlcIP"
            onChange={(e) => setPlcIP(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>PLC MAC</label>
          <input
            placeholder="PlcMAC"
            onChange={(e) => setPlcMAC(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>PLC Make</label>
          <input
            placeholder="PlcMake"
            onChange={(e) => setPlcMake(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>PLC Model</label>
          <input
            placeholder="PlcModel"
            onChange={(e) => setPlcModel(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>PLC Installation Date</label>
          <DatePicker
            placeholder="PlcInstallDate"
            onChange={(date) => setPlcInstallDate(date)}
          />
        </Form.Field>
        <Form.Field>
          <label>Panel IP</label>
          <input
            placeholder="PanelIP"
            onChange={(e) => setPanelIP(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Panel MAC</label>
          <input
            placeholder="PanelMAC"
            onChange={(e) => setPanelMAC(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Panel Make</label>
          <input
            placeholder="PanelMake"
            onChange={(e) => setPanelMake(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Panel Model</label>
          <input
            placeholder="PanelModel"
            onChange={(e) => setPanelModel(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Panel Installation Date</label>
          <DatePicker
            placeholder="PanelInstallDate"
            onChange={(date) => setPanelInstallDate(date)}
          />
        </Form.Field>
        <Form.Field>
          <label>Panel OS</label>
          <input
            placeholder="PanelOS"
            onChange={(e) => setPanelOS(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Panel HMI</label>
          <input
            placeholder="PanelHMI"
            onChange={(e) => setPanelHMI(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Pump Control Panel IP</label>
          <input
            placeholder="PumpControlPanelIP"
            onChange={(e) => setPumpControlPanelIP(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Pump Control Panel MAC</label>
          <input
            placeholder="PumpControlPanelMAC"
            onChange={(e) => setPumpControlPanelMAC(e.target.value)}
          />
        </Form.Field>
        <Button onClick={postData} type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
