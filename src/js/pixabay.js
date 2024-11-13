const BASE_URL = 'https://pixabay.com';

export const fetchPhotos = query => {

    const urlParams = new URLSearchParams({
        key: '46898279-65d5dcdd2fa29fc168f36b5dd',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true
    }) 

    console.log(urlParams.toString());

   return fetch(`${BASE_URL}/api/?${urlParams}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
        
            return response.json();
        })
};

