import { Link, Route } from 'react-router-dom';
import * as styles from './register.module.css';

export default function Login() {
  return (
    <div className={styles.body}>
      <div class={styles.container}>
        <div class={styles.title}>Login</div>
        <form action="#">
          <div class={styles.user_details}>
            <div class={styles.input_box}>
              <span class={styles.details}>Email</span>
              <input type="text" placeholder="Enter your email" required />
            </div>

            <div class={styles.input_box}>
              <span class={styles.details}>Password</span>
              <input type="text" placeholder="Enter your password" required />
            </div>
          </div>
          <Link to="/register">Create account</Link>
          <div class={styles.button}>
            <input type="Submit" value="Register" />
          </div>
        </form>
      </div>
    </div>
  );
}
