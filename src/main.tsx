import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './app/App'
import './index.css'
import Login from './auth/Login'
import Register from './auth/Register'
import { MainProvider } from './providers/MainProvider'
import { AuthProvider } from './providers/AuthProvider'
import { ModalProvider } from './providers/ModalProvider'

import Home from "./home/Page";
import AuthGuard from './guards/AuthGuard'
import IsAuth from './guards/isAuth'

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
