"use client";
import { UserIcon } from "@heroicons/react/24/solid";
import PeriodTabs from "./PeriodTabs.jsx";
import { useQuery } from "@tanstack/react-query";

function SpotifyTops() {
	const { isLoading, isError, data, error, refetch } = useQuery({
		queryKey: ["spotifydata"],
		queryFn: () => fetch("/api/spotify/data").then((data) => data.json()),
	});
	return (
		<div>
			{isLoading ? (
				<h1>Loading!!!!!!!!!</h1>
			) : data ? (
				<>
					{console.log(data, "data")}
					<PeriodTabs
						data={data.data.artists}
						heading="Artist"
						user={data.data.user}
						type="artist"
					/>

					<PeriodTabs
						data={data.data.tracks}
						heading="Songs"
						type="track"
						user={data.data.user}
					/>
				</>
			) : null}
		</div>
	);
}

export default SpotifyTops;
