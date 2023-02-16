import DashboardLayout from "../Layout/DashboardLayout"
import About from "../Pages/About/About"
import Appointments from "../Pages/Appointments/Appointments"
import AllTransactions from "../Pages/Dashboard/AllTransactions"
import AllUser from "../Pages/Dashboard/AllUser"
import UserTask from "../Pages/Dashboard/UserTask"
import WorkerManage from "../Pages/Dashboard/WorkerManage"
import SignUp from "../Pages/Login/SignUp"
import Services from "../Pages/Services/Services"
import DisplayError from "../Pages/Share/DisplayError"

const { createBrowserRouter } = require("react-router-dom")
const { default: Main } = require("../Layout/Main")
const { default: Home } = require("../Pages/Home/Home")
const { default: Login } = require("../Pages/Login/Login")

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/appointment',
                element: <Appointments></Appointments>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <About></About>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            }
            
        ]
    },
    {
        path: '/dashboard',
        element:<DashboardLayout></DashboardLayout>,
        errorElement: <DisplayError></DisplayError>,
        children:[
            {
                path: '/dashboard',
                element: <UserTask></UserTask>
            },
            {
                path: '/dashboard/allUsers',
                element: <AllUser></AllUser>
            },
            {
                path: '/dashboard/allTransaction',
                element: <AllTransactions></AllTransactions>
            },
            {
                path: '/dashboard/workerManage',
                element: <WorkerManage></WorkerManage>
            }

        ]

    }
])
export default router;