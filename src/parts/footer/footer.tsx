import { useAppDispatch } from "../../redux/hooks";
import { logout } from "../../redux/slices/UserSlice/userSlice";
import "./footer.scss";

function Footer() {
  const dispatch = useAppDispatch();

  const handleLoout = () => {
    dispatch(logout());
  };

  return (
    <div className="footer">
      <h3>Foot</h3>
      <button type="submit" onClick={handleLoout}>
        Logout
      </button>
    </div>
  );
}

export default Footer;
