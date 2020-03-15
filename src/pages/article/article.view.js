import React, { useState, useEffect } from 'react'
import { Header } from '../../../lib/components/header';
import testArticle from '../../../public/md_output/1.mdo'
// import { default as axios } from 'axios'

export function ArticleView (props) {
  const [articleContent, setArticleContent] = useState('文档加载中')

  const articlecontentHtml = {
    __html: articleContent
  }

  useEffect(() => {})
    

  return <div className="article"> 
    <Header title='这是示例'></Header>
    <div className = "article-container" dangerouslySetInnerHTML={articlecontentHtml}></div>
  </div>
}