
const STATE_AUTHENTICATED = 1;

function setAuthenticated (req, sessionProperties) {
  if (sessionProperties) {
    req.session.user = sessionProperties;
    req.session.state = STATE_AUTHENTICATED;
  }
}

module.exports = {
  setAuthenticated
};
