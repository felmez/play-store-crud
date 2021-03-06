import { gql } from '@apollo/client'

export const FETCH_APPS_QUERY = gql`
    {
        getApps{
            id
            name
            username
            body
            category
            createdAt
            reviewsCount
            reviews{
                id
                username
                body
                createdAt
            }
        }
    }
`;