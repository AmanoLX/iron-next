import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ authorized, redirect, ...props }) =>
  authorized ? <Route {...props} /> : <Redirect to={redirect} />;

export default ProtectedRoute;
