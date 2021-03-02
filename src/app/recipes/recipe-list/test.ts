async function loadNews(): Promise<News[]> {
  const response = await fetch('https://hit-like-button');
  const news: unknown = await response.json();
  return news as News[];
}

interface News {
  title: string;
  content: string;
}

function isArrayOfString(obj: unknown): obj is string[] {
  return Array.isArray(obj) && obj.every(isString);
}

function isString(obj: unknown): obj is string {
  return obj != null && typeof obj === 'string';
}

async function loadTitles(): Promise<string[]> {
  const response = await fetch('https://hit-like-button');
  const titles: unknown = await response.json();
  if (!isArrayOfString(titles)) {
    throw new TypeError('Received malformed titles API response');
  }
  return titles;
}


function getViews(numberOfViews: number) {
    if(!!numberOfViews) {
        // do something
    }
}
















