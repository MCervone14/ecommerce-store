import { Color } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

const GetColors = async (): Promise<Color[]> => {
  const res = await fetch(URL);
  const data = await res.json();

  return data;
};

export default GetColors;
