window.addEventListener('DOMContentLoaded', function () {



    /* scroll event section */
    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)







        
        










    });



    /*  slide,click event section */




    gsap.to('#section02 .fix-this-03', {
        scrollTrigger: {
            trigger: "#section02 .trigger-this-03",
            start: "top top",
            // end: () => "+=" + 300,
            end: 'bottom bottom',
            pin: true,
            pinSpace:true,
            pinSpacing: true,
            scrub: true,
        }
    });



    gsap.to('#section02 .cart_container .cart_itemlist', {
        y:-920,
        // y:-1220,
        scrollTrigger: {
            trigger: "#section02",
            start: "top top",
            // end: () => "+=" + 1200,
            end: 'bottom bottom',
            pinSpace:false,
            pinSpacing: false,
            scrub: true,
        }
    });



    gsap.to('#section02 .cart_container .cart_follow', {
        y:260,
        scrollTrigger: {
            trigger: "#section02",
            start: "920 top",
            end: () => "+=" + 400,
            // end: 'bottom bottom',
            // pinSpace:false,
            pinSpacing: false,
            scrub: true,
        }
    });







})


