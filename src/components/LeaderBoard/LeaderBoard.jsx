import { useLoaderData } from "react-router";

const LeaderBoard = () => {
  const users = useLoaderData();
  return (
    <>
      <h1>Leader board</h1>
      <table className="table-auto border-collapse border border-gray-400 bg-white">
        <thead>
          <tr>
            <th className="px-4 py-3 border border-gray-300">No</th>
            <th className="px-4 py-3 border border-gray-300">User</th>
            <th className="px-4 py-3 border border-gray-300">Time (minutes)</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 &&
            users.map((user, index) => (
              <tr key={user.id}>
                <td className="px-4 py-3 border border-gray-300">{index}</td>
                <td className="px-4 py-3 border border-gray-300">{user.User.name}</td>
                <td className="px-4 py-3 border border-gray-300">{user.duration}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default LeaderBoard;
