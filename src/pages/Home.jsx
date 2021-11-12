import { IoMdDocument } from "react-icons/io";
import { MdDashboard, MdRemoveRedEye } from "react-icons/md";
import "./home.css";
import banner from "../images/11.png";
import Particles from "react-tsparticles";
function Home() {
	return (
		<main class="dark:bg-gray-800 bg-white relative overflow-hidden h-screen">
			<div class="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
				<div class="container mx-auto px-6 flex relative py-16">
					<div class="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
						<span class="w-20 h-2 bg-gray-800 dark:bg-white mb-12"></span>
						<h1 class="font-bebas-neue uppercase text-3xl sm:text-2xl font-black flex flex-col leading-none dark:text-white text-gray-800 text-left">
							Discover, collect, and sell extraordinary
							<span class="text-5xl sm:text-7xl capitalize"> NFTs</span>
						</h1>
						<p class="text-sm sm:text-base text-gray-700 dark:text-white text-left ">
							on the world's first & largest NFT marketplace
						</p>
						<div class="flex mt-8">
							<a
								href="/products"
								class="uppercase py-2 px-6 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-600"
							>
								Explore
							</a>
							<a
								href="/create"
								class="uppercase py-2 px-6 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-600 hover:text-white text-md"
							>
								Create
							</a>
						</div>
					</div>
					<div class="hidden sm:block sm:w-2/3 lg:w-4/5 relative">
						<img src={banner} class=" md:max-w-lg m-auto" />
					</div>
				</div>
			</div>
		</main>

		// <div
		// 	style={{ height: "85vh" }}
		// 	className="text-5xl text-gray-900 flex flex-col sm:flex-row items-center gap-20 overflow-auto justify-around"
		// >
		// 	<div>
		// 		<div
		// 			id="button"
		// 			className="bg-gray-100 p-16 cursor-pointer rounded-3xl hover:bg-gray-400"
		// 		>
		// 			<IoMdDocument />
		// 		</div>

		// 		<p className="text-lg text-center mt-3 ">SELL PRODUCTS</p>
		// 	</div>
		// 	<div>
		// 		<div
		// 			id="button"
		// 			className="bg-gray-100 p-16 cursor-pointer rounded-3xl hover:bg-gray-200"
		// 		>
		// 			<MdRemoveRedEye />
		// 		</div>

		// 		<p className="text-lg text-center mt-3 ">BUY PRODUCTS</p>
		// 	</div>
		// </div>
	);
}

export default Home;
