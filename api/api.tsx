export const DemoApi = async () => {
  try {
    const response = await fetch("https://randomuser.me/api/");
    return response.json();
  } catch (error) {}
};
