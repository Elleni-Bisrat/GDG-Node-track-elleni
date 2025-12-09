const http = require("http");

let students = [];
let currentId = 1;
const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/students") {
    return res.end(JSON.stringify(students));
  }
  if (req.method === "POST" && req.url === "/students") {
    let body = "elleni";

    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      const data = JSON.parse(body);
      const newStudent = { id: currentId++, name: data.name };
      students.push(newStudent);
      res.end(JSON.stringify(newStudent));
    });
    return;
  }
  if (req.method === "PUT" && Request.URL.startsWith("/students/")) {
    const id = parseInt(req.url.split("/")[2]);
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      const data = JSON.parse(body);
      const student = students.find((s) => s.id === id);
      if (!student) {
        res.statusCode = 404;
        return res.end(JSON.stringify({ message: "Student not found" }));
      }
      student.name = data.name;
      res.end(JSON.stringify(student));
    });
    return;
  }
  if(req.method === "DELETE" && req.url.startsWith("/students/")){
    const id = parseInt(req.url.split("/")[2]);
    const index = students.findIndex(s=>s.id === id);
    if(index === -1){
        res.statusCode = 404;
        return res.end(JSON.stringify({message:"student not found"}));
    }
    students.splice(index, 1);
    return res.end(JSON.stringify({message:"deleted successfully"}));
  }
   res.end(JSON.stringify({message:"Route not found"}));
});

server.listen(4000, () => {
  console.log("server running on port 4000");
});
