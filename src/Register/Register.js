import * as styles from './register.module.css';

export default function Register() {
  return (
    <div className={styles.body}>
      <div class={styles.container}>
        <div class={styles.title}>Registration</div>
        <form action="#">
          <div class={styles.user_details}>
            <div class={styles.input_box}>
              <span class={styles.details}>Full Name</span>
              <input type="text" placeholder="Enter your name" required />
            </div>
            <div class={styles.input_box}>
              <span class={styles.details}>Username</span>
              <input type="text" placeholder="Enter your username" required />
            </div>
            <div class={styles.input_box}>
              <span class={styles.details}>Email</span>
              <input type="text" placeholder="Enter your email" required />
            </div>
            <div class={styles.input_box}>
              <span class={styles.details}>Phone Number</span>
              <input type="text" placeholder="Enter your number" required />
            </div>
            <div class={styles.input_box}>
              <span class={styles.details}>Password</span>
              <input type="text" placeholder="Enter your password" required />
            </div>
            <div class={styles.input_box}>
              <span class={styles.details}>Confrim Password</span>
              <input type="text" placeholder="Confirm your password" required />
            </div>
          </div>
          <div class={styles.gender_details}>
            <input type="radio" name="gender" id="dot-1" />
            <input type="radio" name="gender" id="dot-2" />
            <input type="radio" name="gender" id="dot-3" />
            <span class={styles.gender_title}>Gender</span>
            <div class={styles.category}>
              <label for="dot-1">
                <span class={`${styles.dot} ${styles.three}`}></span>
                <span class={styles.gender}>Male</span>
              </label>
              <label for="dot-2">
                <span class="styles.dot styles.two"></span>
                <span class={styles.gender}>Female</span>
              </label>
              <label for="dot-3">
                <span class={`${styles.dot} ${styles.three}`}></span>
                <span class={styles.gender}>Prefer not to say </span>
              </label>
            </div>
          </div>
          <div class={styles.button}>
            <input type="Submit" value="Register" />
          </div>
        </form>
      </div>
    </div>
  );
}
