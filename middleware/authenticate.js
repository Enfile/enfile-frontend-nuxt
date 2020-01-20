export default ({ route, redirect, store }) => {
  const path = route.path
  if (store.$auth.loggedIn || path === '/' || path === '/auth/callback') {
    return
  }

  console.log('AUTH_MIDDLEWARE_NOT_SIGNIN')
  redirect('/')
}
