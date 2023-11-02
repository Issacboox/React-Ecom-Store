import { Route, Routes } from 'react-router-dom'
import Home from './route/home/Home.component'
import Navigation from './route/navigation/Navigation.component'
import Authentication from './route/sign-in/Authentication.component';
import SignUp from './component/sign-up/SignUpForm.component';
import Shop from './route/shop/shop.component';
import CheckOut from './route/checkout/CheckOut.component';
// import Footer from './component/footer/footer.component';
export default function App() {
  return (
    <Routes>
        <Route path='/' element={<Navigation />}>
            <Route index element={<Home/>}/>
            <Route path='shop/*' element={<Shop/>}/>
            <Route path='signup' element={<SignUp/>}/>
            <Route path='auth' element={<Authentication/>}/>
            <Route path='checkout' element={<CheckOut/>}/>

        </Route>
        
    </Routes>
    
  )
}
