import React from 'react';
import './article.css';
import Footer from '../../components/footer/Footer';
import AuthorizedHeader from '../../components/authorized-header/AuthorizedHeader';
import GoToMain from '../../components/navigation/GoToMain';
import ArticleLeft from '../../components/article-components/article-left/ArticleLeft';
import ArticleRight from '../../components/article-components/article-right/ArticleRight';
import ArticleDescription from '../../components/article-components/article-description/ArticleDescription';
import { ADV_PAGE, MY_ADV } from '../../constants/pagesConst';

const ArticlePage = ({ namePage }: Page) => {
  return (
    <div className="wrapper">
      <div className="container">
        <AuthorizedHeader />

        <main className="main-article">
          <div className="main-article__container">
            <GoToMain />
          </div>

          <div className="main-article__artic artic">
            <div className="artic__content article">
              <ArticleLeft />
              {namePage === ADV_PAGE && <ArticleRight namePage={ADV_PAGE} />}
              {namePage === MY_ADV && <ArticleRight namePage={MY_ADV} />}
            </div>
          </div>

          <ArticleDescription />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default ArticlePage;
