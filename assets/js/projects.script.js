let skills = [
    {
        name:"HTML5",
        image:"html.svg"
    },
    {
        name:"CSS3",
        image:"css.svg"
    },
    {
        name:"JavaScript",
        image:"js.svg"
    },
    {
        name:"Bootstrap",
        image:"bootstrap.svg"
    },
    {
        name:"MySQL",
        image:"mysql.svg"
    },
    {
        name:"PHP",
        image:"php.svg"
    },
];
let categories = ["Web Design","Web Application"];
let projects = [
    {
        pName:"Regularhost",
        pImage:"1.png",
        pLink:"https://regularhost.com/",
        pCategory:categories[1],
        pDesc:`Regularhost you are looking for a personal website hosting plan or a business website hosting plan, We are the perfect solution for you. Our powerful website hosting services will not only help you achieve your overall website goals, but will also provide you with the confidence you need in knowing that you are partnered with a reliable and secure website hosting platform.`,
        pTech:[0,1,2,3,4,5]
    },
    {
        pName:"PLS Website",
        pImage:"2.png",
        pLink:"https://pls-web.netlify.app/",
        pCategory:categories[0],
        pDesc:`PLS Connect Australia is the nations leading event organiser. Our events comprise of large scale exhibitions, industry conferences and highly specialised corporate training.`,
        pTech:[0,1,2,3]
    },
    {
        pName:"Visibooster",
        pImage:"3.png",
        pLink:"https://visibooster.netlify.app/",
        pCategory:categories[0],
        pDesc:`Visibooster Services are professional offerings provided by businesses to meet specific needs or solve problems for their customers. Services can range from your budject.`,
        pTech:[0,1,2,3]
    },
    {
        pName:"AR Academy",
        pImage:"4.png",
        pLink:"https://ar-academy.netlify.app/",
        pCategory:categories[0],
        pDesc:`ARAcademyClasses make Quran learning easy for those living in Western and Non-Muslim countries with various difficulties in Quran learning.`,
        pTech:[0,1,2,3]
    },
    {
        pName:"Ever Close",
        pImage:"5.png",
        pLink:"https://www.everclosecompany.com/",
        pCategory:categories[1],
        pDesc:`Your expressions of love deserve to be heard, and EverClose company helps you do just that. We bring you the purest quality attire and products with elegant designs. Our creative craftsmen have an eye for detail and the skills to produce attractive products.`,
        pTech:[0,1,2,3,4,5]
    },
    {
        pName:"3D Profile Card",
        pImage:"6.png",
        pLink:"https://arassignments-3d-profile-card.netlify.app/",
        pCategory:categories[0],
        pDesc:`Created 3D Profile Card using with CSS3 Animations & 3D Dimensional Animation with 3D Environment in CSS.`,
        pTech:[0,1,2]
    },
    {
        pName:"Windows Web",
        pImage:"7.png",
        pLink:"https://arassignments-windows-web.netlify.app/",
        pCategory:categories[0],
        pDesc:`Created Windows 10 Clone as a web using with pure CSS3 Animations & JavaScript`,
        pTech:[0,1,2]
    },
    {
        pName:"3D Keyboard",
        pImage:"8.png",
        pLink:"https://arassignments-3d-keyboard.netlify.app/",
        pCategory:categories[0],
        pDesc:`Created 3D Keyboard using with CSS3 Animations & 3D Dimensional Animation, Environment with Dark/Light Mode in CSS.`,
        pTech:[0,1,2]
    },
    {
        pName:"Vission Consultant",
        pImage:"9.png",
        pLink:"https://vission-consultant.netlify.app/",
        pCategory:categories[0],
        pDesc:`The Vission Consultant Site Explore new skills, deepen existing passions, and get lost in creativity. What you find just might surprise and inspire you.`,
        pTech:[0,1,2,3]
    },
    {
        pName:"Parallax",
        pImage:"10.png",
        pLink:"https://arassignments-parallax-web.netlify.app/",
        pCategory:categories[0],
        pDesc:`Created Parallax using with CSS3 & multi images are overlaps layers, then scrolling effect with js windows height by listners`,
        pTech:[0,1,2]
    },
    {
        pName:"Feedback Form",
        pImage:"11.png",
        pLink:"https://arassignments-feedback-form.netlify.app/",
        pCategory:categories[0],
        pDesc:`Created Feedback Form using with creative style and with form js regex validations to secure your feedback data.`,
        pTech:[0,1,2,3]
    },
    {
        pName:"Dark Side",
        pImage:"12.png",
        pLink:"https://arassignments-dark-side.netlify.app/",
        pCategory:categories[0],
        pDesc:`Created Dark Side using with CSS3 & multi images are overlaps layers, then scrolling effect with js windows height by listners`,
        pTech:[0,1,2,3]
    },
    {
        pName:"Java Buzz",
        pImage:"13.png",
        pLink:"https://arassignments-java-buzz.netlify.app/",
        pCategory:categories[0],
        pDesc:`Created Java Buzz using with creative designs and CSS animations to Coffee restaurant site full responsive.`,
        pTech:[0,1,2,3]
    },
    {
        pName:"ABN Overseas",
        pImage:"14.png",
        pLink:"https://arassignments-abn-overseas.netlify.app/",
        pCategory:categories[0],
        pDesc:`Created ABN Overseas Education using with creative designs and CSS animations to with menu & swiper slider unique design.`,
        pTech:[0,1,2,3]
    },
    {
        pName:"Task Manager",
        pImage:"15.png",
        pLink:"https://arassignments-task-manager.netlify.app/",
        pCategory:categories[0],
        pDesc:`Created Task Manager using with creative designs and drag & drop feature with JS.`,
        pTech:[0,1,2,3]
    },
    {
        pName:"AR GPT",
        pImage:"16.png",
        pLink:"https://ar-gpt-web.netlify.app/",
        pCategory:categories[0],
        pDesc:`Created AR GPT using with creative designs and chat system like same as chat gpt featured by JS.`,
        pTech:[0,1,2]
    },
    {
        pName:"Iphone 14",
        pImage:"17.png",
        pLink:"https://arassignments-iphone.netlify.app/",
        pCategory:categories[0],
        pDesc:`Created Iphone 14 using with creative designs and same as clone by Iphone 14 feature performed by JS.`,
        pTech:[0,1,2]
    },
    {
        pName:"Banner",
        pImage:"18.png",
        pLink:"https://arassignments-banner.netlify.app/",
        pCategory:categories[0],
        pDesc:`Created Banner using with creative designs and CSS3 animations with using JS.`,
        pTech:[0,1,2,3]
    },
    {
        pName:"Sticky Notes",
        pImage:"19.png",
        pLink:"https://arassignments-stickynotes.netlify.app/",
        pCategory:categories[0],
        pDesc:`Created Sticky Web App using with creative designs and CSS3 animations with using JS.`,
        pTech:[0,1,2]
    },
    {
        pName:"Weather App",
        pImage:"20.png",
        pLink:"https://arassignments-weather.netlify.app/",
        pCategory:categories[0],
        pDesc:`Created Weather Web App using with creative designs and CSS3 animations with using JS. And using Location API`,
        pTech:[0,1,2]
    },
    {
        pName:"Image Gallery",
        pImage:"21.png",
        pLink:"https://arassignments-gallery.netlify.app/",
        pCategory:categories[0],
        pDesc:`Created Image Gallery using with creative designs and CSS3 animations with using JS.`,
        pTech:[0,1,2]
    },
];