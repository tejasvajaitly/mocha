"use client";

import PeriodTabs from "./PeriodTabs.jsx";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "../components/Skeleton.jsx";

function SpotifyTops() {
	const { isLoading, isError, data, error, refetch } = useQuery({
		queryKey: ["spotifydata"],
		queryFn: () => fetch("/api/spotify/data").then((data) => data.json()),
	});
	return (
		<div>
			<PeriodTabs
				isLoading={isLoading}
				data={data?.data?.artists}
				heading="Artist"
				user={data?.data?.user}
				type="artist"
			/>

			<PeriodTabs
				isLoading={isLoading}
				data={data?.data?.tracks}
				heading="Songs"
				type="track"
				user={data?.data?.user}
			/>
		</div>
	);
}

export default SpotifyTops;
