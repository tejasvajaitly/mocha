import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";
import spotifyApi, { LOGIN_URL, testLol } from "@/app/api/lib/spotify";

async function refreshAccessToken(token) {
	try {
		spotifyApi.setAccessToken(token.accessToken);
		spotifyApi.setRefreshToken(token.refreshToken);
		const { body: refreshedToken } = await spotifyApi.refreshAccessToken();

		spotifyApi.setAccessToken(refreshedToken.access_token);
		spotifyApi.setRefreshToken(
			refreshedToken.refresh_token ?? token.refreshToken
		);

		return {
			...token,
			accessToken: refreshedToken.access_token,
			accessTokenExpires: Date.now() + refreshedToken.expires_in * 1000, // 1 hour as 3600 return from spotify
			refreshToken: refreshedToken.refresh_token ?? token.refreshToken,
		};
	} catch (error) {
		return {
			...token,
			error: "Refresh Access Token error",
		};
	}
}

export const authOptions = {
	// Configure one or more authentication providers
	providers: [
		SpotifyProvider({
			clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
			clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
			authorization: LOGIN_URL,
		}),
		// ...add more providers here
	],
	secret: process.env.JWT_SECRET,

	callbacks: {
		async jwt({ token, account, user }) {
			//initial sign in
			if (account && user) {
				spotifyApi.setAccessToken(account.access_token);
				spotifyApi.setRefreshToken(account.refresh_token);
				testLol.setVar = "Changed in initial sign in";
				console.log("initial sign in", spotifyApi);
				return {
					...token,
					accessToken: account.access_token,
					refreshToken: account.refresh_token,
					username: account.providerAccountId,
					accessTokenExpires: account.expires_at * 1000,
				};
			}

			//return previous token if the accessToken has not expired yet
			if (Date.now() < token.accessTokenExpires) {
				spotifyApi.setAccessToken(token.accessToken);
				spotifyApi.setRefreshToken(token.refreshToken);
				console.log(
					"return previous token since the accessToken has not expired yet",
					spotifyApi
				);
				testLol.setVar =
					"changed in return previous token since the accessToken has not expired yet";
				return token;
			}

			//access token has expired, we will refresh it
			const res = await refreshAccessToken(token);
			console.log("access token was expired, we have refreshed it", spotifyApi);
			testLol.setVar =
				"changed in access token has expired, we will refresh it";
			return res;
		},

		async session({ session, token }) {
			session.user.accessToken = token.accessToken;
			session.user.refreshToken = token.refreshToken;
			session.user.username = token.username;

			return session;
		},
	},
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
