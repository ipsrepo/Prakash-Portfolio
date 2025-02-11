// Helper function to handle both bold (**bold**) and italic (*italic*) formatting
export const formatText = (text: string) => {
  // First, handle bold (**bold**) formatting
  const boldRegex = /\*(.*?)\*/g;
  text = text.replace(boldRegex, (match, p1) => `<strong>${p1}</strong>`);
  return text;
};
