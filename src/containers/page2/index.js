import { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default class Page2 extends Component {
    render () {
        return (
            <div>
              <Helmet>
                <title>
                  Page 2
                </title>
              </Helmet>
                <h1>
                    Page 2
                </h1>

                <Link to={'/'}>
                    Go Back
                </Link>
            </div>
        );
    }
}