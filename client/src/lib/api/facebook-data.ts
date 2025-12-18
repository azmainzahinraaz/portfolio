import { FACEBOOK_API_URL } from "@/config/constants";
import axios from "axios";

export async function fetchFacebookVideos() {
  const data = await axios.get(FACEBOOK_API_URL);
  return data.data;
}
