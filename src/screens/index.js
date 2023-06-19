// UTILS
import NotFound from "./utils/NotFound"
import PrivateRoute from "./utils/PrivateRoute"

// AUTH
import Login from "./auth/Login"
import Signup from "./auth/Signup"
import KnowYourBusiness from "./auth/KnowYourBusiness"
import ResetPassword from "./auth/forgot-password/ResetPassword"
import ForgotPassword from "./auth/forgot-password/ForgotPassword"

// DASHBOARD
import Dashboard from "./dashboard/Dashboard"
import Home from "./dashboard/Home"
import Appointments from "./dashboard/Appointments"
import Inventory from "./dashboard/Inventory"
import Complaints from "./dashboard/Complaints"
import Notifications from "./dashboard/Notifications"
import Settings from "./dashboard/Settings"

// PUBLIC
import VerifyPayment from './public/VerifyPayment'


export {
    // UTILS
    NotFound,
    PrivateRoute,

    // AUTH
    Login,
    Signup,
    KnowYourBusiness,
    ResetPassword,
    ForgotPassword,

    // DASHBOARD
    Dashboard,
    Home,
    Appointments,
    Inventory,
    Complaints,
    Notifications,
    Settings,

    // PUBLIC
    VerifyPayment
}