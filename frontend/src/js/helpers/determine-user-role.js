export default function determineUserRole (roles) {
  var showDashboard = false
  var showBackoffice = false

  for (let i = 0; i < roles.length; i++) {
    if (roles[i] === 1) {
      showDashboard = true
    }
    if (roles[i] === 2) {
      showBackoffice = true
    }
  }

  let redirectUrl = null
  if (showDashboard) {
    redirectUrl = '/overview'
  } else if (showBackoffice) {
    redirectUrl = '/requests'
  } else {
    redirectUrl = '/something-went-wrong'
  }

  return {
    showDashboard,
    showBackoffice,
    redirectUrl
  }
}
