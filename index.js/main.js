const fullname_input = document.getElementById("fullname");
const age_input = document.getElementById("age");
const profession_input = document.getElementById("profession");
const salary_input = document.getElementById("salary");
const experience_input = document.getElementById("experience");
const editBtn = document.getElementById("edit-btn");
const addBtn = document.getElementById("add-btn");
const deleteBtn = document.getElementById("delete-btn");

const table = document.querySelector("#employee-table tbody");

addBtn.addEventListener("click", () => {
  if (fullname_input.value == "") {
    alert("fullname daxil edin!");
    fullname_input.style.borderColor = "red";
    return;
  } else {
    fullname_input.style.borderColor = "rgba(0, 0, 0, 0.5)";
  }

  if (age_input.value == "") {
    alert("age daxil edin!");
    age_input.style.borderColor = "red";
    return;
  } else {
    age_input.style.borderColor = "rgba(0, 0, 0, 0.5)";
  }
  if (age_input.value <= 0) {
    alert("menfi yas ola bilmez");
    age_input.style.borderColor = "red";
    return;
  } else {
    age_input.style.borderColor = "rgba(0, 0, 0, 0.5)";
  }
  if (profession_input.value == "") {
    alert("profession daxil edin!");
    profession_input.style.borderColor = "red";
    return;
  } else {
    profession_input.style.borderColor = "rgba(0, 0, 0, 0.5)";
  }

  if (salary_input.value == "") {
    alert("salary daxil edin!");
    salary_input.style.borderColor = "red";
    return;
  } else {
    salary_input.style.borderColor = "rgba(0, 0, 0, 0.5)";
  }
  if (salary_input.value <= 0) {
    alert("salary menfi ola bilmez");
    salary_input.style.borderColor = "red";
    return;
  } else {
    salary_input.style.borderColor = "rgba(0, 0, 0, 0.5)";
  }
  if (experience_input.value == "") {
    alert("experience daxil edin!");
    experience_input.style.borderColor = "red";
    return;
  } else {
    experience_input.style.borderColor = "rgba(0, 0, 0, 0.5)";
  }
  if (experience_input.value <= 0) {
    alert("experience menfi ola bilmez!");
    experience_input.style.borderColor = "red";
    return;
  } else {
    experience_input.style.borderColor = "rgba(0, 0, 0, 0.5)";
  }
  // 2 Menfi eded yazila bilinmesin

  console.log({
    fullname: fullname_input.value,
    age: age_input.value,
    profession: profession_input.value,
    salary: salary_input.value,
    experience: experience_input.value,
  });

  const payload = {
    fullname: fullname_input.value,
    age: age_input.value,
    profession: profession_input.value,
    salary: salary_input.value,
    experience: experience_input.value,
  };

  fetch("http://localhost:3000/employees", {
    method: "POST",
    body: JSON.stringify(payload),
  }).then((res) => {
    console.log(res);
  });
});

// get employee list
async function getEmployees() {
  const data = await fetch("http://localhost:3000/employees");
  const result = await data.json();

  console.log(result);

  result.forEach((item) => {
    console.log(item);

    const tr = document.createElement("tr");

    const fullnameTd = document.createElement("td");
    fullnameTd.innerText = item.fullname;
    const ageTd = document.createElement("td");
    ageTd.innerText = item.age;
    const professionTd = document.createElement("td");
    professionTd.innerText = item.profession;
    const salaryTd = document.createElement("td");
    salaryTd.innerText = item.salary;
    const experienceTd = document.createElement("td");
    experienceTd.innerText = item.experience;

    const actionsTd = document.createElement("td");

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("deletebtn");
    deleteBtn.addEventListener("click", () => {
      fetch("http://localhost:3000/employees/" + item.id, {
        method: "DELETE",
      });
    });

    actionsTd.appendChild(deleteBtn);

    tr.append(
      fullnameTd,
      ageTd,
      professionTd,
      salaryTd,
      experienceTd,
      actionsTd
    );

    table.appendChild(tr);
  });
}

getEmployees();

experience_input.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    const payload = {
      fullname: fullname_input.value,
      age: age_input.value,
      profession: profession_input.value,
      salary: salary_input.value,
      experience: experience_input.value,
    };

    fetch("http://localhost:3000/employees", {
      method: "POST",
      body: JSON.stringify(payload),
    }).then((res) => {
      console.log(res);
    });
  }
});
