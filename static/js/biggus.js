const tractor = {
    name: "",
    price: 0,
    backhoe: 0,
    midmower: 0,
    backAndMid:0,
    set tractorName(newName) {
        this.name = newName;
    },
    set tractorPrice(newPrice) {
        this.price = newPrice;
    },
    set tractorBackhoe(newBackhoe) {
        this.backhoe = newBackhoe;
    },
    set tractorMidmower(newMidmower) {
        this.midmower = newMidmower;
    },
    set tractorBackAndMid(newBackAndMid) {
        this.backAndMid = newBackAndMid;
    }

};

function setTractor(name, price, backhoe, midmower, backAndMid) {
    tractor.tractorName = name;
    tractor.tractorPrice = price;
    tractor.tractorBackhoe = backhoe;
    tractor.tractorMidmower = midmower;
    tractor.tractorBackAndMid = backAndMid;
    console.log(tractor.name);
    console.log(tractor.price);
    console.log(tractor.backhoe);
}
function testPrint() {
    console.log("hello");
}

function addBackhoeText() {
    console.log(tractor.backhoe);
    const backhoeText = document.getElementById("backhoeText");
    backhoeText.innerHTML = "Would you like to add a backhoe, bringing tractor price to $" + tractor.backhoe + "?";
}

// function add_tractors() {
//     print("ADD MAHINDRA");
//     const mahindra_request = new XMLHttpRequest();
//     mahindra_request.addEventListener("load", function () {
//         if (mahindra_request == null) {
//             return;
//         }

//         // for (tractor in mahindra_request.response.mahindra_tractors) {
//         //     $("#tractorSection").append(`
//         //         <div>
//         //             <h1>${tractor.name}</h1>
//         //         </div>`);
//         // }

//         var tractor = mahindra_request.response.mahindra_tractors[0];
//         $("#tractorSection").append(`
//             <div>
//                 <h1>${tractor.name}</h1>
//             </div>
//         `);

//         $("#tractorSection").show().css("display", "flex");
//         mahindra_request.open("GET", `/data/mahindra`);
//         mahindra_request.responseType = "json";
//         mahindra_request.send();
//     });
// }

function getStarted_hover() {
    const text = document.getElementById("getStartedText");
    const arrow = document.getElementById("getStartedArrow");
    const link = document.getElementById("getStartedLink");
    text.setAttribute('color', 'var(--bgte-red)');
    link.setAttribute('color', 'var(--bgte-red)');
    arrow.setAttribute('src', 'static/images/arrow-right-bold-red.svg');
}

function getStarted_unhover() {
    const text = document.getElementById("getStartedText");
    const arrow = document.getElementById("getStartedArrow");
    const link = document.getElementById("getStartedLink");
    link.setAttribute('color', 'var(--bgte-white)');
    text.setAttribute('color', 'var(--bgte-white)');
    arrow.setAttribute('src', 'static/images/arrow-right-bold.svg');
}