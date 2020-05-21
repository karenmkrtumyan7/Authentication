import React, { Component } from 'react';
import { ErrorBoundaryComponent } from './ErrorBoundary.component';

class ErrorBoundaryContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
        }
    }

    componentDidCatch() {
        this.setState({ error: !this.state.error });
    }

    render() {
        const { error } = this.state;
        return error ? <ErrorBoundaryComponent /> : this.props.children;
    }
}

export { ErrorBoundaryContainer as ErrorBoundary }