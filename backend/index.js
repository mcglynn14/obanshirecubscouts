import express from 'express';
import mysql from 'mysql';
import cors from 'cors'; // Import the CORS middleware
import bcrypt from 'bcryptjs';

const app = express();
app.use(express.json());
app.use(cors()); // Use the CORS middleware

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "obanshirecubscouts"
});

const saltRounds = 10; // Define the number of salt rounds

app.post('/register', (req, res) => {
    bcrypt.hash(req.body.password.toString(), saltRounds, (err, hash) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Error hashing password" });
        }
        const sql = "INSERT INTO users (name, email, password, usertype, phonenumber, dateofbirth, childagegroup) VALUES (?,?,?,?,?,?,?)";
        const values = [
            req.body.name,
            req.body.email,
            hash,
            req.body.usertype,
            req.body.phonenumber,
            req.body.dateofbirth,
            req.body.childagegroup
        ];
        db.query(sql, values, (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: "Error inserting into database" });
            }
            return res.json({ status: "Success" });
        });
    });
});

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM users WHERE email = ?";
    db.query(sql, [req.body.email], (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Login error in server" });
        }
        if (data.length > 0) {
            bcrypt.compare(req.body.password.toString(), data[0].password, (err, response) => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ error: "Password compare error" });
                }
                if (response) {
                    return res.json({ status: "Success" });
                } else {
                    return res.json({ error: "Password incorrect" });
                }
            });
        } else {
            return res.json({ error: "No user with that email" });
        }
    });
});

app.listen(8888, () => {
    console.log("running on port 8888");
});
