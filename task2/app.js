import express from "express";
const app = express();
const PORT = 3000;

app.get("/home", (req, res) => {
  res.send(`
    <html>
      <body>
        <h1 style="color: green;">Welcome to the Home Page</h1>
      </body>
    </html>
  `);
});
app.get("/about", (req, res) => {
  res.send("This is the about page .");
});
app.get("/students/:studentId", (req, res) => {
  const { studentId } = req.params;
  const { department } = req.query;

  res.json({
    studentId: studentId,
    department: department || "Not Specified",
    status: "Active",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
