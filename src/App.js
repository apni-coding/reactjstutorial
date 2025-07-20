import logo from './logo.svg';
import './App.css';
import ReactCurriculum from './ReactCurriculum';
import RepoList from './RepoList';
import { useState } from 'react';

function App() {
  const[isRepoShow, setIsRepoShow] = useState(false)
  return (
    <>
    {
      isRepoShow ?  <ReactCurriculum setIsRepoShow={setIsRepoShow}/> : <RepoList setIsRepoShow={setIsRepoShow}/>
    }
   
   
   </>
  );
}

export default App;
