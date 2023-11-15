import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spineer from './Spineer'
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {

    articles = []
    static defaultProps = {
        country: "in",
        pageSize: 15,
        category: 'general'
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }


    constructor(props) {
        super(props);
        this.state = {
            articles: [],//this.articles in []
            loading: false,
            page: 1,
            totalResults: 0
        }
        document.title = `${this.props.category}-Daily-INFO`;
    }
    async updatenews() {
        this.props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&sortBy=popularity&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        this.props.setProgress(30);
        let parseData = await data.json();
        this.props.setProgress(70);
        //console.log(parseData);
        this.setState({ articles: parseData.articles, totalResults: parseData.totalResults, loading: false })
        this.props.setProgress(100);
    }
    async componentDidMount() {
        this.updatenews();
    }
    prevclk = async () => {
        this.setState({ page: this.state.page - 1, })
        this.updatenews();
    }
    nextclk = async () => {
        this.setState({ page: this.state.page + 1, })
        this.updatenews();

    }
    fetchMoreData = async () => {
        this.setState({page: this.state.page+1})
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&sortBy=popularity&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        this.setState({ articles: this.state.articles.concat(parseData.articles), totalResults: parseData.totalResults, loading: false })
      };
    render() {
        return (
            <div style={{ backgroundColor: "#6f23db" }} >
        <div className="container my-3 " style={{ backgroundColor: "#6f23db" }} >
                    <h3 className="text-center" style={{ color: "#B0E0E6",marginTop: "60px" }}><strong><u>INFO-Daily... Top HeadLines </u></strong></h3>
                    <h4 className="text-center" style={{ color: "#B0E0E6" }}><strong><u>{this.props.category}</u></strong></h4>
                    {this.state.loading && <Spineer />}
                    <InfiniteScroll
                        dataLength={this.state.articles.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.articles.length!==this.state.totalResults}
                        loader= {<Spineer/>}
                    >
                        <div className="container">
                        <div className="row">
                            { this.state.articles.map((element) => {
                                {/*!this.state.loading && paste before this in this.state.articles.map((element)*/}            
                                return <div className="col-md-4" key={element.url}>
                                    <Newsitem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 90) : ""} photourl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                </div>
                            })}
                        </div>
                        </div>
                    </InfiniteScroll>
                    {/*<div className="row">

                        <div className="col-md-4">
                            <Newsitem title="Title-1" description="1st- Document" photourl="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg" />
                        </div>
                        <div className="col-md-4">
                            <Newsitem title="Title-2" description="2nd- Document" photourl="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg" />
                        </div>
                        <div className="col-md-4">
                            <Newsitem title="Title-3" description="3rd- Document" photourl="https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2018/06/apple-park1.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1" />
                        </div>
                    </div>*/}
                    {/*<div className="container d-flex justify-content-between">
                        <button disabled={this.state.page <= 1} type="button" className="btn btn-danger mx-3 mb-2" onClick={this.prevclk}>&larr; Previous</button>
                        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-danger mb-2" onClick={this.nextclk} >Next &rarr;</button>
                </div>*/}
                </div>

                </div>
        )
    }
}

export default News
