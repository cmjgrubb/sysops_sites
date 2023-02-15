module.exports = (mongoose) => {
  const Sysops = mongoose.model(
    "sysops",
    mongoose.Schema({
      Name: {
        type: String,
        unique: true,
        required: true,
      },
      Address: {
        type: String,
      },
      PumpType: {
        type: String,
      },
      Voltage: {
        type: String,
      },
      Phase: {
        type: String,
      },
      MotorHP: {
        type: Number,
      },
      TempPower: {
        type: String,
      },
      ElectricCoop: {
        type: String,
      },
      AccountNumber: {
        type: String,
      },
      MeterNumber: {
        type: String,
      },
      GridName: {
        type: String,
      },
      TransLocation: {
        type: String,
      },
      Force: {
        type: Boolean,
      },
      Gravity: {
        type: Boolean,
      },
      PumpsTo: {
        type: String,
      },
      ForceConnection: {
        type: String,
      },
      SerialNo: {
        type: String,
      },
      PhoneProvider: {
        type: String,
      },
      InternetProvider: {
        type: String,
      },
      LandlineNumber: {
        type: String,
      },
      CellularNumber: {
        type: String,
      },
      PublicIP: {
        type: String,
      },
      Subnet: {
        type: String,
      },
      PlcIP: {
        type: String,
      },
      PlcMAC: {
        type: String,
      },
      PlcMake: {
        type: String,
      },
      PlcModel: {
        type: String,
      },
      PlcInstallDate: {
        type: Date,
      },
      PanelIP: {
        type: String,
      },
      PanelMAC: {
        type: String,
      },
      PanelMake: {
        type: String,
      },
      PanelModel: {
        type: String,
      },
      PanelInstallDate: {
        type: Date,
      },
      PanelOS: {
        type: String,
      },
      PanelHMI: {
        type: String,
      },
      PumpControlPanelIP: {
        type: String,
      },
      PumpControlPanelMAC: {
        type: String,
      },
    })
  );
  return Sysops;
};
