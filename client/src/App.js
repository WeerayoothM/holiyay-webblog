import { useState } from 'react';
import './App.css';
import PrivateRoutes from './containers/PrivateRoutes/PrivateRoutes';
import UserContext from './context/userContext'
import LocalStorageService from './services/LocalStorageService'

function App() {
  const [role, setRole] = useState(LocalStorageService.getRole());

  return (
    <div className="App">
      <UserContext.Provider value={{ role, setRole }} >
        <PrivateRoutes />
      </UserContext.Provider >
    </div>
  );
}

export default App;
