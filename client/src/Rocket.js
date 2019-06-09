import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      mission_name
    }
  }
`;
export class Rocket extends Component {
  render() {
    return (
      <div>
        <Query query={LAUNCHES_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading</p>;
            if (error) return <p>Error</p>;
            else {
              return (
                <ul>
                  {data.launches.map((launch,ind) => {
                    return <li key = {ind}>{launch.mission_name}</li>;
                  })}
                </ul>
              );
            }
          }}
        </Query>
      </div>
    );
  }
}

export default Rocket;
