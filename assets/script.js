const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

const rowEl = document.getElementById('row')
console.log(rowEl);

let member 
for (let i = 0; i < teamMembers.length; i++) {
  const element = teamMembers[i];
  console.log(member);  
}
const {name, role, email, img} = member
console.log(name, role, email);


rowEl.innerHTML = `                <div class="col">
                    <div class="d-flex gap-3 my-2 bg-dark co">
                        <img class="col-4" src="./assets/${img}" alt="">
                        <div class="col-7 text-light">
                            <h3 class="text-light">${name}</h3>
                            <p>${role}</p>
                            <p class="text-primary">${email}</p>
                        </div>
                    </div>
                </div>`


