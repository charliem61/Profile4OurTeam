function teamGen(data) {
  function manGen(manager) {
    return `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${manager.getRole()}</h5>
          <p class="card-text">${manager.name}</p>
          <p class="card-text">${manager.id}</p>
          <p class="card-text">${manager.email}</p>
          <p class="card-text">${manager.officeNumber}</p>
        </div>
      </div>`;
  }
  function intGen(interns) {
   const htmlIntern=  interns.map(function(intern){
          return `<div class="card" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title">${intern.getRole()}</h5>
                <p class="card-text">${intern.name}</p>
                <p class="card-text">${intern.id}</p>
                <p class="card-text">${intern.email}</p>
                <p class="card-text">${intern.school}</p>
              </div>
            </div>`;
      })
      return htmlIntern.join("")
  }
  function engGen(engineers) {
    const htmlEngineer=  engineers.map(function(engineer){

    return `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${engineer.getRole()}</h5>
          <p class="card-text">${engineer.name}</p>
          <p class="card-text">${engineer.id}</p>
          <p class="card-text">${engineer.email}</p>
          <p class="card-text">${engineer.officeNumber}</p>
        </div>
      </div>`;
    })
    return htmlEngineer.join("")
  }
  function filterTeam(team) {
    const newTeam = data.filter(function (individual) {
      return individual.getRole() === team;
    }); 
    return newTeam
  }

  return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        ${manGen(data[0])}
        ${intGen(filterTeam("Intern"))}
        ${engGen(filterTeam("Engineer"))}
    </body>
    </html>`;
}
module.exports=teamGen
