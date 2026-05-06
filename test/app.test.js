const test = require("node:test");
const assert = require("node:assert/strict");
const { getResponse } = require("../src/app");

test("GET / returns app running message", () => {
  const result = getResponse("/");

  assert.equal(result.statusCode, 200);
  assert.deepEqual(result.body, {
    message: "Node CI/CD practice app is running",
  });
});

test("GET /health returns ok status", () => {
  const result = getResponse("/health");

  assert.equal(result.statusCode, 200);
  assert.deepEqual(result.body, {
    status: "ok",
  });
});

test("unknown route returns 404", () => {
  const result = getResponse("/missing");

  assert.equal(result.statusCode, 404);
  assert.deepEqual(result.body, {
    error: "Not Found",
  });
});
