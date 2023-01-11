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
