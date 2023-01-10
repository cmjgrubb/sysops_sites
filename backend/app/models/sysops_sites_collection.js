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
        unique: true,
      },
      SerialNo: {
        type: String,
        unique: true,
      },
      PhoneProvider: {
        type: String,
      },
      InternetProvider: {
        type: String,
      },
      LandlineNumber: {
        type: String,
        unique: true,
      },
      CellularNumber: {
        type: String,
        unique: true,
      },
      PublicIP: {
        type: String,
        unique: true,
      },
      Subnet: {
        type: String,
        unique: true,
      },
      PlcIP: {
        type: String,
        unique: true,
      },
      PlcMAC: {
        type: String,
        unique: true,
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
        unique: true,
      },
      PanelMAC: {
        type: String,
        unique: true,
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
        unique: true,
      },
      PumpControlPanelMAC: {
        type: String,
        unique: true,
      },
    })
  );
  return Sysops;
};
