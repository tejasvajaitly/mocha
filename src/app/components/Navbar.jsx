import SeeMyStatsButton from "../components/SeeMyStatsButton";

const Navbar = () => {
	return (
		<nav className="bg-white border-[1px] border-slate-900/5">
			<div className="max-w-screen-md flex flex-wrap items-center justify-between mx-auto p-4 px-10">
				<a href="/" className="flex items-end">
					<span className="text-sm font-semibold whitespace-nowrap">mocha</span>
				</a>

				<SeeMyStatsButton />
			</div>
		</nav>
	);
};

export default Navbar;
