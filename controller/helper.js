const generateData = (param = {}) => {
  let temp          = {};
  temp.emailAnggota = param.emailAnggota;
  temp.codeRoom     = param.codeRoom;
  temp.idCandidate  = param.idCandidate;
  temp.date         = new Date();
  return temp;
}

const getLen = (param = {}) => {
  return param.count;
}

const getPage = (param = {}) => {
  return param.page;
}

const getParam = (data = {}) => {
  return data.param;
}

module.exports = {generateData, getLen, getPage, getParam};