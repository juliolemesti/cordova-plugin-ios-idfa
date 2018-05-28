var cordova = require('cordova');

var IDFA = {

  /**
   * Function to get advertiser id info (id and isLimit advertising flag) on success.
   * @param successCallback returns object {idfa: string, idfv: string, limitAd: boolean}
   * @param errorCallback
   */
  getAdInfo: function (successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'IDFA', 'getAdInfo', []);
  },

};

module.exports = IDFA;

