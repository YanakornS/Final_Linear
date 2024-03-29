// ข้อมูลนักศึกษาฝึกงาน
const interns = [{
        name: "YanakornS",
        skills: ["การเขียนโปรแกรม", "การออกแบบกราฟิก"],
        image: "https://png.pngtree.com/png-clipart/20230913/original/pngtree-code-clipart-cartoon-illustration-of-a-gamer-using-a-laptop-vector-png-image_11076168.png",
    },
    {
        name: "Titlemath",
        skills: ["การตลาด", "การเขียน"],
        image: "https://png.pngtree.com/png-vector/20190114/ourmid/pngtree-blue-graduation-season-summer-vacation-cartoon-student-png-image_327899.jpg",
    },
    {
        name: "Jamebone",
        skills: ["การเขียนโปรแกรม", "การวิเคราะห์ข้อมูล"],
        image: "https://img.pikbest.com/png-images/qiantu/cartoon-hand-drawn-astronaut-character-png-element_2502117.png!sw800",
    },
    {
        name: "Jane ",
        skills: ["การเขียนโปรแกรม", "การออกแบบเว็บ"],
        image: "https://img.lovepik.com/free-png/20220127/lovepik-teacher-png-image_401915365_wh1200.png",
    },
    {
        name: "David Lee",
        skills: ["การตัดต่อ", "การถ่ายรูป"],
        image: "https://png.pngtree.com/element_pic/00/16/07/12578484c5f16c8.jpg",
    },
    {
        name: "Manson",
        skills: ["ทดสอบระบบ", "จักการด้านIT"],
        image: "https://img.pikbest.com/png-images/qiantu/hand-drawn-playing-computer-boy-comic-character-design_2577127.png!w700wp",
    },
];


// ข้อมูลผู้ประกอบการ
const companies = [{
        name: "LOREM IPSUM",
        position: "Web Developer",
        skills: ["การเขียนโปรแกรม", "การออกแบบกราฟิก", "การตลาด"],
        image: "https://png.pngtree.com/png-clipart/20230407/original/pngtree-app-devlopment-company-logo-png-image_9032619.png",
    },
    {
        name: "8PROP",
        position: "Marketing Intern",
        skills: ["การตลาด", "การเขียน"],
        image: "https://images.glints.com/unsafe/1200x0/glints-dashboard.s3.amazonaws.com/company-logo/26c8d95ef2039a29d1deaac4b6792045.png",
    },
    {
        name: "ABC Corporation",
        position: "Data Analyst",
        skills: ["การวิเคราะห์ข้อมูล", "การเขียนโปรแกรม"],
        image: "https://img.freepik.com/free-vector/creative-data-logo-template_23-2149217525.jpg",
    },
    {
        name: "XYZ Ltd",
        position: "Graphic Designer",
        skills: ["การตัดต่อ", "การถ่ายรูป"],
        image: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/graphic-designer-logo-template-744829040dcadb4104a7087c658d44f2_screen.jpg?ts=1651016833",
    },
];


function showInterns() {
    const internsList = document.getElementById("interns");

    // เรียกใช้ฟังก์ชันเพื่อล้างข้อมูลเดิมใน internsList
    clearInternsList();

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

// เพิ่มฟังก์ชันเพื่อลบข้อมูลเดิมออกจาก DOM
function clearInternsList() {
  const internsList = document.getElementById("interns");
  while (internsList.firstChild) {
      internsList.removeChild(internsList.firstChild);
  }
}

// เพิ่มฟังก์ชันเพื่อลบข้อมูลเดิมของบริษัทออกจาก DOM
function clearCompaniesList() {
  const companiesList = document.getElementById("companies");
  while (companiesList.firstChild) {
      companiesList.removeChild(companiesList.firstChild);
  }
}

// เพิ่มฟังก์ชัน showCompanies() เพื่อแสดงรายชื่อบริษัท
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

// เรียกใช้ฟังก์ชัน showInterns() เพื่อแสดงรายชื่อนักศึกษาฝึกงานทั้งหมด
showInterns();

// เรียกใช้ฟังก์ชัน showCompanies() เพื่อแสดงรายชื่อบริษัท
showCompanies();

// เรียกใช้ฟังก์ชัน matchCompanies() ในฟังก์ชัน showInterns() เพื่อแสดงบริษัทที่เกี่ยวข้องกับแต่ละนักศึกษา

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

      // เรียกฟังก์ชัน showInterns() เพื่อแสดงรายชื่อนักศึกษาฝึกงานทั้งหมดรวมทั้งข้อมูลใหม่
      showInterns();

      // ล้างค่าในฟอร์ม
      document.getElementById("addInternForm").reset();
  });

document.getElementById("addCompanyForm").addEventListener("submit", function (event) {
  event.preventDefault(); // ไม่ให้ฟอร์มส่งข้อมูลแบบปกติ

  const companyName = document.getElementById("companyName").value;
  const companyPosition = document.getElementById("companyPosition").value;
  const companySkills = document.getElementById("companySkills").value.split(",");
  const companyImageURL = document.getElementById("companyImageURL").value;

  // เรียกฟังก์ชันเพื่อลบข้อมูลเดิมของบริษัทออกจาก DOM ก่อนที่จะเพิ่มข้อมูลใหม่
  clearCompaniesList();

  // เพิ่มข้อมูลบริษัทใหม่เข้าไปในตัวแปร companies
  companies.push({
      name: companyName,
      position: companyPosition,
      skills: companySkills,
      image: companyImageURL,
  });

  // เรียกฟังก์ชัน showCompanies() เพื่อแสดงรายชื่อบริษัททั้งหมดรวมทั้งข้อมูลใหม่
  showCompanies();

  // ล้างค่าในฟอร์ม
  document.getElementById("addCompanyForm").reset();
});