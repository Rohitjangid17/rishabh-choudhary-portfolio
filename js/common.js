// if you try to change some functionality himself without learn javascript, code will destroy.

let dateTime = document.getElementById("dateTime");
let sidebar = document.querySelector("#sidebar-column");
const currentDate = new Date();
const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][currentDate.getDay()];
const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][currentDate.getMonth()];
let isSidebarOpen = true;
let bodyLayer = document.getElementsByTagName("body");
const checkbox = document.querySelector("#ShowInteractions");

// Date time generate here
const dateTimeGenerate = () => {
    const date = currentDate.getDate();
    const year = currentDate.getFullYear();
    const minutes = currentDate.getMinutes();
    let hours = currentDate.getHours();

    const period = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    const formattedMinutes = (minutes < 10 ? '0' : '') + minutes;
    const currentDateTime = `${day} ${month} ${date} ${year} | ${hours}:${formattedMinutes} ${period}`;
    dateTime.textContent = currentDateTime;
}
dateTimeGenerate();

// menu open and close
const menuToggle = () => {
    sidebar.style.display = sidebar.style.display === "block" ? "none" : "block";
    sidebar.classList.toggle('hidden');
}

// back to top scroll scroll
const scrollToTopSmoothly = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// blue and red box toggle
checkbox?.addEventListener('change', () => {
    const redBox = document.querySelector('.red-box');
    const blueBox = document.querySelector('.blue-box');

    return checkbox.checked ? (redBox.classList.toggle('d-none'), blueBox.classList.toggle('d-none')) : (redBox.classList.toggle('d-none'), blueBox.classList.toggle('d-none'));
});

// JQuery document ready function
$(document).ready(function () {
    console.log("Jquerywork");

    // lightcase
    $("a[data-rel^=lightcase]").lightcase();

    // before after slide
    $('.beforeAfter').beforeAfter({
        movable: true,
        clickMove: true,
        position: 60,
        separatorColor: '#fafafa',
        bulletColor: '#fafafa',
        onMoveStart: function (e) {
            console.log(event.target);
        },
        onMoving: function () {
            console.log(event.target);
        },
        onMoveEnd: function () {
            console.log(event.target);
        },
    });

    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-36251023-1']);
    _gaq.push(['_setDomainName', 'jqueryscript.net']);
    _gaq.push(['_trackPageview']);

    (function () {
        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();

    try {
        fetch(new Request("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", { method: 'HEAD', mode: 'no-cors' })).then(function (response) {
            return true;
        }).catch(function (e) {
            var carbonScript = document.createElement("script");
            carbonScript.src = "//cdn.carbonads.com/carbon.js?serve=CK7DKKQU&placement=wwwjqueryscriptnet";
            carbonScript.id = "_carbonads_js";
            document.getElementById("carbon-block").appendChild(carbonScript);
        });
    } catch (error) {
        console.log(error);
    }

    // Design sample slider 
    $('.design-sample-slider').owlCarousel({
        loop: true,
        margin: 20,
        dots: true,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
});
