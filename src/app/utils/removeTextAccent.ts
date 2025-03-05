export function removeTextAccent(text: string) {
  const normalizedText = text.normalize("NFD");

  return normalizedText.replace(/[\u0300-\u036f]/g, '');  // Accent characters range
}