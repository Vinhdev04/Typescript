// define enum

enum API_STATUS {
  PENDDING = "PENDDING",
  FULFILLED = "FULFILLED",
  REJECTED = "REJECTED",
}

enum SYSTEMS_LOG {
  WARM,
  BUG,
  INFO,
}

console.log("enum: ", API_STATUS);

// VALUE = INDEX[] ARRAYS
console.log("-----PENDDING: -----", API_STATUS.PENDDING); // PENDDING
console.log("-----FULFILLED: -----", API_STATUS.FULFILLED); // FULFILLED
console.log("-----REJECTED: -----", API_STATUS.REJECTED); // REJECTED

console.log("----WARM----", SYSTEMS_LOG.WARM); // 0
console.log("----BUG----", SYSTEMS_LOG.BUG); // 1
console.log("----INFO----", SYSTEMS_LOG.INFO); // 2

// using enum defined method
