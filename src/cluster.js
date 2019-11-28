// phision passenger cluster shim

module.exports = {
  disconnect: function() {
    return false;
  },
  fork: function() {
    return false;
  },
  setupMaster: function() {
    return false;
  },
  isWorker: true,
  isMaster: false,
  schedulingPolicy: false,
  settings: false,
  worker: false,
  workers: false,
}