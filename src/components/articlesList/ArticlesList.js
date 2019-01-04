import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ArticleItem from "./ArticleItem";
import { MDBContainer } from "mdbreact";
import { getArticles } from "../../actions/articlesActions";
import { GET_ARTICLES } from "../../actions/types";

class ArticlesList extends Component {
  state = {
    articles: []
  };
  componentWillMount() {
    this.props.getArticles();
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.articles);
    this.setState({ articles: nextProps.articles.articles });
  }

  render() {
    console.log(this.state.articles);
    return (
      <MDBContainer className="my-5 pt-2 px-5 pb-5 container">
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          Recent posts
        </h2>

        {this.state.articles.map(article => {
          return <ArticleItem key={article.id} article={article} />;
        })}
      </MDBContainer>
    );
  }
}

const mapStateToProps = state => ({
  articles: state.articles
});

export default connect(
  mapStateToProps,
  { getArticles }
)(ArticlesList);
