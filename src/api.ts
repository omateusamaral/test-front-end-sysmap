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

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
function createInstance() {
  return axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    timeout: 4000,
  });
}

export async function listUsers(): Promise<User[]> {
  try {
    const instance = createInstance();
    const response = await instance.get("/users");
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getUser(userId: string): Promise<User> {
  try {
    const instance = createInstance();
    const response = await instance.get(`/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function listPosts(): Promise<Post[]> {
  try {
    const instance = createInstance();
    const response = await instance.get("/posts");
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function listComments(postId: string): Promise<Comment[]> {
  try {
    const instance = createInstance();
    const response = await instance.get(`posts/${postId}/comments`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
