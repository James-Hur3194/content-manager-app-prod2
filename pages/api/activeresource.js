import axios from "axios";


export default async function activeresource(req, res) {
  const axiosRes = await axios.get(`${process.env.API_URL}/activeresource`);
  const resource = axiosRes.data;

  return res.send(resource);
}