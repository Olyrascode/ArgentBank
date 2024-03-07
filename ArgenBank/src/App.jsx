
import '@/Assets/Css/main.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PublicRouter from "@/Pages/Public/Public.router.jsx";


function App () {
  return (

    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<PublicRouter/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
