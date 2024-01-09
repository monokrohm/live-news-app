import Article from "./Article";

type Props = {
  news: NewsResponse;
};

function NewsList({ news }: Props) {
  return (
    <div className="grid p-10 gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
      {news?.data.map((article) => (
        <Article key={article.title} article={article} />
      ))}
    </div>
  );
}

export default NewsList;
