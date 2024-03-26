// ข้อมูลนักศึกษาฝึกงาน
const interns = [
  {
    name: "Yanakorn",
    skills: ["การเขียนโปรแกรม", "การออกแบบกราฟิก"],
    image:
      "https://e7.pngegg.com/pngimages/312/562/png-clipart-student-job-gakuran-student-child-face.png",
  },
  {
    name: "Titlemath",
    skills: ["การตลาด", "การเขียน"],
    image:
      "https://png.pngtree.com/png-vector/20190114/ourmid/pngtree-blue-graduation-season-summer-vacation-cartoon-student-png-image_327899.jpg",
  },
];

// ข้อมูลผู้ประกอบการ
const companies = [
  {
    name: "LOREM IPSUM",
    position: "Web Developer",
    skills: ["การเขียนโปรแกรม", "การออกแบบกราฟิก", "การตลาด"],
    image:
      "https://png.pngtree.com/png-clipart/20230407/original/pngtree-app-devlopment-company-logo-png-image_9032619.png",
  },
  {
    name: "8PROP",
    position: "Marketing Intern",
    skills: ["การตลาด", "การเขียน"],
    image:
      "https://images.glints.com/unsafe/1200x0/glints-dashboard.s3.amazonaws.com/company-logo/26c8d95ef2039a29d1deaac4b6792045.png",
  },
];

// ฟังก์ชันแสดงรายชื่อนักศึกษาฝึกงาน
function showInterns() {
  const internsList = document.getElementById("interns");

  interns.forEach((intern) => {
    const internElement = document.createElement("div");
    internElement.classList.add("intern");

    internElement.innerHTML = `
      <h2>${intern.name}</h2>
      <img src="${intern.image}" alt="${intern.name}">
      <ul>
        ${intern.skills.map((skill) => `<li>${skill}</li>`).join("")}
      </ul>
      <h3>Matched Companies:</h3>
      <ul id="${intern.name.replace(/\s/g, "-")}-companies"></ul>
    `;

    internsList.appendChild(internElement);
    matchCompanies(intern);
  });
}

// ฟังก์ชันแสดงรายชื่อผู้ประกอบการ
function showCompanies() {
  const companiesList = document.getElementById("companies");

  companies.forEach((company) => {
    const companyElement = document.createElement("div");
    companyElement.classList.add("company");

    companyElement.innerHTML = `
      <h2>${company.name}</h2>
      <img src="${company.image}" alt="${company.name}">
      <h3>${company.position}</h3>
      <ul>
        ${company.skills.map((skill) => `<li>${skill}</li>`).join("")}
      </ul>
    `;

    companiesList.appendChild(companyElement);
  });
}

// ฟังก์ชันจับคู่นักศึกษากับผู้ประกอบการ
function matchCompanies(intern) {
  const internSkills = new Set(intern.skills);

  companies.forEach((company) => {
    const companySkills = new Set(company.skills);
    const intersection = [...internSkills].filter((skill) =>
      companySkills.has(skill)
    );

    if (intersection.length > 0) {
      const internCompanyList = document.getElementById(
        `${intern.name.replace(/\s/g, "-")}-companies`
      );
      const listItem = document.createElement("li");
      listItem.textContent = company.name;
      internCompanyList.appendChild(listItem);
    }
  });
}

document
  .getElementById("addInternForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // ไม่ให้ฟอร์มส่งข้อมูลแบบปกติ

    const internName = document.getElementById("internName").value;
    const internSkills = document
      .getElementById("internSkills")
      .value.split(",");
    const internImageURL = document.getElementById("internImageURL").value;

    // เพิ่มข้อมูลนักศึกษาฝึกงานใหม่เข้าไปในตัวแปร interns
    interns.push({
      name: internName,
      skills: internSkills,
      image: internImageURL,
    });
    // หลังจากล้างค่าในฟอร์ม
    document.getElementById("addInternForm").reset();

    // เรียกฟังก์ชัน showInterns() เพื่อแสดงรายชื่อนักศึกษาฝึกงานทั้งหมดรวมทั้งข้อมูลใหม่
    showInterns();
  });


showCompanies();
