/*

У экземпляра класса должны присутствовать св-ва:
-name string
-grade string Для простоты предположим, что система грейдов будет иметь значения от L1 до L4
-hardSkills string[]
-company string


Так же должны иметься три метода:

-changeCompany(newCompanyName) - сотрудник может сменить компанию, либо же просто уволиться
-upGrade(newGradeName) - сотрудник может повысить квалификацию
-addSkill(newSkillName) - сотрудник может дополнить список своих скиллов.

*/

class Employee {
  name = "";
  grade = "";
  hardSkills = [];
  company = "";

  constructor(name, grade, hardSkills, company) {
    this.name = name;
    this.grade = grade;
    this.hardSkills = hardSkills;
    this.company = company;
  }

  changeCompany(newCompanyName) {
    return (this.company = `${newCompanyName}`);
  }

  upGrade() {
    if (this.grade === "L4") {
      return;
    } else {
      this.grade = this.grade.split('');
      this.grade[1]++;
      this.grade = this.grade.join('');
    }
  }

  addSkill(newSkillName) {
    this.hardSkills.push(newSkillName);
  }
}

//
// const user = new Employee("Tumen", "L1", ["JS"], "Google");
//
// console.log(user);
//
// console.log(user.addSkill("TS"));
// console.log(user.changeCompany("Apple"));
// console.log(user.upGrade("L4"));
// console.log(user);

//
// const user = new Employee("Tumen", "L1", ["JS"], "Google");
// console.log(user);
// user.upGrade();
// console.log(user);
