// @flow

import React from 'react';
import { Container, Content, Button, Text, H1 } from 'native-base';

export type Props = {
  moveToSetup: () => void
};

const Splash = ({ moveToSetup }: Props) =>
    <Container>
        <Content padder>
            <H1>You Know</H1>
            <Text>Keep track of your games.</Text>
            <Button block
                onPress={moveToSetup}>
                <Text>Begin</Text>
            </Button>
        </Content>
    </Container>;

export default Splash;
