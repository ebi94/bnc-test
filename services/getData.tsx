import axios from 'axios';

const list = () => {
	
	return axios
		.get('https://private-2fff44-bncfetest.apiary-mock.com/movies')
		.then(response => {
			return { ...response };
		})
		.catch(function(error) {
			console.log('error', error);
		});
};

const detail = (id) => {

	return axios
        .get(`https://private-2fff44-bncfetest.apiary-mock.com/movies/${id}`)
		.then(response => {
			return { ...response };
		})
		.catch(function(error) {
			console.log('error', error);
		});
		
};

export {
	list,
	detail
};
