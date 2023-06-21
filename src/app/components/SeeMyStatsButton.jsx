"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function SeeMyStatsButton() {
	const { data: session } = useSession();
	return (
		<div className="flex flex-row justify-center items-center gap-4 ml-4 flex-shrink-0 text-indigo-600 hover:text-indigo-500 font-medium">
			{session ? (
				<button onClick={() => signOut()}>Log out</button>
			) : (
				<button onClick={() => signIn("spotify")}>See my stats</button>
			)}
		</div>
	);
}
