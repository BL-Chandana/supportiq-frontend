import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from '../pages/Login'
import CustomerHelpPage from '../pages/customer/CustomerHelpPage'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage />} />

        {/* Add other routes here */}
        <Route path='/' element={<LoginPage />} />
        <Route path='/customer-help-page' element={<CustomerHelpPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
