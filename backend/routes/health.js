
async function health (req, res, next) {
  return res.json({
    status: 'ALIVE'
  }).end();
}

module.exports = {
  health
};
