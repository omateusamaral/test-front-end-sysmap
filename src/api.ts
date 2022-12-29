import axios from "axios";

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: Address;
  company: Company;
}
export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}
export interface Geo {
  lat: string;
  lng: string;
}
export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

function create() {
  return axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    timeout: 1000,
  });
}

export async function listUsers(): Promise<User[]> {
  const instance = create();

  try {
    const response = await instance.get("/users");
    return response.data;
  } catch (error) {
    throw error;
  }
}
