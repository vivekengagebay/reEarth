import { createContext } from "react";

export const GoEarth = createContext({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  setErrorMessage: () => {},
  setShowSuccessMessage: () => {},
  setIsLoading: () => {},
  isLoading: false,
  setUserDTO: () => {},
  userDTO: {},
});

export const setTimeoutError = function (parentContext, errorMessage) {
  console.log("error");
  parentContext.setErrorMessage(errorMessage);
  setTimeout(() => {
    parentContext.setErrorMessage("");
  }, 5000);
};

export const setTimeoutSuccess = function (parentContext, successMessage) {
  console.log("hello");
  parentContext.setShowSuccessMessage(successMessage);
  setTimeout(() => {
    parentContext.setShowSuccessMessage("");
  }, 5000);
};

export const isLoading = function () {};
