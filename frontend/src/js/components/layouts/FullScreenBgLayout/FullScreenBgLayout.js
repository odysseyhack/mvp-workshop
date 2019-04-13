import React from 'react';
import './SplitLayout.css'
import { Container, Grid } from 'semantic-ui-react';

class SplitLayout extends React.Component {
    render() {
        return (
            <Container fluid className="containerBackground">
                <Container className="containerRegister">
                    <Grid stackable={true}>
                        <Grid.Row style={{padding: 0}}>
                            <Grid.Column width={8}>
                                {this.props.children[0]}
                            </Grid.Column>
                            <Grid.Column width={8}>
                                {this.props.children[1]}
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Container>
        );
    }
}

export default SplitLayout;