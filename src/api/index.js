const BASE_URL = 'https://pixabay.com/api/';

export const fetchPictures = async (searchQuery, page) => {
  const KEY = '34393844-3d650ec2647a1a66a6258bbe7';
  const perPage = 12;

  try {
    const response = await fetch(
      `${BASE_URL}?q=${searchQuery}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`
    );

    if (!response.ok) {
      throw new Error('Something went wrong');
    }

    const data = await response.json();
    console.log(data);
    return data.hits;
  } catch (error) {
    console.log(error);
    return [];
  }
};
