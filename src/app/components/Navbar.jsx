"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

import { useDispatch, useSelector } from "react-redux";
import { setLoggedIn } from "@/store/authSlice";

import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

import { signIn, signOut, useSession } from "next-auth/react";

export const useAppDispatch = useDispatch;
export const useAppSelector = useSelector;

const Navbar = (props) => {
	const [mounted, setMounted] = useState(false);
	const { resolvedTheme, setTheme } = useTheme();
	const dispatch = useAppDispatch();
	const loggedIn = useAppSelector((state) => state.auth.loggedIn);
	const { data: session } = useSession();

	useEffect(() => setMounted(true), []);

	if (!mounted) return null;
	return (
		<nav className="bg-white border-b-2 dark:bg-black">
			<div className="max-w-screen-md flex flex-wrap items-center justify-between mx-auto p-4">
				<a href="/" className="flex items-end">
					<span className="text-sm font-semibold whitespace-nowrap dark:text-white">
						mocha
					</span>
				</a>

				<div className="hidden w-full md:block md:w-auto" id="navbar-default">
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

						<button
							aria-label="Toggle Dark Mode"
							type="button"
							className="flex items-center justify-center rounded-lg p-2 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-700"
							onClick={() =>
								setTheme(resolvedTheme === "dark" ? "light" : "dark")
							}
						>
							{resolvedTheme === "dark" ? (
								<SunIcon className="h-5 w-5 text-orange-300" />
							) : (
								<MoonIcon className="h-5 w-5 text-slate-800" />
							)}
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
