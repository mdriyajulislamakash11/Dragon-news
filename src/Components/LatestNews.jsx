import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
        <div className='flex text-2xl items-center gap-3 bg-base-200 p-2'>
            <p className='bg-[#D72050] text-base-100 px-4 py-2'>Latest</p>
            <Marquee pauseOnHover={true} speed={100} className='space-x-10'>
                <Link to="/news">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique ab quas enim laboriosam culpa fugit officia velit quod.
                </Link>
                <Link to="/news">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique ab quas enim laboriosam culpa fugit officia velit quod.
                </Link>
                <Link to="/news">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique ab quas enim laboriosam culpa fugit officia velit quod.
                </Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;