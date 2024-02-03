import MarkBlog from "../MarkBlog/MarkBlog";

const BookMarks = ({blogData, readingTime}) => {
    return (
        <div className="w-full md:w-1/3">

            <div>
                <h2 className="py-3 px-4 border rounded-sm mt-6 "> Spent time on read : {readingTime} min</h2>
                <h2 className="py-2 text-xl font-bold">BookMarks : {blogData.length}</h2>
                <div className=" bg-slate-200 p-4  m2-3 rounded-md ">
                    {
                      blogData.map((markData, markId) => <MarkBlog key={markId} markData={markData}></MarkBlog>)  
                    }
                </div>
            </div>
            
        </div>
    );
};

export default BookMarks;