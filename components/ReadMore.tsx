"use client";

import { useRouter } from "next/navigation";

type Props = {
  article: DataEntry;
};

function ReadMore({ article }: Props) {
  const router = useRouter();

  const handleClick = () => {
    const queryString = Object.entries(article)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");

    console.log("asdsa", queryString);

    const url = `/article?${queryString}`;

    console.log(">>>", url);
    router.push(url);
  };

  return (
    <button
      onClick={handleClick}
      className="h-10 rounded-b-lg bg-[#F18000] dark:text-gray-900 hover:bg-[#F16900]"
    >
      ReadMore
    </button>
  );
}

export default ReadMore;
