import { NextResponse } from "next/server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";

import spotifyApi, { testLol } from "@/app/api/lib/spotify";

export async function GET(request) {
	const session = await getServerSession(authOptions);
	spotifyApi.setAccessToken(session.user.accessToken);
	spotifyApi.setRefreshToken(session.user.refreshToken);

	if (spotifyApi?._credentials?.accessToken) {
		try {
			console.log(spotifyApi, "spotifyApi before api call");
			console.log(testLol, "testLol before api call");
			const topArtistShortPromise = spotifyApi.getMyTopArtists({
				time_range: "short_term",
				limit: 10,
			});
			const topArtistMediumPromise = spotifyApi.getMyTopArtists({
				time_range: "medium_term",
				limit: 10,
			});
			const topArtistLongPromise = spotifyApi.getMyTopArtists({
				time_range: "long_term",
				limit: 10,
			});
			const topTracksShortPromise = spotifyApi.getMyTopTracks({
				time_range: "short_term",
				limit: 10,
			});
			const topTracksMediumPromise = spotifyApi.getMyTopTracks({
				time_range: "medium_term",
				limit: 10,
			});
			const topTracksLongPromise = spotifyApi.getMyTopTracks({
				time_range: "long_term",
				limit: 10,
			});

			const topArtistShort = await topArtistShortPromise;
			const topArtistMedium = await topArtistMediumPromise;
			const topArtistLong = await topArtistLongPromise;

			const topTracksShort = await topTracksShortPromise;
			const topTracksMedium = await topTracksMediumPromise;
			const topTracksLong = await topTracksLongPromise;

			const data = {
				artists: {
					long: topArtistLong.body.items,
					medium: topArtistMedium.body.items,
					short: topArtistShort.body.items,
				},
				tracks: {
					long: topTracksLong.body.items,
					medium: topTracksMedium.body.items,
					short: topTracksShort.body.items,
				},
			};
			return NextResponse.json({ data });
		} catch (resError) {
			const resMessage = resError.body.error.message || "An error occured";
			const resStatus = resError.body.error.status || 400;
			return NextResponse.json({ error: resMessage }, { status: resStatus });
		}
	} else {
		return NextResponse.json({ message: "please authenticate" });
	}
}
