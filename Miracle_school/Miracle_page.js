
let link1 = document.getElementById("Home");
link1.addEventListener('click', function(){
    window.location.href = "Miracle_Dashboard_page.html";
});



let link2 = document.getElementById("Classes");
link2.addEventListener('click', function(){
    window.location.href = "Miracle_classes_page.html";
});

let link3 = document.getElementById("About");
link3.addEventListener('click', function(){
    window.location.href = "Miracle_about_page.html";
});

let link4 = document.getElementById("Teachers");
link4.addEventListener('click', function(){
    /*console.log(supabase);
    console.log(window.supabaseClient.from("Teachers").select("*").then(console.log));

    const { data, error } = await window.supabaseClient.from('Teachers').select('*')

    const stringData = JSON.stringify(data)
    console.log(stringData)
    /*data.forEach(teacher =>{
    })"*/
    window.location.href = "Miracle_teachers_page.html";
});

let link5 = document.getElementById("Contact");
link5.addEventListener('click', function(){
    window.location.href = "Miracle_contact_page.html";
});

let link6 = document.getElementById("login");
console.log(link6);
link6.addEventListener('click', function(){
    window.location.href = "Miracle_login_page.html";
});

let login_btn = document.querySelector(".login-btn");
login_btn.addEventListener('click', async function(event){
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    const { data, error } = await window.supabaseClient.from('Username_password').select('*');
    console.log(data);
    let founduser = data.find(user => user.username == username && user.password == password);
    if(founduser){
        console.log("login success");
    }
    else{
        console.log("login failed");
    }
    window.location.href = "Miracle_admin_dashboard_page.html";
})

