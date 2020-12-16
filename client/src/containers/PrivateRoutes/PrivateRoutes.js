import React, { useContext } from 'react';
import RolesLists from '../../config/roles';
import { Switch, Route } from 'react-router-dom';
import NotFound from '../pages/NotFound/NotFound';
import NavBar from '../../components/NavBar/NavBar';
import UserContext from '../../context/userContext';

function PrivateRoutes(props) {
    const { role } = useContext(UserContext);

    return (
        <>
            <NavBar />
            <Switch>
                {RolesLists[role].map(({ path, page: PageComponent }, idx) =>
                    <Route key={idx} exact path={path}>
                        <PageComponent />
                    </Route>)}
                <Route path="*" component={NotFound} />
            </Switch>
        </>
    )
}
export default PrivateRoutes;