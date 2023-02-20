import React from 'react';

class Hello extends React.Component {
    render() {
        return (
            <h1>{this.props.Title}</h1>
        );
    }
}

export default Hello;