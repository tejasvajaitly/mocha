import SpotifyWebApi from "spotify-web-api-node";
const scopes = [
	"user-read-email",
	"playlist-read-private",
	"user-top-read",
].join(",");

const params = {
	scope: scopes,
};

const queryParamString = new URLSearchParams(params);

export const LOGIN_URL = `https://accounts.spotify.com/authorize?${queryParamString.toString()}`;

const spotifyApi = new SpotifyWebApi({
	clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
	clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
});

class Test {
	setVar(testVar) {
		this.testVar = testVar;
	}
}

export let testLol = new Test();

export default spotifyApi;
