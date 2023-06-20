"use client";

import { useState } from "react";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import { UserIcon } from "@heroicons/react/24/solid";

const mapping = {
	long: "All time",
	medium: "Last 6 months",
	short: "Last month",
};

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function PeriodTabs({ data, user, type }) {
	const [expanded, setExpanded] = useState(false);
	return (
		<div>
			<Profile type={type} user={user} />
			<Tab.Group
				onChange={() => {
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
														<div className="text-sm text-green-500 ml-2">▲</div>
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
			</Tab.Group>
		</div>
	);
}

const Profile = ({ user, type }) => (
	<div className="flex items-center ">
		{user?.images[0]?.url ? (
			<img
				src={user?.images[0]?.url}
				alt={user?.display_name}
				className="w-16 h-16 mr-4 rounded-full object-cover"
			/>
		) : (
			<UserIcon className="h-14 w-14 mr-4 text-black bg-slate-600 rounded-full p-2" />
		)}

		<div className="truncate">
			<h2 className="text-lg leading-6 font-medium text-gray-900 truncate">
				{user?.display_name}
			</h2>
			<p className="text-md text-gray-700">{`Your Top ${
				type === "track" ? "Songs" : "Artists"
			}`}</p>
		</div>
	</div>
);

const TopThree = ({ type, timeRange }) => {
	return (
		<div className="flex flex-row justify-evenly gap-3">
			{timeRange.slice(0, 3).map((info) => (
				<div key={info?.id}>
					<a target="_blank" href={info?.external_urls?.spotify}>
						<Image
							width={500}
							height={500}
							src={
								type === "track"
									? info?.album?.images[0]?.url
									: info?.images[0]?.url
							}
							alt={info?.name}
						/>
					</a>
				</div>
			))}
		</div>
	);
};

const TableHead = ({ type }) => {
	const TH = ({ children }) => (
		<th
			scope="col"
			className="px-2 md:px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
		>
			{children}
		</th>
	);
	return (
		<thead>
			<tr>
				<TH>position</TH>
				<th
					scope="col"
					className="px-2 md:px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
				>
					{type === "track" ? "song" : "artist"}
				</th>
				<th
					scope="col"
					className="px-2 md:px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
				></th>
			</tr>
		</thead>
	);
};
