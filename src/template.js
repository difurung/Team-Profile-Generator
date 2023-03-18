function genHTMLInfo(empInfo) {
  let employeeHTML = "";
  for (let i = 0; i < empInfo.length; i++) {
    
        const genName = `<div class = "card row justify-space-between align-center py-3 bg-primary bg-gradient text-white"><h2>${empInfo[
          i
        ].getName()}</h2> </div>`;
        employeeHTML += genName;

        const genRole = `<div class="card row justify-space-between align-center py-3"><h3>Role: ${empInfo[
          i
        ].getRole()}</h3> </div>`;
        employeeHTML += genRole;

        const genId = `<div><h3>Employee ID: ${empInfo[i].getId()}</h3> </div>`;
        employeeHTML += genId;

        const genEmail = `<div><a href="mailto: ${empInfo[
        i
        ].getEmail()}"> Email the team Member</a></div>`;
        employeeHTML += genEmail;

        if (empInfo[i].officeNum !== undefined) {
        const genOfficeNum = `<div><p> Office #: ${empInfo[i].officeNum}</p></div>`;
        employeeHTML += genOfficeNum;
        } else if (empInfo[i].github !== undefined) {
        const genGithub = `<div><a href = "https://github.com/${empInfo[
            i
        ].getGithub()}" target = "_blank" rel="noopener noreferrer">Engineer's GitHub</a></div> `;
        employeeHTML += genGithub;
        } else if (empInfo[i].school !== undefined) {
        const genSchool = `<div><h3>School: ${empInfo[i].getSchool()}</h3></div>`;
        employeeHTML += genSchool;
        }
  }

  return employeeHTML;
}

function generateHTML(empInfo) {
  return `
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
    />
    <link rel
      ="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
      crossorigin="anonymous"
    />

    <link rel="stylesheet" href="assets/style.css" />
    <title>The Team</title>
  </head>
  <body>
    <nav class="nav">
    <header class= "header">
      <h1>The Team</h1>
    </header>
    </nav>
    <main class="d-flex">
    <div class="container-fluid align-center">
      <div class="row flex-center col-4 container-fluid align-center">
        ${genHTMLInfo(empInfo)}
      </div>
    </div>
  </main>  
  </body>
</html>`;
}

module.exports = { genHTMLInfo, generateHTML };