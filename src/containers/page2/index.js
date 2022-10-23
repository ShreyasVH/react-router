import { Component } from "react";
import { Link } from "react-router-dom";

export default class Page2 extends Component {
    render () {
        return (
            <div>
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