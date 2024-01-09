import LiveTimestamp from "@/components/LiveTimestamp";
import { notFound } from "next/navigation";

type Props = {
  searchParams?: DataEntry;
};

function ArticlePage({ searchParams }: Props) {
  if (
    (searchParams && Object.entries(searchParams).length === 0) ||
    !searchParams
  ) {
    return notFound();
  }

  const article: DataEntry = searchParams;

  return (
    <article>
      <section className="flex flex-col px-0 pb-24 lg:flex-row lg:px-10">
        {article.image && (
          <img
            className="object-cover mx-auto h-50 max-w-md md:max-w-lg lg:max-w-xl rounded-lg shadow-md"
            src={article.image}
            alt={article.title}
          />
        )}

        <div className="px-10">
          <h1 className="headerTitle pb-2 px-0 ">{article.title}</h1>

          <div className="flex divide-x-2 space-x-4">
            <h2 className="font-bold">
              By: {article.author == "null" ? "unknown" : article.author}
            </h2>
            <h2 className="font-bold pl-4">Source: {article.source}</h2>
            <p className="pl-4">
              <LiveTimestamp time={article.published_at} />
            </p>
          </div>

          <p>{article.description}</p>
        </div>
      </section>
    </article>
  );
}

export default ArticlePage;
