"use client";

export default function Skeleton() {
	return (
		<div className="mt-12">
			<Profile />
			<TopThree />
			{/* <Tab.Group
				selectedIndex={selectedIndex}
				onChange={(e) => {
					setSelectedIndex(e);
					setExpanded(!expanded);
				}}
			>
				<Tab.List className="flex space-x-1 rounded-xl p-1 gap-4">
					{Object.keys(data).map((timeRange) => (
						<Tab
							key={timeRange}
							className={({ selected }) =>
								classNames(
									"mt-4 rounded-lg py-2 px-2 outline-transparent  font-medium  leading-none",
									selected
										? "bg-indigo-50 text-indigo-900 shadow"
										: "text-gray-800"
								)
							}
						>
							{mapping[timeRange]}
						</Tab>
					))}
				</Tab.List>
				<Tab.Panels className="mt-2">
					{Object.values(data).map((timeRange, idx) => (
						<Tab.Panel key={idx}>
							<TopThree type={type} timeRange={timeRange} />

							<div className="shadow overflow-scroll border-b border-gray-200 sm:rounded-lg my-4">
								<table className="min-w-full divide-y divide-gray-200">
									<TableHead type={type} />
									<tbody className="divide-y divide-gray-200">
										{timeRange.slice(0, expanded ? 15 : 10).map((info, idx) => (
											<tr key={idx}>
												<td className="px-2 md:px-6 py-2  text-xl text-gray-500 text-center">
													<div className="flex flex-row justify-center items-center">
														{idx + 1}
														{selectedIndex !== 2 ? (
															<div className="text-sm text-green-500 ml-2">
																{calculatePosition(info.id, idx)}
															</div>
														) : null}
													</div>
												</td>
												<td className="px-2 md:px-6 py-2 whitespace-nowrap">
													<div className="flex flex-row items-center gap-3 px-2">
														<div key={info?.id}>
															<a
																target="_blank"
																href={info.external_urls.spotify}
															>
																<Image
																	width={70}
																	height={70}
																	alt={info?.name}
																	src={
																		type === "track"
																			? info?.album?.images[0]?.url
																			: info?.images[0]?.url
																	}
																/>
															</a>
														</div>

														{type === "track" ? (
															<div>
																<p className="text-sm font-medium text-gray-900 whitespace-pre-wrap">
																	{info?.name}
																</p>
																<p className="text-sm font-medium text-gray-500 whitespace-pre-wrap">
																	{info?.artists
																		.map((artist) => artist.name)
																		.join(", ")}
																</p>
															</div>
														) : (
															<p className="text-sm font-medium text-gray-900 whitespace-pre-wrap">
																{info?.name}
															</p>
														)}
													</div>
												</td>
												<td className="w-28">
													<a
														target="_blank"
														href={info.external_urls.spotify}
														className="hover:bg-slate-50 shadow-sm ring-1 ring-slate-700/10 pointer-events-auto rounded-md flex justify-center items-center gap-1 text-center text-xs text-slate-700 leading-3 py-[0.3125rem] px-1 mx-2"
													>
														<Image
															src="/spotify.svg"
															height="21"
															width="21"
															alt="Spotify Logo"
															className="w-5.5"
														/>
														<div className="flex flex-row justify-start w-16">
															Listen on Spotify
														</div>
													</a>
												</td>
											</tr>
										))}
									</tbody>
								</table>
								<button
									onClick={() => setExpanded(!expanded)}
									className="w-full flex items-center justify-center px-8 py-2 border border-transparent text-sm font-medium text-indigo-700 bg-indigo-50 hover:bg-indigo-100 md:py-3 md:text-md md:px-10"
								>
									{expanded ? "See less" : "See more"}
								</button>
							</div>
						</Tab.Panel>
					))}
				</Tab.Panels>
			</Tab.Group> */}
		</div>
	);
}

const Profile = () => (
	// <div className="flex items-center ">
	// 	<UserIcon className="h-14 w-14 mr-4 text-black bg-slate-600 rounded-full p-2" />

	// 	<div className="truncate">
	// 		<h2 className="text-lg leading-6 font-medium text-gray-900 truncate">
	// 			{user?.display_name}
	// 		</h2>
	// 		<p className="text-md text-gray-700">{`Your Top Songs`}</p>
	// 	</div>
	// </div>
	<div role="status" class="  animate-pulse dark:border-gray-700">
		<div class="flex items-center mt-4 space-x-3">
			<svg
				class="text-gray-200 w-14 h-14 dark:text-gray-700"
				aria-hidden="true"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
					clip-rule="evenodd"
				></path>
			</svg>
			<div>
				<div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
				<div class="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
			</div>
		</div>
		<span class="sr-only">Loading...</span>
	</div>
);

const TopThree = () => {
	return (
		<div className=" max-w-full aspect-[3/1] flex flex-row justify-evenly gap-3 m-4">
			<div
				role="status"
				class="aspect-square animate-pulse flex flex-row justify-evenly gap-3"
			>
				<div className="bg-gray-300 dark:bg-gray-700 aspect-square rounded"></div>
				<div className="bg-gray-300 dark:bg-gray-700 aspect-square rounded"></div>
				<div className="bg-gray-300 dark:bg-gray-700 aspect-square rounded"></div>
			</div>
		</div>
	);
};

// const TableHead = ({ type }) => {
// 	const TH = ({ children }) => (
// 		<th
// 			scope="col"
// 			className="px-2 md:px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
// 		>
// 			{children}
// 		</th>
// 	);
// 	return (
// 		<thead>
// 			<tr>
// 				<TH>position</TH>
// 				<th
// 					scope="col"
// 					className="px-2 md:px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
// 				>
// 					{type === "track" ? "song" : "artist"}
// 				</th>
// 				<th
// 					scope="col"
// 					className="px-2 md:px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
// 				></th>
// 			</tr>
// 		</thead>
// 	);
// };
