addEventListener("fetch", (event: FetchEvent) => {
	const data = {
		hello: "world"
	}
	return event.respondWith(
		new Response(JSON.stringify(data, null, 2), {
			headers: {
				"content-type": "application/json;charset=UTF-8",
				"Access-Control-Allow-Origin": "*"
			}
		})
	)
})