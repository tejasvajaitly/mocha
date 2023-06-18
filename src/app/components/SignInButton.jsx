"use client";

import { signIn } from "next-auth/react";
import Spotify from "../../../public/spotify.svg";

export default function SignInButton() {
	return (
		<button
			className="inline-flex items-center text-base font-medium rounded-md text-white  bg-green-600 hover:bg-green-700 py-2 md:py-4 md:text-lg px-4 md:px-10 mb-4"
			onClick={() => signIn("spotify")}
		>
			<Spotify className="w-7 h-7 mr-2 fill-white" />
			Login with Spotify
		</button>
	);
}
