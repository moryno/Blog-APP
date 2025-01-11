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
