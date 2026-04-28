function UserList({ users }) {
  if (users.length === 0) {
    return <p className="status">Nenhum usuário encontrado.</p>;
  }

  return (
    <div className="user-list">
      {users.map((user) => (
        <div key={user.id} className="user-card">
          <span className="user-name">{user.name}</span>
          <span className="user-email">{user.email.toLowerCase()}</span>
        </div>
      ))}
    </div>
  );
}

export default UserList;