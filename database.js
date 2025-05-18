const Database = require('better-sqlite3');
const db = new Database('./journal.db');
// Run once to create tables
db.serialize(() => {
  // Users table
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE,
      role TEXT
    )
  `);

  // Journals table
  db.run(`
  CREATE TABLE IF NOT EXISTS journals (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    description TEXT,
    published_at TEXT,
    created_by TEXT,
    attachment TEXT,
    attachment_type TEXT
  )
`);


  // Join table: Journal ↔ Students
  db.run(`
    CREATE TABLE IF NOT EXISTS journal_students (
      journal_id INTEGER,
      student_name TEXT
    )
  `);
});

module.exports = db;
