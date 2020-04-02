var guideBtn = document.getElementById("seeGuideBtn");
var destBtn = document.getElementById("seeDestBtn");

function featureUnavailable() {
    alert("This feature isn't done yet.")
}

function mapWindow(id) {
    switch (id) {
        case "box1":
        window.open("https://www.google.com.sg/maps/place/San+Francisco,+CA,+USA/@37.757815,-122.5076402,12z/data=!3m1!4b1!4m5!3m4!1s0x80859a6d00690021:0x4a501367f076adff!8m2!3d37.7749295!4d-122.4194155?hl=en");
            break;
        case "box2":
            window.open("https://www.google.com.sg/maps/place/New+York,+NY,+USA/@40.6976701,-74.2598678,10z/data=!3m1!4b1!4m5!3m4!1s0x89c24fa5d33f083b:0xc80b8f06e177fe62!8m2!3d40.7127753!4d-74.0059728?hl=en");
            break;
        case "box3":
            window.open("https://www.google.com.sg/maps/place/London,+UK/@51.5287718,-0.2416818,11z/data=!3m1!4b1!4m5!3m4!1s0x47d8a00baf21de75:0x52963a5addd52a99!8m2!3d51.5073509!4d-0.1277583?hl=en");
            break;
        case "box4":
            window.open("https://www.google.com.sg/maps/place/Napa,+CA,+USA/@38.2975381,-122.286865,12z/data=!4m8!1m2!2m1!1snapa!3m4!1s0x8084ffe7f8f2deef:0xd6629f3a3384c725!8m2!3d38.2975381!4d-122.286865?hl=en");
            break;
        case "box5":
            window.open("https://www.google.com.sg/maps/place/Sonoma,+CA+95476,+USA/@38.2911257,-122.4666091,14z/data=!3m1!4b1!4m5!3m4!1s0x8085ac43817b9d77:0x380ed210ee6e045!8m2!3d38.291859!4d-122.4580356?hl=en");
            break;
        case "box6":
            window.open("https://www.google.com.sg/maps/place/San+Francisco,+CA,+USA/@37.757815,-122.5076402,12z/data=!3m1!4b1!4m5!3m4!1s0x80859a6d00690021:0x4a501367f076adff!8m2!3d37.7749295!4d-122.4194155?hl=en");
            break;

        default:
            break;
    }
}