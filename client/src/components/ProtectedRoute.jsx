import { Route, Redirect } from 'react-router-dom';

<<<<<<< HEAD
const ProtectedRoute = ({ authorized, redirect, ...props }) =>
	authorized ? <Route {...props} /> : <Redirect to={redirect} />;
=======
const ProtectedRoute = ({ authorized, redirect, ...props }) => {
  if (authorized) {
    return <Route {...props} />;
  } else {
    return <Redirect to={redirect} />;
  }
};

// const ProtectedRoute = ({ authorized, redirect, ...props }) =>
//   authorized ? <Route {...props} /> : <Redirect to={redirect} />;
>>>>>>> 329ed2ea52394eccb85cd641f704fd9570cdde18

export default ProtectedRoute;
