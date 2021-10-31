import React from 'react';
import { Link, withRouter, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ErrorBoundary.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
    };
  }

  componentDidMount() {
    const { history } = this.props;

    this.unlisten = history.listen(() => {
      const { error } = this.state;
      if (error) {
        this.setState({ error: null });
      }
    });
  }

  componentDidCatch(error) {
    this.setState({
      error,
    });
  }

  componentWillUnmount() {
    this.unlisten();
  }

  render() {
    const { error } = this.state;
    const { children } = this.props;
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
    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.element.isRequired,
  listen: PropTypes.func.isRequired,
  history: PropTypes.objectOf(Route).isRequired,
};

export default withRouter(ErrorBoundary);
