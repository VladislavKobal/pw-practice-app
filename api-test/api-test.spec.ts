import { test, expect } from "@playwright/test";
/*
test.describe.parallel("API Testing", () => {
  const baseUrl = "https://reqres.in/api";

  test("Simple API Test - Assert Response Status", async ({ request }) => {
    const response = await request.get(`${baseUrl}/users/3`);
    expect(response.status()).toBe(200);

    const responseBody = JSON.parse(await response.text());
    console.log(responseBody);
  });

  test("Simple API Test - Assert Invalid Endpoint", async ({ request }) => {
    const response = await request.get(
      `${baseUrl}/users/non-existing-endpoint`
    );
    expect(response.status()).toBe(404);
  });

  test("GET Request - Get User Detail", async ({ request }) => {
    const response = await request.get(`${baseUrl}/users/1`);
    const responseBody = JSON.parse(await response.text());

    expect(response.status()).toBe(200);
    expect(responseBody.data.id).toBe(1);
    expect(responseBody.data.first_name).toBe("George");
    expect(responseBody.data.last_name).toBe("Bluth");
    expect(responseBody.data.email).toBeTruthy();
  });

  test("POST Request - Create New User", async ({ request }) => {
    const response = await request.post(`${baseUrl}/user`, {
      data: {
        id: 1000,
      },
    });
    const responseBody = JSON.parse(await response.text());
    expect(responseBody.id).toBe(1000);
    expect(responseBody.createdAt).toBeTruthy();
  });

  test("POST Request - Login", async ({ request }) => {
    const response = await request.post(`${baseUrl}/login`, {
      data: {
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      },
    });
    const responseBody = JSON.parse(await response.text());
    expect(response.status()).toBe(200);
    console.log(response)
    expect(responseBody.token).toBeTruthy();
  });

  test("POST Request - Login Fail", async ({ request }) => {
    const response = await request.post(`${baseUrl}/login`, {
      data: {
        email: "eve.holt@reqres.in",
      },
    });
    const responseBody = JSON.parse(await response.text());
    expect(response.status()).toBe(400);
    expect(responseBody.error).toBe("Missing password");
  });

  test("PUT Request - Update User", async ({ request }) => {
    const response = await request.put(`${baseUrl}/users/2`, {
      data: {
        name: "new name",
        job: "new job",
      },
    });
    const responseBody = JSON.parse(await response.text());

    expect(response.status()).toBe(200);
    expect(responseBody.name).toBe("new name");
    expect(responseBody.job).toBe("new job");
    expect(responseBody.updatedAt).toBeTruthy();
  });

  test("DELETE Request - Delete User", async ({ request }) => {
    const response = await request.delete(`${baseUrl}/users/2`);
    expect(response.status()).toBe(204);
  });
});
*/
import { ApiPage } from "./api-modules";
import { HTTP } from "../page-object/helperBase";
import { data } from "../page-object/helperBase";

test.describe.parallel("API Testing", () => {
  const apiPage = new ApiPage(HTTP.baseUrl);

  test("Should get user detail", async ({ request }) => {
    const userId = 1;
    const response = await apiPage.getUsersDetail(request, userId);
    const responseBody = JSON.parse(await response.text());

    expect(response.status()).toBe(200);
    expect(responseBody.data.id).toBe(userId);
    expect(responseBody.data.first_name).toBe("George");
    expect(responseBody.data.last_name).toBe("Bluth");
    expect(responseBody.data.email).toBeTruthy();
  });

  test("Should create new user", async ({ request }) => {
    const userData = { id: 1000 };
    const response = await apiPage.createUser(request, userData);
    const responseBody = JSON.parse(await response.text());

    expect(responseBody.id).toBe(1000);
    expect(responseBody.createdAt).toBeTruthy();
  });

  test("Should login user", async ({ request }) => {
    const userData = {
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    };
    const response = await apiPage.loginWithUserData(request, userData);
    const responseBody = JSON.parse(await response.text());

    expect(response.status()).toBe(200);
    expect(responseBody.token).toBeTruthy();
  });

  test("Should failed login", async ({ request }) => {
    const userData = {
      email: "eve.bass@reqres.in",
      password: "1234",
    };
    const response = await apiPage.loginWithUserData(request, userData);
    const responseBody = JSON.parse(await response.text());

    expect(response.status()).toBe(400);
    expect(responseBody.error).toBe("Missing password");
  });

  test("Should update user info", async ({ request }) => {
    const userId = 3;
    const userData = {
      name: "new name",
      job: "new job",
    };
    const response = await apiPage.updateUserData(request, userId, userData);
    const responseBody = JSON.parse(await response.text());

    console.log(responseBody);

    expect(responseBody.name).toBe("new name");
    expect(responseBody.job).toBe("new job");
  });

  test("Should delete user", async ({ request }) => {
    const userId = 3;
    const response = await apiPage.deleteUserData(request, userId);
    const responseBody = JSON.parse(await response.text());
    console.log(responseBody);

    expect(response.status()).toBe(200);
  });
});
