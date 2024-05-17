import { HttpResponse, http } from 'msw';

export const handlers = [
	http.get('http://localhost:3000', () => {
		return HttpResponse.text('MSW');
	}),
];
