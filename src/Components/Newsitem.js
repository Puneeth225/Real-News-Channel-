import React, { Component } from 'react'
// here to change to function based in line 1 no need {component} and remove render() and remove line 3 and write const Newsitm = (props)=>{}, and remove this. in entire code and directly write props
export class Newsitem extends Component {

    render() {
        let { title, description, photourl, newsurl, author, date, source } = this.props;
        return (
            <div className='my-3' >
                <div className="card" >
                    
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-warning" style={{left:"90%",zIndex:"1",color:"black"}}>
                        {source}
                    </span>
                    
                    <img src={!photourl ? "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2018/06/apple-park1.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1" : photourl} className="card-img-top" alt="..." style={{ height: "200 px", width: "288 px" }} />
                    <div className="card-body">
                        <h5 className="card-title">{title}...{/*<span class="badge rounded-pill bg-info text-dark">New</span>*/}</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "Un-Known" : author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsurl} rel="noreferrer" target="_blank" className="btn btn-sm btn-warning">Explore More...</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Newsitem

//style={{left:"90%",zIndex:"1",color:"black"}}
