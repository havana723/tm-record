export const ratingColor = (rating: number) => {
  if (rating >= 2400) return "red";
  if (rating >= 2100) return "##ff8c00";
  if (rating >= 1900) return "#a0a";
  if (rating >= 1600) return "blue";
  if (rating >= 1400) return "#03a89e";
  if (rating >= 1200) return "green";
  return "gray";
};
