var ball = document.getElementById('ball');
var menuHome = document.getElementById('menuHome');
var menuWeb = document.getElementById('menuWeb');
var menuAbout = document.getElementById('menuAbout');
var menuBlog = document.getElementById('menuBlog');
var home = document.getElementById('home');
var about = document.getElementById('about');
var web = document.getElementById('web');
var menuItems = document.getElementsByClassName('menuItem');
var contentItems = document.getElementsByClassName('contentItem');

function toggleContentDisplay(contentItem) {
	for (i=0; i < contentItems.length; i++) {
		contentItems[i].style.display = 'none';
	}
	contentItem.style.display = 'inline';
}

function handleMenuClick(menuItem) {
	for (i=0; i < menuItems.length; i++) {
		menuItems[i].classList.remove('active');
	}
	menuItem.classList.add('active');
}

menuHome.onclick = function() {
	toggleContentDisplay(home);
	handleMenuClick(menuHome);
};

menuWeb.onclick = function() {
	toggleContentDisplay(web);
	handleMenuClick(menuWeb);
};

menuAbout.onclick = function() {
	toggleContentDisplay(about);
	handleMenuClick(menuAbout);
};

menuBlog.onclick = function() {
	handleMenuClick(menuBlog);
};
