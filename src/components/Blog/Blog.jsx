
import { FaBookmark  } from "react-icons/fa";

const Blog = ({blogData, handleAddToMark, handleMarkAsRead}) => {
    const {id,title,cover, author_img, author, posted_date, reading_time, hashtags} = blogData;
   
    return (
        <div className="mb-9">
            <img className=" w-full" src={cover} alt="" />

            <div className=" flex justify-between items-center">
                <div className="flex items-center py-3">
                    <div className=" mr-3">
                        <img className="w-12 ma" src={author_img} alt="" />
                    </div>
                    <div>
                        <h4>{author}</h4>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read </span>
                    <button onClick={()=> handleAddToMark(blogData)}><FaBookmark /></button>
                </div>
            </div>
            <h2 className=" text-2xl font-bold text-green-700">{title}</h2>

            <div>
                {
                    hashtags.map((hash, hashIndex) => <span className="mr-2 text-red-500" key={hashIndex}>{hash}</span>)
                }
            </div>
            <button onClick={()=> handleMarkAsRead(id,reading_time)} className=" mt-2 px-2 py-1 border-2 text-green-500">Mark as read</button>

        </div>
    );
};

export default Blog;