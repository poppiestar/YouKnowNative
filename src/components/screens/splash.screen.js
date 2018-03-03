// @flow

import React from 'react';
import { Container, Content, Button, Text, H1 } from 'native-base';

import type { Props } from '../../containers/splash.container';

const SplashScreen = ({ setupGame }: Props) =>
    <Container>
        <Content padder>
            <H1>You Know</H1>
            <Text>Keep track of your games.</Text>
            <Button block
                onPress={setupGame}>
                <Text>Begin</Text>
            </Button>
        </Content>
    </Container>;

export default SplashScreen;
