
import { Route, Routes } from 'react-router-dom';
import Features from './pages/FeaturesPage/features';
import Home from './pages/Home/index'
import LoginPage from './pages/auth/Login/LoginPage';
import SignUp from './pages/auth/sign-up/SignUp';
import Blog from './pages/Blog/Blog';
import Pricing from './pages/Pricing/Pricing';


function App() {
  return (
   <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/features" element={<Features />}/>
    <Route path="/pricing" element={<Pricing />}/>
    <Route path="/blog" element={<Blog />}/>


{/* Auth */}    
 <Route path="/LoginPage" element={<LoginPage />} />
 <Route path="/Signup" element={<SignUp />} />
   </Routes>
  )
}

export default App;
