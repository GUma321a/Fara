export const url = (path = '') => {
  const { href } = new URL(path, process.env.NEXT_PUBLIC_WEBSITE_URL);
  return href;
};
