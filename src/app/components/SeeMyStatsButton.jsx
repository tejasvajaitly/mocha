"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function SeeMyStatsButton() {
	const { data: session } = useSession();
	return (
		<div className="flex flex-row justify-center items-center gap-4">
			{session ? (
				<button onClick={() => signOut()} className="text-sm">
					Log out
				</button>
			) : (
				<button onClick={() => signIn("spotify")} className="text-sm">
					See my stats
				</button>
			)}
		</div>
	);
}
