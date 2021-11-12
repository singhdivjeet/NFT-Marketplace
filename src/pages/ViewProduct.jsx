import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import { RadioGroup } from "@headlessui/react";

const product = {
	name: "Cryptopunks",
	price: "$192",
	href: "#",
	breadcrumbs: [
		{ id: 1, name: "Home", href: "/" },
		{ id: 2, name: "Products", href: "/products" },
	],
	images: [
		{
			src: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/197265343/original/3948e7a3760383bd0700e9f5ed45a6bd2c281574/make-you-crypto-punk-character.jpg",
			alt: "Two each of gray, white, and black shirts laying flat.",
		},
		{
			src: "https://d7hftxdivxxvm.cloudfront.net/?resize_to=width&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FbMc5MLiwBlFOJrNZSRakWg%2Flarger.jpg&width=1200&quality=80",
			alt: "Model wearing plain black basic tee.",
		},
		{
			src: "https://publish.one37pm.net/wp-content/uploads/2021/02/EwKNWFRXIAA94V4.png?fit=600%2C600",
			alt: "Model wearing plain gray basic tee.",
		},
	],

	description:
		"The bundle of nine includes one CryptoPunk with a particularly rare trait: CryptoPunk 635, the one with the blue face and sunglasses, is one of just nine “alien” punks in the entire series. Another of the nine sold, CryptoPunk 2, the one with wild black hair that looks a bit like a heart, has the distinction of being number two out of a 10,000-work series.",
};
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function Example() {
	return (
		<div className="bg-white">
			<div className="">
				<nav aria-label="Breadcrumb">
					<ol
						role="list"
						className="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8"
					>
						{product.breadcrumbs.map((breadcrumb) => (
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
								href={product.href}
								aria-current="page"
								className="font-medium text-gray-500 hover:text-gray-600"
							>
								{product.name}
							</a>
						</li>
					</ol>
				</nav>

				{/* Image gallery */}
				<div className="mt-6 flex max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 ">
					<div className="w-11/12 rounded-lg overflow-hidden m-2 ">
						<img
							src={product.images[0].src}
							alt={product.images[0].alt}
							className="w-full h-full object-center object-cover"
						/>
					</div>

					<div className=" rounded-lg overflow-hidden m-2 ">
						<img
							src={product.images[1].src}
							alt={product.images[1].alt}
							className="w-full h-full object-center object-cover"
						/>
					</div>
					<div className=" rounded-lg overflow-hidden m-2 ">
						<img
							src={product.images[2].src}
							alt={product.images[2].alt}
							className="w-full h-full object-center object-cover"
						/>
					</div>
				</div>

				{/* Product info */}
				<div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
					<div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
						<h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
							{product.name}
						</h1>
					</div>

					{/* Options */}
					<div className="mt-4 lg:mt-0 lg:row-span-3">
						<h2 className="sr-only">Product information</h2>
						<p className="text-3xl text-gray-900">{product.price}</p>

						{/* Reviews */}
						<div className="mt-6">
							<h3 className="sr-only">Reviews</h3>
							<div className="flex items-center justify-center">
								<div className="flex items-center">
									{[0, 1, 2, 3, 4].map((rating) => (
										<StarIcon
											key={rating}
											className={classNames(
												reviews.average > rating
													? "text-gray-900"
													: "text-gray-200",
												"h-5 w-5 flex-shrink-0"
											)}
											aria-hidden="true"
										/>
									))}
								</div>
								<p className="sr-only">{reviews.average} out of 5 stars</p>
								<a
									href={reviews.href}
									className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
								>
									{reviews.totalCount} reviews
								</a>
							</div>
						</div>

						<form className="mt-10">
							<button
								type="submit"
								className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							>
								Add to bag
							</button>
						</form>
					</div>

					<div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
						{/* Description and details */}
						<div>
							<h3 className="sr-only">Description</h3>

							<div className="space-y-6">
								<p className="text-base text-gray-900">{product.description}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
