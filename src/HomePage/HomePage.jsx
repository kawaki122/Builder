import React from "react";
import { Link } from "react-router-dom";

import { userService } from "../services";

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      users: []
    };
  }

  componentDidMount() {
    this.setState({
      user: JSON.parse(localStorage.getItem("user")),
      users: { loading: true }
    });
    userService.getAll().then(users => this.setState({ users }));
  }

  render() {
    const { user, users } = this.state;
    return (
      <div className="col-md-6 col-md-offset-3">
        <h1>Hi {user.firstName}!</h1>
        <p>You're logged in as a super user!!</p>
        <h3>Users from secure api end point:</h3>
        {users.loading && <em>Loading users...</em>}
        {users.length && (
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">User</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id}>
                  <th scope="row">{user.id}</th>
                  <td>{user.firstName + " " + user.lastName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <p>
          <Link to="/login">Logout</Link>
        </p>
      </div>
    );
  }
}

export { HomePage };
