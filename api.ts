import { IWish } from "./types/wishes";

const baseUrl= 'http://localhost:3001';




export const getAllWishes = async (): Promise<IWish[]>  => {
const res = await fetch (`${baseUrl}/wishes`);
const wishes = await res.json();
return wishes;
}