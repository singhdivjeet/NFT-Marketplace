const products = [
	{
		id: 1,
		name: "Cryptopunk #1",
		href: "/viewproduct",
		price: "$192",
		imageSrc:
			"https://lh3.googleusercontent.com/6MoJovRUvvHIbIqbm8L5jlJIM-K7ejHFiSsfaH5llXCCfBUaqDszWiiTPgdRcYJnuIxHV6RZu_X8m6fzKd2B0zo=w600",
		imageAlt:
			"Tall slender porcelain bottle with natural clay textured body and cork stopper.",
	},
	{
		id: 2,
		name: "Cryptopunk #2",
		href: "#",
		price: "$35",
		imageSrc:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQchq5DMyX1WTKGztEQ4XrcP9c2dEe3JZQm7N7Kpm-HAwrNyBb07N2X2ClPLweuzo8-LNE&usqp=CAU",
		imageAlt:
			"Olive drab green insulated bottle with flared screw lid and flat top.",
	},
	{
		id: 3,
		name: "Cryptopunk #3",
		href: "#",
		price: "$89",
		imageSrc: "https://www.larvalabs.com/cryptopunks/cryptopunk15.png",
		imageAlt:
			"Person using a pen to cross a task off a productivity paper card.",
	},
	{
		id: 4,
		name: "Cryptopunk #4",
		href: "#",
		price: "$35",
		imageSrc: "https://www.larvalabs.com/cryptopunks/cryptopunk315.png",
		imageAlt:
			"Hand holding black machined steel mechanical pencil with brass tip and top.",
	},
	// More products...
];
// const breadcrumbs = [{ id: 1, name: "Home", href: "/" }];

export default function Example() {
	async function fetchData() {
		// let response =
		await fetch("...url...", { method: "GET" })
			.then((res) => {
				// let products = res.data;
				// return products;
			})
			.catch((err) => console.log(err)); //fetch or axios
	}

	// const products = fetchData();

	return (
		<div className="bg-white">
			<div className="max-w-2xl mx-auto py-8 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-4">
				<h1 className="font-bold text-xl mb-8">COLLECTIONS</h1>
				{/* <nav aria-label="Breadcrumb">
					<ol
						role="list"
						className="max-w-2xl mx-auto px-4 mb-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8"
					>
						{breadcrumbs.map((breadcrumb) => (
							<li key={breadcrumb.id}>
								<div className="flex items-center">
									<a
										href={breadcrumb.href}
										className="mr-2 text-sm font-medium text-gray-900"
									>
										{breadcrumb.name}
									</a>
									<svg
										width={16}
										height={20}
										viewBox="0 0 16 20"
										fill="currentColor"
										xmlns="http://www.w3.org/2000/svg"
										aria-hidden="true"
										className="w-4 h-5 text-gray-300"
									>
										<path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
									</svg>
								</div>
							</li>
						))}
						<li className="text-sm">
							<a
								href={breadcrumbs.href}
								aria-current="page"
								className="font-medium text-gray-500 hover:text-gray-600"
							>
								{breadcrumbs.name}
							</a>
						</li>
					</ol>
				</nav> */}
				<div className="px-6 grid grid-cols-1 gap-y-10 sm:grid-cols-4 gap-x-8 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8">
					{products.map((product) => (
						<a key={product.id} href={product.href} className="group">
							<div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
								<img
									src={product.imageSrc}
									alt={product.imageAlt}
									className="w-full h-full object-center object-cover group-hover:opacity-75"
								/>
							</div>
							<h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
							<p className="mt-1 text-lg font-medium text-gray-900">
								{product.price}
							</p>
						</a>
					))}
				</div>
			</div>
		</div>
	);
}
