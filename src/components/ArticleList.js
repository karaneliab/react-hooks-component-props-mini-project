import React from "react";
import Article from "./Article"

function ArticleList({posts}){
    if(!Array.isArray(posts)){
        console.log("Expected am array")
        return null;
    }
    return (

        <main>
           {posts.map((article) => (
            <Article key = {article.id} title={article.title} Date={article.date} Preview={article.preview} min={article.minutes}/>
           ))} 
     </main>
    )

}
export default ArticleList;
