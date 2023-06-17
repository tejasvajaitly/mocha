import { Tab } from "@headlessui/react";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function PeriodTabs({ data }) {
	return (
		<div className="w-full max-w-md px-2 py-16 sm:px-0">
			{console.log(data, "data")}
			{/* <Tab.Group>
				<Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
					{Object.keys(data.data.artists).map((category) => (
						<Tab
							key={category}
							className={({ selected }) =>
								classNames(
									"w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
									"ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
									selected
										? "bg-white shadow"
										: "text-blue-100 hover:bg-white/[0.12] hover:text-white"
								)
							}
						>
							{category}
						</Tab>
					))}
				</Tab.List>
				<Tab.Panels className="mt-2">
					{Object.values(data.data.artists).map((posts, idx) => (
						<Tab.Panel
							key={idx}
							className={classNames(
								"rounded-xl bg-white p-3",
								"ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
							)}
						>
							<ul>
								{posts.map((post) => (
									<li
										key={post.id}
										className="relative rounded-md p-3 hover:bg-gray-100"
									>
										<h3 className="text-sm font-medium leading-5">
											{post.name}
										</h3>

										<a
											href="#"
											className={classNames(
												"absolute inset-0 rounded-md",
												"ring-blue-400 focus:z-10 focus:outline-none focus:ring-2"
											)}
										/>
									</li>
								))}
							</ul>
						</Tab.Panel>
					))}
				</Tab.Panels>
			</Tab.Group> */}
		</div>
	);
}
