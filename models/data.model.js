const mongoose = require('mongoose');

// dara model
const DataSchema = mongoose.Schema({
   hostName: String,
   osNameVersion: String,
   time: Date,
   nameProc: String,
   nbProc: Number,
   str: Number,
   ramTotal: Number,
   ramFree: Number,
   diskName: String,
   useSpace: Number,
   totalSize: Number,
   pCentSpace: Number,
   ipExt: String,
   ipLocal: String,
   recep:Number,
   transmit: Number,
   service: Array
}, {
    timestamps: true
});

module.exports = mongoose.model('Data', DataSchema);