function a(callback) {
  setTimeout(() => {
    console.log("a");
    callback();
  }, 2000);
}

function b(callback) {
  setTimeout(() => {
    console.log("b");
    callback();
  }, 1000);
}

function c(callback) {
  setTimeout(() => {
    console.log("c");
    callback();
  }, 500);
}

a(b(c()));
