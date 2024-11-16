import { useLoaderData } from "react-router-dom";
import NewsCard from "../Components/NewsCard";


const CategoryNews = () => {
    const {data: news} = useLoaderData();
    
    // console.log(news)

    return (
        <div>
            <h2 className="font-semibold">Dragon News Home</h2>
            <p className="text-gray-400 mt-2"><small>{news?.length} news found in this category</small></p>

            <div>
                {
                    news?.map((singleNews) => (
                        <NewsCard key={singleNews._id} news={singleNews}></NewsCard>
                    ))
                }
            </div>
        </div>
    );
};

export default CategoryNews;