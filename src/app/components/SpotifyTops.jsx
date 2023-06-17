"use client";
import { UserIcon } from "@heroicons/react/24/solid";
import PeriodTabs from "./PeriodTabs.jsx";
import { useQuery } from "@tanstack/react-query";

function SpotifyTops({ name, image }) {
	const { isLoading, isError, data, error, refetch } = useQuery({
		queryKey: ["spotifydata"],
		queryFn: () => fetch("/api/spotify/data").then((data) => data.json()),
	});
	return (
		<div>
			<div className="flex items-center">
				{image ? (
					<img
						src={image}
						alt={name}
						className="w-16 h-16 mr-4 rounded-full object-cover"
					/>
				) : (
					<UserIcon className="h-14 w-14 mr-4 text-black bg-slate-600 rounded-full p-2" />
				)}

				<div className="truncate">
					<h2 className="text-lg leading-6 font-medium text-gray-900 truncate">
						{name}
					</h2>
					<p className="text-md text-gray-700">Your Top Artists</p>
				</div>
			</div>
			<div>
				{isLoading ? (
					<h1>Loading!!!!!!!!!</h1>
				) : data ? (
					<PeriodTabs data={data} />
				) : null}
			</div>
		</div>
	);
}

export default SpotifyTops;
