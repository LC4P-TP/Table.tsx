import { useAppDispatch } from "../../redux/hooks";
import { logout } from "../../redux/slices/UserSlice/userSlice";
import "../main.scss";

function Home() {
  const dispatch = useAppDispatch();

  const handleLoout = () => {
    dispatch(logout());
  };

  return (
    <div className="main">
      <div className="home">
        <h1>Home</h1>
        <button type="submit" onClick={handleLoout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Home;
