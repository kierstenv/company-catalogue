const renderManager = (manager) => {
  return `
  <div class="card">
    <div class="card-header">
      <h2 class="card-title">
        ${manager.name}
      </h2>
      ${manager.getRole()}
    </div>
    <div class="card-body">
      <ul class="list-group">
        <li class="list-group-item">ID: ${manager.id}</li>
        <li class="list-group-item">Email: ${manager.email}</li>
        <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
      </ul>
    </div>
  </div>
  `;
}

const renderEngineer = (engineer) => {
  return `
  <div class="card">
    <div class="card-header">
      <h2 class="card-title">
        ${engineer.name}
      </h2>
      ${engineer.getRole()}
    </div>
    <div class="card-body">
      <ul class="list-group">
        <li class="list-group-item">ID: ${engineer.id}</li>
        <li class="list-group-item">Email: ${engineer.email}</li>
        <li class="list-group-item">Github: ${engineer.github}</li>
      </ul>
    </div>
  </div>
  `;
}

const renderIntern = (intern) => {
  return `
  <div class="card">
    <div class="card-header">
      <h2 class="card-title">
        ${intern.name}
      </h2>
      ${intern.getRole()}
    </div>
    <div class="card-body">
      <ul class="list-group">
        <li class="list-group-item">ID: ${intern.id}</li>
        <li class="list-group-item">Email: ${intern.email}</li> 
        <li class="list-group-item">School: ${intern.school}</li>
      </ul>
    </div>
  </div>
  `;
}

const renderManagers = (managers) => {
  return managers.map(manager => renderManager(manager)).join('');
}

const renderEngineers = (engineers) => {
  return engineers.map(engineer => renderEngineer(engineer)).join('');
}

const renderInterns = (interns) => {
  return interns.map(intern => renderIntern(intern)).join('');
}  

function generateCatalogue(managers, engineers, interns) {
  return `
    <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./style.css" type="text/css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>Company Catalogue!</title>
      </head>
      <body>
        <header>
          <h1>Company Catalogue!</h1>
        </header>
        <main>          
        <div class="container">
          <div class="row">
            ${renderManagers(managers)}
            ${renderEngineers(engineers)}
            ${renderInterns(interns)}
          </div>
        </div>
        </main>
      </body>
      </html>
  `;
}

module.exports = generateCatalogue;