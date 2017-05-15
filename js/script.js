		var btnModalForm=document.querySelector(".btCallModalForm");
		var underLayer=document.querySelector(".underLayer");
		var modalForm=document.querySelector(".modalForm");
		var btnModalClose=document.querySelector(".modalForm .close");
		var searchForm=document.querySelector(".searchForm");
		var btnMagnify=document.querySelector(".magnify");
		var btnCallLogin=document.querySelector(".callLogin");
		var loginForm=document.querySelector(".loginForm");
		var searchInput=searchForm.querySelector("[name=search]");
		var login=loginForm.querySelector("[name=login]");
		var password=loginForm.querySelector("[name=password]");
		var loginStorage=localStorage.getItem("login");
		
		btnModalForm.addEventListener("click", function(evt) {
			evt.preventDefault();
			modalForm.classList.add("modalShow");
			underLayer.classList.add("modalShow");
			modalForm.classList.add("moveDown");
		});
		
		btnModalClose.addEventListener("click", function(evt){
			evt.preventDefault();
			modalForm.classList.remove("modalShow");
			underLayer.classList.remove("modalShow");
			modalForm.classList.remove("moveDown");
		});
		btnMagnify.addEventListener("click",function(evt){
			evt.preventDefault();
			searchForm.classList.toggle("modalShow");
			searchInput.focus();
		});	
		
		
		btnCallLogin.addEventListener("click",function(evt){
			evt.preventDefault();
			loginForm.classList.toggle("modalShow");
			login.focus();
			if (loginStorage){
				login.value=loginStorage;
				password.focus();
			}
		});			
		loginForm.addEventListener("submit",function(evt){
			if (!login.value||!password.value){
				evt.preventDefault();
			} else {
				localStorage.setItem("login", login.value);
			
			}
		});
		window.addEventListener("keydown",function(evt){
			if (evt.keyCode ===27) {
				if (modalForm.classList.contains("modalShow")) {
				modalForm.classList.remove("modalShow");
				underLayer.classList.remove("modalShow");
				}
				if (searchForm.classList.contains("modalShow")) {
				searchForm.classList.remove("modalShow");
				}
				if (loginForm.classList.contains("modalShow")) {
				loginForm.classList.remove("modalShow");
				}
			}			
		});