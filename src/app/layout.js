import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "./Providers";
import Navbar from "@/app/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Spotify Top artists and songs",
	description:
		"Get statistics about your top artists, songs, and genres from Spotify.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className="dark" style={{ colorScheme: "dark" }}>
			<body className={inter.className}>
				<Providers>
					<Navbar />
					{children}
				</Providers>
			</body>
		</html>
	);
}
