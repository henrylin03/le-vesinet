const toTitleCase = (inputStr) =>
  inputStr
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.substring(1).toLowerCase())
    .join(" ");

export { toTitleCase };
