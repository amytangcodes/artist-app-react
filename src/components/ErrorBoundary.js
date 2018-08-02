import React, { Component } from 'react'

class ErrorBoundary extends Component {
  render() {
    return (
      <p className="alert alert-warning">Oops! Something went wrong!</p>
    )
  }
}

export default ErrorBoundary;
