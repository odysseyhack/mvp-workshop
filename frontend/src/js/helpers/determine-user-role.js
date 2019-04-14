export default function determineUserRole (roles) {
  var showDashboard = false
  var showBackoffice = false

  for (let i = 0; i < roles.length; i++) {
    if (['HOLDER', 'VALIDATOR', 'CREATOR'].indexOf(roles[i]) !== -1) {
      showDashboard = true
    }
    if (['SYSTEM_ADMIN', 'SYSTEM_SUPPORT'].indexOf(roles[i]) !== -1) {
      showBackoffice = true
    }
  }

  let redirectUrl = null
  if (showDashboard && showBackoffice) {
    redirectUrl = '/backoffice-rolepicker'
  } else if (showDashboard) {
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
