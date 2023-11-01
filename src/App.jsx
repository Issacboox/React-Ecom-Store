import Home from './component/route/home/Home.component'
import { Route, Routes } from 'react-router-dom'
import Navigation from './component/route/navigation/Navigation.component'
import SignIn from './component/route/sign-in/Signin.component';
import SignUp from './component/sign-up/SignUpForm.component';
// import Footer from './component/footer/footer.component';
export default function App() {
  return (
    <Routes>
        <Route path='/' element={<Navigation />}>
            <Route index element={<Home/>}/>
            <Route path='signin' element={<SignIn/>}/>
            <Route path='signup' element={<SignUp/>}/>
            
        </Route>
        
    </Routes>
    
  )
}
