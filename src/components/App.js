import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList"


console.log(blogData);

function App() {
  const logo = blogData.logo;
  const text = blogData.about;
  const posts = blogData.posts
  
  return (
    <div className="App">
     <Header Name = {blogData.name} />
     <About Image = {logo} About = {text} />
     <ArticleList  posts = {posts}/>
    </div>
  );
}

export default App;
