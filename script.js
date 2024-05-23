const para1 = document.getElementById('paragraph-1');
const para2 = document.getElementById('paragraph-2');
const para3 = document.getElementById('paragraph-3');
const Skills = document.getElementById('Skills');
const Experience = document.getElementById('Experience');
const Education = document.getElementById('Education');
function FforSkill() {
    para1.classList.add('active');
    para2.classList.remove('active');
    para3.classList.remove('active');
    Skills.classList.add('active-this-tab');
    Experience.classList.remove('active-this-tab');
    Education.classList.remove('active-this-tab');
}
function FforExp() {
    para1.classList.remove('active');
    para2.classList.add('active');
    para3.classList.remove('active');
    Skills.classList.remove('active-this-tab');
    Experience.classList.add('active-this-tab');
    Education.classList.remove('active-this-tab');
}
function FforEdu() {
    para1.classList.remove('active');
    para2.classList.remove('active');
    para3.classList.add('active');
    Skills.classList.remove('active-this-tab');
    Experience.classList.remove('active-this-tab');
    Education.classList.add('active-this-tab');
}

const sideBar = document.getElementById('right-menu');

function closeBar(){
    sideBar.style.right = "-200px";
}
function openBar(){
    sideBar.style.right = "0";
}
