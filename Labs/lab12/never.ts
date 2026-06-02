/*
    never -> ko bao giờ return promise
    never -> đại diện cho các giá trị ko bao giờ xảy ra
*/

// defaul -> void
const handleException = (): void => {};

// return never
const handleExceptionNever = (errorMessage: string): never => {
  throw new Error(errorMessage);
};
// handleExceptionNever("Error!"); // errow
const log = handleException();
console.log("log", log); // undefined
