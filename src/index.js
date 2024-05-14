/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
	async fetch(request, env, ctx) {
		const defaultOrigin = "https://www.shobhit92bhar.com/headers.php";
		const botOrigin = "https://httpbin.org/get"
		const botScore = request.cf.botManagement.score;
		if (botScore < 30)
		{
			const botRequest = new Request(botOrigin);
			let botResponse = await fetch(botRequest);
			return botResponse;
		}
		else {
			const normalRequest = new Request(defaultOrigin);
			let normalResponse = await fetch(normalResponse);
			return normalResponse;
		}
		/*return new Response('Hello World!');*/
	},
};
 