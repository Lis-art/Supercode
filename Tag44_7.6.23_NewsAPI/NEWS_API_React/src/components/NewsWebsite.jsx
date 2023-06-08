

  import { useState, useEffect } from 'react';
  import { useParams } from 'react-router-dom';
  
  const NewsWebsite = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const { country } = useParams();
    const API_KEY = '9f9801e3642c482dad0d03be3fbe4e06';
  
    useEffect(() => {
      const fetchNews = async () => {
        try {
          setLoading(true);
          let url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${API_KEY}`;
          if (!country) {
            url = `https://newsapi.org/v2/everything?q=Apple&from=2023-06-07&sortBy=popularity&apiKey=${API_KEY}`;
          }
          const response = await fetch(url);
          const data = await response.json();
          setArticles(data.articles);
          console.log(data)
          setLoading(false);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchNews();
    }, [country]);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    return (
      <div>
        <h1>News</h1>
        <div>
          <h2>Articles</h2>
          {articles.map((article) => (
            <ArticleCard key={article.url} article={article} />
          ))}
        </div>
      </div>
    );
  };
  


  const ArticleCard = ({ article }) => {
    return (
      <div>
        <h3>{article.title}</h3>
        <p>{article.description}</p>
        <img src={article.urlToImage} alt={article.title} />
        <a href={article.url}>Read more</a>
      </div>
    );
  };  
  
  export default NewsWebsite;