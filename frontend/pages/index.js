import { useState, useContext } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "../contexts/AuthContext";
import CircularProgress from "@mui/material/CircularProgress";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";

import styles from "../styles/Login.module.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { signIn, error } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = { username, password };
    signIn(payload, setLoading);
  };

  return (
    <div className={styles.formWrapper}>
      <h1>Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <TextField
          margin="normal"
          required
          fullWidth
          name="username"
          label="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        {error && (
          <Alert
            severity="error"
            fullWidth
            sx={{ marginTop: `4px`, marginBottom: `16px` }}
          >
            {error}
          </Alert>
        )}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="success"
          disabled={loading}
        >
          {loading ? <CircularProgress size={26} /> : `Login`}
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
