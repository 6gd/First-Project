
let buttonList = document.querySelector(".btn-list");
let nav_list = document.querySelector(".nav-list");
let nav_links = document.querySelector(".nav-links");
let button_login = $('.button-login');
let home = document.querySelectorAll(".nav-list li a");
let liDown = document.querySelectorAll(".nav-list li");
gsap.registerPlugin(ScrollTrigger,TextPlugin);


let el = document.querySelector(".scroller");
let height = document.documentElement.scrollHeight -  document.documentElement.clientHeight;

window.addEventListener("scroll",() =>{
    let scrolltop = document.documentElement.scrollTop;
    el.style.width = `${(scrolltop / height) * 100}%`
})


let productsInCart = [];
function add(product){
    let dataProduct = product.getAttribute("data-product");
    if(productsInCart.includes(dataProduct)){
        
    }else{
        productsInCart.push(product.getAttribute("data-product"))
    }
    
}



`
<div class="box">
    <img src="/image/1.webp" alt="">
    <div class="Box-cart-text">
        <h5>Name Product</h5>
        <p class="Price">199.99</p>
    </div>
    <button class="remove">Remove</button>
</div>`


function card(mah){
    let name = mah.getAttribute("data-num");
    localStorage.setItem("idPro",name);
    
    // document.location.href = "Product.html";
    
}

let products = [
    {
        id:1,
        title: 'Watch',
        size:"Small",
        count: 10,
        Price: 150,
        imageUrl: 'image/1.webp'
    },
    {
        id:2,
        title: 'Watch',
        size:"Small",
        count: 10,
        Price: 150,
        imageUrl: 'image/2.webp'
    },
    {
        id:3,
        title: 'Watch',
        Price: 150,
        imageUrl: 'image/3.webp',
        size:"Small",
        count: 10,
    },
    {
        id:4,
        title: 'Watch',
        size:"Small",
        count: 10,
        Price: 150,
        imageUrl: 'image/4.webp'
    },
    {
        id:5,
        title: 'Watch',
        Price: 150,
        size:"Small",
        count: 10,
        imageUrl: 'image/5.webp'
    },
    {
        id:6,
        title: 'Watch',
        Price: 150.00,
        size:"Small",
        count: 10,
        imageUrl: 'image/6.webp'
    },
    {
        id:7,
        title: 'Watch',
        Price: 150,
        size:"Small",
        count: 10,
        imageUrl: 'image/7.webp'
    },
    {
        id:8,
        title: 'Watch',
        Price: 150,
        size:"Small",
        count: 10,
        imageUrl: 'image/8.webp'
    },
    {
        id:9,
        title: 'Watch',
        Price: 150,
        size:"Small",
        count: 10,
        imageUrl: 'image/9.webp'
    },
    {
        id:10,
        title: 'Watch',
        Price: 150,
        size:"Small",
        count: 10,
        imageUrl: 'image/10.webp'
    },
    {
        id:11,
        title: 'Watch',
        Price: 150,
        size:"Small",
        count: 10,
        imageUrl: 'image/11.webp'
    }
]
const container_Pro = document.querySelector("#Products .container-fluid");

const n = 4;
for (let i = 0; i <= n; i++) {
    container_Pro.innerHTML += `<div class="card div${i+1}" data-num="${i+1}" onclick="card(this)">
    <img class="card-img-top" src="${products[i].imageUrl}" loading="lazy" alt="">
    <div class="card-body">
    <h4 class="card-title">Limited Edition Harry Potter™ Automatic Gold-Tone Stainless Steel Watch</h4>
    <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium quos dignissimos voluptate quia ea? Commodi totam eveniet, reprehenderit deserunt voluptate debitis distinctio sit pariatur numquam.</p>
    <div class="box-buy">
    
        <a class="Buy-now" href="#">Leran more</a>
    </div>
    </div>
</div>`;
}



$(document).ready(function(){
    $("#cart").click(() => {
        $("#box-cart").toggleClass("active");
        
        
    });
    $(".Close").click(() => {
        $("#box-cart").removeClass("active");
        
        
    });
    buttonList.addEventListener("click",() =>{
        buttonList.classList.toggle("active");
        nav_list.classList.toggle("active");
        nav_links.classList.toggle("active");
        button_login.toggleClass("active");
    })
    window.onscroll =()=>{
        buttonList.classList.remove("active");
        nav_list.classList.remove("active");
        nav_links.classList.remove("active");
        button_login.removeClass("active");

    }
    $('.oneS').mouseenter(() =>{
        $(".cls-2").removeClass("active");
        $(".cls-1").addClass("active");
        
    });
    $('.oneS').mouseleave(() =>{
        $(".cls-2").addClass("active");
        $(".cls-1").removeClass("active");
        
    });
    
    
    
    
    $('.threeS').mouseenter(() =>{
        $(".cls-2").removeClass("active");
        $(".cls-3").addClass("active");
        
    });
    $('.threeS').mouseleave(() =>{
        $(".cls-2").addClass("active");
        $(".cls-3").removeClass("active");
        
    });


    
    let Submit_Contact = $("#Submit-Contact")[0]
    
    Submit_Contact.addEventListener("click",() =>{
        Submit_Contact.style.background = "#51e676";
        Submit_Contact.textContent = "";
        Submit_Contact.innerHTML = '<i class="fa-solid fa-check" style="font-size: 18px;"></i>'
    })

    
    gsap.from(".Explore",{opacity:0,y:-100,duration:2.5,ease:Power3.easeOut});
    gsap.from(liDown,{opacity:0,y:-50,duration:.5,stagger:.2,ease:"elastic.out(1,0.3)"});

    
    gsap.from(".Watch-Video",{opacity:0,x:-100,duration:2.5,ease:Power3.easeOut});
    

    
    gsap.from('#an-Services',{
        scrollTrigger: {
            trigger:"#Services",
            scrub:.5,
            start:"top bottom",
            

        },
        y:-150,
        duration:2.5,
        ease:Power3.easeOut,
    })
    gsap.from('#an-Products',{
        scrollTrigger: {
            trigger:"#Products",
          //  markers:true,
            scrub:.5,
            start:"top bottom",
            
        },
        y:-150,
        duration:2.5,
        ease:Power3.easeOut,
    })
    gsap.from('.div1',{
        scrollTrigger: {
            trigger:"#Products .container-fluid",
            start:"top bottom",
        },  
        duration:1,
        delay: .5,
        x:-950,
        ease:"power4.out",
    })  
    gsap.from('.div2',{
        scrollTrigger: {
            trigger:"#Products .container-fluid",
            start:"top bottom",
        },  
        duration:1, 
        delay: 1,
        x:950,
        ease:"power4.out",
    })  
    gsap.from('.div3',{
        scrollTrigger: {
            trigger:"#Products .container-fluid",
            start:"top bottom",
        },  
        duration:1,
        delay: 1.5,
        x:-950,
        ease:"power4.out",
    })  
    gsap.from('.div4',{
        scrollTrigger: {
            trigger:"#Products .container-fluid",
            start:"top bottom",
        },  
        duration:1,
        delay: 2,
        x:950,
        ease:"power4.out",
    })  
    gsap.from('.div5',{
        scrollTrigger: {
            trigger:"#Products .container-fluid",
            start:"top bottom",
        },  
        duration:1,
        delay: 2.5,
        x:-950,
        ease:"power4.out",
    })  









    gsap.from('.div1 img',{
        scrollTrigger: {
            trigger:"#Products .container-fluid",
          //  markers:true,
            start:"top bottom",
        },  
        duration:2.5,
        x:250,
        ease: 'elastic.out(1, 0.3)'

    })
    gsap.from('.div2 img',{
        scrollTrigger: {
            trigger:"#Products .container-fluid",
          //  markers:true,
            start:"top bottom",
        },  
        duration:2.5,
        x:-250,
        ease: 'elastic.out(1, 0.3)'

    })
    gsap.from('.div3 img',{
        scrollTrigger: {
            trigger:"#Products .container-fluid",
          //  markers:true,
            start:"top bottom",
        },  
        duration:2.5,
        x:250,
        ease: 'elastic.out(1, 0.3)'

    })
    gsap.from('.div4 img',{
        scrollTrigger: {
            trigger:"#Products .container-fluid",
          //  markers:true,
            start:"top bottom",
        },  
        duration:2.5,
        x:-250,
        ease: 'elastic.out(1, 0.3)'

    })
    gsap.from('.div5 img',{
        scrollTrigger: {
            trigger:"#Products .container-fluid",
          //  markers:true,
            start:"top bottom",
        },  
        duration:2.5,
        x:250,
        ease: 'elastic.out(1, 0.3)'

    })



    gsap.from('#an-About',{
        scrollTrigger: {
            trigger:"#About",
          //  markers:true,
            scrub:.5,
            start:"top bottom",
            
        },
        y:-150,
        duration:2.5,
        ease:Power3.easeOut,

    })
    gsap.to('.element-description',{
        duration:10,
        text:"It is a long established fact that a reder will be distracted by the readable content of a page when looking at ist layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here",

    })
    gsap.to('.element-About',{
        scrollTrigger: {
            trigger:"#About",
          //  markers:true,
            toggleActions: "restart pause reverse pause",
        },
        duration:2,
        text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, debitis sint rerum unde eius deserunt tenetur libero? Atque, ad! Voluptate laborum ex vero unde atque cumque magni aliquid blanditiis repellendus? Saepe dicta molestiae ea sed, dolor error ipsa itaque sunt mollitia numquam nisi molestias obcaecati.",

    })
    

    
    gsap.from('#an-Contact',{
        scrollTrigger: {
            trigger:"#Contact",
          //  markers:true,
            scrub:.5,
            start:"top bottom",
            
        },
        y:-150,
        duration:2.5,
        ease:Power3.easeOut,
    })
    




    gsap.from('.input-one',{
        scrollTrigger: {
            trigger:"#Contact",
            // markers:true,
        },
        x:-150,
        opacity:0,
        delay:.2,
        ease: 'power4.out',
        duration:1,
    })
    gsap.from('.input-two',{
        scrollTrigger: {
            trigger:"#Contact",
            // markers:true,
        },
        x:-150,
        opacity:0,
        delay:.5,
        ease: 'power4.out',
        duration:1,
    })
    gsap.from('.input-three',{
        scrollTrigger: {
            trigger:"#Contact",
            // markers:true,
        },
        x:-150,
        opacity:0,
        delay:.7,
        ease: 'power4.out',
        duration:1,
    })
    gsap.from('.input-Submit',{
        scrollTrigger: {
            trigger:"#Contact",
            // markers:true,
        },
        x:150,
        opacity:0,
        delay:.8,
        ease: 'power4.out',
        duration:1,
    })





    gsap.from('.group-two',{
        scrollTrigger: {
            trigger:"#Contact",
          //  markers:true,
            start:"top bottom",
            scrub:0.5,
        },
        x:150,
        ease: 'power4.out',
        duration:2.5,
        autoAlpha: 0
    })
    gsap.from('#Footer-container',{
        scrollTrigger: {
            trigger:"#Contact",
             start:"top 100px",
            scrub:1.5,
        },
        y:50,
        ease: "back.out(1.7)",
        duration:1,
        opacity:0,
    })
    gsap.from('#Home',{
        scrollTrigger: {
            trigger:'#Home',
            onEnter: () => {
                let text = document.getElementById("1");
                text.classList.add("active");
            },
            onLeave: () =>{
                let text = document.getElementById("1");
                text.classList.remove("active");
                
            },
            onEnterBack: () =>{
                let text = document.getElementById("1");
                text.classList.add("active");
            },
            onLeaveBack: ()=>{
                let text = document.getElementById("1");
                text.classList.remove("active");
            }
        }
    })
    gsap.from('#Services',{
        scrollTrigger: {
            trigger:'#Services',
            onEnter: () => {
                let text = document.getElementById("2");
                text.classList.add("active");
            },
            onLeave: () =>{
                let text = document.getElementById("2");
                text.classList.remove("active");
                
            },
            onEnterBack: () =>{
                let text = document.getElementById("2");
                text.classList.add("active");
            },
            onLeaveBack: ()=>{
                let text = document.getElementById("2");
                text.classList.remove("active");
            }
        }
    })
    gsap.from('#Products',{
        scrollTrigger: {
            trigger:'#Products',
            onEnter: () => {
                let text = document.getElementById("3");
                text.classList.add("active");
            },
            onLeave: () =>{
                let text = document.getElementById("3");
                text.classList.remove("active");
                
            },
            onEnterBack: () =>{
                let text = document.getElementById("3");
                text.classList.add("active");
            },
            onLeaveBack: ()=>{
                let text = document.getElementById("3");
                text.classList.remove("active");
            }
        }
    })
    gsap.from('#About',{
        scrollTrigger: {
            trigger:'#About',
            onEnter: () => {
                let text = document.getElementById("4");
                text.classList.add("active");
            },
            onLeave: () =>{
                let text = document.getElementById("4");
                text.classList.remove("active");
                
            },
            onEnterBack: () =>{
                let text = document.getElementById("4");
                text.classList.add("active");
            },
            onLeaveBack: ()=>{
                let text = document.getElementById("4");
                text.classList.remove("active");
            }
        }
    })
    gsap.from('#Contact',{
        scrollTrigger: {
            trigger:'#Contact',
            onEnter: () => {
                let text = document.getElementById("5");
                text.classList.add("active");
            },
            onLeave: () =>{
                let text = document.getElementById("5");
                text.classList.remove("active");
                
            },
            onEnterBack: () =>{
                let text = document.getElementById("5");
                text.classList.add("active");
            },
            onLeaveBack: ()=>{
                let text = document.getElementById("5");
                text.classList.remove("active");
            }
        }
    })
    
    
});
