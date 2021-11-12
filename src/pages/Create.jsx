export default function Create() {
	return (
		<>
			<div className="p-8">
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
					</div>
					<div className="mt-5 md:mt-0 md:col-span-2">
						<form action="#" method="POST">
							<div className="shadow-lg sm:rounded-md sm:overflow-hidden">
								<div className="px-4 py-5 bg-white space-y-6 sm:p-6">
									<div className="flex">
										<div className="w-1/2  px-4 py-5 bg-white sm:p-6">
											<label
												htmlFor="first-name"
												className="block text-sm font-medium text-gray-700"
											>
												First name
											</label>
											<input
												type="text"
												name="first-name"
												id="first-name"
												autoComplete="given-name"
												className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
											/>
										</div>

										<div className="w-1/2  px-4 py-5 bg-white sm:p-6">
											<label
												htmlFor="last-name"
												className="block text-sm font-medium text-gray-700"
											>
												Last name
											</label>
											<input
												type="text"
												name="last-name"
												id="last-name"
												autoComplete="family-name"
												className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
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
												rows={3}
												className="shadow-sm focus:ring-pink-500 focus:border-pink-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
												placeholder=" Rare 80's Superhero"
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
										<div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
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
										className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
									>
										Save
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}
