import { Route, Routes } from "react-router"
import { Providers } from "./providers"
import { HomePage } from "@/pages/home"

export function App() {
	return (
		<Providers>
			<Routes>
				<Route path="/" element={<HomePage />} />
			</Routes>
		</Providers>
	)
}