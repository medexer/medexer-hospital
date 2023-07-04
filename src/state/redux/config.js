import axios from 'axios'
import { decode } from 'html-entities';


let USERFROMLS = localStorage.getItem('mdx-dnt-center') ? JSON.parse(localStorage.getItem('mdx-dnt-center')) : null

const instance = axios.create({
	baseURL: import.meta.env.VITE_APP_DEV_API,
	headers: {
		'Content-Type': 'application/json',
		// 'Access-Control-Allow-Origin': '*'
	},
})

instance.interceptors.request.use(
	(req) => {
		USERFROMLS = localStorage.getItem('mdx-dnt-center') ? JSON.parse(localStorage.getItem('mdx-dnt-center')) : null
		if (USERFROMLS) {
			console.log(USERFROMLS)
			req.headers['Authorization'] = `${USERFROMLS.access}`;
		}
		return req;
	},
	(error) => {
		return Promise.reject(error);
	}
);

instance.interceptors.response.use(
	(res) => {
		const test = decode(JSON.stringify(res));
		return JSON.parse(test);
	},
	async (err) => {
		const originalConfig = err.config;

		if (err.response) {
			console.log(err.response)
			if (err.response.status === 401) {
				try {
					const body = {
						access: USERFROMLS.access,
						refresh: USERFROMLS.refresh,
					}

					const { data } = await API.post('/auth/refresh-token', body);
					console.log(data)
					const accessToken = data?.access ? data?.access : null;

					if (accessToken != null) {
						localStorage.removeItem('mdx-dnt-center');
						localStorage.setItem('mdx-dnt-center', JSON.stringify({ ...USERFROMLS, access: data.data.accessToken }));
						instance.defaults.headers.common[
							'Authorization'
						] = `Bearer ${accessToken}`;

					}
					return instance(originalConfig);
				} catch (_error) {
					console.log(_error.response)
					if (_error.response.status === 401) {
						alert('Session expired. Please login again!');
						window.location.href = '/'
						localStorage.removeItem('mdx-dnt-center');
						window.location.reload();
						return Promise.reject(_error.response.data);
					}
					return Promise.reject(_error);
				}
			}
		}

		return Promise.reject(err);
	}
);

export const API = instance