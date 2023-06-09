import './App.css';
import { Profiler, useEffect } from 'react';
import { motion,AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Login from './pages/Login'
import Home from './pages/Home';
import AOS from 'aos'
import 'aos/dist/aos.css'
import GoldPage from './pages/GoldPage'
import RealEsatePage from './pages/Real-EstatePage'
import AgroTechPage from './pages/AgroTechPage'
import Swal from 'sweetalert2';
import Signup from './pages/Signup';
import Userdashboard from './pages/Userdashboard'
import Userdashboardfundaccount from './components/userdashboardfundaccount/Userdashboardfundaccount'
import Userdashboardwithdraw from './components/userdashboardwithdraw/Userdashboardwithdraw';
import Userdashboardreferrals from './components/userdashboardreferrals/Userdashboardreferrals';
import Userdashboardplans from './components/userdashboardplans/Userdashboardplans';
import Userdashboardtransactions from './components/userdashboardtransactions/Userdashboardtransactions';
import Investments from './components/invesments/Investments';
import Profile from './components/profile/Profile'
import VerifyEmail from './pages/VerifyEmail';
import WithdrawalLogs from './components/WithdrawalLogs';
import Checkout from './components/Checkout';
import Admindashboard from './components/admindashboard/Admindashboard';
import Deposit from './components/deposit/Deposit';
import Aboutpage from './pages/Aboutpage';
import Faq from './pages/Faq';
import Buybitcoin from './pages/Buybitcoin';
import Policy from './pages/Policy';
function App() {

    useEffect(() => {
    AOS.init({
      offset: 60,
      duration: 500,
      easing: 'ease-in-sine',
      delay: 100,
    })
      AOS.refresh()
    // duration=1200;
    }, [])

    const Toast = Swal.mixin({
      toast: true,
      position: 'bottom',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    const myArray = [
      {
        country: 'pakistan',
        amount:'$1000'
      },
      {
        country: 'Australia',
        amount:'$5700'
      },
      {
        country: 'USA',
        amount:'$10000'
      },
      {
        country: 'Kuwait',
        amount:'$720'
      },
      {
        country: 'Norway',
        amount:'$3200'
      },
      {
        country: 'Brazil',
        amount:'$8500'
      },
      {
        country: 'Russia',
        amount:'$12000'
      },
      {
        country: 'Greece',
        amount:'$100'
      },
      {
        country: 'France',
        amount:'$78000'
      },
      {
        country: 'Ghana',
        amount:'$15000'
      },
    ]
    const num = myArray.length-1
    setInterval(() => {
      Toast.fire({
              icon: 'success',
              title: `An Investor from ${myArray[Math.floor(Math.random() * num)].country} just withdrew ${myArray[Math.floor(Math.random() * num)].amount}...`
            })
    }, 600000);
    const route = 'https://giddy-teal-flannel-shirt.cyclic.app'
  return (
    <>
    <AnimatePresence exitBeforeEnter>
        <Router>
        <motion.div className="App"
        key={Routes.Route}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{duration:0.2}}
        variants={{
          initialState:{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          },
          animateState:{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          },
          exitState:{
            clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
          }
        }}
        >
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/login' element={<Login route={route}/>}/>
            <Route path='/signup' element={<Signup route={route}/>}/>
            <Route path='/dashboard' element={<Userdashboard route={route}/>}/>
            <Route path='/fundwallet' element={<Userdashboardfundaccount route={route}/>}/>
            <Route path='/referrals' element={<Userdashboardreferrals route={route}/>}/>
            <Route path='/withdraw' element={<Userdashboardwithdraw route={route}/>}/>
            <Route path='/plans' element={<Userdashboardplans route={route}/>}/>
            <Route path='/transactions' element={<Userdashboardtransactions route={route}/>}/>
            <Route path='/investments' element={<Investments route={route}/>}/>
            <Route path='/myprofile' element={<Profile route={route}/>}/>
            <Route path='user/:id/refer' element={<VerifyEmail route={route}/>}/>
            <Route path='/withdrawlogs' element={<WithdrawalLogs route={route}/>}/>
            <Route path='/checkout' element={<Checkout route={route}/>}/>
            <Route path='/admin' element={<Admindashboard route={route}/>}/>
            <Route path='/deposit' element={<Deposit route={route}/>}/>
            <Route path='/about' element={<Aboutpage />}/>
            <Route path='/faq' element={<Faq />}/>
            <Route path='/policy' element={<Policy />}/>
            <Route path='/buybitcoin' element={<Buybitcoin />}/>
            <Route path='/goldstock' element={<GoldPage />}/>
            <Route path='/agrotech' element={<AgroTechPage />}/>
            <Route path='/realestate' element={<RealEsatePage />}/>
          </Routes>
        </motion.div>
      </Router>
    </AnimatePresence>
    {/* <div className="iframe-container">
      <iframe src="https://widget.coinlib.io/widget?type=horizontal_v2&amp;theme=dark&amp;pref_coin_id=1505&amp;invert_hover=" width="100%" height="36" scrolling="auto" marginWidth="0" marginHeight="0" frameborder="0" border="0" style={{border:0,margin:0,padding:0,}}>
      </iframe>
    </div> */}
    </>
  );
}

export default App;         

//  error modal html code 

{/* <div class="card">
  <div class="header">
    <div class="image"><svg aria-hidden="true" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" fill="none">
                <path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" stroke-linejoin="round" stroke-linecap="round"></path>
              </svg></div>
    <div class="content">
       <span class="title">Desactivate account</span>
       <p class="message">Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.</p>
    </div>
     <div class="actions">
       <button class="desactivate" type="button">Desactivate</button>
       <button class="cancel" type="button">Cancel</button>
    </div>
  </div>
  </div> */}

  // error modal css 

//   .card {
//   overflow: hidden;
//   position: relative;
//   background-color: #ffffff;
//   text-align: left;
//   border-radius: 0.5rem;
//   max-width: 290px;
//   box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
// }

// .header {
//   padding: 1.25rem 1rem 1rem 1rem;
//   background-color: #ffffff;
// }

// .image {
//   display: flex;
//   margin-left: auto;
//   margin-right: auto;
//   background-color: #FEE2E2;
//   flex-shrink: 0;
//   justify-content: center;
//   align-items: center;
//   width: 3rem;
//   height: 3rem;
//   border-radius: 9999px;
// }

// .image svg {
//   color: #DC2626;
//   width: 1.5rem;
//   height: 1.5rem;
// }

// .content {
//   margin-top: 0.75rem;
//   text-align: center;
// }

// .title {
//   color: #111827;
//   font-size: 1rem;
//   font-weight: 600;
//   line-height: 1.5rem;
// }

// .message {
//   margin-top: 0.5rem;
//   color: #6B7280;
//   font-size: 0.875rem;
//   line-height: 1.25rem;
// }

// .actions {
//   margin: 0.75rem 1rem;
//   background-color: #F9FAFB;
// }

// .desactivate {
//   display: inline-flex;
//   padding: 0.5rem 1rem;
//   background-color: #DC2626;
//   color: #ffffff;
//   font-size: 1rem;
//   line-height: 1.5rem;
//   font-weight: 500;
//   justify-content: center;
//   width: 100%;
//   border-radius: 0.375rem;
//   border-width: 1px;
//   border-color: transparent;
//   box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
// }

// .cancel {
//   display: inline-flex;
//   margin-top: 0.75rem;
//   padding: 0.5rem 1rem;
//   background-color: #ffffff;
//   color: #374151;
//   font-size: 1rem;
//   line-height: 1.5rem;
//   font-weight: 500;
//   justify-content: center;
//   width: 100%;
//   border-radius: 0.375rem;
//   border: 1px solid #D1D5DB;
//   box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
// }

// crypto qr code html code 

{/* <div class="card-id567">
  <svg shape-rendering="crispEdges" viewBox="0 -0.5 29 29" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0h7M8 0h2M14 0h1M16 0h5M22 0h7M0 1h1M6 1h1M13 1h1M17 1h2M22 1h1M28 1h1M0 2h1M2 2h3M6 2h1M8 2h1M11 2h4M18 2h1M20 2h1M22 2h1M24 2h3M28 2h1M0 3h1M2 3h3M6 3h1M8 3h2M11 3h1M13 3h1M15 3h5M22 3h1M24 3h3M28 3h1M0 4h1M2 4h3M6 4h1M8 4h4M13 4h1M15 4h1M19 4h1M22 4h1M24 4h3M28 4h1M0 5h1M6 5h1M9 5h1M12 5h2M17 5h4M22 5h1M28 5h1M0 6h7M8 6h1M10 6h1M12 6h1M14 6h1M16 6h1M18 6h1M20 6h1M22 6h7M9 7h1M11 7h1M15 7h6M0 8h4M6 8h1M8 8h1M13 8h2M17 8h3M21 8h1M24 8h3M28 8h1M2 9h1M4 9h2M7 9h1M9 9h1M14 9h1M16 9h1M19 9h2M22 9h3M28 9h1M0 10h5M6 10h1M8 10h1M13 10h1M16 10h1M18 10h1M20 10h1M22 10h3M26 10h2M1 11h1M3 11h2M7 11h1M11 11h4M16 11h1M18 11h1M20 11h5M28 11h1M1 12h3M5 12h2M9 12h1M11 12h1M13 12h5M19 12h1M25 12h2M0 13h2M3 13h3M8 13h1M10 13h2M14 13h1M16 13h2M19 13h2M22 13h2M26 13h3M0 14h1M2 14h1M4 14h3M9 14h2M12 14h1M14 14h1M16 14h1M19 14h3M23 14h2M26 14h3M0 15h2M3 15h2M8 15h1M12 15h1M14 15h3M20 15h1M22 15h3M27 15h1M0 16h1M2 16h3M6 16h1M10 16h2M18 16h1M20 16h2M24 16h2M27 16h1M1 17h2M4 17h1M7 17h3M12 17h1M14 17h2M18 17h1M20 17h2M23 17h1M25 17h3M0 18h1M3 18h1M6 18h1M8 18h5M15 18h2M23 18h1M26 18h1M2 19h4M12 19h1M14 19h1M16 19h2M19 19h3M26 19h1M1 20h1M3 20h1M6 20h7M14 20h2M17 20h10M8 21h3M12 21h1M18 21h1M20 21h1M24 21h5M0 22h7M9 22h6M19 22h2M22 22h1M24 22h2M27 22h1M0 23h1M6 23h1M9 23h1M13 23h3M18 23h1M20 23h1M24 23h2M27 23h1M0 24h1M2 24h3M6 24h1M10 24h1M12 24h1M14 24h4M20 24h5M26 24h3M0 25h1M2 25h3M6 25h1M8 25h1M11 25h2M15 25h2M19 25h3M24 25h2M28 25h1M0 26h1M2 26h3M6 26h1M8 26h1M10 26h2M13 26h1M21 26h1M23 26h1M26 26h1M28 26h1M0 27h1M6 27h1M8 27h1M11 27h1M14 27h1M16 27h1M18 27h3M23 27h1M25 27h1M27 27h1M0 28h7M8 28h1M14 28h3M19 28h2M25 28h1M27 28h1" stroke="#000000"></path>
  </svg>
  
  <div class="prompt-id567">
    <div class="token-container">

    <svg width="50" height="50" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18V18ZM10 5.05L14.95 10L10 14.95L5.05 10L10 5.05V5.05ZM10 7.879L7.879 10L10 12.121L12.121 10L10 7.879V7.879Z" fill="url(#paint0_linear_713_51)"></path>
      <defs>
      <linearGradient id="paint0_linear_713_51" x1="0" y1="0" x2="16.4204" y2="22.6007" gradientUnits="userSpaceOnUse">
      <stop stop-color="#AF40FF"></stop>
      <stop offset="0.5" stop-color="#5B42F3"></stop>
      <stop offset="1" stop-color="#00DDEB"></stop>
      </linearGradient>
      </defs>
    </svg>
    </div>
    <div class="blurry-splash"></div>
    <p>Hover For Free*<br><span class="bold-567">Uiverse Points</span> </p>
    <p class="really-small-text">*at the expense of your sanity</p>
  </div>
</div> */}


// scan crypto css code 
// .card-id567 {
//   width: 190px;
//   height: 190px;
//   background: rgb(255, 255, 255);
//   border-radius: 1rem;
//   padding: 1rem;
//   position: relative;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   transition: 300ms ease;
//   animation: 8s thumb-thumb infinite;
// }

// .card-id567 svg path {
//   transition: 300ms ease;
//   stroke: rgb(20, 20, 20);
//   opacity: 0;
// }

// .bold-567 {
//   font-weight: bold;
// }

// .blurry-splash {
//   position: absolute;
//   inset: 0;
//   width: 60px;
//   margin: 0 auto;
//   height: 60px;
//   border-radius: 1rem;
//   z-index: -1;
//   opacity: 70%;
//   filter: blur(15px);
//   background: linear-gradient(
//     120deg, rgb(119, 0, 255)
//     , rgb(22, 94, 250), rgb(44, 226, 250));
// }

// .prompt-id567 {
//   position: absolute;
//   color: rgb(29, 29, 29);
//   text-align: center;
// }

// .really-small-text {
//   text-align: center;
//   width: 100%;
//   position: absolute;
//   font-size: 8px;
//   margin-top: 28px;
//   opacity: 0.5;
// }

// .card-id567:hover {
//   cursor: none;
// }

// .card-id567:hover .prompt-id567 {
//   transition: 300ms ease;
//   opacity: 0;
// }

// .token-container {
//   animation: 2s spinny-token-yayyy infinite;
//   margin-bottom: 10px;
// }

// .prompt-id567 svg path {
//   stroke: none;
//   opacity: 1;
// }

// .card-id567:hover svg path {
//   opacity: 1;
// }

// @keyframes spinny-token-yayyy {
//   0% {
//     transform: perspective(200px) rotateY(0deg);
//   }

//   100% {
//     transform: perspective(200px) rotateY(360deg);
//   }
// }

// @keyframes thumb-thumb {
//   0%, 10%, 100% {
//     transform: scale(100%);
//   }

//   5% {
//     transform: scale(103%);
//   }

//   7% {
//     transform: scale(97%);
//   }
// }