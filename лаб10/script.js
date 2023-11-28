function findDates(text) {
  const dateRegex = /\b\d{4}-\d{2}-\d{2}\b/g;
  return text.match(dateRegex) || [];
}

function toCamelCase(snakeCase) {
  return snakeCase.replace(/_([a-z])/g, (_, char) => char.toUpperCase());
}

function toSnakeCase(camelCase) {
  return camelCase.replace(/[A-Z]/g, (char) => "_" + char.toLowerCase());
}

function findHexColor(text) {
  const hexColorRegex = /#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})\b/g;
  return text.match(hexColorRegex) || [];
}

const textWithDates = "Sample text with dates: 2023-01-15, 2023-02-28, 2023-12-01";
const dates = findDates(textWithDates);
displayResult("Dates found: " + dates.join(", "));

const snakeCaseName = "snake_case_variable";
const camelCaseName = toCamelCase(snakeCaseName);
displayResult("Converted to camelCase: " + camelCaseName);

const camelCaseName2 = "camelCaseVariable";
const snakeCaseName2 = toSnakeCase(camelCaseName2);
displayResult("Converted to snake_case: " + snakeCaseName2);

const textWithColor = "Colors: #abc, #123, #ABCD";
const hexColors = findHexColor(textWithColor);
displayResult("Hex Colors found: " + hexColors.join(", "));

function displayResult(result) {
  const resultContainer = document.getElementById("resultContainer");
  const resultElement = document.createElement("p");
  resultElement.textContent = result;
  resultContainer.appendChild(resultElement);
}
