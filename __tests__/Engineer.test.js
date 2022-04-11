const Engineer = require("../lib/Engineer");

test("see if github gets set", () => {
          const github = "laurieGit";
          const newEmployee = new Engineer("laurie",1,"laurieT@gmail.com",github);
          expect(newEmployee.github).toBe(github);
        });
        test("see if we can run GetGitHub", () => {
          const github = "laurieGit";
          const newEmployee = new Engineer("laurie",1,"laurieT@gmail.com",github);
          expect(newEmployee.getGithub()).toBe(github);
        });
        test("see if we can getRole", () => {
          const github = "laurieGit";
          const newEmployee = new Engineer("laurie",1,"laurieT@gmail.com",github);
          expect(newEmployee.getRole()).toBe("Engineer");
        });