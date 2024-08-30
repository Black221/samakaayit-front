import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './app/App'
import './index.css'
import Login from './auth/Login/Login'
import Register from './auth/Register/Register'
import { MainProvider } from './providers/MainProvider'
import { AuthProvider } from './providers/AuthProvider'
import { ModalProvider } from './providers/ModalProvider'

import Home from "./home/Page";
import AuthGuard from './guards/AuthGuard'
import IsAuth from './guards/isAuth'
import SmsVerification from './auth/Register/smsVerification'
import ChooseAlternateMethod from './auth/Register/ChooseAlternateMethod'
import EnterEmail from './auth/Register/EnterEmail'
import EmailVerification from './auth/Register/EmailVerification'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<MainProvider>
			<AuthProvider>
				<ModalProvider>
					<BrowserRouter>
						<Routes>

							<Route element={<AuthGuard />}  >
								<Route path="/app/*" element={<App />} />
							</Route>

							<Route  element={<IsAuth />}>
								<Route path='/connexion' element={<Login />} />
								<Route path='/connexion-confirmation-sms' element={<SmsVerification />} />
								<Route path='/connexion-confirmation-email' element={<EmailVerification />} />
								<Route path='/connexion-enter-email' element={<EnterEmail />} />
								<Route path='/connexion-choisir-methode' element={<ChooseAlternateMethod />} />
							</Route>
							<Route path='/inscription' element={<Register />} />
							
							<Route path="/*" element={<Home />} />


						</Routes>
					</BrowserRouter>
				</ModalProvider>
			</AuthProvider>
		</MainProvider>
	</React.StrictMode>,
)
