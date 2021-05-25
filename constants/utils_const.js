const Utils = {
  
  isDatetime: function isDatetime(date) {
    return date && Object.prototype.toString.call(date) === '[object Date]' && !isNaN(date);
  },

  msqlFormat: function msqlFormat(now) {
    // This function return a string that represent MSQL DateTime format

    // check that now  is Date Type
    if (!this.isDatetime(now)) {
      throw new Error('The argument is not a valid Datetime object');
    }
    // This way keep Timezone
    return now.toISOString().split('T')[0] + ' ' + now.toTimeString().split(' ')[0];
    //return now.toISOString().slice(0, 19).replace('T', ' ');
  },
  processResponse: function processResponse(response) {
    const statusCode = response.status;
    const data = response.json();
    return Promise.all([statusCode, data]).then(res => ({
      statusCode: res[0],
      data: res[1]
    }));
  }
};
export default Utils;
