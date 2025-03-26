import Home from './pages/HomePage';
import Login from './pages/LoginPage';
import Register from './pages/RegisterPage';
import Unauthorized from "./pages/UnauthorizedPage";
import {Routes, Route} from "react-router-dom";
import RequireAuth from './components/RequireAuth';
import HomeAdmin from './pages/HomeAdminPage';
import CreateTournamentPage from './pages/CreateTournamentPage';
import TournamentsPage from './pages/TournamentsPage';
import TournamentDetail from './components/tournaments/TournamentDetail';
import SubscribeTournament from './components/tournaments/SubscribeTournament';
import MyTournamentsPage from './pages/MyTournamentsPage';
import NavBar from './components/NavBar';
import Carousel from './components/Carousel';
import PersistLogin from './components/PersistLogin';



function App() {

    return (
        <Routes>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="unauthorized" element={<NavBar component={<Unauthorized />}></NavBar>} />

            <Route element={<PersistLogin/>}>
                <Route path="/" element={<NavBar component={<Home component={<Carousel big/>}/>}></NavBar>}/>
                <Route path="tournaments" element={<NavBar component={<TournamentsPage />}></NavBar>}  />
                <Route path="/tournaments/:tournamentId" element={<TournamentDetail/>}/>
                <Route  element={<RequireAuth allowedRoles={"user"}/>} >
                    <Route path="/mytournaments" element={<NavBar component={<MyTournamentsPage />}></NavBar>}/>
                    <Route path="/tournaments/subscribe/:tournamentId" element={<SubscribeTournament/>}/>
                </Route>

                <Route element={<RequireAuth allowedRoles={"admin"}/>}>
                    <Route path="/admin" element={<HomeAdmin />} />
                    <Route path='/admin/createtournament' element={<CreateTournamentPage/>}/> 
                </Route>
            </Route>

        </Routes>
    )
}

export default App;