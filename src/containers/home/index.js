import { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

export default class Home extends Component {
    render () {
        return (
            <div>
                <Helmet>
                    <title>
                        Home Page
                    </title>
                </Helmet>
                Home Page

                <ul>
                    <li>
                        <Link to={'/page1'} >
                            Page 1
                        </Link>
                    </li>
                    <li>
                        <Link to={'/page2'} >
                            Page 2
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
}