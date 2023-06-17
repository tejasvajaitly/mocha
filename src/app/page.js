"use client";

import { signIn, useSession } from "next-auth/react";
import SpotifyTops from "./components/SpotifyTops";

export default function Home() {
	const { data: session } = useSession();
	console.log(session, "session pop");
	if (session) {
		return (
			<main className="max-w-screen-md flex flex-wrap items-center justify-between mx-auto p-4">
				<SpotifyTops name={session?.user?.name} image={session?.user?.image} />
			</main>
		);
	}
	return (
		<main>
			<button onClick={() => signIn("spotify")}>log in</button>
		</main>
	);
}
