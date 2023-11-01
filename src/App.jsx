import Home from './component/route/home/Home.component'
import { Route, Routes } from 'react-router-dom'
import Navigation from './component/route/navigation/Navigation.component'
import Authentication from './component/route/sign-in/Authentication.component';
import SignUp from './component/sign-up/SignUpForm.component';
// import Footer from './component/footer/footer.component';
export default function App() {
  return (
    <Routes>
        <Route path='/' element={<Navigation />}>
            <Route index element={<Home/>}/>
            <Route path='auth' element={<Authentication/>}/>
            <Route path='signup' element={<SignUp/>}/>
            
        </Route>
        
    </Routes>
    
  )
}
