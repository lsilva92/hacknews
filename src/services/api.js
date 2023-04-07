import axios from 'axios';

export const getArchive = async (lang) => {
  try {
    const res = await axios({
      method: 'GET',
      url: `/v1/latest-news?apiKey=${process.env.REACT_APP_CURR_API_KEY}&language=${lang}`,
    });

    if (res.status === 200) return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCategories = async () => {
  try {
    const res = await axios({
      method: 'GET',
      url: '/v1/available/categories',
    });

    if (res.status === 200) return res.data;
  } catch (error) {
    console.log(error);
  }
};
