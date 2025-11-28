// const pool = require('./backend/db');

// // CREATE ----------------------------------------------------
// async function createUser(name, email) {
//   try {
//     const result = await pool.query(
//       "INSERT INTO banks (name, email) VALUES ($1, $2) RETURNING *",
//       [name, email]
//     );
//     console.log("User berhasil dibuat:", result.rows[0]);
//   } catch (err) {
//     console.error("Error CREATE:", err);
//   }
// }

// // READ ALL ----------------------------------------------------
// async function getAllUsers() {
//   try {
//     const result = await pool.query("SELECT * FROM banks");
//     console.log("Semua user:", result.rows);
//   } catch (err) {
//     console.error("Error READ:", err);
//   }
// }

// // READ BY ID ----------------------------------------------------
// async function getUserById(id) {
//   try {
//     const result = await pool.query(
//       "SELECT * FROM banks WHERE id = $1",
//       [id]
//     );
//     console.log("User ditemukan:", result.rows[0]);
//   } catch (err) {
//     console.error("Error READ by ID:", err);
//   }
// }

// // UPDATE ----------------------------------------------------
// async function updateUser(id, name, email) {
//   try {
//     const result = await pool.query(
//       "UPDATE banks SET name = $1, email = $2 WHERE id = $3 RETURNING *",
//       [name, email, id]
//     );
//     console.log("User diupdate:", result.rows[0]);
//   } catch (err) {
//     console.error("Error UPDATE:", err);
//   }
// }

// // DELETE ----------------------------------------------------
// async function deleteUser(id) {
//   try {
//     const result = await pool.query(
//       "DELETE FROM banks WHERE id = $1 RETURNING *",
//       [id]
//     );
//     console.log("User dihapus:", result.rows[0]);
//   } catch (err) {
//     console.error("Error DELETE:", err);
//   }
// }

// // ==== Contoh pemanggilan (test) ====
// // createUser("Andi", "andi@gmail.com");
// // getAllUsers();
// // getUserById(1);
// // updateUser(1, "Andi Update", "andinew@gmail.com");
// // deleteUser(1);
