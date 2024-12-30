export interface AppData {
  id: string;
  photo: string;
  title: string;
  size: string;
  dl: string;
  des: string;
  company: string;
  screen: string;
  author: string;
  category: string;
}

const SHEETS_API =
  "https://script.google.com/macros/s/AKfycbzyJMT7jTERQAWCXpETOSnbAOeQwYgIEPmWnVqkUCMwWFc0NIdsydXqJbJNs3aKbGh0/exec";

export async function fetchApps(): Promise<AppData[]> {
  try {
    const response = await fetch(SHEETS_API, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
      mode: "cors",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (!Array.isArray(data)) {
      console.error("Received non-array data:", data);
      return [];
    }

    return data.map((item: any, index: number) => ({
      id: String(index + 1),
      photo: String(item.photo || ""),
      title: String(item.title || ""),
      size: String(item.size || ""),
      dl: String(item.dl || ""),
      des: String(item.des || ""),
      company: String(item.company || ""),
      screen: String(item.screen || ""),
      author: String(item.author || ""),
      category: String(item.category || "Uncategorized"),
    }));
  } catch (error) {
    console.error("Error fetching apps:", error);
    return [];
  }
}

export function groupAppsByCategory(
  apps: AppData[],
): Record<string, AppData[]> {
  return apps.reduce(
    (acc, app) => {
      const category = app.category || "Uncategorized";
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(app);
      return acc;
    },
    {} as Record<string, AppData[]>,
  );
}
