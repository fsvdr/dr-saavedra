import readingTime from 'reading-time';

// Calculate the estimated reading time for the provided Portable Text structure
const readingTimeForPortableTextContent = (content) => {
  const text = content.reduce((acc, node) => {
    const nodeText = node.children.map((child) => child.text).join(' ');
    return `${acc} ${nodeText}`;
  }, '');

  const stats = readingTime(text);

  return Math.ceil(stats.minutes);
};

export default readingTimeForPortableTextContent;
