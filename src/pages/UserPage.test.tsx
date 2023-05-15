import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore, { MockStore } from "redux-mock-store";
import UserPage from "./UserPage";

jest.mock("../store/userSlice", () => ({
  getUserInfo: () => {
    return [];
  },
}));

const mockStore = configureStore([]);

describe("RegistrationPage test:", () => {
  let store: MockStore;

  beforeEach(() => {
    store = mockStore({
      user: {
        isLoading: false,
        userInfo: {
          first_name: "FirstName",
          last_name: "LastName",
          email: "test@example.com",
          is_verify_email: false,
          date_of_birthday: null,
          country: null,
          photo: null,
        },
        error: null,
      },
    });
    store.dispatch = jest.fn();
  });

  it("should check if dispatch can be called", () => {
    render(
      <Provider store={store}>
        <UserPage />
      </Provider>
    );
    expect(store.dispatch).toHaveBeenCalledWith([]);
  });

  it("should render user info when userInfo is present", () => {
    render(
      <Provider store={store}>
        <UserPage />
      </Provider>
    );
    expect(screen.getByText("first_name: FirstName")).toBeInTheDocument();
  });

  it("should render error message when error is present", () => {
    store = mockStore({
      user: {
        isLoading: false,
        userInfo: null,
        error: "Test error",
      },
    });
    store.dispatch = jest.fn();
    render(
      <Provider store={store}>
        <UserPage />
      </Provider>
    );
    expect(screen.getByText("Упс... Возникла ошибка")).toBeInTheDocument();
  });

  it("should render spinner when isLoading is true", () => {
    store = mockStore({
      user: {
        isLoading: true,
        userInfo: null,
        error: null,
      },
    });
    store.dispatch = jest.fn();
    render(
      <Provider store={store}>
        <UserPage />
      </Provider>
    );
    expect(screen.getByTestId("spinner")).toBeInTheDocument();
  });
});
