"use client";

import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { store } from "@/store/index";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function Providers({ children }) {
	return (
		<QueryClientProvider client={queryClient}>
			<SessionProvider>
				<Provider store={store}>
					<ThemeProvider attribute="class">{children}</ThemeProvider>
				</Provider>
			</SessionProvider>
		</QueryClientProvider>
	);
}
