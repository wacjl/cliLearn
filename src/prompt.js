const prompt = [
  {
    type: "input",
    name: "name",
    message: "请输入项目名称"
  },

  {
    type: "list",
    name: "type",
    message: "请选择类型",
    choices: ["Choice A", "choice B"]
  },
  {
    type: "checkbox",
    name: "config",
    choices: ["ts", "eslint"]
  }
];
module.exports = {
  prompt
};
