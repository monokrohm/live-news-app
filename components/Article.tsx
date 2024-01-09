import LiveTimestamp from "./LiveTimestamp";
import ReadMore from "./ReadMore";

type Props = {
  article: DataEntry;
};

function Article({ article }: Props) {
  return (
    <article
      className="flex flex-col rounded-lg shadow-lg transition-all duration-200 ease-out bg-slate-100 
    dark:bg-slate-800 dark:hover:bg-slate-700 hover:bg-slate-200 hover:scale-105 hover:shadow-xl"
    >
      {article.image && (
        <img
          src={article.image}
          alt={article.title}
          className="object-cover h-56 w-full rounded-t-lg shadow-md"
        />
      )}

      <div className="flex flex-1 flex-col">
        <div className="flex flex-1 flex-col p-5">
          <h2 className="font-bold font-serif">{article.title}</h2>

          <div className="flex-1 mt-2">
            <p className="text-xs line-clamp-6">{article.description}</p>
          </div>

          <footer className="flex ml-auto pt-5 space-x-1 text-xs text-right text-gray-400 italic">
            <p>{article.source}</p>
            <p>
              <LiveTimestamp time={article.published_at} />
            </p>
          </footer>
        </div>
        <ReadMore article={article} />
      </div>
    </article>
  );
}

export default Article;
