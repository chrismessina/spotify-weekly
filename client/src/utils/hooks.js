import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = () => {
	const [data, setData] = useState(null);
	const [axiosParams, setAxiosParams] = useState(null);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const fetchData = async () => {
		setIsLoading(true);
		try {
			const response = await axios(axiosParams);
			console.log("response", response);
			setData(response.data);
		} catch (err) {
			console.error(err.message);
			setError(err.message);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		if (axiosParams) {
			fetchData();
		}
	}, [axiosParams]);

	return { data, error, isLoading, setAxiosParams };
};
