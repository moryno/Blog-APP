export const hardRefreshAndEmptyCache = async () => {
  if ("caches" in window) {
    try {
      const keys = await caches.keys();
      keys.forEach((key) => {
        // Delete all the cache files
        caches.delete(key);
      });
    } catch (error) {
      console.log(error);
    }
  }
  window.location.reload();
};

export const getCategoryName = (cat) => {
  if (!cat) return;
  let category = "";
  switch (cat) {
    case "general":
      category = "General";
      break;
    case "web-design":
      category = "Web Design";
      break;
    case "development":
      category = "Development";
      break;
    case "databases":
      category = "Databases";
      break;
    case "seo":
      category = "Search Engines";
      break;
    case "ai":
      category = "AI";
      break;

    default:
      break;
  }
  return category;
};
