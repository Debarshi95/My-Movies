import React from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import "./ErrorBoundary.css";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      errorInfo: null,
    };
  }

  componentDidMount() {
    const { history } = this.props;

    this.unlisten = history.listen(() => {
      if (this.state.error) {
        this.setState({ error: null });
      }
    });
  }

  componentWillUnmount() {
    this.unlisten();
  }
  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    const { error } = this.state;
    if (error) {
      return (
        <div className="errorBoundary">
          <h2>Ooops! some error occurred</h2>
          <Link to="/" className="errorBoundary__home">
            Home
          </Link>
        </div>
      );
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.element,
  history: PropTypes.object,
  listen: PropTypes.func,
};

export default withRouter(ErrorBoundary);
