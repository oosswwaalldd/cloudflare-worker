// WORKING!
// addEventListener("fetch", event => {
	//   const data = {
		//     hello: "world"
		//   }
		//   const json = JSON.stringify(data, null, 2)
		
		//   return event.respondWith(
			//     new Response(json, {
				//       headers: {
			//         "content-type": "application/json;charset=UTF-8",
			// 				"Access-Control-Allow-Origin": "*"
			//       }
			//     })
			//   )
			// })
			
// Fetching a Google Sheet			
addEventListener("fetch", event => event.respondWith(handleRequest()))

const handleRequest = async () => {
	try {
		// Initialize the sheet - doc ID is the long id in the sheets URL
		const { GoogleSpreadsheet } = require('google-spreadsheet')
		const doc = new GoogleSpreadsheet('xxx')
		doc.useApiKey('xxx')
		// Loads document properties and worksheets
		await doc.loadInfo()
		console.log(doc)
		
		return new Response(doc, {
			headers: {
				"content-type": "application/json;charset=UTF-8",
				"Access-Control-Allow-Origin": "*"
			}
		})
	}catch(e) {
		console.log(`Error -> ${e.message}`)
	}
}