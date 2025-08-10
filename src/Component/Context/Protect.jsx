
import { AuthContext } from './AuthContext';
import Spinner from '../Share/Spinner';
import { Navigate, useLocation } from 'react-router';
import { use } from 'react';

const Protect = ({ children }) => {
    const { user, loading } = use(AuthContext);
    const location = useLocation();

    if (loading) {
        return <Spinner />;
    }

    if (!user || !user?.email) {
        return (
            <Navigate
                to="/auth/login"
                state={{ from: location.pathname }}
                
            />
        );
    }

    return children;
};

export default Protect;
