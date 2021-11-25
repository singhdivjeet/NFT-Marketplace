import { React, useState, useEffect } from "react";
import cat from "../images/cat.png";

export default function Create() {
	const [body, setBody] = useState({});
	function onHandle({ target }) {
		setBody((prev) => ({ ...prev, [target.name]: target.value }));
	}

	console.log(body);
	async function onSubmit() {
		// let response =
		await fetch("...url...", { method: "POST", params: body })
			.then((res) => {})
			.catch((err) => console.log(err)); //fetch or axios

		console.log(body);
	}

	return (
		<>
			<div className="p-8 mb-10 z-10 h-screen">
				<div className="md:grid md:grid-cols-3 md:gap-6">
					<div className="md:col-span-1">
						<div className="px-4 sm:px-0">
							<h3 className="text-lg font-medium leading-6 text-gray-900">
								Sell your art!
							</h3>
							<p className="mt-1 text-sm text-gray-600">
								Fill the required information and enter the world of NFTs
							</p>
						</div>
						<div className="w-full flex justify-center">
							<img src={cat} />
						</div>
					</div>
					<div className="mt-5 md:mt-0 md:col-span-2">
						<div>
							<div className="bg-gray-50 sm:rounded-md sm:overflow-hidden">
								<div className="px-4 py-5  space-y-6 sm:p-6">
									<div className="flex">
										<div className="w-1/2 items-center flex sm:p-6">
											<label
												htmlFor="first-name"
												className="block w-1/4 text-sm font-medium text-gray-700"
											>
												First name
											</label>
											<input
												type="text"
												name="first-name"
												id="first-name"
												onChange={onHandle}
												autoComplete="given-name"
												className="mt-1 h-8 p-2 focus:ring-indigo-500 w-3/4 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
											/>
										</div>

										<div className="w-1/2  items-center  flex sm:p-6">
											<label
												htmlFor="last-name"
												className="block text-sm w-1/4 font-medium text-gray-700"
											>
												Last name
											</label>
											<input
												type="text"
												name="last-name"
												id="last-name"
												onChange={onHandle}
												autoComplete="family-name"
												className="mt-1 w-3/4 h-8 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
											/>
										</div>
									</div>
									<div className="flex">
										<div className="items-center text-left w-full flex sm:p-6">
											<label
												htmlFor="first-name"
												className="block w-1/4 text-sm font-medium text-gray-700"
											>
												Product name
											</label>
											<input
												type="text"
												name="first-name"
												onChange={onHandle}
												id="first-name"
												autoComplete="given-name"
												className="mt-1 h-8 p-2 focus:ring-indigo-500 w-3/4 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
											/>
										</div>
									</div>
									<div>
										<label
											htmlFor="about"
											className="block text-sm font-medium text-gray-700"
										>
											About
										</label>
										<div className="mt-1">
											<textarea
												id="about"
												name="about"
												onChange={onHandle}
												rows={3}
												className="shadow-sm focus:ring-pink-500 p-3 focus:border-pink-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
												placeholder="Rare 80's Superhero"
												defaultValue={""}
											/>
										</div>
										<p className="mt-2 text-sm text-gray-500">
											Brief description for your NFT.
										</p>
									</div>

									<div>
										<label className="block text-sm font-medium text-gray-700">
											Upload Art
										</label>
										<div className="mt-1 bg-white flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
											<div className="space-y-1 text-center">
												<svg
													className="mx-auto h-12 w-12 text-gray-400"
													stroke="currentColor"
													fill="none"
													viewBox="0 0 48 48"
													aria-hidden="true"
												>
													<path
														d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
														strokeWidth={2}
														strokeLinecap="round"
														strokeLinejoin="round"
													/>
												</svg>
												<div className="flex text-sm text-gray-600">
													<label
														htmlFor="file-upload"
														className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
													>
														<span>Upload a file</span>
														<input
															id="file-upload"
															name="file-upload"
															type="file"
															// onChange={onHandle}
															className="sr-only"
														/>
													</label>
													<p className="pl-1">or drag and drop</p>
												</div>
												<p className="text-xs text-gray-500">
													PNG, JPG, GIF up to 10MB
												</p>
											</div>
										</div>
									</div>
								</div>
								<div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
									<button
										type="submit"
										onClick={onSubmit}
										className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
									>
										Save
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
