function generate(employeeInfo) {
    let employeeHTML = '';
    for ( let i = 0; i < employeeInfo.length; i++) {
        const genName = `<div class = 'top'><h2>${employeeInfo[i].getName()}</h2> </div>`;
        employeeHTML += genName;

        const genRole = `<div><h3>Role: ${employeeInfo[i].getRole()}</h3> </div>`;
        employeeHTML += genRole;

        const genId = `<div><h3>Employee ID:${employeeInfo[i].getRole()}</h3> </div>`;
        employeeHTML += genId;
       
        const genEmail = `<div><a href="mailto:${employeeInfo[i].getEmail()}"> Email the team Member</a></div>`;
        employeeHTML += genEmail;

        if (employeeInfo[i].officeNum !== undefined) {
            const genOfficeNum = `<div><p> Office #: ${employeeInfo[i].officeNum}</p></div>`;
            employeeHTML += genOfficeNum;
        } else if (employeeInfo[i].github !== undefined){
            const genGithub = `<div><a href = "https://github.com/${employeeInfo[i].getGithub()}" target = "_blank" rel="noopener noreferrer">Link to engineer's GitHub</a></div> `;
            employeeHTML += genGithub;
        } else if (employeeInfo[i].school !== undefined) {
            const genSchool = `<div><p>School: ${employeeInfo[i].getSchool()}</p></div>`;
             employeeHTML += genSchool;
        }


    }
    return employeeHTML
}

function generateHTML(employeeInfo) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
        <title>My Team</title>
    </head>
    <body>
        <header>
        <h1>My Team</h1>
        </header>
        <div>
    ${generate(employeeInfo)}
        </div>
    </body>
    </html> `;
}

module.exports = { generate, generateHTML };