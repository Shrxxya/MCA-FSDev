function getDataByPathParams(data, filter, filterValue) {
  return data.filter((product) => {
    return product[filter].toLowerCase() === filterValue.toLowerCase();
  });
}

module.exports = {getDataByPathParams};
