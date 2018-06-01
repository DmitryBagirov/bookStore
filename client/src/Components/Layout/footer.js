import React from 'react';
import { Segment, Container, Grid, Header, List, Divider, Image } from 'semantic-ui-react';
import {Link} from "react-router-dom";


export const Footer = () => (
    <Segment
        inverted
        vertical
        style={{ margin: '5em 0em 0em', padding: '5em 0em' }}
    >
        <Container textAlign='center'>
            <Divider inverted section />
            <Image
                centered
                size='mini'
                src='/logo.png'
            />
            <List horizontal inverted divided link>
                <List.Item><Link to="/books">Книги</Link></List.Item>
                <List.Item><Link to="/support">Поддержка</Link></List.Item>
                <List.Item><Link to="/about">О нас</Link></List.Item>
                <List.Item><Link to="/search">Поиск</Link></List.Item>
            </List>
        </Container>
    </Segment>
);