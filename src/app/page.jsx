import SpotifyTops from "./components/SpotifyTops";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import SignInButton from "./components/SignInButton";
import HomeScreenTable from "./components/HomescreenTable";

export default async function Home() {
	const session = await getServerSession(authOptions);
	if (session) {
		return (
			<main className="max-w-screen-md  mx-auto p-2 px-10">
				<SpotifyTops />
				<Footer />
			</main>
		);
	}
	return (
		<main className="max-w-screen-md flex flex-wrap items-center justify-between mx-auto p-4 px-10">
			<div className="mt-10 sm:mt-12 md:mt-16 lg:mt-20 pb-28 xs:overflow-hidden md:overflow-visible">
				<h1 className="text-3xl mx-auto font-extrabold tracking-tight text-gray-900 sm:text-4xl pb-4 sm:pb-4">
					Your Spotify Stats
				</h1>
				<p className="text-base text-gray-500 sm:text-lg mx-auto md:text-xl lg:mx-0 pb-4 sm:pb-4">
					Get statistics about your top artists, songs, and genres from Spotify.
					<br />
					Updated daily. Easy to share.
				</p>
				<SignInButton />
			</div>
			<HomeScreenTable />
			<div className="mt-10 sm:mt-12 md:mt-16 lg:mt-20 pt-14 xs:overflow-hidden md:overflow-visible">
				<h2 className="text-3xl mx-auto font-bold tracking-tight text-gray-900">
					The music you listen to,
					<br /> the stats you need
				</h2>
			</div>
			<div className="pt-10 pb-20">
				<dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-12 md:gap-y-10">
					<div className="flex">
						<div className="flex-shrink-0">
							<div className="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-600 text-white bg-">
								<img src="/time-range.svg" width={30} height={30} />
							</div>
						</div>
						<div className="ml-4">
							<dt className="text-lg leading-6 font-medium text-gray-900">
								<h3>Custom time ranges</h3>
							</dt>
							<dd className="mt-2 text-base text-gray-500">
								Browse your most listened content on Spotify during last month,
								6 months, or since you started using Spotify.
							</dd>
						</div>
					</div>

					<div className="flex">
						<div className="flex-shrink-0">
							<div className="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-600 text-white bg-">
								<img src="/update-daily.svg" width={30} height={30} />
							</div>
						</div>
						<div className="ml-4">
							<dt className="text-lg leading-6 font-medium text-gray-900">
								<h3>Updated daily</h3>
							</dt>
							<dd className="mt-2 text-base text-gray-500">
								Your stats are updated every day showing your top content.
							</dd>
						</div>
					</div>

					<div className="flex">
						<div className="flex-shrink-0">
							<div className="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-600 text-white bg-">
								<img src="/share-stats.svg" width={30} height={30} />
							</div>
						</div>
						<div className="ml-4">
							<dt className="text-lg leading-6 font-medium text-gray-900">
								<h3>Share your stats</h3>
							</dt>
							<dd className="mt-2 text-base text-gray-500">
								Feeling proud about your music taste? Share your music profile
								for other users to discover.
							</dd>
						</div>
					</div>

					<div className="flex">
						<div className="flex-shrink-0">
							<div className="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-600 text-white bg-">
								<img src="/from-hazelnut.svg" width={30} height={30} />
							</div>
						</div>
						<div className="ml-4">
							<dt className="text-lg leading-6 font-medium text-gray-900">
								<h3>From the creators of Spotify Hazelnut</h3>
							</dt>
							<dd className="mt-2 text-base text-gray-500">
								We give more value to your Spotify account. Try out{" "}
								<a
									className="text-yellow-800 font-semibold"
									href="https://hazelnut-pi.vercel.app/"
									target="blank"
								>
									Hazelnut
								</a>
							</dd>
						</div>
					</div>
				</dl>
			</div>
			<div className="w-full bg-gray-50  rounded-lg mb-16">
				<div className="max-w-7xl mx-auto py-4 sm:py-12 px-4 sm:px-6 lg:py-16 lg:px-8 sm:flex items-center justify-between">
					<h2 className="text-xl pb-2 sm:pb-0 sm:text-3xl font-extrabold tracking-tight text-gray-900">
						Ready to dive in?
					</h2>
					<SignInButton />
				</div>
			</div>
			<footer className="pb-8 w-full">
				<div className="mx-auto max-w-screen-xl">
					<div className="md:flex md:justify-between">
						<div className="mb-6 md:mb-0 mr-6">
							<span className="text-sm font-semibold whitespace-nowrap ">
								mocha
							</span>
						</div>
						<div className="flex flex-row justify-between gap-8">
							{/* <div>
								<h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">
									Resources
								</h2>
								<ul className="text-gray-600 ">
									<li className="mb-2">
										<a href="/genres">Explore Genres</a>{" "}
									</li>
									<li className="mb-2">
										<a href="/contact">Contact</a>{" "}
									</li>
									<li className="mb-2">
										<a href="/sponsor">Promote your Content</a>
									</li>
								</ul>
							</div> */}

							<div>
								<h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">
									ABOUT
								</h2>
								<ul className="text-gray-600 ">
									<li className="mb-2">
										<span>
											Made with ♥ by <br />
											<a
												target="_blank"
												rel="noopener noreferrer"
												className="font-bold"
												href="https://github.com/tejasvajaitly"
											>
												Neil Jaitly 👨‍💻
											</a>
										</span>
									</li>

									{/* <li className="mb-2">
										Support the project <br />
										<a
											target="_blank"
											rel="noopener noreferrer"
											className="font-bold"
											href=""
										>
											buying a coffee ☕
										</a>
									</li> */}
								</ul>
							</div>
						</div>
					</div>
					<Footer />
				</div>
			</footer>
		</main>
	);
}

const Footer = () => (
	<footer>
		<hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
		<div className="sm:flex sm:items-center sm:justify-between">
			<span className="text-sm text-gray-500 sm:text-center ">
				© 2023{" "}
				<a href="https://mocha-seven.vercel.app/" className="hover:underline">
					mocha
				</a>
				. All Rights Reserved.
			</span>
		</div>
	</footer>
);
