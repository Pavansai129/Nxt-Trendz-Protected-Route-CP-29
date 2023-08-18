import {Redirect, Route} from 'react-router-dom'
import Cookies from 'js-cookie'
// Write your JS code here
const ProtectedRoute = props => {
  const accessToken = Cookies.get('jwt_token')
  if (accessToken === undefined) {
    return <Redirect to="/login" />
  }
  return <Route {...props} />
}

export default ProtectedRoute
