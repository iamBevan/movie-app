import React, { useEffect, useState } from "react"
import axios from "axios"

const useFetch = () => {
	const [data, setData] = useState()
	useEffect(() => {
		// axios
		// .get(`https://api.opendota.com/api/players/${id}/recentMatches`)
		// .then(res => {
		// 	setData(res.data)
		// })

		const cleanup = () => {}

		return cleanup
	}, [])

	return data
}
