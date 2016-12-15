import axios from 'axios';

const uri = `${process.env.PUBLIC_URL}/data/`;

// For the prototype: get the json data
export const searchNearbyDoctors = () => axios.get(`${uri}nearby_doctors.json`);
