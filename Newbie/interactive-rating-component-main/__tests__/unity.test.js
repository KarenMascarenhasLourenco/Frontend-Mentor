const { JSDOM } = require("jsdom");
const fs = require("fs");
const path = require("path");

const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf8");

const dom = new JSDOM(html);

const ratingMenu = dom.window.document.getElementById("rating-menu");
const thanksCard = dom.window.document.getElementById("thanks-card");
const submit = dom.window.document.getElementById("submit");
const ratingOptions = dom.window.document.getElementById("rating-options");
const buttonStar = ratingOptions.querySelectorAll("button");

describe("Form tests", () => {
  test("The form must have a rating menu", () => {
    expect(ratingMenu).toBeDefined();
  });

  test("The form must have a thank you card", () => {
    expect(thanksCard).toBeDefined();
  });

  test("The form must have a submit button", () => {
    expect(submit).toBeDefined();
  });

  test("The form must work properly", () => {
    expect(ratingOptions).toBeDefined();
    expect(buttonStar.length).toBe(5);
  });

  test("Rating must work properly", () => {
    const button = buttonStar[2];
    button.click();
    expect(button.classList.contains("active")).toBeTruthy();
    expect(button.classList.contains("button-chosen")).toBeTruthy();
    expect(rating).toBeTruthy();
    expect(document.getElementById("feedback-rating").textContent).toBe(
      "You selected 3 out of 5"
    );
  });

  test("The form should be delivered correctly", () => {
    submit.click();
    expect(ratingMenu.getAttribute("aria-hidden")).toBe("true");
    expect(ratingMenu.classList.contains("display-section")).toBeTruthy();
    expect(thanksCard.getAttribute("aria-hidden")).toBe("false");
    expect(thanksCard.classList.contains("display-section")).toBeTruthy();
  });
});