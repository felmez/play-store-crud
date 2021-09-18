import React, { useContext } from 'react'
import { Card, Icon, Label, Button, Image } from 'semantic-ui-react'
import moment from 'moment'
import { Link } from 'react-router-dom'

import { AuthContext } from '../context/auth'


export default function AppCard({ app: { id, username, body, createdAt, commentsCount } }) {
    const { user } = useContext(AuthContext);

    return (
        <Card>
            <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
            <Card.Content>
                <Card.Header>{username}</Card.Header>
                <Card.Meta as={Link} to={`/posts/${id}`}>{moment(createdAt).fromNow()}</Card.Meta>
                <Card.Description>
                    {body}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <a>
                    <Icon name='star' />
                    {commentsCount} Comments
                </a>
            </Card.Content>
        </Card>
    )
}