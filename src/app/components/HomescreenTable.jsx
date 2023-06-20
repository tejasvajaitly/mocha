const head = [
	{
		href: "https://open.spotify.com/artist/4MCBfE4596Uoi2O4DtmEMz",
		srcSet:
			"https://i.scdn.co/image/ab6761610000e5eb1908e1a8b79abf71d5598944 160w, https://i.scdn.co/image/ab6761610000e5eb1908e1a8b79abf71d5598944 320w, https://i.scdn.co/image/ab6761610000e5eb1908e1a8b79abf71d5598944 640w",
		src: "https://i.scdn.co/image/ab6761610000e5eb1908e1a8b79abf71d5598944",
		alt: "Juice WRLD",
	},

	{
		href: "https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4",
		srcSet:
			"https://i.scdn.co/image/ab6761610000e5eb4293385d324db8558179afd9 160w, https://i.scdn.co/image/ab6761610000e5eb4293385d324db8558179afd9 320w, https://i.scdn.co/image/ab6761610000e5eb4293385d324db8558179afd9 640w",
		src: "https://i.scdn.co/image/ab6761610000e5eb4293385d324db8558179afd9",
		alt: "Drake",
	},

	{
		href: "https://open.spotify.com/artist/7jVv8c5Fj3E9VhNjxT4snq",
		srcSet:
			"https://i.scdn.co/image/ab6761610000e5ebd66f1e0c883f319443d68c45 160w, https://i.scdn.co/image/ab6761610000e5ebd66f1e0c883f319443d68c45 320w, https://i.scdn.co/image/ab6761610000e5ebd66f1e0c883f319443d68c45 640w",
		src: "https://i.scdn.co/image/ab6761610000e5ebd66f1e0c883f319443d68c45",
		alt: "Lil Nas X",
	},
];

export default function HomeScreenTable() {
	return (
		<div
			className="mb-10 overflow-y-hidden -m-6 md:m-0"
			style={{
				display: "grid",
				gridTemplateColumns: "repeat(4, 400px)",
				height: 400,
				marginTop: "-150px",
			}}
		>
			<div
				style={{
					transform:
						"scale(0.7) rotateX(60deg) rotateY(0deg) rotateZ(39deg) translateY(-30rem) translateX(-30rem)",
				}}
			>
				<div>
					<div className="flex flex-row space-x-4 pb-2">
						{head.map((artist, idx) => (
							<div
								className="relative flex-1 h-0 overflow-hidden bg-gray-50 flex items-center justify-center"
								style={{ paddingTop: "32%" }}
								key={idx}
							>
								<a target="_blank" href="">
									<img
										className="absolute top-0 left-0 bg-cover object-cover w-full h-full bg-center"
										srcSet={artist.srcSet}
										sizes="(max-width: 550px) 160px, 215px"
										src={artist.src}
										alt={artist.alt}
										fetchPriority="high"
									/>
								</a>
							</div>
						))}
					</div>
					<div className="py-2 align-middle inline-block min-w-full">
						<div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
							<table className="min-w-full divide-y divide-gray-200">
								<thead>
									<tr>
										<th
											scope="col"
											className="px-2 md:px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											<span className="block sm:hidden">Pos.</span>{" "}
											<span className="hidden sm:block">Position</span>
										</th>
										<th
											scope="col"
											className="px-2 md:px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											Artist
										</th>
										<th />
									</tr>
								</thead>
								<tbody className="divide-y divide-gray-200 ">
									<tr>
										<td className="px-2 md:px-6 py-2 whitespace-nowrap text-xl text-gray-500 text-center">
											<div className="flex flex-row justify-center items-center">
												1{" "}
											</div>
										</td>
										<td className="px-2 md:px-6 py-2 whitespace-nowrap">
											<a
												target="_blank"
												href="https://open.spotify.com/artist/4MCBfE4596Uoi2O4DtmEMz"
											>
												<div className="flex items-center">
													<div className="flex-shrink-0 h-12 w-12 sm:h-16 sm:w-16">
														<div
															className="w-full h-full bg-cover bg-gray-50"
															style={{
																backgroundImage:
																	'url("https://i.scdn.co/image/ab6761610000e5eb1908e1a8b79abf71d5598944")',
															}}
														/>
													</div>
													<div className="ml-4">
														<div className="text-sm font-medium text-gray-900 whitespace-pre-wrap">
															Juice WRLD
														</div>
													</div>
												</div>
											</a>
										</td>
										<td className="w-28">
											<div className="pointer-events-auto rounded-md text-xs mx-2 text-slate-700 shadow-sm ring-1 ring-slate-700/10  hover:bg-slate-50">
												<a
													target="_blank"
													className="py-[0.3125rem] px-1 block text-center"
													href="https://open.spotify.com/artist/4MCBfE4596Uoi2O4DtmEMz"
												>
													<div className="flex justify-center">
														<img
															src="/spotify-logo-black.svg"
															height={21}
															width={21}
															alt="Spotify Logo"
															className="w-5.5"
														/>
														<div className="leading-3">Listen on Spotify</div>
													</div>
												</a>
											</div>
										</td>
									</tr>
									<tr>
										<td className="px-2 md:px-6 py-2 whitespace-nowrap text-xl text-gray-500 text-center">
											<div className="flex flex-row justify-center items-center">
												2{" "}
											</div>
										</td>
										<td className="px-2 md:px-6 py-2 whitespace-nowrap">
											<a
												target="_blank"
												href="https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4"
											>
												<div className="flex items-center">
													<div className="flex-shrink-0 h-12 w-12 sm:h-16 sm:w-16">
														<div
															className="w-full h-full bg-cover bg-gray-50"
															style={{
																backgroundImage:
																	'url("https://i.scdn.co/image/ab6761610000e5eb4293385d324db8558179afd9")',
															}}
														/>
													</div>
													<div className="ml-4">
														<div className="text-sm font-medium text-gray-900 whitespace-pre-wrap">
															Drake
														</div>
													</div>
												</div>
											</a>
										</td>
										<td className="w-28">
											<div className="pointer-events-auto rounded-md text-xs mx-2 text-slate-700 shadow-sm ring-1 ring-slate-700/10  hover:bg-slate-50">
												<a
													target="_blank"
													className="py-[0.3125rem] px-1 block text-center"
													href="https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4"
												>
													<div className="flex justify-center">
														<img
															src="/spotify-logo-black.svg"
															height={21}
															width={21}
															alt="Spotify Logo"
															className="w-5.5"
														/>
														<div className="leading-3">Listen on Spotify</div>
													</div>
												</a>
											</div>
										</td>
									</tr>
									<tr>
										<td className="px-2 md:px-6 py-2 whitespace-nowrap text-xl text-gray-500 text-center">
											<div className="flex flex-row justify-center items-center">
												3{" "}
											</div>
										</td>
										<td className="px-2 md:px-6 py-2 whitespace-nowrap">
											<a
												target="_blank"
												href="https://open.spotify.com/artist/7jVv8c5Fj3E9VhNjxT4snq"
											>
												<div className="flex items-center">
													<div className="flex-shrink-0 h-12 w-12 sm:h-16 sm:w-16">
														<div
															className="w-full h-full bg-cover bg-gray-50"
															style={{
																backgroundImage:
																	'url("https://i.scdn.co/image/ab6761610000e5ebd66f1e0c883f319443d68c45")',
															}}
														/>
													</div>
													<div className="ml-4">
														<div className="text-sm font-medium text-gray-900 whitespace-pre-wrap">
															Lil Nas X
														</div>
													</div>
												</div>
											</a>
										</td>
										<td className="w-28">
											<div className="pointer-events-auto rounded-md text-xs mx-2 text-slate-700 shadow-sm ring-1 ring-slate-700/10  hover:bg-slate-50">
												<a
													target="_blank"
													className="py-[0.3125rem] px-1 block text-center"
													href="https://open.spotify.com/artist/7jVv8c5Fj3E9VhNjxT4snq"
												>
													<div className="flex justify-center">
														<img
															src="/spotify-logo-black.svg"
															height={21}
															width={21}
															alt="Spotify Logo"
															className="w-5.5"
														/>
														<div className="leading-3">Listen on Spotify</div>
													</div>
												</a>
											</div>
										</td>
									</tr>
									<tr>
										<td className="px-2 md:px-6 py-2 whitespace-nowrap text-xl text-gray-500 text-center">
											<div className="flex flex-row justify-center items-center">
												4{" "}
											</div>
										</td>
										<td className="px-2 md:px-6 py-2 whitespace-nowrap">
											<a
												target="_blank"
												href="https://open.spotify.com/artist/0eDvMgVFoNV3TpwtrVCoTj"
											>
												<div className="flex items-center">
													<div className="flex-shrink-0 h-12 w-12 sm:h-16 sm:w-16">
														<div
															className="w-full h-full bg-cover bg-gray-50"
															style={{
																backgroundImage:
																	'url("https://i.scdn.co/image/ab6761610000e5eb597f9edd2cd1a892d4412b09")',
															}}
														/>
													</div>
													<div className="ml-4">
														<div className="text-sm font-medium text-gray-900 whitespace-pre-wrap">
															Pop Smoke
														</div>
													</div>
												</div>
											</a>
										</td>
										<td className="w-28">
											<div className="pointer-events-auto rounded-md text-xs mx-2 text-slate-700 shadow-sm ring-1 ring-slate-700/10  hover:bg-slate-50">
												<a
													target="_blank"
													className="py-[0.3125rem] px-1 block text-center"
													href="https://open.spotify.com/artist/0eDvMgVFoNV3TpwtrVCoTj"
												>
													<div className="flex justify-center">
														<img
															src="/spotify-logo-black.svg"
															height={21}
															width={21}
															alt="Spotify Logo"
															className="w-5.5"
														/>
														<div className="leading-3">Listen on Spotify</div>
													</div>
												</a>
											</div>
										</td>
									</tr>
									<tr>
										<td className="px-2 md:px-6 py-2 whitespace-nowrap text-xl text-gray-500 text-center">
											<div className="flex flex-row justify-center items-center">
												5{" "}
											</div>
										</td>
										<td className="px-2 md:px-6 py-2 whitespace-nowrap">
											<a
												target="_blank"
												href="https://open.spotify.com/artist/5K4W6rqBFWDnAN6FQUkS6x"
											>
												<div className="flex items-center">
													<div className="flex-shrink-0 h-12 w-12 sm:h-16 sm:w-16">
														<div
															className="w-full h-full bg-cover bg-gray-50"
															style={{
																backgroundImage:
																	'url("https://i.scdn.co/image/ab6761610000e5eb867008a971fae0f4d913f63a")',
															}}
														/>
													</div>
													<div className="ml-4">
														<div className="text-sm font-medium text-gray-900 whitespace-pre-wrap">
															Kanye West
														</div>
													</div>
												</div>
											</a>
										</td>
										<td className="w-28">
											<div className="pointer-events-auto rounded-md text-xs mx-2 text-slate-700 shadow-sm ring-1 ring-slate-700/10  hover:bg-slate-50">
												<a
													target="_blank"
													className="py-[0.3125rem] px-1 block text-center"
													href="https://open.spotify.com/artist/5K4W6rqBFWDnAN6FQUkS6x"
												>
													<div className="flex justify-center">
														<img
															src="/spotify-logo-black.svg"
															height={21}
															width={21}
															alt="Spotify Logo"
															className="w-5.5"
														/>
														<div className="leading-3">Listen on Spotify</div>
													</div>
												</a>
											</div>
										</td>
									</tr>
									<tr>
										<td className="px-2 md:px-6 py-2 whitespace-nowrap text-xl text-gray-500 text-center">
											<div className="flex flex-row justify-center items-center">
												6{" "}
											</div>
										</td>
										<td className="px-2 md:px-6 py-2 whitespace-nowrap">
											<a
												target="_blank"
												href="https://open.spotify.com/artist/4V8LLVI7PbaPR0K2TGSxFF"
											>
												<div className="flex items-center">
													<div className="flex-shrink-0 h-12 w-12 sm:h-16 sm:w-16">
														<div
															className="w-full h-full bg-cover bg-gray-50"
															style={{
																backgroundImage:
																	'url("https://i.scdn.co/image/ab6761610000e5eb8278b782cbb5a3963db88ada")',
															}}
														/>
													</div>
													<div className="ml-4">
														<div className="text-sm font-medium text-gray-900 whitespace-pre-wrap">
															Tyler, The Creator
														</div>
													</div>
												</div>
											</a>
										</td>
										<td className="w-28">
											<div className="pointer-events-auto rounded-md text-xs mx-2 text-slate-700 shadow-sm ring-1 ring-slate-700/10  hover:bg-slate-50">
												<a
													target="_blank"
													className="py-[0.3125rem] px-1 block text-center"
													href="https://open.spotify.com/artist/4V8LLVI7PbaPR0K2TGSxFF"
												>
													<div className="flex justify-center">
														<img
															src="/spotify-logo-black.svg"
															height={21}
															width={21}
															alt="Spotify Logo"
															className="w-5.5"
														/>
														<div className="leading-3">Listen on Spotify</div>
													</div>
												</a>
											</div>
										</td>
									</tr>
									<tr>
										<td className="px-2 md:px-6 py-2 whitespace-nowrap text-xl text-gray-500 text-center">
											<div className="flex flex-row justify-center items-center">
												7{" "}
											</div>
										</td>
										<td className="px-2 md:px-6 py-2 whitespace-nowrap">
											<a
												target="_blank"
												href="https://open.spotify.com/artist/55Aa2cqylxrFIXC767Z865"
											>
												<div className="flex items-center">
													<div className="flex-shrink-0 h-12 w-12 sm:h-16 sm:w-16">
														<div className="w-full h-full bg-cover bg-gray-50" />
													</div>
													<div className="ml-4">
														<div className="text-sm font-medium text-gray-900 whitespace-pre-wrap">
															Lil Wayne
														</div>
													</div>
												</div>
											</a>
										</td>
										<td className="w-28">
											<div className="pointer-events-auto rounded-md text-xs mx-2 text-slate-700 shadow-sm ring-1 ring-slate-700/10  hover:bg-slate-50">
												<a
													target="_blank"
													className="py-[0.3125rem] px-1 block text-center"
													href="https://open.spotify.com/artist/55Aa2cqylxrFIXC767Z865"
												>
													<div className="flex justify-center">
														<img
															src="/spotify-logo-black.svg"
															height={21}
															width={21}
															alt="Spotify Logo"
															className="w-5.5"
														/>
														<div className="leading-3">Listen on Spotify</div>
													</div>
												</a>
											</div>
										</td>
									</tr>
									<tr>
										<td className="px-2 md:px-6 py-2 whitespace-nowrap text-xl text-gray-500 text-center">
											<div className="flex flex-row justify-center items-center">
												8{" "}
											</div>
										</td>
										<td className="px-2 md:px-6 py-2 whitespace-nowrap">
											<a
												target="_blank"
												href="https://open.spotify.com/artist/7btVl9Odz38WZQU7HH9XF9"
											>
												<div className="flex items-center">
													<div className="flex-shrink-0 h-12 w-12 sm:h-16 sm:w-16">
														<div className="w-full h-full bg-cover bg-gray-50" />
													</div>
													<div className="ml-4">
														<div className="text-sm font-medium text-gray-900 whitespace-pre-wrap">
															Yung Spinach Cumshot
														</div>
													</div>
												</div>
											</a>
										</td>
										<td className="w-28">
											<div className="pointer-events-auto rounded-md text-xs mx-2 text-slate-700 shadow-sm ring-1 ring-slate-700/10  hover:bg-slate-50">
												<a
													target="_blank"
													className="py-[0.3125rem] px-1 block text-center"
													href="https://open.spotify.com/artist/7btVl9Odz38WZQU7HH9XF9"
												>
													<div className="flex justify-center">
														<img
															src="/spotify-logo-black.svg"
															height={21}
															width={21}
															alt="Spotify Logo"
															className="w-5.5"
														/>
														<div className="leading-3">Listen on Spotify</div>
													</div>
												</a>
											</div>
										</td>
									</tr>
									<tr>
										<td className="px-2 md:px-6 py-2 whitespace-nowrap text-xl text-gray-500 text-center">
											<div className="flex flex-row justify-center items-center">
												9{" "}
											</div>
										</td>
										<td className="px-2 md:px-6 py-2 whitespace-nowrap">
											<a
												target="_blank"
												href="https://open.spotify.com/artist/1tqhsYv8yBBdwANFNzHtcr"
											>
												<div className="flex items-center">
													<div className="flex-shrink-0 h-12 w-12 sm:h-16 sm:w-16">
														<div className="w-full h-full bg-cover bg-gray-50" />
													</div>
													<div className="ml-4">
														<div className="text-sm font-medium text-gray-900 whitespace-pre-wrap">
															Lil Dicky
														</div>
													</div>
												</div>
											</a>
										</td>
										<td className="w-28">
											<div className="pointer-events-auto rounded-md text-xs mx-2 text-slate-700 shadow-sm ring-1 ring-slate-700/10  hover:bg-slate-50">
												<a
													target="_blank"
													className="py-[0.3125rem] px-1 block text-center"
													href="https://open.spotify.com/artist/1tqhsYv8yBBdwANFNzHtcr"
												>
													<div className="flex justify-center">
														<img
															src="/spotify-logo-black.svg"
															height={21}
															width={21}
															alt="Spotify Logo"
															className="w-5.5"
														/>
														<div className="leading-3">Listen on Spotify</div>
													</div>
												</a>
											</div>
										</td>
									</tr>
									<tr>
										<td className="px-2 md:px-6 py-2 whitespace-nowrap text-xl text-gray-500 text-center">
											<div className="flex flex-row justify-center items-center">
												10{" "}
											</div>
										</td>
										<td className="px-2 md:px-6 py-2 whitespace-nowrap">
											<a
												target="_blank"
												href="https://open.spotify.com/artist/0QHgL1lAIqAw0HtD7YldmP"
											>
												<div className="flex items-center">
													<div className="flex-shrink-0 h-12 w-12 sm:h-16 sm:w-16">
														<div className="w-full h-full bg-cover bg-gray-50" />
													</div>
													<div className="ml-4">
														<div className="text-sm font-medium text-gray-900 whitespace-pre-wrap">
															DJ Khaled
														</div>
													</div>
												</div>
											</a>
										</td>
										<td className="w-28">
											<div className="pointer-events-auto rounded-md text-xs mx-2 text-slate-700 shadow-sm ring-1 ring-slate-700/10  hover:bg-slate-50">
												<a
													target="_blank"
													className="py-[0.3125rem] px-1 block text-center"
													href="https://open.spotify.com/artist/0QHgL1lAIqAw0HtD7YldmP"
												>
													<div className="flex justify-center">
														<img
															src="/spotify-logo-black.svg"
															height={21}
															width={21}
															alt="Spotify Logo"
															className="w-5.5"
														/>
														<div className="leading-3">Listen on Spotify</div>
													</div>
												</a>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
			<div
				style={{
					transform:
						"scale(0.7) rotateX(60deg) rotateY(0deg) rotateZ(39deg) translateY(-30rem) translateX(-30rem)",
				}}
			>
				<div>
					<div className="flex flex-row space-x-4 pb-2">
						<div
							className="relative flex-1 h-0 overflow-hidden bg-gray-50 flex items-center justify-center"
							style={{ paddingTop: "32%" }}
						>
							<a
								target="_blank"
								href="https://open.spotify.com/track/0Ymjv0OJeIIPXr6s9wi3iW"
							>
								<div
									className="absolute top-0 left-0 bg-cover"
									style={{
										height: "100%",
										width: "100%",
										backgroundPosition: "center center",
									}}
								/>{" "}
							</a>
						</div>
						<div
							className="relative flex-1 h-0 overflow-hidden bg-gray-50 flex items-center justify-center"
							style={{ paddingTop: "32%" }}
						>
							<a
								target="_blank"
								href="https://open.spotify.com/track/10Igtw8bSDyyFs7KIsKngZ"
							>
								<div
									className="absolute top-0 left-0 bg-cover"
									style={{
										height: "100%",
										width: "100%",
										backgroundPosition: "center center",
									}}
								/>{" "}
							</a>
						</div>
						<div
							className="relative flex-1 h-0 overflow-hidden bg-gray-50 flex items-center justify-center"
							style={{ paddingTop: "32%" }}
						>
							<a
								target="_blank"
								href="https://open.spotify.com/track/5TlAXiBCBwiQnIZUAA4Jkg"
							>
								<div
									className="absolute top-0 left-0 bg-cover"
									style={{
										height: "100%",
										width: "100%",
										backgroundPosition: "center center",
									}}
								/>{" "}
							</a>
						</div>
					</div>
					<div className="py-2 align-middle inline-block min-w-full">
						<div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
							<table className="min-w-full divide-y divide-gray-200">
								<thead>
									<tr>
										<th
											scope="col"
											className="px-2 md:px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											<span className="block sm:hidden">Pos.</span>{" "}
											<span className="hidden sm:block">Position</span>
										</th>
										<th
											scope="col"
											className="px-2 md:px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											Song
										</th>
										<th>&nbsp;</th>
									</tr>
								</thead>
								<tbody className="divide-y divide-gray-200 ">
									<tr>
										<td className="px-2 md:px-6 py-2 whitespace-nowrap text-xl text-gray-500 text-center">
											<div className="flex flex-row justify-center items-center">
												1{" "}
											</div>
										</td>
										<td className="px-2 md:px-6 py-2 whitespace-nowrap">
											<a
												target="_blank"
												href="https://open.spotify.com/track/0Ymjv0OJeIIPXr6s9wi3iW"
											>
												<div className="flex items-center">
													<div className="flex-shrink-0 h-12 w-12 sm:h-16 sm:w-16">
														<div className="w-full h-full bg-cover bg-gray-50" />
													</div>
													<div className="ml-4">
														<div className="text-sm font-medium text-gray-900 whitespace-pre-wrap">
															MATHEMATICAL DISRESPECT
														</div>
														<div className="text-sm font-medium text-gray-500 whitespace-pre-wrap">
															Lil Mabu
														</div>
													</div>
												</div>
											</a>
										</td>
										<td className="w-28">
											<div className="pointer-events-auto rounded-md text-xs mx-2 text-slate-700 shadow-sm ring-1 ring-slate-700/10  hover:bg-slate-50">
												<a
													target="_blank"
													className="py-[0.3125rem] px-1 block text-center"
													href="https://open.spotify.com/track/0Ymjv0OJeIIPXr6s9wi3iW"
												>
													<div className="flex justify-center">
														<img
															src="/spotify-logo-black.svg"
															height={21}
															width={21}
															alt="Spotify Logo"
															className="w-5.5"
														/>
														<div className="leading-3">Listen on Spotify</div>
													</div>
												</a>
											</div>
										</td>
									</tr>
									<tr>
										<td className="px-2 md:px-6 py-2 whitespace-nowrap text-xl text-gray-500 text-center">
											<div className="flex flex-row justify-center items-center">
												2{" "}
											</div>
										</td>
										<td className="px-2 md:px-6 py-2 whitespace-nowrap">
											<a
												target="_blank"
												href="https://open.spotify.com/track/10Igtw8bSDyyFs7KIsKngZ"
											>
												<div className="flex items-center">
													<div className="flex-shrink-0 h-12 w-12 sm:h-16 sm:w-16">
														<div
															className="w-full h-full bg-cover bg-gray-50"
															style={{
																backgroundImage:
																	'url("https://i.scdn.co/image/ab67616d0000b273f1115552efd25fa498ec923a")',
															}}
														/>
													</div>
													<div className="ml-4">
														<div className="text-sm font-medium text-gray-900 whitespace-pre-wrap">
															Freaky Friday (feat. Chris Brown)
														</div>
														<div className="text-sm font-medium text-gray-500 whitespace-pre-wrap">
															Lil Dicky, Chris Brown
														</div>
													</div>
												</div>
											</a>
										</td>
										<td className="w-28">
											<div className="pointer-events-auto rounded-md text-xs mx-2 text-slate-700 shadow-sm ring-1 ring-slate-700/10  hover:bg-slate-50">
												<a
													target="_blank"
													className="py-[0.3125rem] px-1 block text-center"
													href="https://open.spotify.com/track/10Igtw8bSDyyFs7KIsKngZ"
												>
													<div className="flex justify-center">
														<img
															src="/spotify-logo-black.svg"
															height={21}
															width={21}
															alt="Spotify Logo"
															className="w-5.5"
														/>
														<div className="leading-3">Listen on Spotify</div>
													</div>
												</a>
											</div>
										</td>
									</tr>
									<tr>
										<td className="px-2 md:px-6 py-2 whitespace-nowrap text-xl text-gray-500 text-center">
											<div className="flex flex-row justify-center items-center">
												3{" "}
											</div>
										</td>
										<td className="px-2 md:px-6 py-2 whitespace-nowrap">
											<a
												target="_blank"
												href="https://open.spotify.com/track/5TlAXiBCBwiQnIZUAA4Jkg"
											>
												<div className="flex items-center">
													<div className="flex-shrink-0 h-12 w-12 sm:h-16 sm:w-16">
														<div
															className="w-full h-full bg-cover bg-gray-50"
															style={{
																backgroundImage:
																	'url("https://i.scdn.co/image/ab67616d0000b273a5ea3573e8f48f5485760e2e")',
															}}
														/>
													</div>
													<div className="ml-4">
														<div className="text-sm font-medium text-gray-900 whitespace-pre-wrap">
															Professional Rapper (feat. Snoop Dogg)
														</div>
														<div className="text-sm font-medium text-gray-500 whitespace-pre-wrap">
															Lil Dicky, Snoop Dogg
														</div>
													</div>
												</div>
											</a>
										</td>
										<td className="w-28">
											<div className="pointer-events-auto rounded-md text-xs mx-2 text-slate-700 shadow-sm ring-1 ring-slate-700/10  hover:bg-slate-50">
												<a
													target="_blank"
													className="py-[0.3125rem] px-1 block text-center"
													href="https://open.spotify.com/track/5TlAXiBCBwiQnIZUAA4Jkg"
												>
													<div className="flex justify-center">
														<img
															src="/spotify-logo-black.svg"
															height={21}
															width={21}
															alt="Spotify Logo"
															className="w-5.5"
														/>
														<div className="leading-3">Listen on Spotify</div>
													</div>
												</a>
											</div>
										</td>
									</tr>
									<tr>
										<td className="px-2 md:px-6 py-2 whitespace-nowrap text-xl text-gray-500 text-center">
											<div className="flex flex-row justify-center items-center">
												4{" "}
											</div>
										</td>
										<td className="px-2 md:px-6 py-2 whitespace-nowrap">
											<a
												target="_blank"
												href="https://open.spotify.com/track/7ajcVStIEFvZhI4xFuLDP2"
											>
												<div className="flex items-center">
													<div className="flex-shrink-0 h-12 w-12 sm:h-16 sm:w-16">
														<div
															className="w-full h-full bg-cover bg-gray-50"
															style={{
																backgroundImage:
																	'url("https://i.scdn.co/image/ab67616d0000b27359ccf819b19fe18a2aef09a0")',
															}}
														/>
													</div>
													<div className="ml-4">
														<div className="text-sm font-medium text-gray-900 whitespace-pre-wrap">
															Bones
														</div>
														<div className="text-sm font-medium text-gray-500 whitespace-pre-wrap">
															Kidz Bop Kids
														</div>
													</div>
												</div>
											</a>
										</td>
										<td className="w-28">
											<div className="pointer-events-auto rounded-md text-xs mx-2 text-slate-700 shadow-sm ring-1 ring-slate-700/10  hover:bg-slate-50">
												<a
													target="_blank"
													className="py-[0.3125rem] px-1 block text-center"
													href="https://open.spotify.com/track/7ajcVStIEFvZhI4xFuLDP2"
												>
													<div className="flex justify-center">
														<img
															src="/spotify-logo-black.svg"
															height={21}
															width={21}
															alt="Spotify Logo"
															className="w-5.5"
														/>
														<div className="leading-3">Listen on Spotify</div>
													</div>
												</a>
											</div>
										</td>
									</tr>
									<tr>
										<td className="px-2 md:px-6 py-2 whitespace-nowrap text-xl text-gray-500 text-center">
											<div className="flex flex-row justify-center items-center">
												5{" "}
											</div>
										</td>
										<td className="px-2 md:px-6 py-2 whitespace-nowrap">
											<a
												target="_blank"
												href="https://open.spotify.com/track/2Gn3xsO0hacXJy1Z2EHrgm"
											>
												<div className="flex items-center">
													<div className="flex-shrink-0 h-12 w-12 sm:h-16 sm:w-16">
														<div
															className="w-full h-full bg-cover bg-gray-50"
															style={{
																backgroundImage:
																	'url("https://i.scdn.co/image/ab67616d0000b273e20032be410dd1dd2b1d2190")',
															}}
														/>
													</div>
													<div className="ml-4">
														<div className="text-sm font-medium text-gray-900 whitespace-pre-wrap">
															223&quot; s (feat. BabyTron)
														</div>
														<div className="text-sm font-medium text-gray-500 whitespace-pre-wrap">
															midwxst, BabyTron
														</div>
													</div>
												</div>
											</a>
										</td>
										<td className="w-28">
											<div className="pointer-events-auto rounded-md text-xs mx-2 text-slate-700 shadow-sm ring-1 ring-slate-700/10  hover:bg-slate-50">
												<a
													target="_blank"
													className="py-[0.3125rem] px-1 block text-center"
													href="https://open.spotify.com/track/2Gn3xsO0hacXJy1Z2EHrgm"
												>
													<div className="flex justify-center">
														<img
															src="/spotify-logo-black.svg"
															height={21}
															width={21}
															alt="Spotify Logo"
															className="w-5.5"
														/>
														<div className="leading-3">Listen on Spotify</div>
													</div>
												</a>
											</div>
										</td>
									</tr>
									<tr>
										<td className="px-2 md:px-6 py-2 whitespace-nowrap text-xl text-gray-500 text-center">
											<div className="flex flex-row justify-center items-center">
												6{" "}
											</div>
										</td>
										<td className="px-2 md:px-6 py-2 whitespace-nowrap">
											<a
												target="_blank"
												href="https://open.spotify.com/track/4Kz4RdRCceaA9VgTqBhBfa"
											>
												<div className="flex items-center">
													<div className="flex-shrink-0 h-12 w-12 sm:h-16 sm:w-16">
														<div className="w-full h-full bg-cover bg-gray-50" />
													</div>
													<div className="ml-4">
														<div className="text-sm font-medium text-gray-900 whitespace-pre-wrap">
															The Motto
														</div>
														<div className="text-sm font-medium text-gray-500 whitespace-pre-wrap">
															Drake, Lil Wayne
														</div>
													</div>
												</div>
											</a>
										</td>
										<td className="w-28">
											<div className="pointer-events-auto rounded-md text-xs mx-2 text-slate-700 shadow-sm ring-1 ring-slate-700/10  hover:bg-slate-50">
												<a
													target="_blank"
													className="py-[0.3125rem] px-1 block text-center"
													href="https://open.spotify.com/track/4Kz4RdRCceaA9VgTqBhBfa"
												>
													<div className="flex justify-center">
														<img
															src="/spotify-logo-black.svg"
															height={21}
															width={21}
															alt="Spotify Logo"
															className="w-5.5"
														/>
														<div className="leading-3">Listen on Spotify</div>
													</div>
												</a>
											</div>
										</td>
									</tr>
									<tr>
										<td className="px-2 md:px-6 py-2 whitespace-nowrap text-xl text-gray-500 text-center">
											<div className="flex flex-row justify-center items-center">
												7{" "}
											</div>
										</td>
										<td className="px-2 md:px-6 py-2 whitespace-nowrap">
											<a
												target="_blank"
												href="https://open.spotify.com/track/0tnT8B415mZyOYETy2ulVv"
											>
												<div className="flex items-center">
													<div className="flex-shrink-0 h-12 w-12 sm:h-16 sm:w-16">
														<div className="w-full h-full bg-cover bg-gray-50" />
													</div>
													<div className="ml-4">
														<div className="text-sm font-medium text-gray-900 whitespace-pre-wrap">
															No Clarity
														</div>
														<div className="text-sm font-medium text-gray-500 whitespace-pre-wrap">
															Ice Spice
														</div>
													</div>
												</div>
											</a>
										</td>
										<td className="w-28">
											<div className="pointer-events-auto rounded-md text-xs mx-2 text-slate-700 shadow-sm ring-1 ring-slate-700/10  hover:bg-slate-50">
												<a
													target="_blank"
													className="py-[0.3125rem] px-1 block text-center"
													href="https://open.spotify.com/track/0tnT8B415mZyOYETy2ulVv"
												>
													<div className="flex justify-center">
														<img
															src="/spotify-logo-black.svg"
															height={21}
															width={21}
															alt="Spotify Logo"
															className="w-5.5"
														/>
														<div className="leading-3">Listen on Spotify</div>
													</div>
												</a>
											</div>
										</td>
									</tr>
									<tr>
										<td className="px-2 md:px-6 py-2 whitespace-nowrap text-xl text-gray-500 text-center">
											<div className="flex flex-row justify-center items-center">
												8{" "}
											</div>
										</td>
										<td className="px-2 md:px-6 py-2 whitespace-nowrap">
											<a
												target="_blank"
												href="https://open.spotify.com/track/1jYiIOC5d6soxkJP81fxq2"
											>
												<div className="flex items-center">
													<div className="flex-shrink-0 h-12 w-12 sm:h-16 sm:w-16">
														<div className="w-full h-full bg-cover bg-gray-50" />
													</div>
													<div className="ml-4">
														<div className="text-sm font-medium text-gray-900 whitespace-pre-wrap">
															I&quot; m the One (feat. Justin Bieber, Quavo,
															Chance the Rapper &amp; Lil Wayne)
														</div>
														<div className="text-sm font-medium text-gray-500 whitespace-pre-wrap">
															DJ Khaled, Justin Bieber, Quavo, Chance the
															Rapper, Lil Wayne
														</div>
													</div>
												</div>
											</a>
										</td>
										<td className="w-28">
											<div className="pointer-events-auto rounded-md text-xs mx-2 text-slate-700 shadow-sm ring-1 ring-slate-700/10  hover:bg-slate-50">
												<a
													target="_blank"
													className="py-[0.3125rem] px-1 block text-center"
													href="https://open.spotify.com/track/1jYiIOC5d6soxkJP81fxq2"
												>
													<div className="flex justify-center">
														<img
															src="/spotify-logo-black.svg"
															height={21}
															width={21}
															alt="Spotify Logo"
															className="w-5.5"
														/>
														<div className="leading-3">Listen on Spotify</div>
													</div>
												</a>
											</div>
										</td>
									</tr>
									<tr>
										<td className="px-2 md:px-6 py-2 whitespace-nowrap text-xl text-gray-500 text-center">
											<div className="flex flex-row justify-center items-center">
												9{" "}
											</div>
										</td>
										<td className="px-2 md:px-6 py-2 whitespace-nowrap">
											<a
												target="_blank"
												href="https://open.spotify.com/track/1wJRveJZLSb1rjhnUHQiv6"
											>
												<div className="flex items-center">
													<div className="flex-shrink-0 h-12 w-12 sm:h-16 sm:w-16">
														<div className="w-full h-full bg-cover bg-gray-50" />
													</div>
													<div className="ml-4">
														<div className="text-sm font-medium text-gray-900 whitespace-pre-wrap">
															Swervin (feat. 6ix9ine)
														</div>
														<div className="text-sm font-medium text-gray-500 whitespace-pre-wrap">
															A Boogie Wit da Hoodie, 6ix9ine
														</div>
													</div>
												</div>
											</a>
										</td>
										<td className="w-28">
											<div className="pointer-events-auto rounded-md text-xs mx-2 text-slate-700 shadow-sm ring-1 ring-slate-700/10  hover:bg-slate-50">
												<a
													target="_blank"
													className="py-[0.3125rem] px-1 block text-center"
													href="https://open.spotify.com/track/1wJRveJZLSb1rjhnUHQiv6"
												>
													<div className="flex justify-center">
														<img
															src="/spotify-logo-black.svg"
															height={21}
															width={21}
															alt="Spotify Logo"
															className="w-5.5"
														/>
														<div className="leading-3">Listen on Spotify</div>
													</div>
												</a>
											</div>
										</td>
									</tr>
									<tr>
										<td className="px-2 md:px-6 py-2 whitespace-nowrap text-xl text-gray-500 text-center">
											<div className="flex flex-row justify-center items-center">
												10{" "}
											</div>
										</td>
										<td className="px-2 md:px-6 py-2 whitespace-nowrap">
											<a
												target="_blank"
												href="https://open.spotify.com/track/5u6vkDnOyaf8LsteDAj2ub"
											>
												<div className="flex items-center">
													<div className="flex-shrink-0 h-12 w-12 sm:h-16 sm:w-16">
														<div className="w-full h-full bg-cover bg-gray-50" />
													</div>
													<div className="ml-4">
														<div className="text-sm font-medium text-gray-900 whitespace-pre-wrap">
															Ghostface Killers (feat. Travis Scott)
														</div>
														<div className="text-sm font-medium text-gray-500 whitespace-pre-wrap">
															21 Savage, Offset, Metro Boomin, Travis Scott
														</div>
													</div>
												</div>
											</a>
										</td>
										<td className="w-28">
											<div className="pointer-events-auto rounded-md text-xs mx-2 text-slate-700 shadow-sm ring-1 ring-slate-700/10  hover:bg-slate-50">
												<a
													target="_blank"
													className="py-[0.3125rem] px-1 block text-center"
													href="https://open.spotify.com/track/5u6vkDnOyaf8LsteDAj2ub"
												>
													<div className="flex justify-center">
														<img
															src="/spotify-logo-black.svg"
															height={21}
															width={21}
															alt="Spotify Logo"
															className="w-5.5"
														/>
														<div className="leading-3">Listen on Spotify</div>
													</div>
												</a>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
			<div
				style={{
					transform:
						"scale(0.7) rotateX(60deg) rotateY(0deg) rotateZ(39deg) translateY(-30rem) translateX(-30rem)",
				}}
			>
				<div>
					<div className="py-2 align-middle inline-block min-w-full">
						<div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
							<table className="min-w-full divide-y divide-gray-200">
								<thead>
									<tr>
										<th
											scope="col"
											className="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											Position
										</th>
										<th
											scope="col"
											className="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											Genre
										</th>
									</tr>
								</thead>
								<tbody className="divide-y divide-gray-200 ">
									<tr>
										<td className="px-6 py-2 whitespace-nowrap text-xl text-gray-500 text-center">
											<div className="flex flex-row justify-center items-center">
												1{" "}
											</div>
										</td>
										<td className="px-6 py-2 whitespace-nowrap">
											<div className="flex items-center">
												<div className="ml-4">
													<div className="text-sm font-medium text-gray-900">
														<a href="/genre/rap">Rap</a>
													</div>
												</div>
											</div>
										</td>
									</tr>
									<tr>
										<td className="px-6 py-2 whitespace-nowrap text-xl text-gray-500 text-center">
											<div className="flex flex-row justify-center items-center">
												2{" "}
											</div>
										</td>
										<td className="px-6 py-2 whitespace-nowrap">
											<div className="flex items-center">
												<div className="ml-4">
													<div className="text-sm font-medium text-gray-900">
														<a href="/genre/hip-hop">Hip Hop</a>
													</div>
												</div>
											</div>
										</td>
									</tr>
									<tr>
										<td className="px-6 py-2 whitespace-nowrap text-xl text-gray-500 text-center">
											<div className="flex flex-row justify-center items-center">
												3{" "}
											</div>
										</td>
										<td className="px-6 py-2 whitespace-nowrap">
											<div className="flex items-center">
												<div className="ml-4">
													<div className="text-sm font-medium text-gray-900">
														<a href="/genre/pop-rap">Pop Rap</a>
													</div>
												</div>
											</div>
										</td>
									</tr>
									<tr>
										<td className="px-6 py-2 whitespace-nowrap text-xl text-gray-500 text-center">
											<div className="flex flex-row justify-center items-center">
												4{" "}
											</div>
										</td>
										<td className="px-6 py-2 whitespace-nowrap">
											<div className="flex items-center">
												<div className="ml-4">
													<div className="text-sm font-medium text-gray-900">
														<a href="/genre/trap">Trap</a>
													</div>
												</div>
											</div>
										</td>
									</tr>
									<tr>
										<td className="px-6 py-2 whitespace-nowrap text-xl text-gray-500 text-center">
											<div className="flex flex-row justify-center items-center">
												5{" "}
											</div>
										</td>
										<td className="px-6 py-2 whitespace-nowrap">
											<div className="flex items-center">
												<div className="ml-4">
													<div className="text-sm font-medium text-gray-900">
														<a href="/genre/pop">Pop</a>
													</div>
												</div>
											</div>
										</td>
									</tr>
									<tr>
										<td className="px-6 py-2 whitespace-nowrap text-xl text-gray-500 text-center">
											<div className="flex flex-row justify-center items-center">
												6{" "}
											</div>
										</td>
										<td className="px-6 py-2 whitespace-nowrap">
											<div className="flex items-center">
												<div className="ml-4">
													<div className="text-sm font-medium text-gray-900">
														<a href="/genre/atl-hip-hop">Atl Hip Hop</a>
													</div>
												</div>
											</div>
										</td>
									</tr>
									<tr>
										<td className="px-6 py-2 whitespace-nowrap text-xl text-gray-500 text-center">
											<div className="flex flex-row justify-center items-center">
												7{" "}
											</div>
										</td>
										<td className="px-6 py-2 whitespace-nowrap">
											<div className="flex items-center">
												<div className="ml-4">
													<div className="text-sm font-medium text-gray-900">
														<a href="/genre/chicago-rap">Chicago Rap</a>
													</div>
												</div>
											</div>
										</td>
									</tr>
									<tr>
										<td className="px-6 py-2 whitespace-nowrap text-xl text-gray-500 text-center">
											<div className="flex flex-row justify-center items-center">
												8{" "}
											</div>
										</td>
										<td className="px-6 py-2 whitespace-nowrap">
											<div className="flex items-center">
												<div className="ml-4">
													<div className="text-sm font-medium text-gray-900">
														<a href="/genre/melodic-rap">Melodic Rap</a>
													</div>
												</div>
											</div>
										</td>
									</tr>
									<tr>
										<td className="px-6 py-2 whitespace-nowrap text-xl text-gray-500 text-center">
											<div className="flex flex-row justify-center items-center">
												9{" "}
											</div>
										</td>
										<td className="px-6 py-2 whitespace-nowrap">
											<div className="flex items-center">
												<div className="ml-4">
													<div className="text-sm font-medium text-gray-900">
														<a href="/genre/gangster-rap">Gangster Rap</a>
													</div>
												</div>
											</div>
										</td>
									</tr>
									<tr>
										<td className="px-6 py-2 whitespace-nowrap text-xl text-gray-500 text-center">
											<div className="flex flex-row justify-center items-center">
												10{" "}
											</div>
										</td>
										<td className="px-6 py-2 whitespace-nowrap">
											<div className="flex items-center">
												<div className="ml-4">
													<div className="text-sm font-medium text-gray-900">
														<a href="/genre/meme-rap">Meme Rap</a>
													</div>
												</div>
											</div>
										</td>
									</tr>
									<tr>
										<td className="px-6 py-2 whitespace-nowrap text-xl text-gray-500 text-center">
											<div className="flex flex-row justify-center items-center">
												11{" "}
											</div>
										</td>
										<td className="px-6 py-2 whitespace-nowrap">
											<div className="flex items-center">
												<div className="ml-4">
													<div className="text-sm font-medium text-gray-900">
														<a href="/genre/miami-hip-hop">Miami Hip Hop</a>
													</div>
												</div>
											</div>
										</td>
									</tr>
									<tr>
										<td className="px-6 py-2 whitespace-nowrap text-xl text-gray-500 text-center">
											<div className="flex flex-row justify-center items-center">
												12{" "}
											</div>
										</td>
										<td className="px-6 py-2 whitespace-nowrap">
											<div className="flex items-center">
												<div className="ml-4">
													<div className="text-sm font-medium text-gray-900">
														<a href="/genre/emo-rap">Emo Rap</a>
													</div>
												</div>
											</div>
										</td>
									</tr>
									<tr>
										<td className="px-6 py-2 whitespace-nowrap text-xl text-gray-500 text-center">
											<div className="flex flex-row justify-center items-center">
												13{" "}
											</div>
										</td>
										<td className="px-6 py-2 whitespace-nowrap">
											<div className="flex items-center">
												<div className="ml-4">
													<div className="text-sm font-medium text-gray-900">
														<a href="/genre/pluggnb">Pluggnb</a>
													</div>
												</div>
											</div>
										</td>
									</tr>
									<tr>
										<td className="px-6 py-2 whitespace-nowrap text-xl text-gray-500 text-center">
											<div className="flex flex-row justify-center items-center">
												14{" "}
											</div>
										</td>
										<td className="px-6 py-2 whitespace-nowrap">
											<div className="flex items-center">
												<div className="ml-4">
													<div className="text-sm font-medium text-gray-900">
														<a href="/genre/rage-rap">Rage Rap</a>
													</div>
												</div>
											</div>
										</td>
									</tr>
									<tr>
										<td className="px-6 py-2 whitespace-nowrap text-xl text-gray-500 text-center">
											<div className="flex flex-row justify-center items-center">
												15{" "}
											</div>
										</td>
										<td className="px-6 py-2 whitespace-nowrap">
											<div className="flex items-center">
												<div className="ml-4">
													<div className="text-sm font-medium text-gray-900">
														<a href="/genre/glitchcore">Glitchcore</a>
													</div>
												</div>
											</div>
										</td>
									</tr>
									<tr>
										<td className="px-6 py-2 whitespace-nowrap text-xl text-gray-500 text-center">
											<div className="flex flex-row justify-center items-center">
												16{" "}
											</div>
										</td>
										<td className="px-6 py-2 whitespace-nowrap">
											<div className="flex items-center">
												<div className="ml-4">
													<div className="text-sm font-medium text-gray-900">
														<a href="/genre/detroit-hip-hop">Detroit Hip Hop</a>
													</div>
												</div>
											</div>
										</td>
									</tr>
									<tr>
										<td className="px-6 py-2 whitespace-nowrap text-xl text-gray-500 text-center">
											<div className="flex flex-row justify-center items-center">
												17{" "}
											</div>
										</td>
										<td className="px-6 py-2 whitespace-nowrap">
											<div className="flex items-center">
												<div className="ml-4">
													<div className="text-sm font-medium text-gray-900">
														<a href="/genre/canadian-hip-hop">
															Canadian Hip Hop
														</a>
													</div>
												</div>
											</div>
										</td>
									</tr>
									<tr>
										<td className="px-6 py-2 whitespace-nowrap text-xl text-gray-500 text-center">
											<div className="flex flex-row justify-center items-center">
												18{" "}
											</div>
										</td>
										<td className="px-6 py-2 whitespace-nowrap">
											<div className="flex items-center">
												<div className="ml-4">
													<div className="text-sm font-medium text-gray-900">
														<a href="/genre/canadian-pop">Canadian Pop</a>
													</div>
												</div>
											</div>
										</td>
									</tr>
									<tr>
										<td className="px-6 py-2 whitespace-nowrap text-xl text-gray-500 text-center">
											<div className="flex flex-row justify-center items-center">
												19{" "}
											</div>
										</td>
										<td className="px-6 py-2 whitespace-nowrap">
											<div className="flex items-center">
												<div className="ml-4">
													<div className="text-sm font-medium text-gray-900">
														<a href="/genre/toronto-rap">Toronto Rap</a>
													</div>
												</div>
											</div>
										</td>
									</tr>
									<tr>
										<td className="px-6 py-2 whitespace-nowrap text-xl text-gray-500 text-center">
											<div className="flex flex-row justify-center items-center">
												20{" "}
											</div>
										</td>
										<td className="px-6 py-2 whitespace-nowrap">
											<div className="flex items-center">
												<div className="ml-4">
													<div className="text-sm font-medium text-gray-900">
														<a href="/genre/lgbtq-hip-hop">Lgbtq+ Hip Hop</a>
													</div>
												</div>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
