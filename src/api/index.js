import axios from 'axios';

const DOG_URL='https://api.thedogapi.com/v1/breeds?limit=9&page=0'
const CAT_URL='https://api.thecatapi.com/v1/breeds?limit=9&page=0'

const fetchDogs = async () => {
    try {
        const response = await axios.get(DOG_URL);
        console.log(response.data);
        const data= await response.data;
        // console.log(data);
        if(response.status>=400){
            throw new Error(data.error)
        }
        return data
    
      } catch (error) {
        console.error(error);
      }
};



const fetchCats = async () => {
  //console.log("Api-----------")
    try {
        const response = await axios.get(CAT_URL);
        console.log(response.data);
        const data= await response.data;
        // console.log(data);
        if(response.status>=400){
            throw new Error(data.error)
        }
        return data
    
      } catch (error) {
        console.error(error);
      }
};
export { fetchDogs,fetchCats };
