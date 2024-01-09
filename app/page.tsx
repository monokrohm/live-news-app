import NewsList from "@/components/NewsList";
import { categories } from "@/util/constants";
import fetchNews from "@/util/fetchNews";

async function Home() {
  // Fetch news data
  const news: NewsResponse = await fetchNews(categories.join(","));

  // console.log(news);

  return (
    <main>
      <NewsList news={news} />
    </main>
  );
}

export default Home;

// stepzen import curl "http://api.mediastack.com/v1/news?access_key="
