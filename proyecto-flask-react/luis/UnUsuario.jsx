const  UnUsuario =() =>{

  return (
<div class="theBox">
        <div className="inside-box">
          <h2 className="text-2xl font-bold text-center mb-4">User Info</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className={styles.label}>
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={styles.input}
                placeholder={isAdminLogged() ? `${foundUser.username}` : `${currentUser.username}`}
              />
              {errors.username && <p className={styles.error}>{errors.username}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
                placeholder={isAdminLogged() ? `${foundUser.email}` : `${currentUser.email}`}
              />
              {errors.email && <p className={styles.error}>{errors.email}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="password" className={styles.label}>
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.input}
                placeholder={isAdminLogged() ? `${decryptPassword(foundUser.password)}` : `${decryptPassword(currentUser.password)}`}
              />
              {errors.password && <p className={styles.error}>{errors.password}</p>}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={styles.button}
            >
              Update Info
            </button>

          </form>
        </div>

      </div>

      );
};
export default UnUsuario;
