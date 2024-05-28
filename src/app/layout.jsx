import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "./Providers";
import Navbar from "@/app/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Spotify Top artists and songs",
	description:
		"Get statistics about your top artists, songs, and genres from Spotify.",
		icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Providers>
					<Navbar />
					{children}
				</Providers>
			</body>
		</html>
	);
}
