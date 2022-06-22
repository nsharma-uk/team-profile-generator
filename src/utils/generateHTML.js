//manager card
const generateManagerCard = (managers) => {
  const createManager = (manager) => {
    const managerCard = `<div class="card m-5 bg-info shadow mb-5 bg-body rounded">
    <div class="card-header text-center text-muted bg-info">
      <i class="fa-solid fa-mug-hot fa-3x"></i>
      <h3 class="p-2">Manager</h3>
    </div>
    <div class="card-body">
      <h4 class="card-title text-center pb-3 pt-2">${manager.name}</h4>
      <ul class="list-group mx-3 mb-3 list-group-flush">
        <li class="list-group-item fw-bold">
          Employee ID: <span class="fw-normal">${manager.id}</span>
        </li>
        <li class="list-group-item fw-bold">
          Office Number: <span class="fw-normal">${manager.office}</span>
        </li>
        <li class="list-group-item fw-bold">
          Email:
          <span class="fw-normal"
            ><a href="mailto: manager@email.com">${manager.email}</a></span
          >
        </li>
      </ul>
      
    </div>
  </div>`;
    return managerCard;
  };
  return managers.map(createManager).join("");
};

//engineer card
const generateEngineerCard = (engineers) => {
  const createEngineer = (engineer) => {
    const engineerCard = `<div class="card m-5 shadow mb-5 bg-body rounded">
    <div class="card-header text-center text-muted bg-info">
      <i class="fa-solid fa-gears fa-3x"></i>
      <h3 class="p-2">Engineer</h3>
    </div>
    <div class="card-body">
      <h4 class="card-title text-center pb-3 pt-2">${engineer.name}</h4>
      <ul class="list-group mx-3 mb-3 list-group-flush">
        <li class="list-group-item fw-bold">
          Employee ID: <span class="fw-normal">${engineer.id}</span>
        </li>
        <li class="list-group-item fw-bold">
          GitHub:
          <span class="fw-normal"
            ><a href="https://www.github.com/${engineer.github}" target="_blank"
              >${engineer.github}</a
            ></span
          >
        </li>
        <li class="list-group-item fw-bold">
          Email:
          <span class="fw-normal"
            ><a href="mailto: test@mail.com">${engineer.email}</a></span
          >
        </li>
      </ul>
    </div>
  </div>`;
    return engineerCard;
  };
  return engineers.map(createEngineer).join("");
};

// //intern card
const generateInternCard = (interns) => {
  const createIntern = (intern) => {
    const internCard = `<div class="card m-5 shadow mb-5 bg-body rounded">
    <div class="card-header text-center text-muted bg-info">
      <i class="fa-solid fa-graduation-cap fa-3x"></i>
      <h3 class="p-2">Intern</h3>
    </div>
    <div class="card-body">
      <h4 class="card-title text-center pb-3 pt-2">${intern.name}</h4>
      <ul class="list-group mx-3 mb-3 list-group-flush">
        <li class="list-group-item fw-bold">
          Employee ID: <span class="fw-normal">${intern.id}</span>
        </li>
        <li class="list-group-item fw-bold">
          School: <span class="fw-normal">${intern.school}</span>
        </li>
        <li class="list-group-item fw-bold">
          Email:
          <span class="fw-normal"
            ><a href="mailto:${intern.email}">${intern.email}</a></span
          >
        </li>
      </ul>
    </div>
  </div>`;
    return internCard;
  };
  return interns.map(createIntern).join("");
};

const generateHtml = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Team Profile</title>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
      integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0"
      crossorigin="anonymous"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="./dist/assets/css/styles.css" />
  </head>
  <body>
    <header class="p-4 mb-6 bg-info text-center text-muted">
      <h1>My team</h1>
    </header>
    <main class="d-flex justify-content-around flex-wrap mt-5 m-2">
${generateManagerCard}
${generateEngineerCard}
${generateInternCard}
  </main>
    <div class="footer-link-item">
        <a class="social-icon" href="mailto:nsharmauk711@gmail.com" target="_blank">
          <ion-icon name="mail-outline"></ion-icon>
          </a>
          <a class="social-icon" href="https://twitter.com/nsharmauk" target="_blank">
            <ion-icon name="logo-twitter"></ion-icon>
            </a>
          <a class="social-icon" href="https://github.com/nsharma-uk" target="_blank">
        <ion-icon name="logo-github"></ion-icon>
        </a>
      </div>
    </div>
    <p class="has-text-white pb-3">Copyright &copy; 2022</p>
  </div>
</footer>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
      crossorigin="anonymous"
    ></script>
  </body>
</html>`;

module.exports = generateHtml;
