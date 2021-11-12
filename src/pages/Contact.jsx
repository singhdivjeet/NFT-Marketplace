import doodle from "../images/doodle.svg";
function Contact() {
	return (
		<>
			<div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-gray-100 dark:text-coolGray-100">
				<div className="flex flex-col justify-between">
					<div className="space-y-2">
						<h2 className="text-4xl font-bold leading-tight lg:text-5xl">
							Let's talk!
						</h2>
						<div className="dark:text-coolGray-400">
							Feel free to send a message.
						</div>
					</div>
					<img src={doodle} alt="" className="p-6 h-52 md:h-64" />
				</div>
				<form
					novalidate=""
					className="space-y-6 ng-untouched ng-pristine ng-valid"
				>
					<div>
						<label for="name" className="text-sm">
							Full name
						</label>
						<input
							id="name"
							type="text"
							placeholder=""
							className="w-full p-3 rounded dark:bg-coolGray-800"
						/>
					</div>
					<div>
						<label for="email" className="text-sm">
							Email
						</label>
						<input
							id="email"
							type="email"
							className="w-full p-3 rounded dark:bg-coolGray-800"
						/>
					</div>
					<div>
						<label for="message" className="text-sm">
							Message
						</label>
						<textarea
							id="message"
							rows="3"
							className="w-full p-3 rounded dark:bg-coolGray-800"
						></textarea>
					</div>
					<button
						type="submit"
						className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-indigo-600 hover:bg-indigo-800 text-white"
					>
						Send Message
					</button>
				</form>
			</div>
		</>
	);
}
export default Contact;
