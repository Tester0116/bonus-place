import { useId } from 'react'
import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'
import Help from './pages/profile/help/Help'
import Category from './pages/category/Category'
import CompanyProfile from './pages/companyProfile/CompanyProfile'
import CouponProfile from './pages/couponProfile/CouponProfile'
import Favorites from './pages/favorites/Favorites'
import PartnerProfile from './pages/partnerProfile/PartnerProfile'
import Header from './components/header/Header'
import User from './pages/user/User'
import MyCoupon from './pages/user/MyCoupon/MyCoupon'
import ChangePassword from './pages/user/ChangePassword/ChangePassword'
import ChangeNumber from './pages/user/ChangeNumber/ChangeNumber'
import Footer from './components/footer/Footer'
import UserProfile from './pages/user/userProfile/UserProfile'
import SignUp from './pages/auth/signUp/SignUp'
import AboutUS from './pages/profile/aboutUS/AboutUS'
import Contact from './pages/profile/profileContact/ProfileContact'
import NotFound from './components/notFound/NotFound'
import SearchResult from './pages/searchResult/SearchResult'
import SignIn from './pages/auth/signIn/SignIn'
import Politics from './pages/politics/Politics'
import ConfirmSignUp from './pages/auth/confirmSignUp/ConfirmSignUp'
import ConfirmSignIn from './pages/auth/confirmSignIn/ConfirmSignIn'
import RecoveryPassword from './pages/auth/recovery/RecoveryPassword'
import ConfirmRecovery from './pages/auth/confirmRecovery/ConfirmRecovery'

function App() {
  const pageId = useId()

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="*" element={<NotFound />} key={`${pageId}__notFound`} />
        <Route path={'/'} element={<Home />} key={`${pageId}__home`} />
        <Route
          path={'profile/*'}
          element={<Profile />}
          key={`${pageId}__aboutUs`}
        >
          <Route path="*" element={<NotFound />} />
          <Route path="" element={<AboutUS />} />
          <Route path="contact" element={<Contact />} />
          <Route path="help" element={<Help />} />
        </Route>

        <Route
          path={'/categories/:id'}
          element={<Category />}
          key={`${pageId}__category`}
        />
        <Route
          path={'/companies/:id'}
          element={<CompanyProfile />}
          key={`${pageId}__companyProfile`}
        />
        <Route
          path={'/coupons/:id'}
          element={<CouponProfile />}
          key={`${pageId}__couponProfile`}
        />
        <Route
          path={'/favorites'}
          element={<Favorites />}
          key={`${pageId}__favorites`}
        />
        <Route
          path={'/search'}
          element={<SearchResult />}
          key={`${pageId}__search`}
        />
        <Route
          path={'/partnerProfile'}
          element={<PartnerProfile />}
          key={`${pageId}__partnerProfile`}
        />
        <Route path={'auth/*'} key={`${pageId}__auth`}>
          <Route path="*" element={<NotFound />} />
          <Route path={'signIn'} element={<SignIn />} />
          <Route path={'signUp'} element={<SignUp />} />
          <Route path={'recovery'} element={<RecoveryPassword />} />
          <Route path={'confirmSignUp'} element={<ConfirmSignUp />} />
          <Route path={'confirmSignIn'} element={<ConfirmSignIn />} />
          <Route path={'confirmRecovery'} element={<ConfirmRecovery />} />
        </Route>

        <Route path={'user/*'} element={<User />} key={`${pageId}__user`}>
          <Route path="*" element={<NotFound />} />
          <Route path={''} element={<UserProfile />} />
          <Route path={'myCoupon'} element={<MyCoupon />} />
          <Route path={'changePassword'} element={<ChangePassword />} />
          <Route path={'changeNumber'} element={<ChangeNumber />} />
        </Route>
        <Route path={'privacy-policy'} element={<Politics />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
