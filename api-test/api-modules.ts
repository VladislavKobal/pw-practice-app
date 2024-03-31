import { APIRequestContext } from "@playwright/test";
type data = {
  email: string;
  password: string;
};
export class ApiPage {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async getUsersDetail(request: APIRequestContext, userId: number) {
    const response = await request.get(`${this.baseUrl}/users/${userId}`);
    return response;
  }

  async createUser(request: APIRequestContext, userData: data) {
    const response = await request.post(`${this.baseUrl}/user`, {
      data: userData,
    });
    return response;
  }
  async loginWithUserData(request: APIRequestContext, userData: data) {
    return request.post(`${this.baseUrl}/login`, {
      data: userData,
    });
  }
  async insertFakerData(request: APIRequestContext, userData: data) {
    const response = await request.post(`${this.baseUrl}/login`, {
      data: userData,
    });
    return response;
  }
  async updateUserData(
    request: APIRequestContext,
    userId: number,
    userData: data
  ) {
    const response = await request.post(`${this.baseUrl}/users/${userId}`, {
      data: userData,
    });
    return response;
  }
  async deleteUserData(request: APIRequestContext, userId: number) {
    const response = await request.get(`${this.baseUrl}/users/${userId}`);
    return response;
  }
}
