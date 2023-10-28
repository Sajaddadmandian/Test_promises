function Test() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { name: "Sajad", age: 25 };
      resolve(data);
    }, 2000);
  });
}

Test()
  .then((data) => {
    console.log("Data:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
