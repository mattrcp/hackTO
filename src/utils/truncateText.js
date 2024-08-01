const truncateText = (text, maxLength) => {
  if (text.length <= 60) {
    return text;
  }
  return text.substring(0, maxLength) + "...";
};
export default truncateText;
