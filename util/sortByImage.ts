export default function sortByImage(news: NewsResponse){
    const withImage = news?.data.filter((item) => item.image!==null);
    const withoutImage = news?.data.filter((item) => item.image==null);

    if (withImage && withoutImage){
        const sortedResponse = {
            pagination: news?.pagination,
            data: [...withImage, ...withoutImage]
        }   

    return sortedResponse;
    }
}