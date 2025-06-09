window.addEventListener('DOMContentLoaded', function () {



    /* scroll event section */
    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)







        
        










    });



    /*  slide,click event section */


    gsap.to('#section02 .fix-this-05', {
        scrollTrigger: {
            trigger: "#section02 .trigger-this-05",
            start: "top top",
            // end: () => "+=" + 300,
            end: 'bottom bottom',
            pin: true,
            // pinSpace:false,
            pinSpacing: false,
            scrub: true,
        }
    });



    gsap.to('#section02 .checkout_01 .checkout_container', {
        y:-1900,
        scrollTrigger: {
            trigger: "#section02",
            start: "top top",
            // end: () => "+=" + 1000,
            end: 'bottom bottom',
            // pinSpace:false,
            pinSpacing: false,
            scrub: true,
        }
    });


    // gsap.to('#section02 .checkout_01 .checkout_follow', {
    //     y:270,
    //     scrollTrigger: {
    //         trigger: "#section02",
    //         start: "800 top",
    //         end: () => "+=" + 1000,
    //         // end: 'bottom bottom',
    //         // pinSpace:false,
    //         pinSpacing: false,
    //         scrub: true,
    //     }
    // });



})


