import React, { useState } from "react";
import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchBar from "./components/SearchBar";
import { Login } from "./Registration/Login";
import { Register } from "./Registration/Register";
import ContactList  from "./components/ContactList";
import HeaderComponent from "./components/HeaderComponent";
import { AddContact } from "./components/AddContact";
import { AuthenticationContext } from "./Contexts/AuthenticationContext";
function App() {
  const [currentForm, setCurrentForm] = useState('login');
  const [token, setToken] = useState('');
  const handleSearch = (searchTerm) => {
    console.log(`Searching for ${searchTerm}...`);
    // Perform the search using the search term
    
  };

  const toggleForm = (formName) => {
    setCurrentForm(formName);
    console.log(token);
    
  }
 


  return (
    <>

      <Router>
        <HeaderComponent />
        <div className="App"> 


          <AuthenticationContext.Provider value={{token, setToken}}>
            {token==="" ? <>{currentForm === "login" ? 
            <Login onFormSwitch={toggleForm} /> :
            <Register onFormSwitch={toggleForm} />}
            <br />
            <h1>Please sign in to edit/delete/add</h1>
            </> : <><h1>Signed in as ADMIN</h1></> }
          

            <div>
              <br /><br /><br />
              <h1>Search</h1>
              <SearchBar onSearch={handleSearch} />
            </div>
            
            <Routes>
              <Route  path="/" exact element = {<ContactList />}></Route>
              <Route path="/contacts" element = {<ContactList/>}></Route>
              
              <Route path="/add-contact" element={<AddContact/>}></Route>
              <Route path="/edit-contact/:id" element={<AddContact/>}></Route>
            </Routes>
            <br />
            <a  href="http://localhost:8080/contacts/public/csv" download>
              <button className = "mx-auto btn btn-success btn-lg">Download</button>
            </a>
            <br />
          </AuthenticationContext.Provider>
        </div>
       
      </Router>
    </>
  );
}

export default App;