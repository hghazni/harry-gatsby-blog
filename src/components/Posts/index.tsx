import React, { useState } from "react";
import { IPostsContent } from "./../../interfaces/data.interface";

import { FaList, FaGripVertical } from "react-icons/fa";
import LastContent from "./LastContent";
import OldContent from "./OldContent";
import scss from './Posts.module.scss';


export default ({ content }: { content: IPostsContent[] }) => {
  const [isUICol, setIsUICol] = useState<Boolean>(true)
  return (
    <>
      {/* <div id="ui-posts-selector">
        <div>
          <a onClick={() => setIsUICol(false)}>
            <FaList />
          </a>
          <a onClick={() => setIsUICol(true)}>
            <FaGripVertical />
          </a>
        </div>
      </div> */}
      <section className={scss.posts} id="posts">
        <LastContent content={content.slice(0, 8)} isUICol={isUICol} />
        {/* <OldContent content={content.slice(4)}  title={undefined} /> */}
      </section>
    </>
  )
}
