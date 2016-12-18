function r(view) {
    return require("./view/" + view + ".vue");
}

module.exports = [

    {
        path: "/",
        redirect: "/home/button"
    }, {
        path: "/home",
        name: "Index",
        component: r("Home"),
        children: [{
                path: "button",
                name: "Button",
                component: r("Button")
            }, {
                path: "radio",
                name: "Radio",
                component: r("Radio")
            }, {
                path: "input",
                name: "Input",
                component: r("Input")
            }, {
                path: "select",
                name: "Select",
                component: r("Select")
            }, {
                path: "switch",
                name: "Switch",
                component: r("Switch")
            }, {
                path: "datepicker",
                name: "DatePicker",
                component: r("DatePicker")
            },
            {
                path: "table",
                name: "Table",
                component: r("Table")
            },
            {
                path: "tag",
                name: "Tag",
                component: r("Tag")
            },
            {
                path: "pagination",
                name: "Pagination",
                component: r("Pagination")
            },
            {
                path: "badge",
                name: "Badge",
                component: r("Badge")
            },
            {
                path: "alert",
                name: "Alert",
                component: r("Alert")
            },
            {
                path: "loading",
                name: "Loading",
                component: r("Loading")
            },
            {
                path: "message",
                name: "Message",
                component: r("Message")
            },

            {
                path: "messagebox",
                name: "MessageBox",
                component: r("MessageBox")
            },
            {
                path: "notification",
                name: "Notification",
                component: r("Notification")
            },
            {
                path: "navmenu",
                name: "NavMenu",
                component: r("NavMenu")
            },
            {
                path: "tabs",
                name: "Tabs",
                component: r("Tabs")
            },
            {
                path: "breadcrumb",
                name: "Breadcrumb",
                component: r("Breadcrumb")
            },
            {
                path: "dropdown",
                name: "Dropdown",
                component: r("Dropdown")
            },
            {
                path: "step",
                name: "Step",
                component: r("Step")
            },
            {
                path: "dialog",
                name: "Dialog",
                component: r("Dialog")
            },
            {
                path: "form",
                name: "Form",
                component: r("Form")
            },
            {
                path: "tooltip",
                name: "Tooltip",
                component: r("Tooltip")
            },
        ]
    }

]
