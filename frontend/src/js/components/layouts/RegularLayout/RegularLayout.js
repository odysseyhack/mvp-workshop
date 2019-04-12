import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

import './RegularLayout.css'
import TopMenu from '../../organisms/TopMenu/TopMenu';

class RegularLayout extends Component {
    render() {
        const { children } = this.props;
        return (
            <div>
                <TopMenu />
                <Container>
                    {children}
                </Container>
            </div>
        );
    }
}

export default RegularLayout;