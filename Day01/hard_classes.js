/* В продолжение прошлого задания вам нужно нужно создать 4 новых класса:

- Company - класс описывающий IT компанию. Состоит из:
1. Св-ва:
- companyName
- currentProjects - текущий пулл проектов. Массив экземпляров класса Project
- completedProjects - пулл завершенных проектов. Массив экземпляров класса Project
- staff - весь пулл сотрудников компании. Это объект, у которого есть поля Developers, Managers. В этих полях лежат массивы экземпляров аналогичных классов.
2. Методы:

- addNewCompanyMember() - позволяет нанять нового сотрудника. В результате метода у выбранного сотрудника

должно смениться имя компании.
- addProject() - позволяет добавить проект в пулл текущих.
- getMembersQuantity() - позволяет получить кол-во сотрудников, работающих в данной комании

- Project - класс описывающий проект компании. На проекте может быть только 1 менеджер! Каждый сотрудник может работать только над одним проектом! Состоит из:
- Project Name
- minQualification - минимальная квалификация сотрудника, для работы на данном проекте.
- Team - команда проекта. Объект, типа {Managers: [], Developers: {Frontend : [], Backend: []}}. В св-ва этого объекта указан массив аналогичных классов.

Метод:
- completeProject() - позволяет закончить проект. В результате выполнения функции проект из currentProjects перемещается в finishedProjects. У команды данного проекта должно увеличиться кол-во завершенных проектов.
- addNewProjectMember() - Метод внутри которого вызывается проверка менеджера на то, подходит ли сотрудник проекту. Если подходит, то команда расширяется, иначе нет.


- Backend Developer - Класс, который наследуется от класса Employee. Имеет новые св-ва:
- stack - Массив в котором указаны технологии, которыми владеет разработчик.
- developerSide - 'backend'
- projectQuantity - Число завершенных проектов.
- expandStack() - разработчик может увеличить стек технологий.

- Frontend Developer - Класс, который наследуется от класса Employee. Имеет новые св-ва:
- stack - Массив в котором указаны технологии, которыми владеет разработчик.
- developerSide - 'frontend'
- projectQuantity - Число завершенных проектов.
- expandStack() - разработчик может увеличить стек технологий.

-Manager - Класс, который наследуется от класса Employee. Имеет новые св-ва:
- projectQuantity - Число завершенных проектов.

- checkMember(minQuantity) - менеджер проверяет, удовлетворяет ли сотрудник условиям проекта. Сотрудник, состоящий в другой компании не может работать над проектом другой компании.

*/

import { Employee } from "./classes.js";

/* Св-ва и методы класса
companyName - string
currentProjects - Массив экземпляров класса Project
completedProjects -  Массив экземпляров класса Project
staff - {
    developers :  {
    frontend : массив содержащий экземпляры класса FrontendDeveloper
    backend : массив содержащий экземпляры класса DackendDeveloper
    },
    managers: массив содержащий экземпляры класса Manager
}
addNewCompanyMember(Developer/Manager) - в кач-ве аргумента принимает экземляр класса FrontendDeveloper, Backend Developer или Manager
addProject(Project) - в кач-ве аргумента принимает экземляр класса Project
getMembersQuantity()
*/
export class Company {
  companyName = "";
  currentProjects = [];
  completedProjects = [];
  staff = {
    developers: {
      frontend: [],
      backend: [],
    },
    managers: []
  }
  constructor(companyName) {
    this.companyName = companyName;
  }
  addNewCompanyMember(member) {
    switch (member.developerSide) {
      case 'backend':
        this.staff.developers.backend = [...this.staff.developers.backend, member];
        member.companyName = this.companyName;
        break;
      case 'frontend':
        this.staff.developers.frontend = [...this.staff.developers.frontend, member];
        member.companyName = this.companyName;
        break;
      default:
        this.staff.managers = [...this.staff.managers, member];
        member.companyName = this.companyName;
        break;
    }
  }
  addProject(Project) {
    this.currentProjects = [...this.currentProjects, Project];
  }
  getMembersQuantity() {
    return (this.staff.developers.backend.length + this.staff.managers.length + this.staff.developers.frontend.length)
  }
}


/*
- projectName - string
- minQualification -number
- Team -  {
   manager : экземпляр класса Manager
   developers: {
   frontend : массив содержащий экземпляры класса FrontendDeveloper
   backend : массив содержащий экземпляры класса DackendDeveloper
   }
}


completeProject()
addNewProjectMember(Developer/Manager) - Метод внутри которого вызывается проверка менеджера на то, подходит ли сотрудник проекту. Если подходит, то команда расширяется, иначе нет.
*/

export class Project {
  projectName = "";
  minQualification = "";
  Team = {
    manager: {},
    developers: {
      frontend: [],
      backend: [],
    }
  };
  constructor(projectName, minQualification) {
    this.projectName = projectName;
    this.minQualification = minQualification;
  }
  addNewProjectMember(member) {
    if (member.type === Manager.TYPE_MANAGER) {
      let res = Manager.checkMember(this.minQualification, member);
      if (res) {
        this.Team.manager = { ...member };
      }
    } else {
      let res = Manager.checkMember.bind((this.minQualification, member))
      console.log(res);
      if (res) {
        switch (member.developerSide) {
          case 'frontend':
            this.Team.developers.frontend = [...this.Team.developers.frontend, member];
            break;
          case 'backend':
            this.Team.developers.backend = [...this.Team.developers.backend, member];
            break;
          default:
            break;
        }
      }
    }

  }
  completedProjects() {
    project.CompletedProject = project.CompletedProject.bind(this);
  }

}
/*
projectQuantity - number
checkMember(minQuantity) - в качестве аргумента принимается строка ('L1'/'L2'/'L3'/'L4')
*/
export class Manager extends Employee {
  static TYPE_MANAGER = 'manager';
  projectQuantity = 0;
  constructor(name, grade, hardSkills, company, projectQuantity, type) {
    super(name, grade, hardSkills, company);
    this.projectQuantity = projectQuantity;
    this.type = type;
  }
  static checkMember(minQuantity, member) {
    let res = false;
    if (member.type === Manager.TYPE_MANAGER) {
      return true;
    }
    if (this.Team.manager.company === member.company) {
      if (member.grade === minQuantity) {
        res = true;
      }
    }
    return res;
  }

}

/*
stack - массив строк
- developerSide - строка ('frontend')
- projectQuantity - number
expandStack(newTech) - в кач-ве аргумента принимает строку
*/

export class FrontendDeveloper extends Employee {
  developerSide = 'frontend';
  stack = [];
  projectQuantity = 0;
  constructor(name, grade, hardSkills, company, projectQuantity, stack) {
    super(name, grade, hardSkills, company);
    this.projectQuantity = projectQuantity;
    this.stack = [...this.stack, stack];
    this.projectQuantity = projectQuantity;
  }
  expandStack(someTech) {
    this.stack = [...this.stack, someTech];
  }
}

export class BackendDeveloper extends Employee {
  developerSide = 'backend';
  stack = [];
  projectQuantity = 0;
  constructor(name, grade, hardSkills, company, projectQuantity, stack) {
    super(name, grade, hardSkills, company);
    this.projectQuantity = projectQuantity;
    this.stack = [...stack];
    this.projectQuantity = projectQuantity;
  }
  expandStack(someTech) {
    this.stack = [...this.stack, someTech];
  }
}

let company = new Company("school-21");
// console.log(company);

const front = new FrontendDeveloper('John', 'L3', ["communication"], 0, "L3", "JS");
// console.log(front);
const manag = new Manager("Manager", "L3", ["Communication"], 0, 0, Manager.TYPE_MANAGER);

// console.log(manag);
const back = new BackendDeveloper("Back", "L3", ["commu"], 0, 0, ["TS"]);
// console.log(back);
company.addNewCompanyMember(manag);
company.addNewCompanyMember(front);
company.addNewCompanyMember(back);
// console.log(company);
// console.log(front);
// console.log(back);
// console.log(manag);
let proj = new Project("OOP", "L3");
// console.log(proj);
proj.addNewProjectMember(manag);

proj.addNewProjectMember(front);
proj.addNewProjectMember(back);
company.addProject(proj);
console.log(company);
proj.completedProjects();
