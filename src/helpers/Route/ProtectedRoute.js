// import { useContext } from 'react';
// import { Navigate, Route } from 'react-router-dom';
// import { UserContext } from 'src/contexts/UserContext';
import { Route } from 'react-router-dom';

const ProtectedRoute = (props) => {
  return <Route {...props} />;
  // const { login } = useContext(UserContext)//;
  //   if (login === true) return <Route {...props} />;
  //   else if (login === false) return <Navigate to="/login" />;
  //   else return null/
};

export default ProtectedRoute;
