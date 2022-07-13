import './App.css';
import { useState } from 'react';
import { getuserDetails } from './api-service'
import userData from './components/userData/userData';
import UserData from './components/userData/userData';
function App() {
  const [term, setTerm] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const [userDetails, setuserDetails] = useState({});
  const [showDetails, setShowDetails] = useState(false);
  async function handleSearch() {
    const userDetails = await getuserDetails(term);
    // console.log(userDetails);
    setuserDetails(userDetails);
    setIsSearch(true);
    setShowDetails(true);
  }
  function gotoPageHandler() {
    setIsSearch(false);
    setTerm('');
    setShowDetails(false);
  }
  return (
    <div className="App">
      {!isSearch ?
        <div className='wrapper'>
          <input
            className='search-input'
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
          <button className='search-button' onClick={() => handleSearch()}>Search</button>
        </div> : <div className='wrappergoto'>
          <button className='goto-button' onClick={() => gotoPageHandler()}>Goto Home Page</button>
        </div>}

      {showDetails ? <UserData userDetails={userDetails} /> : ''}
    </div>
  );
}

export default App;
