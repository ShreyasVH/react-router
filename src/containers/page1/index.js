import { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";


export default class Page1 extends Component {
    render () {
        return (
            <div>
              <Helmet>
                <title>
                  Page 1
                </title>
              </Helmet>
                <h1>
                    Page 1
                </h1>

                <Link to={'/'}>
                    Go Back
                </Link>
            </div>
        );
    }
}