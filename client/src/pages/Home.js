import React from 'react'
import { useQuery } from '@apollo/client';
import { Grid, Transition, Container } from 'semantic-ui-react'

import { FETCH_APPS_QUERY } from '../util/GraphQL';
import AppCard from '../components/AppCard'

export default function Home() {
    const { loading, data: { getApps: apps } = {} } = useQuery(FETCH_APPS_QUERY);

    return (
        <Container>
            <Grid columns={6}>
                <Grid.Row className="page-title">
                    <h1>Top selling movies</h1>
                </Grid.Row>
                <Grid.Row>
                    {loading ? (
                        <h1>Loading apps...</h1>
                    ) : (
                        <Transition.Group>
                            {
                                apps &&
                                apps.map((app) => (
                                    <Grid.Column key={app.id} style={{ marginBottom: 20 }}>
                                        <AppCard app={app} />
                                    </Grid.Column>
                                ))
                            }
                        </Transition.Group>
                    )}
                </Grid.Row>
            </Grid>
        </Container>
    )
}
