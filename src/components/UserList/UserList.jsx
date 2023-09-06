function UserList({ users }) {
  return (
    <>
      <table className="table table-striped table-hover table-bordered my-3">
        <thead>
          <tr>
            <th>İsim</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody data-testid="users">
          {users.map((user, i) => {
            return (
              <tr key={i}>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default UserList;
