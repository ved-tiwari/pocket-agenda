document.addEventListener('init', function (event) {
    var page = event.target;

    if (page.id === 'page1') {
        page.querySelector('#push-button').onclick = function () {
            document.querySelector('#myNavigator').pushPage('page2.html', { data: { title: 'Add Assignment' } });
        };
    } else if (page.id === 'page2') {
        page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
    }
});


let allAssignments;

if (localStorage.getItem("everyAssignment")) {
    allAssignments = JSON.parse(localStorage.getItem("everyAssignment"))
} else {
    allAssignments = []
}


let allCourses;

if (localStorage.getItem("everyCourse")) {
    allCourses = JSON.parse(localStorage.getItem("everyCourse"))
} else {
    allCourses = []
}


let allDescriptions;

if (localStorage.getItem("everyDescription")) {
    allDescriptions = JSON.parse(localStorage.getItem("everyDescription"))
} else {
    allDescriptions = []
}

let allDates;

if (localStorage.getItem("everyDate")) {
    allDates = JSON.parse(localStorage.getItem("everyDate"))
} else {
    allDates = []
}

let allTimes;

if (localStorage.getItem("everyTime")) {
    allTimes = JSON.parse(localStorage.getItem("everyTime"))
} else {
    allTimes = []
}

let allLinks;

if (localStorage.getItem("everyLink")) {
    allLinks = JSON.parse(localStorage.getItem("everyLink"))
} else {
    allLinks = []
}


function clrData() {
    ons.notification.confirm({
        message: 'Are you sure you want to clear all data?',
        title: 'Confirm',
        buttonLabels: ['Yes', 'No'],
        animation: 'default', // or 'slide'
        primaryButtonIndex: 1,
        cancelable: true,
        callback: function (index) {
            switch (index) {
                case 0:

                    document.getElementById("progress").style.display = "block";
                    console.log("Data cleared")
                    setTimeout(function () {
                        localStorage.clear();
                        location.reload();
                    }, 500);

                    break;
                case 1:
                    break;
            }
        }
    });


}

function search() {
    let search = document.getElementById("search")
    if (search.style.display === "none") {
        search.style.display = "block";
        search.style.animation = "searchDown .1s 1";
    } else {
        search.style.animation = "searchUp .1s 1"
        search.style.display = "none";


    }


}

function deleteFunc() {
    console.log("Hello, World!")
}

var app = {}

function plswork() {
    alert("Worked!")
}

function showOptions() {
    var x = document.getElementById("advancedOptions");
    if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("showLink").innerHTML = "Hide Advanced Options"
    } else {
        x.style.display = "none";
        document.getElementById("showLink").innerHTML = "Show Advanced Options"
    }
}

let char = 0

function linkFunc() {
    ons.notification.prompt({
        message: "Enter your link",
        title: "Add Link"
    }).then(function (link) {
        if (link === "") {
            localStorage.setItem("links", "")
        } else {
            let links = link
            localStorage.setItem("links", JSON.stringify(links))

        }
    })
}

function copy() {
    alert("f")
}

function delBtn() {
    
}
