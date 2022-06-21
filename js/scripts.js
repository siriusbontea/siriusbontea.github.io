/*!
 * Start Bootstrap - Grayscale v7.0.5 (https://startbootstrap.com/theme/grayscale)
 * Copyright 2013-2022 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
 */
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
    const hexcontent = {
        count: 11,
        0: {
            href: 'roman-empire',
            img: 'roman-empire.png',
            h1: 'Roman Infrastructure',
            p: 'Mapping the Infrastructure of the Roman Empire'
        },
        1: {
            href: 'kentucky-owls',
            img: 'kentucky-owls.png',
            h1: 'Kentucky\'s Owls',
            p: 'Mapping native and visiting Owls in Kentucky'
        },
        2: {
            href: 'snowy-owls',
            img: 'snowy-owls.png',
            h1: 'Snowy Owls',
            p: 'The North American Snowy Owl'
        },
        3: {
            href: 'karate',
            img: 'okinawa-karate.png',
            h1: 'Okinawa',
            p: 'The birthplace of karate'
        },
        4: {
            href: 'kenya-education',
            img: 'kenya-education.png',
            h1: 'Education in Kenya',
            p: 'Analysis of Kenya\'s Education System in 2014'
        },
        5: {
            href: 'alaska-wages',
            img: 'blue-collar-alaska.png',
            h1: 'Alaska Wages',
            p: 'Choropleth map showing blue-collar wages'
        },
        6: {
            href: 'electrical-power',
            img: 'power-plants.png',
            h1: 'Electrical Power',
            p: '"green" energy in the United States'
        },
        7: {
            href: 'round-earth',
            img: 'round-earth.png',
            h1: 'Round Earth',
            p: 'Round like an oblate spheroid'
        },
        8: {
            href: 'new-orleans',
            img: 'new-orleans.png',
            h1: 'New Orleans',
            p: 'Mapping Points of Interest'
        },
        9: {
            href: 'prison-town',
            img: 'leavenworth-donuts.png',
            h1: 'Prison Town',
            p: 'Fort Leavenworth, Leavenworth, Lansing Prisons'
        },
        10: {
            href: '2001-2015-US-unemployment',
            img: 'us-unemployment-2001-2015.png',
            h1: 'US Unemployment',
            p: 'Choropleth map of US unemployment 2001 to 2015'
        },
        11: {
            img: 'project-placeholder.png',
            h1: 'Project Placeholder',
            p: 'Placeholder for mapping project'
        },
    }
    document.querySelectorAll('.hexIn').forEach(function (item, index) {
        let props
        let link = ''
        let count = hexcontent.count
        if (index >= count) {
            props = hexcontent[count]
        } else {
            props = hexcontent[index];
            link = `<a href="https://siriusbontea.github.io/${props.href}">${props.p}</a>`;
        }

        const place = ` <div class="hexLink">
        <div class="img" style="background-image:url(assets/img/${props.img});"></div>
        <h1 id="hextitle">${props.h1}</h1>
        <p id="hextext">${link}</p>
        </a>`

        item.innerHTML = place;
        item.addEventListener('mouseover', function (e) {
            console.log(item);
        });
    });


});