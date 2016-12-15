
function r(view) {

  return require("./view/" + view + ".vue");

}


module.exports = [

    {
      path : "/",
      redirect : "/home"
    },
    {
      path : "/home",
      name : "Index",
      component : r("Home"),
      children : [
        {
          path : "button",
          name : "Button",
          component : r("Button")
        },
        {
          path : "radio",
          name : "Radio",
          component : r("Radio")
        },
        {
          path : "input",
          name : "Input",
          component : r("Input")
        },
        {
          path : "select",
          name : "Select",
          component : r("Select")
        },

      ]
    }

]
