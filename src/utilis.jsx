import { createContext } from "react";

 export const GoEarth = createContext({
    isLoggedIn: false,
     setIsLoggedIn:() => {} ,
      setErrorMessage: () => {},
      setShowSuccessMessage:() => {},
      setIsLoading:() => {},
      isLoading: false,

 })
 
 
 
 export const setTimeoutError = function (parentContext, errorMessage) {
    console.log("error");
    parentContext.setErrorMessage(errorMessage)
    setTimeout(() => {
        parentContext.setErrorMessage("")
    }, 10000);
 }

 export const setTimeoutSuccess = function (parentContext, successMessage) {
    console.log("hello");
    parentContext.setShowSuccessMessage(successMessage)
    setTimeout(() => {
        parentContext.setShowSuccessMessage("")
    }, 10000);
 }

 export const isLoading = function() {

 }

